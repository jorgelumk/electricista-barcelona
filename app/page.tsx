import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, ShieldCheck, Clock, CheckCircle2, AlertTriangle, Zap, MapPin, ArrowRight, Award, UserCheck, Building2, Store, Factory, Car, Video, Wrench, FileText, BookOpen } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import TrustBadges from '@/components/TrustBadges';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { generateServiceSchema } from '@/lib/schema';

export const metadata = {
  title: 'Electricistas en Barcelona | Instalaciones, Reformas y Servicio Técnico 24h',
  description: 'Electricistas profesionales autorizados en Barcelona. Instalaciones, boletines CIE, cuadros, reformas, cargadores y urgencias 24h. Presupuesto previo. 📱 657 144 186.',
  alternates: {
    canonical: 'https://electricistasenbarcelona.com',
  }
};

export default function Home() {
  const serviceSchema = generateServiceSchema({
    name: 'Servicios Electricistas Integrales en Barcelona',
    description: 'Electricistas en Barcelona para instalaciones, boletines eléctricos (CIE), cambio de cuadros, reformas y asistencia técnica 24 horas.',
    url: 'https://electricistasenbarcelona.com'
  });

  const faqs = [
    {
      question: '¿Cuánto se tarda en atender una solicitud en Barcelona y alrededores?',
      answer: 'Disponemos de una red de más de 10 instaladores distribuidos por Barcelona y el área metropolitana. Para consultas urgentes o averías, el tiempo de respuesta suele ser inferior a 60 minutos, mientras que para presupuestos de reformas o instalaciones agendamos visitas en horario conveniente.'
    },
    {
      question: '¿Realizáis presupuestos sin compromiso?',
      answer: 'Sí. Facilitamos estimación y presupuesto detallado antes de realizar cualquier trabajo en tu vivienda, comunidad o negocio.'
    },
    {
      question: '¿Qué garantía tienen los trabajos e instalaciones?',
      answer: 'Todos nuestros trabajos cuentan con garantía por escrito en materiales y mano de obra conforme a la normativa del Reglamento Electrotécnico de Baja Tensión (REBT).'
    },
    {
      question: '¿Cuándo es necesario solicitar un Boletín Eléctrico (CIE)?',
      answer: 'Es necesario para tramitar altas de luz en instalaciones de más de 20 años, tras realizar modificaciones de potencia sustanciales o al acometer reformas integrales de la instalación.'
    },
    {
      question: '¿Cuándo es responsabilidad de la compañía eléctrica y cuándo del propietario?',
      answer: 'Si la avería afecta solo a tu vivienda o local y el diferencial o ICP salta dentro de tu cuadro, la reparación corresponde al propietario. Si todo el edificio o la calle está sin suministro, el fallo suele ser de la distribuidora eléctrica (Endesa / e-distribución).'
    }
  ];

  const serviciosCatalogo = [
    {
      title: 'Instalaciones Eléctricas',
      desc: 'Diseño y montaje de baja tensión para viviendas y locales según REBT.',
      href: '/instalaciones-electricas-barcelona/',
      icon: Zap,
      badge: 'Popular',
      color: 'amber'
    },
    {
      title: 'Cambio de Cuadro Eléctrico',
      desc: 'Sustitución de cajas antiguas por cuadros modernos con sobretensiones.',
      href: '/cambio-de-cuadro-electrico/',
      icon: ShieldCheck,
      badge: 'Seguridad',
      color: 'blue'
    },
    {
      title: 'Boletín Eléctrico (CIE)',
      desc: 'Certificado oficial expedido por instalador REIC para altas y potencia.',
      href: '/boletin-electrico-barcelona/',
      icon: FileText,
      badge: 'Oficial REIC',
      color: 'emerald'
    },
    {
      title: 'Reforma de Instalación',
      desc: 'Renovación de cableado antiguo en pisos y casas sin obras innecesarias.',
      href: '/reforma-instalacion-electrica/',
      icon: Wrench,
      badge: 'Hogar',
      color: 'purple'
    },
    {
      title: 'Comunidades de Vecinos',
      desc: 'Mantenimiento de zonas comunes, escaleras, cuadros y garajes.',
      href: '/electricista-comunidades-de-vecinos/',
      icon: Building2,
      badge: 'Fincas',
      color: 'indigo'
    },
    {
      title: 'Locales y Oficinas',
      desc: 'Electrificación para licencias de apertura y comercios sin cerrar.',
      href: '/electricista-locales-y-oficinas/',
      icon: Store,
      badge: 'Comercio',
      color: 'cyan'
    },
    {
      title: 'Electricistas Industriales',
      desc: 'Cuadros de potencia, variadores y mantenimiento en naves y fábricas.',
      href: '/electricista-industrial-barcelona/',
      icon: Factory,
      badge: 'B2B',
      color: 'orange'
    },
    {
      title: 'Punto de Recarga Coche',
      desc: 'Cargadores Wallbox en garajes comunitarios y unifamiliares (ITC-BT-52).',
      href: '/punto-de-recarga-coche-electrico/',
      icon: Car,
      badge: 'Eco',
      color: 'green'
    },
    {
      title: 'Videoporteros e Interfonía',
      desc: 'Cambio de porteros por videoporteros a color HD y control móvil.',
      href: '/videoporteros-barcelona/',
      icon: Video,
      badge: 'Accesos',
      color: 'rose'
    },
    {
      title: 'Enchufes e Iluminación',
      desc: 'Instalación de mecanismos, puntos de luz LED y cambio de llaves.',
      href: '/enchufes-e-interruptores/',
      icon: Zap,
      badge: 'Hogar',
      color: 'slate'
    },
    {
      title: 'Mantenimiento Eléctrico',
      desc: 'Contratos preventivos para empresas, comunidades y negocios.',
      href: '/mantenimiento-electrico/',
      icon: Clock,
      badge: 'Preventivo',
      color: 'amber'
    },
    {
      title: 'Domótica del Hogar',
      desc: 'Automatización inteligente de persianas, luces y climatización.',
      href: '/domotica-barcelona/',
      icon: Zap,
      badge: 'Smart Home',
      color: 'blue'
    }
  ];

  const zonasCobertura = [
    { name: 'Barcelona Ciudad', href: '/', detail: 'Eixample, Gràcia, Sarrià, Les Corts, Sant Martí, Sants, Horta' },
    { name: 'Badalona', href: '/electricista-badalona/', detail: 'Progrés, Gorg, Llefià, Montigalà, Centro' },
    { name: 'L’Hospitalet de Llobregat', href: '/electricista-hospitalet/', detail: 'Bellvitge, Collblanc, Torrassa, Santa Eulàlia' },
    { name: 'Terrassa', href: '/electricista-terrassa/', detail: 'Centre, Ca n’Aurell, Sant Pere, Vallparadís' },
    { name: 'Sabadell', href: '/electricista-sabadell/', detail: 'Centre, Creu Alta, Ca n’Oriac, Gràcia' },
    { name: 'Sant Cugat del Vallès', href: '/electricista-sant-cugat/', detail: 'Centre, Valldoreix, Mira-sol, Volpelleres' },
    { name: 'Castelldefels', href: '/electricista-castelldefels/', detail: 'Platja, Montmar, Bellamar, Poal' },
    { name: 'Cornellà de Llobregat', href: '/electricista-cornella/', detail: 'Centre, Almeda, Sant Ildefons, Gavarra' },
    { name: 'Mataró', href: '/electricista-mataro/', detail: 'Centre, Cerdanyola, Rocafonda, Peramàs' },
    { name: 'Granollers', href: '/electricista-granollers/', detail: 'Centre, Congost, Font Verda, Tres Torres' }
  ];

  return (
    <div className="pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Image
            src="/images/hero_electrician.jpg"
            alt="Electricista profesional trabajando en Barcelona"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              <Zap className="w-4 h-4 fill-current" />
              <span>Electricistas Autorizados · Barcelona y Área Metropolitana</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
              Electricistas en Barcelona: <span className="text-amber-400">instalaciones, reformas</span> y asistencia 24h
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Soluciones eléctricas profesionales para viviendas, comunidades y comercios. Nuestra red de más de <strong className="text-white">10 instaladores cualificados</strong> ofrece servicio urgente y programado en Barcelona y municipios metropolitanos.
            </p>

            {/* CALL CTA */}
            <div className="bg-amber-500 text-slate-950 p-5 rounded-2xl shadow-2xl space-y-3 border-2 border-amber-400">
              <div className="flex items-center justify-between font-extrabold text-sm uppercase tracking-wide border-b border-slate-950/20 pb-2">
                <span className="flex items-center gap-2">
                  <Phone className="w-5 h-5 fill-current text-slate-950" />
                  Atención Telefónica y Presupuestos
                </span>
                <span className="text-xs bg-slate-950 text-amber-400 px-2 py-0.5 rounded">Llegada &lt; 60 min</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="tel:+34657144186"
                  className="w-full sm:w-auto flex-1 bg-slate-950 hover:bg-slate-900 text-amber-400 font-black text-xl py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 shadow-lg transition-transform active:scale-98"
                >
                  <Phone className="w-6 h-6 fill-current text-amber-400" />
                  <span>LLAMAR AHORA: 657 144 186</span>
                </a>
                <a
                  href="https://wa.me/34657144186?text=Hola,%20necesito%20un%20presupuesto%20electrico%20en%20Barcelona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 text-sm shadow transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>WhatsApp Directo</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300 font-medium pt-2">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Presupuesto previo</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Trabajos garantizados</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Factura y garantía</span>
            </div>
          </div>

          {/* Form Side Column */}
          <div className="lg:col-span-5">
            <ContactForm
              paginaOrigen="Home - Hero"
              title="Solicita tu Presupuesto"
              subtitle="Cuéntanos qué necesitas y te responderemos con una propuesta personalizada."
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TrustBadges />

        {/* SECTION 1: ASISTENCIA Y REPARACIONES */}
        <section className="my-16 space-y-8">
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest block">Asistencia y Averías</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Reparación de averías eléctricas en Barcelona
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Fuegos de luz, cortocircuitos o fallos en el cuadro eléctrico. Ante cualquier incidencia en la instalación, nuestros técnicos acuden a tu domicilio o negocio para diagnosticar y solucionar el problema con total seguridad.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/50">
                  <h3 className="font-bold text-amber-400 text-base mb-1">Diagnóstico y reparación ágil en tu domicilio</h3>
                  <p className="text-xs text-slate-300">
                    Disponemos de equipos móviles con instrumental de diagnóstico (multímetros, analizadores de red y detectores de fuga) para identificar y solucionar la avería con la máxima rapidez.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Cortes de luz en la vivienda</h4>
                    <p className="text-slate-400">Verificación del interruptor general (IGA), diferencial y derivaciones externas.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Saltos continuos de diferencial</h4>
                    <p className="text-slate-400">Localización de derivaciones a tierra en electrodomésticos o cableado.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="tel:+34657144186"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg transition-transform active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  Solicitar Reparación: 657 144 186
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <Image
                src="/images/urgencias_24h.jpg"
                alt="Técnico electricista de urgencias en Barcelona"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* SECTION 2: QUE HACER MIENTRAS LLEGA EL ELECTRICISTA */}
        <section className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 sm:p-8 my-12 text-slate-900">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
            Qué hacer mientras llega el electricista a tu vivienda
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 space-y-1">
              <span className="font-black text-amber-600 text-lg">1. Seguridad Primero</span>
              <p className="text-slate-600 text-xs">Si percibes olor a plástico quemado o humo, baja inmediatamente el Interruptor General (IGA) de tu cuadro eléctrico.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 space-y-1">
              <span className="font-black text-amber-600 text-lg">2. No Manipules Cables</span>
              <p className="text-slate-600 text-xs">Nunca toques enchufes o cables al descubierto si hay agua o humedad cerca. Evita riesgos de electrocución.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 space-y-1">
              <span className="font-black text-amber-600 text-lg">3. Desconecta Aparatos</span>
              <p className="text-slate-600 text-xs">Desenchufa electrodomésticos de gran consumo para aislar la posible derivación antes de la llegada del técnico.</p>
            </div>
          </div>
        </section>

        {/* SECTION 3: POR QUÉ ELEGIRNOS */}
        <section className="my-16 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Garantía de Confianza</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Por qué elegir a nuestros instaladores autorizados</h2>
            <p className="text-slate-600 text-sm">Transparencia, respuesta inmediata y máximo rigor normativo en cada intervención.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Técnicos Certificados REIC</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Carnet oficial de la Generalitat de Catalunya para boletines y legalización de instalaciones.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Llegada &lt; 60 Minutos</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Despliegue coordinado en Barcelona y municipios del área metropolitana para urgencias de luz.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Presupuesto Cerrado Previo</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Te facilitamos la valoración detallada antes de iniciar el trabajo, sin sorpresas en la factura.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Garantía por Escrito</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Todas nuestras reparaciones e instalaciones cuentan con garantía formal en materiales y mano de obra.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: SERVICIOS Y ESPECIALIDADES (CATÁLOGO COMPLETO 12 CARDS) */}
        <section className="my-16 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Catálogo Completo</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Todos los servicios de electricidad en Barcelona</h2>
            <p className="text-slate-600 text-sm">Haz clic en cualquiera de nuestros servicios para ver la información detallada.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviciosCatalogo.map((serv) => {
              const Icon = serv.icon;
              return (
                <div
                  key={serv.href}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="bg-amber-500/10 text-amber-600 p-2.5 rounded-xl">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {serv.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {serv.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {serv.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <Link
                      href={serv.href}
                      className="text-amber-600 hover:text-amber-700 font-bold text-xs flex items-center gap-1"
                    >
                      Ver información del servicio <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 5: ZONAS Y MUNICIPIOS CON INTERACTIVIDAD */}
        <section className="my-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Cobertura Geográfica Completa
            </span>
            <h2 className="text-3xl font-black tracking-tight text-white">
              Electricistas en Barcelona y Área Metropolitana
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Selecciona tu municipio para ver los tiempos de llegada y los técnicos asignados a tu zona:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {zonasCobertura.map((z) => (
              <Link
                key={z.href}
                href={z.href}
                className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 p-4 rounded-xl transition-all group flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-400 text-sm group-hover:text-amber-300 transition-colors">
                      {z.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    {z.detail}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-700/50 text-[10px] text-slate-300 font-semibold flex items-center gap-1">
                  <Clock className="w-3 h-3 text-emerald-400" /> Llegada estimada: &lt; 45-60 min
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* SECTION 6: BLOG Y GUIAS DESTACADAS */}
        <section className="my-16 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest flex items-center gap-1">
                <BookOpen className="w-4 h-4" /> Consejos y Consejos Útiles
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Últimas guías de electricidad y seguridad
              </h2>
            </div>
            <Link href="/blog/" className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1">
              Ver todos los artículos del blog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Averías
                </span>
                <h3 className="font-bold text-slate-900 text-base">¿Por qué salta el diferencial de la luz?</h3>
                <p className="text-xs text-slate-600">Pautas paso a paso para localizar qué electrodoméstico o derivación a tierra dispara el cuadro.</p>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-100">
                <Link href="/blog/por-que-salta-el-diferencial/" className="text-amber-600 font-bold text-xs flex items-center gap-1">
                  Leer guía <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  Normativa REBT
                </span>
                <h3 className="font-bold text-slate-900 text-base">Normativa del Cuadro Eléctrico en Viviendas</h3>
                <p className="text-xs text-slate-600">Requisitos obligatorios que debe cumplir todo cuadro general (IGA, sobretensiones y diferenciales).</p>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-100">
                <Link href="/blog/normativa-cuadro-electrico-vivienda/" className="text-blue-600 font-bold text-xs flex items-center gap-1">
                  Leer guía <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Inspecciones
                </span>
                <h3 className="font-bold text-slate-900 text-base">Revisión de la Instalación Eléctrica</h3>
                <p className="text-xs text-slate-600">Cuándo revisar el cableado en pisos antiguos de más de 20 años antes de comprar o reformar.</p>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-100">
                <Link href="/blog/revision-instalacion-electrica/" className="text-emerald-600 font-bold text-xs flex items-center gap-1">
                  Leer guía <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <TestimonialsCarousel />

        {/* FAQ SECTION */}
        <FAQSection faqs={faqs} />

        {/* CLOSING FORM */}
        <section className="my-16">
          <ContactForm
            paginaOrigen="Home - Cierre"
            title="Pide Presupuesto para tu Instalación o Avería"
            subtitle="Atención profesional garantizada. Te llamamos sin compromiso."
          />
        </section>
      </div>
    </div>
  );
}
