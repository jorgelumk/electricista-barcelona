import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, ShieldCheck, Clock, CheckCircle2, Zap, MapPin, ArrowRight, Award, UserCheck, Building, Wrench, FileCheck, ClipboardList, BookOpen } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBadges from '@/components/TrustBadges';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import { zonasCobertura, blogGuides } from '@/lib/servicePageData';

export const metadata = {
  title: 'Mantenimiento Eléctrico en Barcelona | Comunidades y Empresas',
  description: 'Mantenimiento eléctrico preventivo y correctivo para comunidades de propietarios, oficinas y comercios en Barcelona. Cumplimiento normativa. 📱 657 144 186.',
  alternates: {
    canonical: 'https://electricistasenbarcelona.com/mantenimiento-electrico',
  }
};

export default function MantenimientoElectricoPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Mantenimiento Eléctrico en Barcelona',
    description: 'Servicio integral de mantenimiento eléctrico preventivo y correctivo para comunidades de propietarios, locales comerciales y oficinas en Barcelona.',
    url: 'https://electricistasenbarcelona.com/mantenimiento-electrico'
  });

  const faqs = [
    {
      question: '¿Qué incluye un contrato de mantenimiento eléctrico para comunidades de vecinos?',
      answer: 'Incluye revisiones periódicas del cuadro general del edificio, comprobación de diferenciales, inspección de alumbrado de escalera y zonas comunes, mantenimiento del automatismo del garaje, alumbrado de emergencia y mediciones de la toma de tierra.'
    },
    {
      question: '¿Es obligatorio contratar mantenimiento eléctrico en edificios de Barcelona?',
      answer: 'Según la Instrucción ITC-BT-05 del REBT, las comunidades con más de 20 viviendas o garajes con más de 5 plazas deben someterse a inspecciones periódicas cada 10 años por una OCA (Organismo de Control Autorizado). Contar con mantenimiento preventivo asegura superar dicha inspección sin deficiencias.'
    },
    {
      question: '¿Qué tiempo de respuesta tenéis para atender una avería dentro del contrato?',
      answer: 'Nuestros contratos de mantenimiento incluyen cláusulas de atención prioritaria en menos de 2 horas para averías críticas que dejen sin suministro a la escalera, garaje o ascensor del edificio.'
    },
    {
      question: '¿Se emiten informes técnicos periódicos para administradores de fincas?',
      answer: 'Sí. Tras cada visita de revisión preventiva entregamos un informe técnico detallado firmando las actuaciones realizadas y señalando cualquier sustitución preventiva recomendada.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  const subservicios = [
    {
      title: 'Comunidades de Propietarios',
      desc: 'Revisiones periódicas de cuadros comunitarios, alumbrado de zonas comunes, detectores y grupos de presión.',
      icon: Building,
      badge: 'Comunidades'
    },
    {
      title: 'Locales Comerciales y Oficinas',
      desc: 'Mantenimiento de iluminación técnica, cuadros secundarios, sistemas SAI y cumplimiento de inspecciones OCA.',
      icon: Wrench,
      badge: 'Empresas'
    },
    {
      title: 'Atención Prioritaria de Averías',
      desc: 'Respuesta técnica directa y coordinada para resolver cortes de suministro sin esperas prolongadas.',
      icon: Clock,
      badge: 'Prioritario'
    },
    {
      title: 'Informes y Certificaciones',
      desc: 'Redacción de informes técnicos de estado para presentar ante administradores de fincas o aseguradoras.',
      icon: FileCheck,
      badge: 'Informes'
    },
    {
      title: 'Termografía y Disparo de Diferenciales',
      desc: 'Análisis térmico de interruptores para detectar calentamientos y test de sensibilidad de diferenciales.',
      icon: ShieldCheck,
      badge: 'Seguridad'
    },
    {
      title: 'Alumbrado de Emergencia',
      desc: 'Comprobación de baterías y sustitución preventiva de luminarias de emergencia en rutas de evacuación.',
      icon: Zap,
      badge: 'Normativa'
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
            alt="Mantenimiento eléctrico en Barcelona"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            currentPageTitle="Mantenimiento Eléctrico"
            currentPageUrl="https://electricistasenbarcelona.com/mantenimiento-electrico"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 fill-current" />
                <span>Mantenimiento Preventivo & Correctivo</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
                Mantenimiento eléctrico en Barcelona para <span className="text-amber-400">comunidades y negocios</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Evita interrupciones imprevistas y garantiza la seguridad de tus instalaciones. Diseñamos planes de mantenimiento técnico para comunidades de propietarios, locales comerciales, oficinas y fincas en Barcelona.
              </p>

              {/* CALL CTA BOX */}
              <div className="bg-amber-500 text-slate-950 p-5 rounded-2xl shadow-2xl space-y-3 border-2 border-amber-400">
                <div className="flex items-center justify-between font-extrabold text-sm uppercase tracking-wide border-b border-slate-950/20 pb-2">
                  <span className="flex items-center gap-2">
                    <Phone className="w-5 h-5 fill-current text-slate-950" />
                    Planes de Mantenimiento Personalizados
                  </span>
                  <span className="text-xs bg-slate-950 text-amber-400 px-2 py-0.5 rounded">Evaluación Gratuita</span>
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
                    href="https://wa.me/34657144186?text=Hola,%20solicito%20informacion%20sobre%20contratos%20de%20mantenimiento%20electrico"
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
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Informes detallados</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Atención prioritaria</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Cumplimiento REBT</span>
              </div>
            </div>

            {/* FORM SIDE COLUMN */}
            <div className="lg:col-span-5">
              <ContactForm
                paginaOrigen="Mantenimiento - Hero"
                title="Solicitar Mantenimiento"
                subtitle="Cuéntanos el tipo de inmueble y adaptamos una propuesta."
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
              <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest block">Prevención & Seguridad</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Mantenimiento preventivo para evitar interrupciones y averías
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Un plan de mantenimiento profesional alarga la vida útil de los cuadros de protección, detecta puntos calientes por termografía y asegura superar las inspecciones periódicas obligatorias de OCA.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/50">
                  <h3 className="font-bold text-amber-400 text-base mb-1">Informes técnicos y certificados para administradores de fincas</h3>
                  <p className="text-xs text-slate-300">
                    Documentación completa firmada tras cada revisión técnica preventiva para respaldar la gestión del inmueble.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Inspecciones OCA</h4>
                    <p className="text-slate-400">Puesta a punto previa para superar las revisiones decenales de la administración.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Termografía Infrarroja</h4>
                    <p className="text-slate-400">Detección anticipada de bornes flojos y calentamientos en pletinas de cuadros.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Comprobación Puesta a Tierra</h4>
                    <p className="text-slate-400">Medición del valor en ohmios de la pica de tierra para asegurar la protección.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Atención Prioritaria</h4>
                    <p className="text-slate-400">Intervención rápida en menos de 2 horas ante apagones o cortocircuitos graves.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="tel:+34657144186"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg transition-transform active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  Solicitar Auditoría Eléctrica: 657 144 186
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <Image
                src="/images/hero_electrician.jpg"
                alt="Mantenimiento eléctrico en Barcelona"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* HOW WE WORK AMBER BANNER */}
        <section className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 sm:p-8 my-12 text-slate-900">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
            <ClipboardList className="w-6 h-6 text-amber-600 shrink-0" />
            Cómo desarrollamos el servicio de mantenimiento en 4 pasos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">1</div>
              <h3 className="font-bold text-slate-900 mb-1">Auditoría Inicial</h3>
              <p className="text-xs text-slate-600">Inspeccionamos la finca o negocio para evaluar el estado real de la instalación y cuadros.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">2</div>
              <h3 className="font-bold text-slate-900 mb-1">Plan Personalizado</h3>
              <p className="text-xs text-slate-600">Diseñamos la periodicidad de revisiones (trimestral, semestral o anual) adaptada al inmueble.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">3</div>
              <h3 className="font-bold text-slate-900 mb-1">Revisiones Periódicas</h3>
              <p className="text-xs text-slate-600">Ejecutamos las pruebas preventivas y sustituimos componentes fatigados preventivamente.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">4</div>
              <h3 className="font-bold text-slate-900 mb-1">Informe de Actuación</h3>
              <p className="text-xs text-slate-600">Entregamos la hoja de control con las mediciones y recomendaciones para el libro del edificio.</p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US WHITE GRID */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 my-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              ¿Por qué confiar en nosotros para el mantenimiento de tu inmueble?
            </h2>
            <p className="text-slate-600 text-sm">
              Rigurosidad técnica, máxima transparencia y cumplimiento estricto del Reglamento Electrotécnico de Baja Tensión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Empresa Instaladora Acreditada</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Empresa autorizada inscrita en el registro oficial con seguro de responsabilidad civil.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Técnicos Especializados</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Electricistas cualificados y formados en normativa de seguridad y prevención de riesgos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Atención Rápida en Averías</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Servicio prioritario para clientes en contrato para solventar cualquier fallo imprevisto.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Transparencia Total</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Presupuestos previos para cualquier sustitución fuera del contrato ordinario.
              </p>
            </div>
          </div>
        </section>

        {/* SUBSERVICES GRID */}
        <section className="my-16 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-amber-500 font-extrabold text-xs uppercase tracking-widest block">Soluciones de Mantenimiento</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Catálogo de mantenimiento eléctrico</h2>
            </div>
            <p className="text-slate-600 text-sm max-w-md">
              Servicios adaptados para fincas residenciales, empresas y comercios en Barcelona.
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
                    <span>Consultar plan</span>
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
            <h2 className="text-3xl font-black text-white tracking-tight">Mantenimiento eléctrico en toda Barcelona</h2>
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
            paginaOrigen="Mantenimiento - Cierre"
            title="¿Necesitas un plan de mantenimiento eléctrico para tu inmueble?"
            subtitle="Contacta con nuestros técnicos autorizados hoy mismo. Te asesoramos sin compromiso."
          />
        </section>
      </div>
    </div>
  );
}
