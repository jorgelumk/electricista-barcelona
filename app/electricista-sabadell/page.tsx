import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, ShieldCheck, Clock, CheckCircle2, AlertTriangle, Zap, MapPin, ArrowRight, Award, UserCheck } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBadges from '@/components/TrustBadges';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';

export const metadata = {
  title: 'Electricista en Sabadell 24 Horas | Urgencias e Instalaciones',
  description: 'Electricistas autorizados en Sabadell. Atención de urgencias 24h en menos de 60 min en Centre, Creu Alta, Concòrdia y Ca n’Oriac. 📱 657 144 186.',
  alternates: {
    canonical: 'https://electricistasenbarcelona.com/electricista-sabadell/',
  }
};

export default function ElectricistaSabadellPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Servicios de Electricista y Urgencias 24 Horas en Sabadell',
    description: 'Electricistas autorizados en Sabadell para urgencias 24h, averías, boletines eléctricos (CIE), cambio de cuadros eléctricos y reformas.',
    url: 'https://electricistasenbarcelona.com/electricista-sabadell/',
    areaServed: ['Sabadell', 'Centre', 'Creu Alta', 'Concòrdia', 'Ca n\'Oriac', 'Gràcia', 'Can Rull']
  });

  const faqs = [
    {
      question: '¿Cuánto tardáis en enviar un electricista a una urgencia en Sabadell?',
      answer: 'Nuestros instaladores del Vallès Occidental llegan a cualquier barrio de Sabadell (Centre, Creu Alta, Concòrdia, Gràcia) en menos de 45 a 60 minutos desde tu llamada.'
    },
    {
      question: '¿Podéis expedir el Boletín Eléctrico (CIE) en Sabadell?',
      answer: 'Sí. Somos instaladores autorizados inscritos en el REIC de la Generalitat de Catalunya, habilitados para emitir el certificado oficial para dar de alta la luz o ampliar la potencia.'
    },
    {
      question: '¿Atendéis urgencias los fines de semana y noches en Sabadell?',
      answer: 'Sí, disponemos de servicio de urgencias 24/7 los 365 días del año para resolver averías graves, saltos de diferencial y cortes de luz.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="space-y-12 pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white overflow-hidden pt-6 pb-12 sm:pt-8 sm:pb-16 border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Image
            src="/images/hero_electrician.jpg"
            alt="Electricista autorizado en Sabadell"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <Breadcrumbs
            currentPageTitle="Electricista en Sabadell"
            currentPageUrl="https://electricistasenbarcelona.com/electricista-sabadell/"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              <Zap className="w-4 h-4 fill-current" />
              <span>Electricistas Autorizados REIC · Sabadell</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
              Electricista en Sabadell: <span className="text-amber-400">urgencias 24 horas</span> e instalaciones
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              ¿Avería eléctrica en Sabadell? Instaladores autorizados con llegada en menos de <strong className="text-amber-400">60 minutos</strong> en Centre, Creu Alta, Concòrdia, Ca n’Oriac, Gràcia y Can Rull. Presupuesto cerrado previo y garantía por escrito.
            </p>

            {/* HIGH CONTRAST EMERGENCY CALL CTA */}
            <div className="bg-amber-500 text-slate-950 p-5 rounded-2xl shadow-2xl space-y-3 border-2 border-amber-400">
              <div className="flex items-center justify-between font-extrabold text-sm uppercase tracking-wide border-b border-slate-950/20 pb-2">
                <span className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 fill-current text-slate-950 animate-pulse" />
                  Atención Inmediata 24h Sabadell
                </span>
                <span className="text-xs bg-slate-950 text-amber-400 px-2 py-0.5 rounded font-black">Llegada &lt; 60 min</span>
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
                  href="https://wa.me/34657144186?text=Hola,%20necesito%20un%20electricista%20urgente%20en%20Sabadell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 text-sm shadow transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>WhatsApp Sabadell</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300 font-medium pt-2">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Sin cobro de sorpresa</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Tiempos garantizados</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Carnet REIC Oficial</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ContactForm
              poblacion="Sabadell"
              paginaOrigen="Landing Sabadell - Hero"
              title="Electricista en Sabadell"
              subtitle="Pide presupuesto para averías, boletines o reformas en Sabadell."
            />
          </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TrustBadges />

        {/* SECTION 1: URGENCIAS 24H */}
        <section className="my-16 space-y-8">
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest block">Servicio Urgente Sabadell</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Electricista urgente 24 horas en Sabadell
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Asistencia inmediata para apagones, saltos de diferencial y fallos de cuadro en viviendas, locales y polígonos industriales de Sabadell. Desplazamiento en menos de 60 minutos.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/50">
                  <h3 className="font-bold text-amber-400 text-base mb-1">Reparación urgente y segura</h3>
                  <p className="text-xs text-slate-300">
                    Nuestras unidades móviles cuentan con instrumental de medición y componentes homologados para arreglar la avería en la primera visita.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Corte total de suministro</h4>
                    <p className="text-slate-400">Verificación de IGA, diferencial y caja de protección.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Diferencial salta sin motivo</h4>
                    <p className="text-slate-400">Diagnóstico de fugas a tierra en circuito o electrodoméstico.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Olor a chispas o plástico</h4>
                    <p className="text-slate-400">Desconexión de seguridad y renovación del módulo dañado.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Enchufes sin luz</h4>
                    <p className="text-slate-400">Reparación de conexiones y sustitución de mecanismos.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="tel:+34657144186"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg transition-transform active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  Llamar Urgencias Sabadell: 657 144 186
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <Image
                src="/images/urgencias_24h.jpg"
                alt="Electricista de urgencias 24h en Sabadell"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* SECTION 2: QUE HACER MIENTRAS LLEGA */}
        <section className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 sm:p-8 my-12 text-slate-900">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
            Qué hacer mientras llega el electricista a tu inmueble en Sabadell
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 space-y-1">
              <span className="font-black text-amber-600 text-lg">1. Seguridad Primero</span>
              <p className="text-slate-600 text-xs">Si sientes olor a quemado, desaprieta o apaga el Interruptor General (IGA) del cuadro.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 space-y-1">
              <span className="font-black text-amber-600 text-lg">2. No Manipules Cables</span>
              <p className="text-slate-600 text-xs">No toques cajas de registro o conductores al descubierto si hay humedad o agua presente.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 space-y-1">
              <span className="font-black text-amber-600 text-lg">3. Desconecta Aparatos</span>
              <p className="text-slate-600 text-xs">Desenchufa electrodomésticos de gran potencia para evitar sobrecargas repentinas al rearmar.</p>
            </div>
          </div>
        </section>

        {/* SECTION 3: POR QUE ELEGIRNOS */}
        <section className="my-16 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Garantía de Confianza</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Por qué elegir a nuestros instaladores autorizados en Sabadell</h2>
            <p className="text-slate-600 text-sm">Transparencia, rapidez y máximo cumplimiento del estándar REBT.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Carnet Oficial REIC</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Técnicos homologados por la Generalitat para tramitar boletines oficiales CIE y altas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Llegada en &lt; 60 Minutos</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Cobertura rápida coordinada en Centre, Creu Alta, Concòrdia y Ca n’Oriac.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Presupuesto Cerrado Previo</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Valoración desglosada por escrito antes de comenzar, evitando cualquier coste oculto.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Garantía por Escrito</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Todas las intervenciones y sustituciones incluyen garantía formal por escrito.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: CATALOGO COMPLETO */}
        <section className="my-16 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Catálogo Completo</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Servicios de electricista en Sabadell</h2>
            <p className="text-slate-600 text-sm">Ofrecemos soluciones integrales en viviendas, comercios y comunidades en Sabadell.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="bg-amber-100 text-amber-700 w-10 h-10 rounded-xl flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Instalaciones Eléctricas</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Montaje de cableado de baja tensión para pisos, naves y locales comerciales en Sabadell.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link href="/instalaciones-electricas-barcelona/" className="text-amber-600 hover:text-amber-700 font-bold text-xs flex items-center gap-1">
                  Ver instalaciones <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="bg-blue-100 text-blue-700 w-10 h-10 rounded-xl flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Cambio de Cuadro Eléctrico</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Sustitución de cajas antiguas por automáticos modernos equipados con IGA y protector de sobretensiones.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link href="/cambio-de-cuadro-electrico/" className="text-blue-600 hover:text-blue-700 font-bold text-xs flex items-center gap-1">
                  Ver cuadros eléctricos <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md border-amber-400 ring-2 ring-amber-400/20 transition-shadow">
              <div className="space-y-3">
                <div className="bg-amber-500 text-slate-950 w-10 h-10 rounded-xl flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <div className="inline-block bg-amber-100 text-amber-800 text-[10px] font-extrabold px-2 py-0.5 rounded">Oficial REIC</div>
                <h3 className="text-xl font-bold text-slate-900">Boletín Eléctrico (CIE) Sabadell</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Certificado de Instalación Eléctrica oficial para dar de alta el suministro o subir la potencia.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link href="/boletin-electrico-barcelona/" className="text-amber-600 hover:text-amber-700 font-extrabold text-xs flex items-center gap-1">
                  Solicitar Boletín en Sabadell <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="bg-purple-100 text-purple-700 w-10 h-10 rounded-xl flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Reforma de Instalación</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Renovación integral del cableado de tela o tubo bergman caducado en pisos de Sabadell.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link href="/reforma-instalacion-electrica/" className="text-purple-600 hover:text-purple-700 font-bold text-xs flex items-center gap-1">
                  Reformas de cableado <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="bg-emerald-100 text-emerald-700 w-10 h-10 rounded-xl flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Enchufes e Iluminación</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Instalación de mecanismos, puntos de luz LED, conmutadores y tomas de alta potencia.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link href="/enchufes-e-interruptores/" className="text-emerald-600 hover:text-emerald-700 font-bold text-xs flex items-center gap-1">
                  Enchufes y luz <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="bg-slate-100 text-slate-700 w-10 h-10 rounded-xl flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Comunidades y Naves</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Mantenimiento para comunidades de vecinos, videoporteros y automatización industrial.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <Link href="/electricista-comunidades-de-vecinos/" className="text-slate-700 hover:text-slate-900 font-bold">
                  Comunidades
                </Link>
                <Link href="/domotica-barcelona/" className="text-slate-700 hover:text-slate-900 font-bold">
                  Domótica
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: COBERTURA BARRIOS SABADELL */}
        <section className="my-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest">Cobertura Completa en Sabadell</span>
            <h2 className="text-3xl font-black tracking-tight text-white">
              Barrios y polígonos de Sabadell donde trabajamos
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Respuesta en menos de 60 minutos en todos los distritos urbanos e industriales de Sabadell.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800 text-xs font-semibold">
            <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700/50">
              <span className="text-amber-400 font-bold block mb-0.5">Distrito 1 & 2</span>
              <span className="text-slate-400">Centre, Creu Alta, Eixample, Covadonga, Sol i Padrís.</span>
            </div>
            <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700/50">
              <span className="text-amber-400 font-bold block mb-0.5">Distrito 3 & 4</span>
              <span className="text-slate-400">Ca n&apos;Oriac, Concòrdia, Torreguitart, Can Rull, Merinals.</span>
            </div>
            <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700/50">
              <span className="text-amber-400 font-bold block mb-0.5">Distrito 5 & 6</span>
              <span className="text-slate-400">Gràcia, Can Feu, Campoamor, Espronceda, les Termes.</span>
            </div>
            <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700/50">
              <span className="text-amber-400 font-bold block mb-0.5">Polígonos Industriales</span>
              <span className="text-slate-400">Can Roqueta, Zona Hermètica, Sant Pau de Riu-sec.</span>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS CAROUSEL */}
        <TestimonialsCarousel />

        {/* FAQ SECTION */}
        <FAQSection faqs={faqs} />

        {/* CLOSING FORM */}
        <section className="my-16">
          <ContactForm
            poblacion="Sabadell"
            paginaOrigen="Landing Sabadell - Cierre"
            title="Pide Presupuesto para tu Instalación en Sabadell"
            subtitle="Atención profesional e inmediata. Te llamamos sin compromiso."
          />
        </section>
      </div>
    </div>
  );
}
