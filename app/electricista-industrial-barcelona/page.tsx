import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, ShieldCheck, Clock, CheckCircle2, Zap, MapPin, ArrowRight, Award, UserCheck, Factory, Activity, Wrench, Shield, FileCheck, BookOpen } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBadges from '@/components/TrustBadges';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import { zonasCobertura, blogGuides } from '@/lib/servicePageData';

export const metadata = {
  title: 'Electricista Industrial en Barcelona | Cuadros Trifásicos y Naves',
  description: 'Instalación y mantenimiento eléctrico industrial en Barcelona para naves, talleres y fábricas. Acometidas trifásicas y baterías de condensadores. 📱 657 144 186.',
  alternates: {
    canonical: 'https://electricistasbarcelona.com/electricista-industrial-barcelona/',
  }
};

export default function IndustrialPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Electricista Industrial en Barcelona',
    description: 'Servicio técnico especializado en instalaciones eléctricas industriales de baja tensión, cuadros trifásicos y naves en Barcelona.',
    url: 'https://electricistasbarcelona.com/electricista-industrial-barcelona/'
  });

  const faqs = [
    {
      question: '¿Qué servicios realizáis en instalaciones industriales en Barcelona?',
      answer: 'Nos encargamos del diseño y montaje de cuadros generales de distribución trifásica (400V), tendido de bandeja perforada para cableado de gran sección, baterías de condensadores para eliminar penalizaciones por energía reactiva y mantenimiento de motores.'
    },
    {
      question: '¿Cómo se pueden evitar las penalizaciones por energía reactiva en la factura de una nave?',
      answer: 'Instalamos baterías de condensadores automáticas graduadas por microprocesador que neutralizan la energía inductiva generada por motores y transformadores, eliminando el recargo en la factura eléctrica.'
    },
    {
      question: '¿Podéis tramitar la legalización y el boletín de baja tensión para naves industriales?',
      answer: 'Sí, redactamos el proyecto técnico o memoria de diseño e inscripciones en el registro oficial de la Generalitat para legalizar naves de producción, talleres o almacenes logísticos.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  const subservicios = [
    {
      title: 'Cuadros Trifásicos de Distribución (400V)',
      desc: 'Montaje de armarios autoportantes metálicos con embarrados de cobre y protecciones moduladas.',
      icon: Zap,
      badge: 'Cuadros'
    },
    {
      title: 'Baterías de Condensadores Automáticas',
      desc: 'Compensación de energía reactiva para eliminar recargos en la factura eléctrica de industrias.',
      icon: Activity,
      badge: 'Eficiencia'
    },
    {
      title: 'Tendido de Bandeja Perforada y Rejilla',
      desc: 'Tendido aéreo de mangueras de gran sección para distribución de fuerza en polígonos e industrias.',
      icon: Wrench,
      badge: 'Canalización'
    },
    {
      title: 'Mantenimiento de Variadores y Motores',
      desc: 'Diagnóstico de averías en variadores de frecuencia, arrancadores suaves y contactos de automatismos.',
      icon: Shield,
      badge: 'Maquinaria'
    },
    {
      title: 'Iluminación Industrial de Alta Eficiencia',
      desc: 'Sustitución de campanas de vapor de sodio por campanas LED industriales de alto lumen por vatio.',
      icon: Factory,
      badge: 'Iluminación'
    },
    {
      title: 'Legalización de Naves Industriales',
      desc: 'Proyectos técnicos e inscripciones oficiales en el registro de baja tensión de la Generalitat.',
      icon: FileCheck,
      badge: 'Legalización'
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
            alt="Electricista industrial en Barcelona"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            currentPageTitle="Electricista Industrial"
            currentPageUrl="https://electricistasbarcelona.com/electricista-industrial-barcelona/"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                <Factory className="w-4 h-4 fill-current" />
                <span>Ingeniería Electrotécnica Industrial</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
                Electricista industrial en Barcelona para <span className="text-amber-400">naves y fábricas</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Instalación, mantenimiento y reparación de infraestructuras eléctricas de baja tensión en naves industriales, polígonos y talleres en Barcelona y área metropolitana. Cuadros de distribución pesada y trifásica.
              </p>

              {/* CALL CTA BOX */}
              <div className="bg-amber-500 text-slate-950 p-5 rounded-2xl shadow-2xl space-y-3 border-2 border-amber-400">
                <div className="flex items-center justify-between font-extrabold text-sm uppercase tracking-wide border-b border-slate-950/20 pb-2">
                  <span className="flex items-center gap-2">
                    <Phone className="w-5 h-5 fill-current text-slate-950" />
                    Asesoramiento Técnico Industrial
                  </span>
                  <span className="text-xs bg-slate-950 text-amber-400 px-2 py-0.5 rounded">Estudio de Cargas</span>
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
                    href="https://wa.me/34657144186?text=Hola,%20necesito%20presupuesto%20para%20una%20nave%20industrial%20en%20Barcelona"
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
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Trifásica 400V</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Baterías de condensadores</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Legalización de naves</span>
              </div>
            </div>

            {/* FORM SIDE COLUMN */}
            <div className="lg:col-span-5">
              <ContactForm
                paginaOrigen="Industrial - Hero"
                title="Presupuesto Industrial"
                subtitle="Cuéntanos el proyecto o instalación requerida en tu nave."
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
              <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest block">Alta Potencia & Fuerza</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Ingeniería e instalaciones eléctricas para naves e industrias
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Garantizamos la máxima fiabilidad de suministro para evitar paradas no programadas en líneas de producción, automatismos de taller o centros logísticos de Barcelona.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/50">
                  <h3 className="font-bold text-amber-400 text-base mb-1">Eliminación de penalizaciones por energía reactiva</h3>
                  <p className="text-xs text-slate-300">
                    Instalamos baterías de condensadores reguladas por microprocesador que eliminan el recargo en la factura eléctrica de tu nave.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Armarios Trifásicos</h4>
                    <p className="text-slate-400">Cuadros pesados autoportantes con embarrado de cobre de alta capacidad.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Bandejas Industriales</h4>
                    <p className="text-slate-400">Tendido aéreo de rejilla o acero cincado para distribución de mangueras.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Control de Motores</h4>
                    <p className="text-slate-400">Mantenimiento de variadores de frecuencia y arrancadores suaves.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Legalizaciones REBT</h4>
                    <p className="text-slate-400">Memoria técnica y trámites ante la Generalitat para naves y almacenes.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="tel:+34657144186"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg transition-transform active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  Solicitar Auditoría Industrial: 657 144 186
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <Image
                src="/images/hero_electrician.jpg"
                alt="Electricista industrial en Barcelona"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* HOW WE WORK AMBER BANNER */}
        <section className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 sm:p-8 my-12 text-slate-900">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
            <Factory className="w-6 h-6 text-amber-600 shrink-0" />
            Cómo desarrollamos proyectos industriales en 4 pasos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">1</div>
              <h3 className="font-bold text-slate-900 mb-1">Toma de Cargas</h3>
              <p className="text-xs text-slate-600">Medimos consumos de arranque y distribución de maquinaria en planta.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">2</div>
              <h3 className="font-bold text-slate-900 mb-1">Diseño Electrotécnico</h3>
              <p className="text-xs text-slate-600">Calculamos secciones de cableado y selecciones de armarios de protecciones.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">3</div>
              <h3 className="font-bold text-slate-900 mb-1">Montaje e Ignifugación</h3>
              <p className="text-xs text-slate-600">Tendido de mangueras ignífugas libres de halógenos y conexionado de armarios.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">4</div>
              <h3 className="font-bold text-slate-900 mb-1">Ensayos y Tramitación</h3>
              <p className="text-xs text-slate-600">Pruebas de aislamiento, medición de tierra e inscripción legal de la nave.</p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US WHITE GRID */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 my-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              ¿Por qué confiar en nosotros para la electricidad de tu nave?
            </h2>
            <p className="text-slate-600 text-sm">
              Experiencia en polígonos industriales de Barcelona, rigor normativo y máxima fiabilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Ingeniería Electrotécnica</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Diseño optimizado para evitar caídas de tensión en líneas de producción largas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Técnicos de Alta Cualificación</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Especialistas en baja tensión industrial, variadores de frecuencia y cuadros trifásicos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Minimización de Paradas</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Intervenciones programadas en turnos de descanso para no detener la actividad fabril.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Garantía por Escrito</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Garantía oficial en todas las instalaciones y componentes industriales suministrados.
              </p>
            </div>
          </div>
        </section>

        {/* SUBSERVICES GRID */}
        <section className="my-16 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-amber-500 font-extrabold text-xs uppercase tracking-widest block">Servicios Industriales</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Catálogo de soluciones para naves</h2>
            </div>
            <p className="text-slate-600 text-sm max-w-md">
              Soluciones para naves de producción, almacenes logísticos y talleres en Barcelona.
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
            <h2 className="text-3xl font-black text-white tracking-tight">Electricista industrial en toda Barcelona</h2>
            <p className="text-slate-300 text-sm">
              Servicio rápido y directo en todos los polígonos e industrias de Barcelona y área metropolitana.
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
            paginaOrigen="Industrial - Cierre"
            title="¿Necesitas un proyecto o mantenimiento industrial en Barcelona?"
            subtitle="Contacta con nuestros ingenieros e instaladores autorizados hoy mismo."
          />
        </section>
      </div>
    </div>
  );
}
