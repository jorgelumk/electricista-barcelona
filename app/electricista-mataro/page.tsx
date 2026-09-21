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
  title: 'Electricista en Mataró 24 Horas | Urgencias e Instalaciones',
  description: 'Electricistas autorizados en Mataró. Atención urgente 24h en menos de 60 min en Centre, Cerdanyola, Rocafonda, Peramàs y Pla d’en Boet. 📱 657 144 186.',
  alternates: {
    canonical: 'https://electricistasenbarcelona.com/electricista-mataro/',
  }
};

export default function ElectricistaMataroPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Servicios de Electricista y Urgencias 24 Horas en Mataró',
    description: 'Electricistas autorizados en Mataró para urgencias 24h, averías, boletines eléctricos (CIE), cambio de cuadros eléctricos y reformas.',
    url: 'https://electricistasenbarcelona.com/electricista-mataro/',
    areaServed: ['Mataró', 'Centre', 'Cerdanyola', 'Rocafonda', 'Peramàs', 'Pla d\'en Boet', 'Molins']
  });

  const faqs = [
    {
      question: '¿Cuánto tardáis en enviar un electricista de urgencias a Mataró?',
      answer: 'Contamos con técnicos asignados a la comarca del Maresme. El tiempo medio de respuesta en cualquier barrio de Mataró (Centre, Cerdanyola, Rocafonda, Pla d\'en Boet) es de 45 a 60 minutos.'
    },
    {
      question: '¿Podéis expedir el Boletín Eléctrico (CIE) oficial en Mataró?',
      answer: 'Sí. Somos instaladores autorizados REIC por la Generalitat de Catalunya, habilitados para revisar instalaciones e integrar telemáticamente el boletín para altas o cambio de potencia.'
    },
    {
      question: '¿Atendéis urgencias nocturnas y festivas en Mataró?',
      answer: 'Sí, disponemos de servicio de guardia 24 horas los 365 días del año para atajar cortocircuitos, saltos de diferencial y apagones.'
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
            alt="Electricista autorizado en Mataró"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <Breadcrumbs
            currentPageTitle="Electricista en Mataró"
            currentPageUrl="https://electricistasenbarcelona.com/electricista-mataro/"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              <Zap className="w-4 h-4 fill-current" />
              <span>Electricistas Autorizados REIC · Mataró</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
              Electricista en Mataró: <span className="text-amber-400">urgencias 24 horas</span> e instalaciones
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              ¿Avería o apagón en Mataró? Red de técnicos autorizados con llegada en menos de <strong className="text-amber-400">60 minutos</strong> en Centre, Cerdanyola, Rocafonda, Peramàs, Pla d’en Boet y Cirera. Presupuesto cerrado previo y garantía oficial.
            </p>

            {/* HIGH CONTRAST EMERGENCY CALL CTA */}
            <div className="bg-amber-500 text-slate-950 p-5 rounded-2xl shadow-2xl space-y-3 border-2 border-amber-400">
              <div className="flex items-center justify-between font-extrabold text-sm uppercase tracking-wide border-b border-slate-950/20 pb-2">
                <span className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 fill-current text-slate-950 animate-pulse" />
                  Atención Inmediata 24h Mataró
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
                  href="https://wa.me/34657144186?text=Hola,%20necesito%20un%20electricista%20urgente%20en%20Mataro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 text-sm shadow transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>WhatsApp Mataró</span>
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
              poblacion="Mataró"
              paginaOrigen="Landing Mataró - Hero"
              title="Electricista en Mataró"
              subtitle="Pide tu presupuesto técnico para averías, boletines o reformas en Mataró."
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
              <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest block">Servicio Urgente Mataró</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Electricista urgente 24 horas en Mataró
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Solución inmediata a cortocircuitos, saltos de diferencial y cortes de luz en Centre, Cerdanyola, Rocafonda o Pla d’en Boet. Desplazamiento garantizado en menos de 60 minutos.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/50">
                  <h3 className="font-bold text-amber-400 text-base mb-1">Diagnóstico preciso in situ</h3>
                  <p className="text-xs text-slate-300">
                    Unidades móviles equipadas con repuestos homologados REBT para atajar la avería en la primera visita.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Sin luz en la vivienda</h4>
                    <p className="text-slate-400">Verificación de IGA, diferencial y acometida.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Diferencial no sube</h4>
                    <p className="text-slate-400">Detección de fugas en electrodomésticos o cableado.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Olor a chispas o quemado</h4>
                    <p className="text-slate-400">Desconexión y sustitución de automáticos defectuosos.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Enchufes inoperativos</h4>
                    <p className="text-slate-400">Saneamiento de bornes sueltos y cajas de empalme.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="tel:+34657144186"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg transition-transform active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  Llamar Urgencias Mataró: 657 144 186
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <Image
                src="/images/urgencias_24h.jpg"
                alt="Electricista urgente en Mataró"
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
            Qué hacer mientras llega el electricista a tu inmueble en Mataró
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 space-y-1">
              <span className="font-black text-amber-600 text-lg">1. Seguridad Primero</span>
              <p className="text-slate-600 text-xs">Si sientes olor a quemado, apaga inmediatamente el Interruptor General (IGA) del cuadro.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 space-y-1">
              <span className="font-black text-amber-600 text-lg">2. No Manipules Cables</span>
              <p className="text-slate-600 text-xs">Evita tocar conductores al descubierto o mecanismos húmedos para prevenir descargas.</p>
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
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Por qué elegir a nuestros instaladores autorizados en Mataró</h2>
            <p className="text-slate-600 text-sm">Rigor reglamentario, asistencia rápida y presupuesto cerrado previo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Carnet Oficial REIC</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Técnicos homologados por la Generalitat para emitir boletines oficiales CIE y altas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Llegada en &lt; 60 Minutos</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Coordinación directa en Centre, Cerdanyola, Rocafonda, Peramàs y Pla d’en Boet.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Presupuesto Cerrado Previo</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Valoración desglosada por escrito antes de comenzar la intervención.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Garantía por Escrito</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Todas nuestras instalaciones y reparaciones cuentan con garantía formal oficial.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: CATALOGO COMPLETO */}
        <section className="my-16 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Catálogo Completo</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Servicios de electricista en Mataró</h2>
            <p className="text-slate-600 text-sm">Ofrecemos servicio integral para viviendas, comercios, naves y comunidades en Mataró.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="bg-amber-100 text-amber-700 w-10 h-10 rounded-xl flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Instalaciones Eléctricas</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Montajes de baja tensión para pisos, naves del Pla d’en Boet y locales comerciales en Mataró.
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
                  Sustitución de cuadros de plomos antiguos por automáticos modernos equipados con IGA y sobretensiones.
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
                <h3 className="text-xl font-bold text-slate-900">Boletín Eléctrico (CIE) Mataró</h3>
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
                <h3 className="text-xl font-bold text-slate-900">Reforma de Instalación</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Renovación integral del cableado caducado en pisos y edificios antiguos de Mataró.
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
                  Instalación de mecanismos, líneas de gran consumo para cocina/termo y luminarias LED.
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
                <h3 className="text-xl font-bold text-slate-900">Comunidades y Domótica</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Mantenimiento para comunidades de vecinos, videoporteros e integración domótica.
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

        {/* SECTION 5: COBERTURA BARRIOS MATARO */}
        <section className="my-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest">Cobertura en todo Mataró</span>
            <h2 className="text-3xl font-black tracking-tight text-white">
              Barrios y zonas de Mataró atendidos por nuestra red
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Atención en menos de 60 minutos en todos los distritos urbanos e industriales de Mataró.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800 text-xs font-semibold">
            <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700/50">
              <span className="text-amber-400 font-bold block mb-0.5">Centro & Eixample</span>
              <span className="text-slate-400">Centre, Eixample, Peramàs, Havana.</span>
            </div>
            <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700/50">
              <span className="text-amber-400 font-bold block mb-0.5">Zona Norte & Este</span>
              <span className="text-slate-400">Cerdanyola, Rocafonda, El Palau, Els Molins.</span>
            </div>
            <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700/50">
              <span className="text-amber-400 font-bold block mb-0.5">Zona Oeste & Alta</span>
              <span className="text-slate-400">Cirera, La Llantia, Vista Alegre.</span>
            </div>
            <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700/50">
              <span className="text-amber-400 font-bold block mb-0.5">Polígonos Industriales</span>
              <span className="text-slate-400">Pla d&apos;en Boet, Les Vallverdes, Mata-Rocafonda.</span>
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
            poblacion="Mataró"
            paginaOrigen="Landing Mataró - Cierre"
            title="Pide Presupuesto para tu Instalación en Mataró"
            subtitle="Atención profesional e inmediata. Te llamamos sin compromiso."
          />
        </section>
      </div>
    </div>
  );
}
