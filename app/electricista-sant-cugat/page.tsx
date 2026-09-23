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
  title: 'Electricista en Sant Cugat 24 Horas | Urgencias e Instalaciones',
  description: 'Electricistas autorizados en Sant Cugat del Vallès. Urgencias 24h en menos de 60 min en Centre, Valldoreix, Mira-sol y Volpelleres. 📱 657 144 186.',
  alternates: {
    canonical: 'https://electricistasenbarcelona.com/electricista-sant-cugat',
  }
};

export default function ElectricistaSantCugatPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Servicios de Electricista y Urgencias 24 Horas en Sant Cugat del Vallès',
    description: 'Electricistas autorizados en Sant Cugat para urgencias 24h, averías, boletines eléctricos (CIE), cambio de cuadros eléctricos, domótica y reformas.',
    url: 'https://electricistasenbarcelona.com/electricista-sant-cugat',
    areaServed: ['Sant Cugat del Vallès', 'Valldoreix', 'Mira-sol', 'La Floresta', 'Volpelleres', 'Coll Favà']
  });

  const faqs = [
    {
      question: '¿Cuánto tardáis en enviar un técnico de urgencias a Sant Cugat o Valldoreix?',
      answer: 'Disponemos de unidades móviles en la zona del Vallès. El tiempo medio de llegada a Sant Cugat, Valldoreix, Mira-sol o Volpelleres es inferior a 45 a 60 minutos.'
    },
    {
      question: '¿Emitís el Boletín Eléctrico (CIE) oficial en Sant Cugat?',
      answer: 'Sí. Nuestros instaladores autorizados REIC visan telemáticamente el Certificado de Instalación Eléctrica oficial para dar de alta suministros o aumentar la potencia.'
    },
    {
      question: '¿Realizáis instalaciones de domótica y cargadores de coche en Sant Cugat?',
      answer: 'Sí, somos especialistas en domótica del hogar, automatización de persianas y montaje de puntos de recarga para vehículo eléctrico con certificación oficial.'
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
            alt="Electricista autorizado en Sant Cugat del Vallès"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <Breadcrumbs
            currentPageTitle="Electricista en Sant Cugat del Vallès"
            currentPageUrl="https://electricistasenbarcelona.com/electricista-sant-cugat"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                <Zap className="w-4 h-4 fill-current" />
                <span>Electricistas Autorizados REIC · Sant Cugat</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
              Electricista en Sant Cugat: <span className="text-amber-400">urgencias 24 horas</span> e instalaciones
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Servicio técnico eléctrico de alta calidad en Sant Cugat del Vallès. Llegada en menos de <strong className="text-amber-400">60 minutos</strong> en Centre, Valldoreix, Mira-sol, La Floresta y Volpelleres. Presupuesto cerrado previo y garantía por escrito.
            </p>

            {/* HIGH CONTRAST EMERGENCY CALL CTA */}
            <div className="bg-amber-500 text-slate-950 p-5 rounded-2xl shadow-2xl space-y-3 border-2 border-amber-400">
              <div className="flex items-center justify-between font-extrabold text-sm uppercase tracking-wide border-b border-slate-950/20 pb-2">
                <span className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 fill-current text-slate-950 animate-pulse" />
                  Atención Inmediata 24h Sant Cugat
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
                  href="https://wa.me/34657144186?text=Hola,%20necesito%20un%20electricista%20urgente%20en%20Sant%20Cugat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 text-sm shadow transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>WhatsApp Sant Cugat</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300 font-medium pt-2">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Sin sorpresas en factura</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Asistencia monitorizada</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Carnet REIC Oficial</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ContactForm
              poblacion="Sant Cugat del Vallès"
              paginaOrigen="Landing Sant Cugat - Hero"
              title="Electricista en Sant Cugat"
              subtitle="Pide tu presupuesto para averías, boletines, domótica o reformas."
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
              <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest block">Servicio Urgente Sant Cugat</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Electricista urgente 24 horas en Sant Cugat del Vallès
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Asistencia inmediata para solucionar cortocircuitos, saltos de diferencial y apagones en chalets y pisos de Sant Cugat, Valldoreix o Mira-sol. Desplazamiento en menos de 60 minutos.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/50">
                  <h3 className="font-bold text-amber-400 text-base mb-1">Diagnóstico preciso en la primera visita</h3>
                  <p className="text-xs text-slate-300">
                    Nuestras unidades móviles cuentan con instrumental de prueba para aislar derivaciones y reparar el fallo de inmediato.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Corte total de luz</h4>
                    <p className="text-slate-400">Verificación de IGA, diferencial y acometida principal.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Diferencial no sube</h4>
                    <p className="text-slate-400">Detección de fugas en electrodomésticos o humedad en jardín.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Calentamiento en cuadro</h4>
                    <p className="text-slate-400">Sustitución inmediata por automáticos superinmunizados REBT.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Iluminación sin corriente</h4>
                    <p className="text-slate-400">Reparación de circuitos secundarios y cajas de registro.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="tel:+34657144186"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg transition-transform active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  Llamar Urgencias Sant Cugat: 657 144 186
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <Image
                src="/images/urgencias_24h.jpg"
                alt="Técnico electricista urgente en Sant Cugat"
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
            Qué hacer mientras llega el electricista a tu vivienda en Sant Cugat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 space-y-1">
              <span className="font-black text-amber-600 text-lg">1. Seguridad Primero</span>
              <p className="text-slate-600 text-xs">Si hay olor a quemado o chispas, apaga el Interruptor General (IGA) del cuadro de entrada.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 space-y-1">
              <span className="font-black text-amber-600 text-lg">2. No Manipules Cables</span>
              <p className="text-slate-600 text-xs">No toques conductores al descubierto o proyectores exteriores si hay humedad o agua presente.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 space-y-1">
              <span className="font-black text-amber-600 text-lg">3. Desconecta Aparatos</span>
              <p className="text-slate-600 text-xs">Desenchufa receptores de gran potencia para evitar sobretensiones al restablecer el servicio.</p>
            </div>
          </div>
        </section>

        {/* SECTION 3: POR QUE ELEGIRNOS */}
        <section className="my-16 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Garantía de Confianza</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Por qué elegir a nuestros instaladores autorizados en Sant Cugat</h2>
            <p className="text-slate-600 text-sm">Transparencia, respuesta ágil y máxima homologación técnica.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Carnet Oficial REIC</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Instaladores oficiales de la Generalitat de Catalunya para certificar boletines CIE y legalizaciones.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Llegada en &lt; 60 Minutos</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Técnicos coordinados en Sant Cugat, Valldoreix, Mira-sol y Volpelleres para asistencia urgente.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Presupuesto Cerrado Previo</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Valoración transparente antes de iniciar el trabajo, sin costes ocultos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Garantía por Escrito</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Todas nuestras instalaciones y reformas cuentan con garantía formal en materiales y mano de obra.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: CATALOGO COMPLETO */}
        <section className="my-16 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Catálogo Completo</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Servicios de electricista en Sant Cugat del Vallès</h2>
            <p className="text-slate-600 text-sm">Ofrecemos servicio integral para chalets, pisos, empresas y comunidades en Sant Cugat.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="bg-amber-100 text-amber-700 w-10 h-10 rounded-xl flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Instalaciones Eléctricas</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Montajes de baja tensión para vivienda nueva, chalets y oficinas en Sant Cugat según el REBT.
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
                  Sustitución de cuadros por automáticos modernos equipados con protector de sobretensiones e IGA.
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
                <h3 className="text-xl font-bold text-slate-900">Boletín Eléctrico (CIE) Sant Cugat</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Certificado de Instalación Eléctrica oficial imprescindible para dar de alta suministros o subir potencia.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link href="/boletin-electrico-barcelona/" className="text-amber-600 hover:text-amber-700 font-extrabold text-xs flex items-center gap-1">
                  Solicitar Boletín CIE <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="bg-purple-100 text-purple-700 w-10 h-10 rounded-xl flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Reforma y Domótica</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Renovación de cableado y proyectos de domótica del hogar para control de luces, clima y persianas.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <Link href="/reforma-instalacion-electrica/" className="text-slate-700 hover:text-slate-900 font-bold">
                  Reformas
                </Link>
                <Link href="/domotica-barcelona/" className="text-slate-700 hover:text-slate-900 font-bold">
                  Domótica
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="bg-emerald-100 text-emerald-700 w-10 h-10 rounded-xl flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Cargadores Coche Eléctrico</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Instalación certificada de puntos de recarga para vehículos eléctricos en chalets y garajes comunitarios.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link href="/punto-de-recarga-coche-electrico/" className="text-emerald-600 hover:text-emerald-700 font-bold text-xs flex items-center gap-1">
                  Cargadores EV <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="bg-slate-100 text-slate-700 w-10 h-10 rounded-xl flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Enchufes y Comunidades</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Instalación de mecanismos, puntos LED y contratos de mantenimiento para fincas de vecinos en Sant Cugat.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <Link href="/enchufes-e-interruptores/" className="text-slate-700 hover:text-slate-900 font-bold">
                  Enchufes
                </Link>
                <Link href="/electricista-comunidades-de-vecinos/" className="text-slate-700 hover:text-slate-900 font-bold">
                  Comunidades
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: COBERTURA BARRIOS SANT CUGAT */}
        <section className="my-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest">Cobertura en todo Sant Cugat</span>
            <h2 className="text-3xl font-black tracking-tight text-white">
              Zonas y distritos de Sant Cugat del Vallès atendidos
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Atención inmediata en menos de 60 minutos en áreas residenciales y parques empresariales de Sant Cugat.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800 text-xs font-semibold">
            <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700/50">
              <span className="text-amber-400 font-bold block mb-0.5">Núcleo Urbano</span>
              <span className="text-slate-400">Centre, Eixample, Parc Central, Coll Favà, Can Magí.</span>
            </div>
            <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700/50">
              <span className="text-amber-400 font-bold block mb-0.5">Valldoreix & Mira-sol</span>
              <span className="text-slate-400">Valldoreix, Mira-sol, Mas Gener, Can Matas.</span>
            </div>
            <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700/50">
              <span className="text-amber-400 font-bold block mb-0.5">La Floresta & Les Planes</span>
              <span className="text-slate-400">La Floresta, Les Planes, Can Sant Joan.</span>
            </div>
            <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700/50">
              <span className="text-amber-400 font-bold block mb-0.5">Parques Empresariales</span>
              <span className="text-slate-400">Volpelleres, Polígono Can Sant Joan, Can Sant Joan B2B.</span>
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
            poblacion="Sant Cugat del Vallès"
            paginaOrigen="Landing Sant Cugat - Cierre"
            title="Pide Presupuesto para tu Instalación en Sant Cugat"
            subtitle="Atención profesional e inmediata. Te llamamos sin compromiso."
          />
        </section>
      </div>
    </div>
  );
}
