import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, ShieldCheck, Clock, CheckCircle2, Zap, MapPin, ArrowRight, Award, UserCheck, Cpu, Lightbulb, Home, Thermometer, Lock, BookOpen } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBadges from '@/components/TrustBadges';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import { zonasCobertura, blogGuides } from '@/lib/servicePageData';

export const metadata = {
  title: 'Instalación de Domótica en Barcelona | Hogar Inteligente y Eficiencia',
  description: 'Instalación de sistemas domóticos en Barcelona. Control de iluminación, persianas motorizadas, clima y seguridad desde tu móvil. Presupuesto sin compromiso. 📱 657 144 186.',
  alternates: {
    canonical: 'https://electricistasenbarcelona.com/domotica-barcelona/',
  }
};

export default function DomoticaPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Domótica y Automatización en Barcelona',
    description: 'Instalación de sistemas domóticos profesionales para control inteligente de iluminación, climatización, persianas y gestión energética en Barcelona.',
    url: 'https://electricistasenbarcelona.com/domotica-barcelona/'
  });

  const faqs = [
    {
      question: '¿Qué ventajas ofrece instalar un sistema de domótica en el hogar?',
      answer: 'La domótica permite optimizar el consumo eléctrico hasta un 30% mediante el apagado automático de luces y el ajuste inteligente de termostatos, además de aportar confort total con escenas personalizadas (modo cine, salida de casa, noche) y control remoto de persianas, toldos y accesos desde cualquier lugar con el smartphone.'
    },
    {
      question: '¿Es necesario hacer reformas u obras para domotizar una vivienda ya construida?',
      answer: 'No. Disponemos de soluciones inalámbricas avanzadas basadas en protocolos estándar (Zigbee, Z-Wave o Wi-Fi profesional) que se integran detrás de los mecanismos eléctricos existentes sin picar paredes ni romper tabiques.'
    },
    {
      question: '¿Se pueden integrar los sistemas domóticos con asistentes de voz como Alexa, Google Home o Siri?',
      answer: 'Sí. Todos nuestros proyectos de automatización quedan configurados con compatibilidad total para asistentes por voz, permitiéndote encender luces, subir persianas o ajustar la temperatura de cada estancia mediante comandos de voz sencillos.'
    },
    {
      question: '¿Qué diferencia hay entre domótica cableada (KNX) e inalámbrica?',
      answer: 'La domótica cableada bajo protocolo KNX se recomienda para viviendas de obra nueva o reformas integrales por su absoluta estabilidad e independencia de la red Wi-Fi. La domótica inalámbrica es idónea para viviendas habitadas, siendo rápida de instalar y totalmente escalable.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  const subservicios = [
    {
      title: 'Control de Iluminación Inteligente',
      desc: 'Regulación de intensidad, cambio de temperatura cromática y creación de escenas ambiente automáticas.',
      icon: Lightbulb,
      badge: 'Confort'
    },
    {
      title: 'Motorización de Persianas y Toldos',
      desc: 'Programación horaria y cierre automático según la radiación solar para mejorar el aislamiento térmico.',
      icon: Home,
      badge: 'Eficiencia'
    },
    {
      title: 'Climatización por Zonas',
      desc: 'Gestión inteligente de termostatos por estancia reduciendo el desperdicio energético en habitaciones vacías.',
      icon: Thermometer,
      badge: 'Ahorro'
    },
    {
      title: 'Sensores de Seguridad y Fugas',
      desc: 'Cierre automático de electroválvulas ante fuga de agua o gas y alertas inmediatas al teléfono móvil.',
      icon: Lock,
      badge: 'Seguridad'
    },
    {
      title: 'Protocolos Inalámbricos (Zigbee / Z-Wave)',
      desc: 'Integración sin obras mediante micromódulos ocultos en los cajetines de mecanismos actuales.',
      icon: Cpu,
      badge: 'Sin Obras'
    },
    {
      title: 'Instalaciones Cableadas KNX',
      desc: 'Proyectos de alta gama para viviendas unifamiliares, chalet y edificios con bus de datos dedicado.',
      icon: Zap,
      badge: 'Alta Gama'
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
            alt="Instalación de domótica en Barcelona"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            currentPageTitle="Domótica en Barcelona"
            currentPageUrl="https://electricistasenbarcelona.com/domotica-barcelona/"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                <Cpu className="w-4 h-4 fill-current" />
                <span>Hogar Inteligente & Eficiencia Energética</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
                Instalación de domótica y <span className="text-amber-400">hogar inteligente</span> en Barcelona
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Convierte tu vivienda o negocio en un espacio eficiente, cómodo y seguro. Instalamos sistemas domóticos a medida para el control centralizado de iluminación, persianas motorizadas, climatización y seguridad desde smartphone o voz.
              </p>

              {/* CALL CTA BOX */}
              <div className="bg-amber-500 text-slate-950 p-5 rounded-2xl shadow-2xl space-y-3 border-2 border-amber-400">
                <div className="flex items-center justify-between font-extrabold text-sm uppercase tracking-wide border-b border-slate-950/20 pb-2">
                  <span className="flex items-center gap-2">
                    <Phone className="w-5 h-5 fill-current text-slate-950" />
                    Asesoramiento Técnico Domótico
                  </span>
                  <span className="text-xs bg-slate-950 text-amber-400 px-2 py-0.5 rounded">Estudio Personalizado</span>
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
                    href="https://wa.me/34657144186?text=Hola,%20quisiera%20informacion%20sobre%20domotica%20en%20Barcelona"
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
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Sin obras molestas</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Ahorro de luz probado</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Control por voz y App</span>
              </div>
            </div>

            {/* FORM SIDE COLUMN */}
            <div className="lg:col-span-5">
              <ContactForm
                paginaOrigen="Domótica - Hero"
                title="Presupuesto Domótica"
                subtitle="Cuéntanos qué deseas automatizar y te enviaremos una propuesta."
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
              <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest block">Automatización a Medida</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Soluciones avanzadas para tu hogar o negocio en Barcelona
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                La domótica moderna integrada por nuestros profesionales permite coordinar todos los elementos eléctricos de tu inmueble para maximizar el confort y reducir el gasto en la factura eléctrica.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/50">
                  <h3 className="font-bold text-amber-400 text-base mb-1">Integración total con asistentes por voz (Alexa, Siri, Google)</h3>
                  <p className="text-xs text-slate-300">
                    Controla persianas, luces y clima mediante comandos de voz sencillos o automatismos horarios preprogramados.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Escenas de Iluminación</h4>
                    <p className="text-slate-400">Modo cine, cenar o descanso con un solo toque en tu teléfono.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Persianas Automáticas</h4>
                    <p className="text-slate-400">Apertura y cierre según la posición del sol para aislar la vivienda.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Gestión Térmica Zonal</h4>
                    <p className="text-slate-400">Temperatura ideal en cada estancia evitando calentar cuartos vacíos.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Corte Preventivo de Fugas</h4>
                    <p className="text-slate-400">Cierre inmediato de electroválvulas en caso de detectar fugas de agua.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="tel:+34657144186"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg transition-transform active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  Solicitar Asesoramiento: 657 144 186
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <Image
                src="/images/hero_electrician.jpg"
                alt="Instalación de domótica en Barcelona"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* HOW WE WORK AMBER BANNER */}
        <section className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 sm:p-8 my-12 text-slate-900">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-amber-600 shrink-0" />
            Cómo realizamos tu proyecto de domótica en 4 pasos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 space-y-1">
              <span className="font-black text-amber-600 text-lg">1. Asesoramiento</span>
              <p className="text-slate-600 text-xs">Estudiamos tu vivienda para elegir las tecnologías más adecuadas sin obras.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 space-y-1">
              <span className="font-black text-amber-600 text-lg">2. Propuesta Cerrada</span>
              <p className="text-slate-600 text-xs">Presupuesto detallado con el número exacto de actuadores y controladores.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 space-y-1">
              <span className="font-black text-amber-600 text-lg">3. Instalación Limpia</span>
              <p className="text-slate-600 text-xs">Colocación de micromódulos tras los interruptores sin romper tabiques.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 space-y-1">
              <span className="font-black text-amber-600 text-lg">4. Configuración App</span>
              <p className="text-slate-600 text-xs">Programación en tu smartphone y formación de uso para toda la familia.</p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="my-16 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Garantía de Confianza</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Por qué confiar tu proyecto domótico a nuestro equipo</h2>
            <p className="text-slate-600 text-sm">Transparencia, máxima compatibilidad tecnológica y soporte posventa continuado.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Especialistas Cualificados</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Técnicos certificados en integración de protocolos inalámbricos y sistemas cableados KNX.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Sin Molestias ni Obras</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Instalación rápida respetando la estética y decoración actual de tu vivienda.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Presupuesto Previo Cerrado</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Valoración económica completa antes de comenzar, sin costes ocultos ni sorpresas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Garantía por Escrito</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Garantía formal en componentes, instalación y soporte técnico de configuración.
              </p>
            </div>
          </div>
        </section>

        {/* SUBSERVICES CATALOG GRID */}
        <section className="my-16 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Especialidades Domóticas</span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Soluciones de automatización en Barcelona</h2>
            <p className="text-slate-600 text-sm">Explora las distintas áreas que podemos automatizar en tu inmueble.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subservicios.map((sub, idx) => {
              const IconComp = sub.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="bg-amber-500/10 text-amber-600 p-2.5 rounded-xl">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {sub.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {sub.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {sub.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ZONAS DE COBERTURA */}
        <section className="my-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Cobertura Geográfica Completa
            </span>
            <h2 className="text-3xl font-black tracking-tight text-white">
              Instalación de Domótica en Barcelona y Área Metropolitana
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Damos cobertura directa a Barcelona ciudad y principales municipios metropolitanos:
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
              </Link>
            ))}
          </div>
        </section>

        {/* BLOG AND GUIDES */}
        <section className="my-16 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest flex items-center gap-1">
                <BookOpen className="w-4 h-4" /> Consejos y Guías Útiles
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Artículos destacados sobre instalaciones eléctricas
              </h2>
            </div>
            <Link href="/blog/" className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1">
              Ver blog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogGuides.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
                  <p className="text-xs text-slate-600">{item.desc}</p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100">
                  <Link href={item.href} className="text-amber-600 font-bold text-xs flex items-center gap-1">
                    Leer guía <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <TestimonialsCarousel />

        {/* FAQ SECTION */}
        <FAQSection faqs={faqs} />

        {/* CLOSING FORM */}
        <section className="my-16">
          <ContactForm
            paginaOrigen="Domótica - Cierre"
            title="Solicita Presupuesto Domótico en Barcelona"
            subtitle="Atención personalizada sin compromiso. Te llamamos a la mayor brevedad."
          />
        </section>
      </div>
    </div>
  );
}
