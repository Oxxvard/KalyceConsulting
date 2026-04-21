'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GrowthOsProxy() {
  const router = useRouter();

  useEffect(() => {
    // En développement: redirige vers localhost:3001
    // En production: sera configuré avec Vercel rewrites
    if (typeof window !== 'undefined') {
      const isDev = process.env.NODE_ENV === 'development';
      if (isDev) {
        // Redirige vers l'app growth-os sur le port 3001
        const growthOsUrl = process.env.NEXT_PUBLIC_GROWTH_OS_URL || 'http://localhost:3001';
        window.location.href = `${growthOsUrl}${window.location.pathname}${window.location.search}`;
      }
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirection vers Growth OS...</p>
    </div>
  );
}
