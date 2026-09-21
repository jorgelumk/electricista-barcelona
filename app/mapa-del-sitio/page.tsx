'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, Zap, ShieldCheck, Building2, Store, Factory, Car, Video, BookOpen, FileText, Phone, ArrowRight, Home, Wrench } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function MapaDelSitioPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const siteStructure = [
    {
      category: 'Páginas Principales',
      icon: Home,
      links: [
        { href: '/', label: 'Página de Inicio / Home', desc: 'Presentación general, urgencias 24h y formulario de solicitud' },
        { href: '/contacto/', label: 'Contacto y Atención Directa', desc: 'Teléfono, WhatsApp y formulario de atención rápida' }
      ]
    },
    {
      category: 'Servicios Eléctricos Principales',
      icon: Zap,
      links: [
        { href: '/instalaciones-electricas-barcelona/', label: 'Instalaciones Eléctricas en Barcelona', desc: 'Montajes de baja tensión para pisos, locales y comunidades' },
        { href: '/cambio-de-cuadro-electrico/', label: 'Cambio de Cuadro Eléctrico', desc: 'Sustitución de cajas antiguas por cuadros con sobretensiones' },
        { href: '/boletin-electrico-barcelona/', label: 'Boletín Eléctrico (CIE) Oficial', desc: 'Certificado de instalación eléctrica por instalador REIC' },
        { href: '/reforma-instalacion-electrica/', label: 'Reforma de Instalación Eléctrica', desc: 'Renovación de cableado antiguo sin obras innecesarias' },
        { href: '/enchufes-e-interruptores/', label: 'Enchufes e Iluminación', desc: 'Mecanismos, llaves de luz y puntos LED' },
        { href: '/mantenimiento-electrico/', label: 'Mantenimiento Eléctrico', desc: 'Planes preventivos y revisiones periódicas' },
        { href: '/domotica-barcelona/', label: 'Domótica y Automatización', desc: 'Sistemas inteligentes de persianas, luces y clima' }
      ]
    },
    {
      category: 'Segmentos B2B y Especialidades',
      icon: Building2,
      links: [
        { href: '/electricista-comunidades-de-vecinos/', label: 'Electricista para Comunidades de Vecinos', desc: 'Zonas comunes, portales, cuadros de finca y garajes' },
        { href: '/electricista-locales-y-oficinas/', label: 'Electricista para Locales y Oficinas', desc: 'Licencias de actividad, iluminación comercial y emergencias' },
        { href: '/electricista-industrial-barcelona/', label: 'Electricistas Industriales', desc: 'Cuadros de potencia, automatismos y normativa ATEX' },
        { href: '/punto-de-recarga-coche-electrico/', label: 'Puntos de Recarga Coche Eléctrico', desc: 'Cargadores Wallbox en garajes (ITC-BT-52)' },
        { href: '/videoporteros-barcelona/', label: 'Videoporteros e Interfonía', desc: 'Cambio de porteros convencionales a videoporteros HD' }
      ]
    },
    {
      category: 'Zonas de Cobertura (Municipios)',
      icon: MapPin,
      links: [
        { href: '/', label: 'Electricista en Barcelona Ciudad', desc: 'Eixample, Gràcia, Sarrià, Les Corts, Sant Martí, Sants, Horta' },
        { href: '/electricista-badalona/', label: 'Electricista en Badalona', desc: 'Progrés, Gorg, Llefià, Montigalà, Centro' },
        { href: '/electricista-hospitalet/', label: 'Electricista en L’Hospitalet de Llobregat', desc: 'Bellvitge, Collblanc, Torrassa, Santa Eulàlia' },
        { href: '/electricista-terrassa/', label: 'Electricista en Terrassa', desc: 'Centre, Ca n’Aurell, Sant Pere, Vallparadís' },
        { href: '/electricista-sabadell/', label: 'Electricista en Sabadell', desc: 'Centre, Creu Alta, Ca n’Oriac, Gràcia' },
        { href: '/electricista-sant-cugat/', label: 'Electricista en Sant Cugat del Vallès', desc: 'Centre, Valldoreix, Mira-sol, Volpelleres' },
        { href: '/electricista-castelldefels/', label: 'Electricista en Castelldefels', desc: 'Platja, Montmar, Bellamar, Poal' },
        { href: '/electricista-cornella/', label: 'Electricista en Cornellà de Llobregat', desc: 'Centre, Almeda, Sant Ildefons, Gavarra' },
        { href: '/electricista-mataro/', label: 'Electricista en Mataró', desc: 'Centre, Cerdanyola, Rocafonda, Peramàs' },
        { href: '/electricista-granollers/', label: 'Electricista en Granollers', desc: 'Centre, Congost, Font Verda, Tres Torres' }
      ]
    },
    {
      category: 'Blog y Guías Técnicas',
      icon: BookOpen,
      links: [
        { href: '/blog/', label: 'Página Principal del Blog', desc: 'Listado completo de artículos y guías del hogar' },
        { href: '/blog/por-que-salta-el-diferencial/', label: 'Por qué salta el diferencial', desc: 'Las 6 causas reales y cómo localizar la avería' },
        { href: '/blog/normativa-cuadro-electrico-vivienda/', label: 'Normativa del Cuadro Eléctrico de Vivienda', desc: 'Requisitos obligatorios según el REBT' },
        { href: '/blog/revision-instalacion-electrica/', label: 'Revisión de la Instalación Eléctrica', desc: 'Cada cuánto y qué se comprueba en la inspección' },
        { href: '/blog/senales-instalacion-electrica-obsoleta/', label: 'Señales de Instalación Eléctrica Obsoleta', desc: '8 síntomas de aviso de renovación' },
        { href: '/blog/que-es-el-boletin-electrico/', label: 'Qué es el Boletín Eléctrico', desc: 'Usos, validez y trámites del boletín' },
        { href: '/blog/certificado-instalacion-electrica-cie/', label: 'Certificado de Instalación Eléctrica (CIE)', desc: 'Cómo obtener el certificado oficial' },
        { href: '/blog/ampliacion-de-potencia-electrica/', label: 'Ampliación de Potencia Eléctrica', desc: 'Requisitos y trámites para subir la potencia' },
        { href: '/blog/por-que-se-calienta-un-enchufe/', label: 'Por qué se Calienta un Enchufe', desc: 'Causas de sobrecalentamiento y prevención' },
        { href: '/blog/se-ha-ido-la-luz-que-hacer/', label: 'Se ha Ido la Luz: Qué Hacer', desc: 'Guía paso a paso ante cortes de luz' },
        { href: '/blog/reformar-instalacion-electrica-sin-picar-paredes/', label: 'Reformar Instalación sin Picar Paredes', desc: 'Renovación de cableado sin obras invasivas' },
        { href: '/blog/toma-de-tierra-vivienda/', label: 'Toma de Tierra en Viviendas', desc: 'Para qué sirve y cómo saber si tu casa la tiene' },
        { href: '/blog/diferencia-magnetotermico-diferencial/', label: 'Magnetotérmico vs Diferencial', desc: 'Diferencias y protección de cada interruptor' },
        { href: '/blog/instalacion-electrica-local-comercial/', label: 'Instalación de Local Comercial', desc: 'Requisitos eléctricos para licencias B2B' },
        { href: '/blog/domotica-sin-obra/', label: 'Domótica sin Obra', desc: 'Automatización de iluminación, persianas y clima' },
        { href: '/blog/punto-de-recarga-garaje-comunidad/', label: 'Punto de Recarga en Garaje de Comunidad', desc: 'Normativa e instalación de cargadores comunitarios' }
      ]
    },
    {
      category: 'Información Legal y Políticas',
      icon: ShieldCheck,
      links: [
        { href: '/aviso-legal/', label: 'Aviso Legal', desc: 'Datos identificativos y condiciones de uso LSSI-CE' },
        { href: '/politica-de-privacidad/', label: 'Política de Privacidad', desc: 'Tratamiento de datos personales según RGPD / LOPDGDD' },
        { href: '/politica-de-cookies/', label: 'Política de Cookies', desc: 'Detalle de cookies técnicas y configuración del navegador' }
      ]
    }
  ];

  const filteredStructure = siteStructure.map((cat) => {
    const matchingLinks = cat.links.filter(
      (link) =>
        link.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...cat, links: matchingLinks };
  }).filter((cat) => cat.links.length > 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        currentPageTitle="Mapa del Sitio Web"
        currentPageUrl="https://electricistasenbarcelona.com/mapa-del-sitio/"
      />

      {/* HEADER HERO */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-6">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 fill-current" /> Navegación Completa del Sitio
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Mapa del Sitio Web
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Explora de forma estructurada todas las secciones, servicios eléctricos, áreas de cobertura en el área metropolitana de Barcelona y artículos de nuestro blog.
          </p>
        </div>

        {/* SEARCH FILTER BOX */}
        <div className="relative max-w-xl">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar página, servicio o zona (ej. Badalona, Cuadro, Boletín)..."
            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors shadow-inner"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-amber-400 hover:underline"
            >
              Borrar
            </button>
          )}
        </div>
      </div>

      {/* SITEMAP CATEGORIES GRID */}
      <div className="space-y-10">
        {filteredStructure.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-3">
            <p className="text-slate-600 font-bold">No se han encontrado páginas para &quot;{searchTerm}&quot;.</p>
            <button
              onClick={() => setSearchTerm('')}
              className="text-amber-600 font-bold text-xs underline hover:text-amber-700"
            >
              Ver todas las páginas del mapa del sitio
            </button>
          </div>
        ) : (
          filteredStructure.map((sec) => {
            const Icon = sec.icon;
            return (
              <section key={sec.category} className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    {sec.category}
                  </h2>
                  <span className="text-xs font-bold text-slate-400 ml-auto bg-slate-100 px-2.5 py-0.5 rounded-full">
                    {sec.links.length} {sec.links.length === 1 ? 'página' : 'páginas'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sec.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all group flex flex-col justify-between space-y-2"
                    >
                      <div className="space-y-1">
                        <span className="font-bold text-slate-900 text-sm group-hover:text-amber-600 transition-colors flex items-center justify-between">
                          {link.label}
                          <ArrowRight className="w-4 h-4 text-amber-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" />
                        </span>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {link.desc}
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 block pt-2 border-t border-slate-100">
                        {link.href}
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })
        )}
      </div>

      {/* QUICK HELP BANNER */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl space-y-4 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-bold text-amber-400">¿No encuentras lo que buscas o necesitas asistencia?</h3>
          <p className="text-xs text-slate-300">Nuestros electricistas autorizados te atienden de inmediato en Barcelona.</p>
        </div>
        <a
          href="tel:+34657144186"
          className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3.5 rounded-xl flex items-center gap-2 text-sm shrink-0 shadow-lg"
        >
          <Phone className="w-4 h-4 fill-current" />
          Llamar: 657 144 186
        </a>
      </div>
    </div>
  );
}
