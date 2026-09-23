import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/gracias', '/api/', '/aviso-legal', '/politica-de-privacidad', '/politica-de-cookies'],
    },
    sitemap: 'https://electricistasenbarcelona.com/sitemap.xml',
  };
}
