'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GrowthOsProxy() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      let growthOsUrl;

      // Détecte si on est sur GitHub Codespace
      if (hostname.includes('.app.github.dev')) {
        // Remplace le port 3000 par 3001 dans l'URL Codespace
        growthOsUrl = `https://${hostname.replace('-3000.app.github.dev', '-3001.app.github.dev')}`;
      } else {
        // Utilise localhost en développement local
        growthOsUrl = 'http://localhost:3001';
      }

      // Redirige vers Growth OS root (/ redirigera automatiquement selon le rôle)
      window.location.href = `${growthOsUrl}/`;
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirection vers Growth OS...</p>
    </div>
  );
}
