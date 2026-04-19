import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    return NextResponse.json(
      { error: "Newsletter non configurée côté serveur." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const email =
    typeof body === "object" && body !== null && "email" in body
      ? String((body as { email: unknown }).email ?? "").trim().toLowerCase()
      : "";

  if (!email || !EMAIL_REGEX.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "Adresse email invalide." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.contacts.create({
    audienceId,
    email,
    unsubscribed: false,
  });

  if (error) {
    const isDuplicate = /already|exists|duplicate/i.test(error.message ?? "");
    if (isDuplicate) {
      return NextResponse.json({ ok: true, alreadySubscribed: true });
    }
    return NextResponse.json(
      { error: "Impossible d'enregistrer l'inscription." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
