import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://electricistasbarcelona.com';

  const routes = [
    '',
    '/instalaciones-electricas-barcelona/',
    '/cambio-de-cuadro-electrico/',
    '/boletin-electrico-barcelona/',
    '/reforma-instalacion-electrica/',
    '/enchufes-e-interruptores/',
    '/mantenimiento-electrico/',
    '/domotica-barcelona/',
    '/electricista-comunidades-de-vecinos/',
    '/electricista-locales-y-oficinas/',
    '/electricista-industrial-barcelona/',
    '/punto-de-recarga-coche-electrico/',
    '/videoporteros-barcelona/',
    '/electricista-badalona/',
    '/electricista-terrassa/',
    '/electricista-sabadell/',
    '/electricista-hospitalet/',
    '/electricista-sant-cugat/',
    '/electricista-castelldefels/',
    '/electricista-cornella/',
    '/electricista-mataro/',
    '/electricista-granollers/',
    '/blog/',
    '/blog/por-que-salta-el-diferencial/',
    '/blog/normativa-cuadro-electrico-vivienda/',
    '/blog/revision-instalacion-electrica/',
    '/blog/senales-instalacion-electrica-obsoleta/',
    '/blog/que-es-el-boletin-electrico/',
    '/blog/certificado-instalacion-electrica-cie/',
    '/blog/ampliacion-de-potencia-electrica/',
    '/blog/por-que-se-calienta-un-enchufe/',
    '/blog/se-ha-ido-la-luz-que-hacer/',
    '/blog/reformar-instalacion-electrica-sin-picar-paredes/',
    '/blog/toma-de-tierra-vivienda/',
    '/blog/diferencia-magnetotermico-diferencial/',
    '/blog/instalacion-electrica-local-comercial/',
    '/blog/domotica-sin-obra/',
    '/blog/punto-de-recarga-garaje-comunidad/',
    '/mapa-del-sitio/',
    '/contacto/',
    '/aviso-legal/',
    '/politica-de-privacidad/',
    '/politica-de-cookies/'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.includes('boletin') || route.includes('instalaciones') || route.includes('cuadro') ? 0.9 : 0.8,
  }));
}
