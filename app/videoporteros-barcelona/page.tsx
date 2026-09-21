import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, ShieldCheck, Clock, CheckCircle2, Zap, MapPin, ArrowRight, Award, UserCheck, Video, Shield, Smartphone, Lock, BookOpen } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBadges from '@/components/TrustBadges';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import { zonasCobertura, blogGuides } from '@/lib/servicePageData';

export const metadata = {
  title: 'Instalación y Reparación de Videoporteros en Barcelona | Telefonillos e Interfonía',
  description: 'Instalación y reparación de videoporteros y porteros automáticos en Barcelona. Soluciones para comunidades de vecinos y viviendas unifamiliares. 📱 657 144 186.',
  alternates: {
    canonical: 'https://electricistasbarcelona.com/videoporteros-barcelona/',
  }
};

export default function VideoporterosPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Instalación y Reparación de Videoporteros en Barcelona',
    description: 'Servicio técnico especializado en montaje, reparación y cambio de videoporteros y interfonos en Barcelona.',
    url: 'https://electricistasbarcelona.com/videoporteros-barcelona/'
  });

  const faqs = [
    {
      question: '¿Se puede sustituir un portero automático antiguo por videoportero sin cambiar el cableado de la finca?',
      answer: 'Sí. En la mayoría de comunidades de vecinos instalamos sistemas de videoportero digital de 2 hilos no polarizados, aprovechando la manguera vertical existente en la escalera sin necesidad de realizar obras molestas.'
    },
    {
      question: '¿Podemos responder al videoportero desde el teléfono móvil cuando estamos fuera de casa?',
      answer: 'Sí. Instalamos monitores avanzados con conectividad Wi-Fi integrada que redirigen la llamada con audio bi-direccional y vídeo HD a tu smartphone mediante una App segura.'
    },
    {
      question: '¿Qué marcas y fabricantes de videoporteros utilizáis?',
      answer: 'Trabajamos con los fabricantes líderes como Fermax, Tegui, Comelit, Golmar y Tegui, disponiendo de recambios originales para placas de calle, abrepuertas y monitores de vivienda.'
    },
    {
      question: '¿Qué garantía tienen los sistemas de videoportero instalados?',
      answer: 'Ofrecemos una garantía formal por escrito de 3 años en equipos y piezas suministradas, más garantía de instalación profesional.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  const subservicios = [
    {
      title: 'Placas Antivandálicas de Calle',
      desc: 'Fabricadas en aluminio extruido o acero inox con lente gran angular e iluminación LED nocturna.',
      icon: Shield,
      badge: 'Resistencia'
    },
    {
      title: 'Monitores Wi-Fi con App Móvil',
      desc: 'Atiende llamadas de la puerta y abre la entrada desde tu teléfono móvil estés donde estés.',
      icon: Smartphone,
      badge: 'Confort'
    },
    {
      title: 'Apertura por Llavero o Tarjeta RFID',
      desc: 'Acceso sin llaves de metal mediante aproximación de llaveros de seguridad programables.',
      icon: Lock,
      badge: 'Accesos'
    },
    {
      title: 'Cámaras Gran Angular HD',
      desc: 'Visión completa del acceso incluso si las personas se sitúan en los laterales de la placa.',
      icon: Video,
      badge: 'Visión'
    },
    {
      title: 'Abrepuertas Eléctricos y Cierres',
      desc: 'Sustitución de cerraduras electromecánicas en portales de entrada para un cierre suave y seguro.',
      icon: ShieldCheck,
      badge: 'Cierres'
    },
    {
      title: 'Sistemas 2 Hilos Sin Obras',
      desc: 'Aprovechamiento de la manguera existente en comunidades reduciendo drásticamente el coste.',
      icon: Zap,
      badge: 'Sin Obras'
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
            alt="Videoporteros en Barcelona"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            currentPageTitle="Videoporteros en Barcelona"
            currentPageUrl="https://electricistasbarcelona.com/videoporteros-barcelona/"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                <Video className="w-4 h-4 fill-current" />
                <span>Control de Accesos e Interfonía</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
                Instalación y reparación de <span className="text-amber-400">videoporteros</span> en Barcelona
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Cambio de porteros automáticos tradicionales a videoporteros digitalizados a color HD con visión nocturna, monitores táctiles y desvío de llamada al móvil. Soluciones para comunidades de vecinos y chalets unifamiliares.
              </p>

              {/* CALL CTA BOX */}
              <div className="bg-amber-500 text-slate-950 p-5 rounded-2xl shadow-2xl space-y-3 border-2 border-amber-400">
                <div className="flex items-center justify-between font-extrabold text-sm uppercase tracking-wide border-b border-slate-950/20 pb-2">
                  <span className="flex items-center gap-2">
                    <Phone className="w-5 h-5 fill-current text-slate-950" />
                    Asesoramiento Videoporteros
                  </span>
                  <span className="text-xs bg-slate-950 text-amber-400 px-2 py-0.5 rounded">Presupuesto Sin Compromiso</span>
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
                    href="https://wa.me/34657144186?text=Hola,%20necesito%20presupuesto%20para%20un%20videoportero%20en%20Barcelona"
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
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Tecnología 2 hilos sin obras</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Placas antivandálicas</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Desvío a Smartphone</span>
              </div>
            </div>

            {/* FORM SIDE COLUMN */}
            <div className="lg:col-span-5">
              <ContactForm
                paginaOrigen="Videoporteros - Hero"
                title="Presupuesto Videoportero"
                subtitle="Dinos cuántos vecinos o accesos tiene tu finca."
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
              <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest block">Seguridad & Control de Accesos</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Videoporteros de alta definición para comunidades y viviendas
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Sustituir el viejo telefonillo analógico por un videoportero moderno mejora drásticamente la seguridad del edificio al permitir identificar visualmente a las visitas antes de autorizar la apertura del portal.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/50">
                  <h3 className="font-bold text-amber-400 text-base mb-1">Garantía por escrito de 3 años en primeras marcas (Fermax, Tegui, Comelit, Golmar)</h3>
                  <p className="text-xs text-slate-300">
                    Trabajamos únicamente con fabricantes líderes con repuestos garantizados durante años.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Conexión Smartphone</h4>
                    <p className="text-slate-400">Atiende a los repartidores desde el móvil estés donde estés con vídeo HD.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Llaveros RFID</h4>
                    <p className="text-slate-400">Apertura rápida aproximando el llavero sin necesidad de usar llaves de metal.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Placas Antivandálicas</h4>
                    <p className="text-slate-400">Frontales de aluminio extruido con tornillos antirrobo y protección IP54.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Instalación 2 Hilos</h4>
                    <p className="text-slate-400">Aprovechamiento de la manguera vertical existente evitando obras en la finca.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="tel:+34657144186"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg transition-transform active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  Solicitar Valoración Videoportero: 657 144 186
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <Image
                src="/images/hero_electrician.jpg"
                alt="Instalación de videoportero en Barcelona"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* HOW WE WORK AMBER BANNER */}
        <section className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 sm:p-8 my-12 text-slate-900">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
            <Video className="w-6 h-6 text-amber-600 shrink-0" />
            Cómo cambiamos tu portero por videoportero en 4 pasos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">1</div>
              <h3 className="font-bold text-slate-900 mb-1">Diagnóstico de Cableado</h3>
              <p className="text-xs text-slate-600">Comprobamos el estado del cableado de la escalera para asegurar la compatibilidad a 2 hilos.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">2</div>
              <h3 className="font-bold text-slate-900 mb-1">Propuesta para Junta</h3>
              <p className="text-xs text-slate-600">Enviamos la propuesta económica clara a la junta o administración de fincas.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">3</div>
              <h3 className="font-bold text-slate-900 mb-1">Montaje Rápido</h3>
              <p className="text-xs text-slate-600">Cambiamos la placa exterior y montamos los monitores en los pisos en una sola jornada.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">4</div>
              <h3 className="font-bold text-slate-900 mb-1">Programación y Llaveros</h3>
              <p className="text-xs text-slate-600">Entregamos los llaveros RFID configurados y explicamos el funcionamiento a los vecinos.</p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US WHITE GRID */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 my-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              ¿Por qué somos el especialista en videoporteros en Barcelona?
            </h2>
            <p className="text-slate-600 text-sm">
              Instaladores autorizados con repuestos originales de marcas líderes y 3 años de garantía.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Primeras Marcas Oficiales</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fermax, Tegui, Comelit y Golmar con repuestos asegurados a largo plazo.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Técnicos Especializados</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Instaladores cualificados en telefonía de edificios, cerraduras y redes Wi-Fi.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Montaje en 1 Día</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modernizamos la instalación completa de la comunidad en un solo día sin molestias.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Garantía de 3 Años</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Garantía oficial por escrito en monitores, alimentadores y placas exteriores.
              </p>
            </div>
          </div>
        </section>

        {/* SUBSERVICES GRID */}
        <section className="my-16 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-amber-500 font-extrabold text-xs uppercase tracking-widest block">Catálogo de Interfonía</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Servicios de videoporteros y accesos</h2>
            </div>
            <p className="text-slate-600 text-sm max-w-md">
              Soluciones para comunidades de propietarios, casas unifamiliares y empresas en Barcelona.
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
                    <span>Solicitar videoportero</span>
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
            <h2 className="text-3xl font-black text-white tracking-tight">Videoporteros en toda Barcelona</h2>
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
            paginaOrigen="Videoporteros - Cierre"
            title="¿Quieres instalar un videoportero en tu finca?"
            subtitle="Contacta con nuestros especialistas hoy mismo. Presupuesto sin compromiso."
          />
        </section>
      </div>
    </div>
  );
}
