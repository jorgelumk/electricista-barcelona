import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, ShieldCheck, Clock, CheckCircle2, Zap, MapPin, ArrowRight, Award, UserCheck, Shield, Activity, Cpu, AlertCircle, BookOpen } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBadges from '@/components/TrustBadges';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import { zonasCobertura, blogGuides } from '@/lib/servicePageData';

export const metadata = {
  title: 'Cambiar Cuadro Eléctrico en Barcelona | Protecciones Homologadas',
  description: 'Cambio y actualización de cuadro eléctrico de vivienda en Barcelona. Sustitución de plomos por IGA, sobretensiones y diferenciales SI. 📱 657 144 186.',
  alternates: {
    canonical: 'https://electricistasenbarcelona.com/cambio-de-cuadro-electrico/',
  }
};

export default function CambioCuadroElectricoPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Cambio de Cuadro Eléctrico en Barcelona',
    description: 'Sustitución de cuadros eléctricos antiguos de plomos por cajas modernas de protección con diferencial superinmunizado, IGA y protector de sobretensiones.',
    url: 'https://electricistasenbarcelona.com/cambio-de-cuadro-electrico/'
  });

  const faqs = [
    {
      question: '¿Por qué es obligatorio cambiar un cuadro eléctrico antiguo de plomos?',
      answer: 'Los cuadros de fusibles antiguos o con tapa de madera no disponen de diferencial ni puesta a tierra, lo que implica un riesgo directo de electrocución o incendio. Además, no superan la inspección reglamentaria para emitir un Boletín Eléctrico (CIE) ni permiten tramitar aumentos de potencia.'
    },
    {
      question: '¿Qué elementos incluye un cuadro eléctrico moderno según la normativa REBT?',
      answer: 'Un cuadro homologado según el REBT cuenta con Interruptor General Automático (IGA), Protector de Sobretensiones (PCS), Interruptor Diferencial de 30mA (superinmunizado para proteger aparatos electrónicos) y Pequeños Interruptores Automáticos (PIA) para cada circuito independiente.'
    },
    {
      question: '¿Cuánto tiempo se tarda en sustituir un cuadro eléctrico?',
      answer: 'La sustitución estándar de un cuadro eléctrico de vivienda en Barcelona se realiza en aproximadamente 3 a 5 horas, dejando el suministro totalmente restablecido y comprobado en el mismo día.'
    },
    {
      question: '¿Qué es un diferencial superinmunizado y cuándo conviene instalarlo?',
      answer: 'Un diferencial superinmunizado (clase A / SI) evita que el cuadro salte sin motivo ante armónicos generados por aires acondicionados, ordenadores, electrodomésticos Inverter o iluminación LED, ofreciendo mayor estabilidad de suministro.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  const subservicios = [
    {
      title: 'Interruptor General Automático (IGA)',
      desc: 'Protección principal de la línea frente a cortocircuitos y sobrecalentamientos por exceso de carga.',
      icon: Shield,
      badge: 'Protección'
    },
    {
      title: 'Protector de Sobretensiones (PCS)',
      desc: 'Evita que picos de voltaje por tormentas o maniobras de red quemen televisores, neveras y electrodomésticos.',
      icon: Zap,
      badge: 'Sobretensiones'
    },
    {
      title: 'Diferencial Superinmunizado (SI)',
      desc: 'Evita saltos intempestivos provocados por armónicos de aires acondicionados, Inverter y ordenadores.',
      icon: Activity,
      badge: 'Estabilidad'
    },
    {
      title: 'PIAs Independientes por Zonas',
      desc: 'Magnetotérmicos separados para aislar fallos únicamente en la línea afectada sin apagar toda la vivienda.',
      icon: Cpu,
      badge: 'Circuitos'
    },
    {
      title: 'Sustitución de Tapones y Plomos',
      desc: 'Retirada de cuadros de madera o fusibles de rosca adaptando el espacio a cajas ignífugas empotradas.',
      icon: AlertCircle,
      badge: 'Modernización'
    },
    {
      title: 'Verificación de Puesta a Tierra',
      desc: 'Comprobación con telurómetro del valor de aislamiento del neutro y la pica de tierra principal.',
      icon: ShieldCheck,
      badge: 'Seguridad'
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
            src="/images/cuadro_electrico.jpg"
            alt="Cambio de cuadro eléctrico en Barcelona"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            currentPageTitle="Cambio de Cuadro Eléctrico"
            currentPageUrl="https://electricistasenbarcelona.com/cambio-de-cuadro-electrico/"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 fill-current" />
                <span>Protecciones Homologadas REBT</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
                Cambio y actualización de <span className="text-amber-400">cuadro eléctrico</span> en Barcelona
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Sustituimos cuadros antiguos de tapón o fusibles por cuadros de mando y protección de última generación. Garantiza la máxima seguridad para tu familia y habilita tu instalación para aumentos de potencia y altas de luz.
              </p>

              {/* CALL CTA BOX */}
              <div className="bg-amber-500 text-slate-950 p-5 rounded-2xl shadow-2xl space-y-3 border-2 border-amber-400">
                <div className="flex items-center justify-between font-extrabold text-sm uppercase tracking-wide border-b border-slate-950/20 pb-2">
                  <span className="flex items-center gap-2">
                    <Phone className="w-5 h-5 fill-current text-slate-950" />
                    Actualización de Cuadro Rápida
                  </span>
                  <span className="text-xs bg-slate-950 text-amber-400 px-2 py-0.5 rounded">Instalación en el Día</span>
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
                    href="https://wa.me/34657144186?text=Hola,%20necesito%20presupuesto%20para%20cambiar%20el%20cuadro%20electrico%20en%20Barcelona"
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
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Protección sobretensiones</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Diferenciales clase A / SI</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Montaje en 3 a 5 horas</span>
              </div>
            </div>

            {/* FORM SIDE COLUMN */}
            <div className="lg:col-span-5">
              <ContactForm
                paginaOrigen="Cuadro Eléctrico - Hero"
                title="Presupuesto Cuadro"
                subtitle="Cuéntanos cuántos automáticos necesitas o envía una foto por WhatsApp."
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
              <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest block">Protección & Seguridad REBT</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Actualiza el cuadro eléctrico de tu vivienda en Barcelona
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                El cuadro eléctrico es el corazón de la seguridad de tu hogar. Sustituir cuadros antiguos de plomo evita riesgos de incendio, previene averías en electrodomésticos sensibles y permite tramitar altas de luz o aumentos de potencia.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/50">
                  <h3 className="font-bold text-amber-400 text-base mb-1">Montaje limpio en 3 a 5 horas sin molestias prolongadas</h3>
                  <p className="text-xs text-slate-300">
                    Sustituimos la caja antigua y dejamos restablecido y verificado el suministro en el mismo día.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Diferencial Superinmunizado</h4>
                    <p className="text-slate-400">Evita cortes intempestivos causados por electrodomésticos Inverter o aparatos electrónicos.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Protección de Sobretensiones</h4>
                    <p className="text-slate-400">Protege ordenadores y Smart TVs de picos de tensión de la red eléctrica externa.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Cajas Ignífugas</h4>
                    <p className="text-slate-400">Cajas de empotrar o superficie con grado de protección IP40 y resistencia térmica.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Peinado y Etiquetado</h4>
                    <p className="text-slate-400">Circuitos claramente rotulados para identificar fácilmente qué automático corresponde a cada estancia.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="tel:+34657144186"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg transition-transform active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  Solicitar Cambio de Cuadro: 657 144 186
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <Image
                src="/images/cuadro_electrico.jpg"
                alt="Cuadro eléctrico instalado en Barcelona"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* HOW WE WORK AMBER BANNER */}
        <section className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 sm:p-8 my-12 text-slate-900">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-amber-600 shrink-0" />
            Proceso de cambio de cuadro en 4 pasos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">1</div>
              <h3 className="font-bold text-slate-900 mb-1">Diagnóstico de Líneas</h3>
              <p className="text-xs text-slate-600">Identificamos los circuitos existentes en la vivienda y calculamos amperajes.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">2</div>
              <h3 className="font-bold text-slate-900 mb-1">Montaje de Caja</h3>
              <p className="text-xs text-slate-600">Instalamos la caja ignífuga homologada de empotrar o superficie según el hueco.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">3</div>
              <h3 className="font-bold text-slate-900 mb-1">Cableado y Automáticos</h3>
              <p className="text-xs text-slate-600">Conectamos IGA, protector de sobretensiones, diferencial superinmunizado y PIAs.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">4</div>
              <h3 className="font-bold text-slate-900 mb-1">Pruebas y Etiquetado</h3>
              <p className="text-xs text-slate-600">Verificamos tiempos de disparo con test de disparo e identificamos cada circuito.</p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US WHITE GRID */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 my-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              ¿Por qué cambiar tu cuadro eléctrico con nuestros especialistas?
            </h2>
            <p className="text-slate-600 text-sm">
              Materiales Schneider o Legrand de gama profesional, rapidez y garantía oficial por escrito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Homologación REBT</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cuadros adaptados al estándar de la Generalitat para permitir boletines o altas de luz.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Instaladores Cualificados</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Técnicos especialistas en equilibrado de fases y protección de líneas de potencia.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Corte Mínimo de Luz</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trabajamos de forma ágil para que la interrupción del suministro no supere unas horas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Garantía por Escrito</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Garantía total en la instalación y en todos los automáticos suministrados.
              </p>
            </div>
          </div>
        </section>

        {/* SUBSERVICES GRID */}
        <section className="my-16 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-amber-500 font-extrabold text-xs uppercase tracking-widest block">Catálogo de Automáticos</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Componentes del cuadro eléctrico</h2>
            </div>
            <p className="text-slate-600 text-sm max-w-md">
              Montamos cajas completas para viviendas, comunidades y locales comerciales.
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
                    <span>Solicitar sustitución</span>
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
            <h2 className="text-3xl font-black text-white tracking-tight">Cambiamos cuadros eléctricos en toda Barcelona</h2>
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
            paginaOrigen="Cuadro Eléctrico - Cierre"
            title="¿Necesitas actualizar el cuadro eléctrico de tu inmueble?"
            subtitle="Contacta con nuestros técnicos autorizados hoy mismo. Presupuesto sin compromiso."
          />
        </section>
      </div>
    </div>
  );
}
