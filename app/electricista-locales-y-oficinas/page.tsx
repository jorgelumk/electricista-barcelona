import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, ShieldCheck, Clock, CheckCircle2, Zap, MapPin, ArrowRight, Award, UserCheck, Store, Lightbulb, ShieldAlert, Cpu, FileCheck, BookOpen } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBadges from '@/components/TrustBadges';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import { zonasCobertura, blogGuides } from '@/lib/servicePageData';

export const metadata = {
  title: 'Electricista para Locales Comerciales y Oficinas en Barcelona',
  description: 'Instalaciones y reformas eléctricas para locales comerciales, oficinas y restaurantes en Barcelona. Proyectos homologados REBT y boletines. 📱 657 144 186.',
  alternates: {
    canonical: 'https://electricistasenbarcelona.com/electricista-locales-y-oficinas',
  }
};

export default function LocalesOficinasPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Electricista para Locales y Oficinas en Barcelona',
    description: 'Electrificación comercial, proyectos de baja tensión, iluminación de escaparates y mantenimiento para locales y oficinas en Barcelona.',
    url: 'https://electricistasenbarcelona.com/electricista-locales-y-oficinas'
  });

  const faqs = [
    {
      question: '¿Qué requisitos eléctricos se exigen para abrir un local comercial en Barcelona?',
      answer: 'Es obligatorio contar con un proyecto técnico redactado por un ingeniero o una memoria técnica de diseño (MTD) según la superficie y aforo, cuadro secundario con protecciones de sobretensiones, cableado libre de halógenos y luminarias de emergencia en rutas de evacuación.'
    },
    {
      question: '¿Realizáis instalaciones eléctricas fuera del horario comercial para no interrumpir la actividad?',
      answer: 'Sí. Nos adaptamos a los horarios de tu negocio (noches, madrugadas o fines de semana) para acometer reformas o reparaciones sin afectar a la atención a tus clientes.'
    },
    {
      question: '¿Podéis certificar e inspeccionar instalaciones comerciales para aperturas o licencias de actividad?',
      answer: 'Sí. Emitimos el Certificado de Instalación Eléctrica (Boletín CIE) y acompañamos durante la inspección OCA para la obtención de licencias de apertura de restaurantes, tiendas o centros sanitarios.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  const subservicios = [
    {
      title: 'Iluminación Comercial y Escaparates',
      desc: 'Carriles electrificados con focos orientables LED de alto índice de reproducción cromática (CRI > 90).',
      icon: Lightbulb,
      badge: 'Iluminación'
    },
    {
      title: 'Redes de Voz y Datos en Oficinas',
      desc: 'Instalación de suelo técnico con torres de enchufes y cableado UTP Cat6/Cat6A para puestos de trabajo.',
      icon: Cpu,
      badge: 'Redes'
    },
    {
      title: 'Alumbrado de Emergencia Obligatorio',
      desc: 'Instalación de luminarias autónomas de emergencia e señalización exigidas en inspecciones de seguridad.',
      icon: ShieldAlert,
      badge: 'Normativa'
    },
    {
      title: 'Cuadros Secundarios y Sistemas SAI',
      desc: 'Cuadros de mando independientes para servidores, TPVs y climatización con protección contra cortes.',
      icon: Zap,
      badge: 'Cuadros'
    },
    {
      title: 'Electrificación de Restauración',
      desc: 'Circuitos trifásicos para maquinaria de hostelería, campanas extractoras y cámaras frigoríficas.',
      icon: Store,
      badge: 'Hostelería'
    },
    {
      title: 'Proyecto Técnico e Inspección OCA',
      desc: 'Ejecución acorde a memoria de diseño y acompañamiento técnico para licencias de apertura.',
      icon: FileCheck,
      badge: 'Licencias'
    }
  ];

  return (
    <div className="pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION - 100% HOME STYLE */}
      <section className="relative bg-slate-900 text-white overflow-hidden pt-6 pb-12 sm:pt-8 sm:pb-16 border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Image
            src="/images/hero_electrician.jpg"
            alt="Electricista para locales y oficinas en Barcelona"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            currentPageTitle="Electricista para Locales y Oficinas"
            currentPageUrl="https://electricistasenbarcelona.com/electricista-locales-y-oficinas"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                <Store className="w-4 h-4 fill-current" />
                <span>Electrificación Comercial & Oficinas</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
                Electricista para locales comerciales y <span className="text-amber-400">oficinas</span> en Barcelona
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Ejecutamos proyectos de electrificación de baja tensión, iluminación técnica de escaparates, cuadros de protección y redes de datos para comercios, oficinas y franquicias en Barcelona.
              </p>

              {/* CALL CTA BOX */}
              <div className="bg-amber-500 text-slate-950 p-5 rounded-2xl shadow-2xl space-y-3 border-2 border-amber-400">
                <div className="flex items-center justify-between font-extrabold text-sm uppercase tracking-wide border-b border-slate-950/20 pb-2">
                  <span className="flex items-center gap-2">
                    <Phone className="w-5 h-5 fill-current text-slate-950" />
                    Proyectos Eléctricos de Negocio
                  </span>
                  <span className="text-xs bg-slate-950 text-amber-400 px-2 py-0.5 rounded">Adaptación de Horarios</span>
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
                    href="https://wa.me/34657144186?text=Hola,%20necesito%20presupuesto%20para%20un%20local%20o%20oficina%20en%20Barcelona"
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
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Horarios adaptados</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Licencia de actividad</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Boletín CIE oficial</span>
              </div>
            </div>

            {/* FORM SIDE COLUMN */}
            <div className="lg:col-span-5">
              <ContactForm
                paginaOrigen="Locales - Hero"
                title="Presupuesto Local"
                subtitle="Cuéntanos el tipo de negocio y te asesoramos técnicamente."
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TrustBadges />

        {/* SPOTLIGHT SECTION */}
        <section className="my-16 space-y-8">
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest block">Seguridad & Rendimiento Comercial</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Instalaciones eléctricas adaptadas a locales y despachos
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Un espacio comercial u oficina exige un diseño eléctrico riguroso que combine una cuidada iluminación estética para atraer clientes con la máxima seguridad para trabajadores y cumplimiento normativo municipal.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/50">
                  <h3 className="font-bold text-amber-400 text-base mb-1">Acompañamiento en licencias de apertura e inspecciones OCA</h3>
                  <p className="text-xs text-slate-300">
                    Ejecutamos la obra según proyecto de ingeniería facilitando la rápida obtención del visto bueno de la entidad de inspección.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Iluminación Escaparate</h4>
                    <p className="text-slate-400">Focos de carril orientables de alta precisión cromática para destacar productos.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Suelo Técnico y Datos</h4>
                    <p className="text-slate-400">Canalizaciones para puestos de trabajo con conexiones Ethernet de alta velocidad.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Horarios Nocturnos</h4>
                    <p className="text-slate-400">Realizamos trabajos fuera de horario comercial para evitar molestias al público.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Cableado Ignífugo</h4>
                    <p className="text-slate-400">Conductores obligatorios libres de halógenos según REBT para pública concurrencia.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="tel:+34657144186"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg transition-transform active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  Solicitar Asesoramiento Comercial: 657 144 186
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <Image
                src="/images/hero_electrician.jpg"
                alt="Electricista para locales y oficinas en Barcelona"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* HOW WE WORK AMBER BANNER */}
        <section className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 sm:p-8 my-12 text-slate-900">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
            <Store className="w-6 h-6 text-amber-600 shrink-0" />
            Cómo realizamos la electrificación de tu negocio en 4 pasos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">1</div>
              <h3 className="font-bold text-slate-900 mb-1">Estudio sobre Plano</h3>
              <p className="text-xs text-slate-600">Analizamos los requerimientos del local para dimensionar iluminación y potencias.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">2</div>
              <h3 className="font-bold text-slate-900 mb-1">Presupuesto Cerrado</h3>
              <p className="text-xs text-slate-600">Valoración económica transparente con plazos de ejecución compatibles con la apertura.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">3</div>
              <h3 className="font-bold text-slate-900 mb-1">Montaje Rápido</h3>
              <p className="text-xs text-slate-600">Cableado ignífugo, canalizaciones en suelo o techo técnico y colocación de iluminación.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">4</div>
              <h3 className="font-bold text-slate-900 mb-1">Certificación y Alta</h3>
              <p className="text-xs text-slate-600">Expedición del Boletín Eléctrico (CIE) y documentación para la inspección municipal.</p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US WHITE GRID */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 my-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              ¿Por qué somos el especialista recomendado para tu comercio?
            </h2>
            <p className="text-slate-600 text-sm">
              Adaptación horaria total, cumplimiento estricto de plazos y acabados de nivel técnico superior.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Cumplimiento REBT Pública Concurrencia</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Instalaciones certificadas preparadas para superar la auditoría de OCA sin incidencias.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Técnicos Certificados</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Personal altamente formado en redes de datos, iluminación comercial y cuadros de mando.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Montajes Nocturnos</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trabajamos en horarios de cierre para no interrumpir las ventas de tu negocio.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Garantía por Escrito</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Garantía oficial de 2 años en todas las instalaciones y componentes suministrados.
              </p>
            </div>
          </div>
        </section>

        {/* SUBSERVICES GRID */}
        <section className="my-16 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-amber-500 font-extrabold text-xs uppercase tracking-widest block">Servicios Comerciales</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Catálogo de electricidad comercial</h2>
            </div>
            <p className="text-slate-600 text-sm max-w-md">
              Soluciones para tiendas, restaurantes, franquicias y centros de oficinas en Barcelona.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subservicios.map((sub, idx) => {
              const IconComp = sub.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between hover:border-amber-400 transition-colors">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase px-2 py-1 rounded bg-slate-100 text-slate-700">{sub.badge}</span>
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-lg">{sub.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{sub.desc}</p>
                  </div>
                  <a href="tel:+34657144186" className="inline-flex items-center gap-2 text-amber-600 font-bold text-xs pt-2 hover:gap-3 transition-all">
                    <span>Solicitar estudio</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* ZONAS COBERTURA CARD */}
        <section className="my-16 bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 text-white space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest block">Cobertura Local</span>
            <h2 className="text-3xl font-black text-white tracking-tight">Electricista de locales en toda Barcelona</h2>
            <p className="text-slate-300 text-sm">
              Servicio rápido y directo en todos los distritos de Barcelona ciudad y su área metropolitana.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 pt-2">
            {zonasCobertura.map((zona, idx) => (
              <Link
                key={idx}
                href={zona.url}
                className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700/50 text-xs font-bold text-slate-200 flex items-center gap-2 transition-all"
              >
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">{zona.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* BLOG GUIDES GRID */}
        <section className="my-16 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-amber-500 font-extrabold text-xs uppercase tracking-widest block">Consejos Eléctricos</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Guías y consejos prácticos</h2>
            </div>
            <Link href="/blog/" className="inline-flex items-center gap-2 text-amber-600 font-bold text-sm hover:underline">
              <span>Ver todos los artículos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogGuides.map((guide, idx) => (
              <Link key={idx} href={guide.url} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                    <BookOpen className="w-4 h-4 text-amber-500" />
                    <span>Guía Técnica</span>
                  </div>
                  <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{guide.title}</h3>
                  <p className="text-slate-600 text-xs line-clamp-2">{guide.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <TestimonialsCarousel />

        <FAQSection faqs={faqs} />

        {/* CLOSING CONTACT FORM */}
        <section className="my-16">
          <ContactForm
            paginaOrigen="Locales - Cierre"
            title="¿Necesitas un electricista para tu local u oficina en Barcelona?"
            subtitle="Contacta con nuestros especialistas técnicos hoy mismo."
          />
        </section>
      </div>
    </div>
  );
}
