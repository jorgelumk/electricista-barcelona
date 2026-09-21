import Link from 'next/link';
import { Phone, MessageCircle, ShieldCheck, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800 pt-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Brand & Contact */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-amber-500 p-1.5 rounded text-slate-950">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <span className="text-lg font-black text-white tracking-tight">
              ELECTRICISTAS<span className="text-amber-400">BARCELONA</span>
            </span>
          </Link>
          <p className="text-xs text-slate-400 leading-relaxed">
            Red profesional de instaladores electricistas. Servicios integrales de instalaciones, reformas, mantenimiento y reparaciones en Barcelona y área metropolitana.
          </p>
          <div className="pt-2 space-y-2 text-xs">
            <a
              href="tel:+34657144186"
              className="flex items-center gap-2 text-amber-400 font-bold hover:underline text-sm"
            >
              <Phone className="w-4 h-4 fill-current shrink-0" />
              <span> Teléfono de Atención: 657 144 186</span>
            </a>
            <a
              href="https://wa.me/34657144186?text=Hola,%20necesito%20un%20electricista%20en%20Barcelona"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-emerald-400 font-bold hover:underline text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current shrink-0" />
              <span> WhatsApp directo: 657 144 186</span>
            </a>
          </div>
        </div>

        {/* Services & Segments */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 border-b border-slate-800 pb-2">Servicios y Segmentos</h3>
          <ul className="space-y-1.5 text-xs">
            <li>
              <Link href="/instalaciones-electricas-barcelona/" className="hover:text-amber-400 transition-colors">
                Instalaciones Eléctricas
              </Link>
            </li>
            <li>
              <Link href="/cambio-de-cuadro-electrico/" className="hover:text-amber-400 transition-colors">
                Cambio de Cuadro Eléctrico
              </Link>
            </li>
            <li>
              <Link href="/boletin-electrico-barcelona/" className="hover:text-amber-400 transition-colors">
                Boletín Eléctrico (CIE) Oficial
              </Link>
            </li>
            <li>
              <Link href="/reforma-instalacion-electrica/" className="hover:text-amber-400 transition-colors">
                Reforma de Instalación Eléctrica
              </Link>
            </li>
            <li>
              <Link href="/electricista-comunidades-de-vecinos/" className="hover:text-amber-400 transition-colors">
                Comunidades de Vecinos
              </Link>
            </li>
            <li>
              <Link href="/electricista-locales-y-oficinas/" className="hover:text-amber-400 transition-colors">
                Locales Comerciales y Oficinas
              </Link>
            </li>
            <li>
              <Link href="/electricista-industrial-barcelona/" className="hover:text-amber-400 transition-colors">
                Electricistas Industriales
              </Link>
            </li>
            <li>
              <Link href="/punto-de-recarga-coche-electrico/" className="hover:text-amber-400 transition-colors">
                Puntos de Recarga Vehículo Eléctrico
              </Link>
            </li>
            <li>
              <Link href="/videoporteros-barcelona/" className="hover:text-amber-400 transition-colors">
                Videoporteros e Interfonía
              </Link>
            </li>
          </ul>
        </div>

        {/* Coverage Areas */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 border-b border-slate-800 pb-2">Zonas de Cobertura</h3>
          <ul className="space-y-1.5 text-xs">
            <li><Link href="/" className="hover:text-amber-400 font-medium">Barcelona Ciudad</Link></li>
            <li><Link href="/electricista-badalona/" className="hover:text-amber-400">Electricista en Badalona</Link></li>
            <li><Link href="/electricista-hospitalet/" className="hover:text-amber-400">Electricista en L&apos;Hospitalet</Link></li>
            <li><Link href="/electricista-terrassa/" className="hover:text-amber-400">Electricista en Terrassa</Link></li>
            <li><Link href="/electricista-sabadell/" className="hover:text-amber-400">Electricista en Sabadell</Link></li>
            <li><Link href="/electricista-sant-cugat/" className="hover:text-amber-400">Electricista en Sant Cugat</Link></li>
            <li><Link href="/electricista-castelldefels/" className="hover:text-amber-400">Electricista en Castelldefels</Link></li>
            <li><Link href="/electricista-cornella/" className="hover:text-amber-400">Electricista en Cornellà</Link></li>
            <li><Link href="/electricista-mataro/" className="hover:text-amber-400">Electricista en Mataró</Link></li>
            <li><Link href="/electricista-granollers/" className="hover:text-amber-400">Electricista en Granollers</Link></li>
          </ul>
        </div>

        {/* Legal & Blog Info */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 border-b border-slate-800 pb-2">Guías y Legal</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/blog/" className="hover:text-amber-400 font-bold text-amber-400 transition-colors">
                Blog de Electricidad
              </Link>
            </li>
            <li>
              <Link href="/blog/por-que-salta-el-diferencial/" className="hover:text-amber-400 transition-colors">
                ¿Por qué salta el diferencial?
              </Link>
            </li>
            <li>
              <Link href="/blog/normativa-cuadro-electrico-vivienda/" className="hover:text-amber-400 transition-colors">
                Normativa Cuadro Eléctrico
              </Link>
            </li>
            <li>
              <Link href="/blog/revision-instalacion-electrica/" className="hover:text-amber-400 transition-colors">
                Revisión Instalación Eléctrica
              </Link>
            </li>
            <li>
              <Link href="/mapa-del-sitio/" className="hover:text-amber-400 font-bold text-slate-200 transition-colors">
                Mapa del Sitio Web
              </Link>
            </li>
            <li>
              <Link href="/contacto/" className="hover:text-amber-400 transition-colors">
                Página de Contacto
              </Link>
            </li>
            <li>
              <Link href="/aviso-legal/" className="hover:text-amber-400 transition-colors">
                Aviso Legal
              </Link>
            </li>
            <li>
              <Link href="/politica-de-privacidad/" className="hover:text-amber-400 transition-colors">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link href="/politica-de-cookies/" className="hover:text-amber-400 transition-colors">
                Política de Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900 pt-6 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} ElectricistasBarcelona.com - Todos los derechos reservados. Servicios profesionales de electricidad en Barcelona.</p>
        <p className="text-[11px]">Agencia IA Solutions · Rank & Rent Network</p>
      </div>
    </footer>
  );
}
