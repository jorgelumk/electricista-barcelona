import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, ShieldCheck, Clock, CheckCircle2, Zap, MapPin, ArrowRight, Award, UserCheck, ToggleLeft, Sparkles, Shield, Plug, BookOpen } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBadges from '@/components/TrustBadges';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import { zonasCobertura, blogGuides } from '@/lib/servicePageData';

export const metadata = {
  title: 'Cambiar Enchufes e Interruptores en Barcelona | Iluminación LED',
  description: 'Instalación y sustitución de enchufes, conmutadores, mecanismos USB y puntos de luz en Barcelona. Mecanismos homologados. Presupuesto sin compromiso. 📱 657 144 186.',
  alternates: {
    canonical: 'https://electricistasbarcelona.com/enchufes-e-interruptores/',
  }
};

export default function EnchufesInterruptoresPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Cambio de Enchufes e Interruptores en Barcelona',
    description: 'Instalación y sustitución de mecanismos eléctricos, enchufes con toma de tierra, conmutadores y puntos de iluminación LED en Barcelona.',
    url: 'https://electricistasbarcelona.com/enchufes-e-interruptores/'
  });

  const faqs = [
    {
      question: '¿Por qué un enchufe o interruptor se calienta, chasca o chispea?',
      answer: 'Un enchufe que chispea o se sobrecalienta suele tener bornes flojos o sobrecargas por conectar electrodomésticos de gran consumo en líneas inadecuadas. Es vital sustituir el mecanismo o apretar las conexiones para evitar cortocircuitos o incendios en el cajetín.'
    },
    {
      question: '¿Puedo cambiar las llaves de luz antiguas por enchufes con tomas USB integradas?',
      answer: 'Sí. Sustituimos tus bases de enchufe tradicionales por modelos modernos que integran tomas de carga rápida USB-A y USB-C de 2.4A / 3A sin necesidad de adaptadores externos.'
    },
    {
      question: '¿Qué marcas y colecciones de mecanismos eléctricos instaláis?',
      answer: 'Trabajamos con los principales fabricantes del mercado como Simon (Simon 27, 82, 100), Schneider Electric (Unica, Odace), Niessen (Zenit, Sky) y Legrand (Valena Next, Galea Life).'
    },
    {
      question: '¿Cuánto tiempo lleva cambiar los enchufes de una vivienda completa en Barcelona?',
      answer: 'Para un piso medio de 3 a 4 habitaciones, la renovación completa de entre 25 y 40 mecanismos (enchufes, conmutadores, tomas de TV y red RJ45) suele llevar entre 4 y 6 horas de trabajo limpio.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  const subservicios = [
    {
      title: 'Enchufes Schuko con Toma de Tierra',
      desc: 'Instalación de bases con conexión de puesta a tierra indispensable para electrodomésticos de gran consumo.',
      icon: Plug,
      badge: 'Seguridad'
    },
    {
      title: 'Mecanismos con Carga Rápida USB',
      desc: 'Sustitución por llaves y tomas que integran puertos USB-A y USB-C para móviles y tablets.',
      icon: Sparkles,
      badge: 'Confort'
    },
    {
      title: 'Reguladores de Luz y Conmutadores',
      desc: 'Control del ambiente lumínico con reguladores TRIAC aptos para bombillas y tiras LED regulables.',
      icon: ToggleLeft,
      badge: 'Ahorro'
    },
    {
      title: 'Tomas de Datos RJ45 y Coaxial TV',
      desc: 'Cableado de red categoría 6 para conexión directa de smart TVs y ordenadores sin perder velocidad.',
      icon: Zap,
      badge: 'Redes'
    },
    {
      title: 'Enchufes Estancos Exterior IP66',
      desc: 'Bases protegidas contra humedad, polvo y lluvia para terrazas, patios interiores y jardines.',
      icon: Shield,
      badge: 'Exterior'
    },
    {
      title: 'Focos Downlight e Iluminación LED',
      desc: 'Instalación de focos orientables en pladur y tiras LED indirectas en foscas y muebles.',
      icon: Sparkles,
      badge: 'Iluminación'
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
            alt="Cambio de enchufes e interruptores en Barcelona"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            currentPageTitle="Enchufes e Interruptores"
            currentPageUrl="https://electricistasbarcelona.com/enchufes-e-interruptores/"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                <ToggleLeft className="w-4 h-4 fill-current" />
                <span>Mecanismos Eléctricos & Iluminación LED</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
                Cambiar enchufes, interruptores e <span className="text-amber-400">iluminación</span> en Barcelona
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Renueva la estética y la seguridad de tu hogar o local. Sustituimos mecanismos antiguos por modelos modernos con protección infantil, tomas USB integradas, reguladores de intensidad y puntos de luz LED.
              </p>

              {/* CALL CTA BOX */}
              <div className="bg-amber-500 text-slate-950 p-5 rounded-2xl shadow-2xl space-y-3 border-2 border-amber-400">
                <div className="flex items-center justify-between font-extrabold text-sm uppercase tracking-wide border-b border-slate-950/20 pb-2">
                  <span className="flex items-center gap-2">
                    <Phone className="w-5 h-5 fill-current text-slate-950" />
                    Cambio de Mecanismos Rápido
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
                    href="https://wa.me/34657144186?text=Hola,%20necesito%20presupuesto%20para%20cambiar%20enchufes%20en%20Barcelona"
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
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Marcas de alta gama</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Tomas con USB y RJ45</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Garantía por escrito</span>
              </div>
            </div>

            {/* FORM SIDE COLUMN */}
            <div className="lg:col-span-5">
              <ContactForm
                paginaOrigen="Enchufes - Hero"
                title="Presupuesto Mecanismos"
                subtitle="Cuéntanos cuántos enchufes o puntos de luz deseas cambiar."
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
              <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest block">Mecanismos & Iluminación</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Sustitución profesional de mecanismos en Barcelona
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Los mecanismos antiguos provocan chispeos y falsos contactos. Renovar tus bases de enchufe e interruptores aporta seguridad contra chispazos y moderniza la imagen de tu inmueble.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/50">
                  <h3 className="font-bold text-amber-400 text-base mb-1">Trabajamos con primeras marcas (Simon, Schneider, Niessen, Legrand)</h3>
                  <p className="text-xs text-slate-300">
                    Instalamos únicamente colecciones homologadas con obturadores de protección infantil y bornes automáticos de alta fijación.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Bases Schuko</h4>
                    <p className="text-slate-400">Puesta a tierra asegurada para electrodomésticos de gran potencia.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Tomas USB Carga Rápida</h4>
                    <p className="text-slate-400">Carga tus dispositivos directamente en la pared sin cargadores aparatosos.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Red Ethernet RJ45</h4>
                    <p className="text-slate-400">Conexión de red de alta velocidad en cada habitación o despacho.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Iluminación LED</h4>
                    <p className="text-slate-400">Focos empotrados downlight y tiras LED integradas de bajo consumo.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="tel:+34657144186"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg transition-transform active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  Solicitar Presupuesto: 657 144 186
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <Image
                src="/images/hero_electrician.jpg"
                alt="Cambio de enchufes en Barcelona"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* HOW WE WORK AMBER BANNER */}
        <section className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 sm:p-8 my-12 text-slate-900">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
            <ToggleLeft className="w-6 h-6 text-amber-600 shrink-0" />
            Cómo renovamos tus mecanismos en 4 pasos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">1</div>
              <h3 className="font-bold text-slate-900 mb-1">Elección de Colección</h3>
              <p className="text-xs text-slate-600">Te asesoramos con catálogos de Simon, Schneider o Legrand en los acabados deseados.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">2</div>
              <h3 className="font-bold text-slate-900 mb-1">Presupuesto Cerrado</h3>
              <p className="text-xs text-slate-600">Valoración clara por unidad suministrada e instalada sin costes ocultos.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">3</div>
              <h3 className="font-bold text-slate-900 mb-1">Montaje Seguro</h3>
              <p className="text-xs text-slate-600">Desconexión preventiva de la línea y apriete idóneo de bornes en cada cajetín.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">4</div>
              <h3 className="font-bold text-slate-900 mb-1">Verificación Final</h3>
              <p className="text-xs text-slate-600">Comprobación de voltaje en bases Schuko y prueba de conmutados e iluminación.</p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US WHITE GRID */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 my-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              ¿Por qué elegirnos para cambiar tus enchufes e iluminación?
            </h2>
            <p className="text-slate-600 text-sm">
              Ofrecemos máxima limpieza, rapidez y materiales homologados de máxima durabilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Mecanismos Homologados</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Utilizamos materiales de fabricantes líderes con certificado CE y alta resistencia.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Electricistas Autorizados</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Técnicos cualificados para asegurar que cada línea de enchufe soporte la carga requerida.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Montaje Limpio y Rápido</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cambiamos todos los mecanismos de tu vivienda en pocas horas sin generar suciedad.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Garantía por Escrito</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Todas nuestras instalaciones cuentan con garantía total en piezas y mano de obra.
              </p>
            </div>
          </div>
        </section>

        {/* SUBSERVICES GRID */}
        <section className="my-16 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-amber-500 font-extrabold text-xs uppercase tracking-widest block">Catálogo Completo</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Servicios de mecanismos e iluminación</h2>
            </div>
            <p className="text-slate-600 text-sm max-w-md">
              Soluciones adaptadas para viviendas, despachos y locales comerciales en Barcelona.
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
                    <span>Solicitar instalación</span>
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
            <h2 className="text-3xl font-black text-white tracking-tight">Cambiamos enchufes e iluminación en toda Barcelona</h2>
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
            paginaOrigen="Enchufes - Cierre"
            title="¿Necesitas renovar la iluminación o enchufes de tu inmueble?"
            subtitle="Pide presupuesto personalizado hoy mismo. Responderemos en minutos."
          />
        </section>
      </div>
    </div>
  );
}
