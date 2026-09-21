import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, ShieldCheck, Clock, CheckCircle2, Zap, MapPin, ArrowRight, Award, UserCheck, Building2, Lightbulb, Wrench, ShieldAlert, FileText, BookOpen } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBadges from '@/components/TrustBadges';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import { zonasCobertura, blogGuides } from '@/lib/servicePageData';

export const metadata = {
  title: 'Electricista para Comunidades de Vecinos en Barcelona | Mantenimiento y Averías',
  description: 'Servicios de electricidad para comunidades de propietarios y administradores de fincas en Barcelona. Iluminación LED, cuadros de zona común, videoporteros y cargadores. 📱 657 144 186.',
  alternates: {
    canonical: 'https://electricistasbarcelona.com/electricista-comunidades-de-vecinos/',
  }
};

export default function ComunidadesVecinosPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Electricista para Comunidades de Vecinos en Barcelona',
    description: 'Servicio técnico especializado para comunidades de propietarios, portales, garajes y administradores de fincas en Barcelona.',
    url: 'https://electricistasbarcelona.com/electricista-comunidades-de-vecinos/'
  });

  const faqs = [
    {
      question: '¿Atendéis averías urgentes en zonas comunes fuera de horario laborable?',
      answer: 'Sí. Contamos con atención rápida para emergencias en comunidades de propietarios, como cortes de luz en la escalera, fallos en la puerta automática del garaje o bloqueos del cuadro principal del edificio.'
    },
    {
      question: '¿Emitís presupuestos desglosados para administradores de fincas y juntas de vecinos?',
      answer: 'Sí. Preparamos informes técnicos e informes de valoración desglosados por partidas para presentar en juntas de propietarios o despachos de administración de fincas.'
    },
    {
      question: '¿Qué soluciones ofrecéis para reducir el consumo eléctrico de la comunidad?',
      answer: 'Sustituimos el alumbrado incandescente o fluorescente tradicional de escaleras y rellanos por luminarias LED con detectores de presencia crepusculares y temporizadores ajustables, reduciendo la factura de la comunidad hasta un 65%.'
    },
    {
      question: '¿Podéis instalar la infraestructura comunitaria para cargadores de coche eléctrico en el garaje?',
      answer: 'Sí. Diseñamos e instalamos la infraestructura principal de bandeja de cables y derivación desde la centralización de contadores del edificio cumpliendo la normativa ITC-BT-52.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  const subservicios = [
    {
      title: 'Iluminación LED y Detectores de Presencia',
      desc: 'Sustitución de luces de escalera por tecnología LED con sensores temporizados para máximo ahorro.',
      icon: Lightbulb,
      badge: 'Eficiencia'
    },
    {
      title: 'Cuadro General y Centralización de Contadores',
      desc: 'Adecuación del cuadro común de servicios generales (LGA) y armarios de contadores según norma REBT.',
      icon: Wrench,
      badge: 'Cuadros'
    },
    {
      title: 'Luces de Emergencia en Evacuación',
      desc: 'Revisión e instalación de luminarias de emergencia en escaleras y garajes para superar inspecciones OCA.',
      icon: ShieldAlert,
      badge: 'Normativa'
    },
    {
      title: 'Infraestructura para Coche Eléctrico',
      desc: 'Trazado de bandejas de cables en garajes comunitarios para derivaciones individuales a cada plaza.',
      icon: Zap,
      badge: 'Garajes'
    },
    {
      title: 'Videoporteros e Interfonía',
      desc: 'Sustitución de antiguos telefonillos por sistemas de videoportero de 2 hilos con monitor en color.',
      icon: Building2,
      badge: 'Accesos'
    },
    {
      title: 'Informes para Administradores de Fincas',
      desc: 'Redacción de dictámenes técnicos e informes de estado para presentar en juntas de propietarios.',
      icon: FileText,
      badge: 'Informes'
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
            alt="Electricista para comunidades de vecinos en Barcelona"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            currentPageTitle="Electricista para Comunidades"
            currentPageUrl="https://electricistasbarcelona.com/electricista-comunidades-de-vecinos/"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                <Building2 className="w-4 h-4 fill-current" />
                <span>Especialistas en Comunidades de Propietarios</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
                Electricista para <span className="text-amber-400">comunidades de vecinos</span> en Barcelona
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Mantenimiento preventivo, reparación de averías en zonas comunes y modernización de instalaciones eléctricas en edificios residenciales. Trabajamos codo a codo con presidentes de comunidad y administradores de fincas.
              </p>

              {/* CALL CTA BOX */}
              <div className="bg-amber-500 text-slate-950 p-5 rounded-2xl shadow-2xl space-y-3 border-2 border-amber-400">
                <div className="flex items-center justify-between font-extrabold text-sm uppercase tracking-wide border-b border-slate-950/20 pb-2">
                  <span className="flex items-center gap-2">
                    <Phone className="w-5 h-5 fill-current text-slate-950" />
                    Atención para Comunidades y Fincas
                  </span>
                  <span className="text-xs bg-slate-950 text-amber-400 px-2 py-0.5 rounded">Presupuesto Desglosado</span>
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
                    href="https://wa.me/34657144186?text=Hola,%20solicito%20presupuesto%20para%20comunidad%20de%20vecinos"
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
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Facturación unificada</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Informes para juntas</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Respuesta prioritaria</span>
              </div>
            </div>

            {/* FORM SIDE COLUMN */}
            <div className="lg:col-span-5">
              <ContactForm
                paginaOrigen="Comunidades - Hero"
                title="Presupuesto Comunidad"
                subtitle="Dinos las necesidades del edificio y enviamos una propuesta detallada."
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
              <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest block">Gestión de Zonas Comunes</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Mantenimiento y reformas eléctricas en fincas de Barcelona
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Ofrecemos cobertura técnica completa para portales, escaleras, garajes comunitarios, azoteas y salas de contadores. Facilitamos la labor de administradores de fincas con informes técnicos claros e intervenciones rápidas.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/50">
                  <h3 className="font-bold text-amber-400 text-base mb-1">Presupuestos desglosados y atención directa a administraciones de fincas</h3>
                  <p className="text-xs text-slate-300">
                    Redactamos informes de valoración transparentes divididos por partidas para presentar directamente en juntas de vecinos.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Iluminación Eficiente</h4>
                    <p className="text-slate-400">Sensórica crepuscular y temporizadores ajustables para rebajar la factura común.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Cuadros Comunitarios</h4>
                    <p className="text-slate-400">Adecuación según normativa REBT para evitar incidencias en elevadores y bombas.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Garajes y Coche Eléctrico</h4>
                    <p className="text-slate-400">Infraestructura canalizada según ITC-BT-52 para puntos de recarga.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Videoporteros</h4>
                    <p className="text-slate-400">Actualización de interfonía a tecnología de video en color sin cambiar cableado.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="tel:+34657144186"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg transition-transform active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  Solicitar Asesoramiento Comunidad: 657 144 186
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <Image
                src="/images/hero_electrician.jpg"
                alt="Electricista para comunidades en Barcelona"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* HOW WE WORK AMBER BANNER */}
        <section className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 sm:p-8 my-12 text-slate-900">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-amber-600 shrink-0" />
            Cómo colaboramos con la comunidad en 4 pasos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">1</div>
              <h3 className="font-bold text-slate-900 mb-1">Diagnóstico Gratuito</h3>
              <p className="text-xs text-slate-600">Inspeccionamos el cuadro común, iluminación de escalera y garaje sin compromiso.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">2</div>
              <h3 className="font-bold text-slate-900 mb-1">Presupuesto Desglosado</h3>
              <p className="text-xs text-slate-600">Enviamos la propuesta económica clara a la administración de fincas o presidente.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">3</div>
              <h3 className="font-bold text-slate-900 mb-1">Ejecución Coordinada</h3>
              <p className="text-xs text-slate-600">Acordamos las fechas avisando previamente a los vecinos para evitar inconvenientes.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">4</div>
              <h3 className="font-bold text-slate-900 mb-1">Garantía por Escrito</h3>
              <p className="text-xs text-slate-600">Entregamos la factura oficial con garantía completa en materiales y mano de obra.</p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US WHITE GRID */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 my-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              ¿Por qué somos el partner eléctrico ideal para tu finca?
            </h2>
            <p className="text-slate-600 text-sm">
              Transparencia total, agilidad administrativa y respuesta rápida ante incidencias graves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Empresa Instaladora Acreditada</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Técnicos certificados registrados oficialmente con seguro de responsabilidad civil.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Gestión de Administradores</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Facilitamos presupuestos desglosados y partes de trabajo preparados para juntas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Intervención Rápida</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Atención preferente ante apagarones que afecten a ascensores o zonas comunes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Garantía por Escrito</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Garantía oficial de 2 años en todas las instalaciones y componentes sustituidos.
              </p>
            </div>
          </div>
        </section>

        {/* SUBSERVICES GRID */}
        <section className="my-16 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-amber-500 font-extrabold text-xs uppercase tracking-widest block">Servicios de Fincas</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Especialidades para comunidades</h2>
            </div>
            <p className="text-slate-600 text-sm max-w-md">
              Soluciones para portales, aparcamientos, rellanos y zonas ajardinadas en Barcelona.
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
                    <span>Solicitar propuesta</span>
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
            <h2 className="text-3xl font-black text-white tracking-tight">Atendemos comunidades en toda Barcelona</h2>
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
            paginaOrigen="Comunidades - Cierre"
            title="¿Necesitas un electricista para tu comunidad en Barcelona?"
            subtitle="Contacta con nuestros especialistas hoy mismo. Presupuesto sin compromiso."
          />
        </section>
      </div>
    </div>
  );
}
