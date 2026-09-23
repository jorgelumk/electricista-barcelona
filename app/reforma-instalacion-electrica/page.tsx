import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, ShieldCheck, Clock, CheckCircle2, Zap, MapPin, ArrowRight, Award, UserCheck, Home, Flame, Shield, Layers, BookOpen } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBadges from '@/components/TrustBadges';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import { zonasCobertura, blogGuides } from '@/lib/servicePageData';

export const metadata = {
  title: 'Reforma de Instalación Eléctrica en Barcelona | Cableado e Iluminación',
  description: 'Renovación y reforma completa o parcial de la instalación eléctrica en Barcelona. Rozas, cableado libre de halógenos y cuadros. 📱 657 144 186.',
  alternates: {
    canonical: 'https://electricistasenbarcelona.com/reforma-instalacion-electrica',
  }
};

export default function ReformaInstalacionElectricaPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Reforma de Instalación Eléctrica en Barcelona',
    description: 'Reforma integral y parcial del cableado y mecanismos eléctricos en pisos antiguos, comunidades y locales en Barcelona.',
    url: 'https://electricistasenbarcelona.com/reforma-instalacion-electrica'
  });

  const faqs = [
    {
      question: '¿Cuándo es imprescindible realizar una reforma de la instalación eléctrica?',
      answer: 'Es imprescindible en pisos construidos antes de 1980 con cableado antiguo (textil, plomo o tubo Bergman), falta de toma de tierra en enchufes, o cuando se realiza una reforma integral de cocina y baños que incrementa la demanda de potencia.'
    },
    {
      question: '¿Se puede reformar la instalación eléctrica sin hacer rozas en las paredes?',
      answer: 'Sí. En viviendas donde no se desea hacer obra pesada, podemos aprovechar los tubos empotrados existentes si están despejados, o utilizar canaletas decorativas de superficie registrables con excelente acabado estético.'
    },
    {
      question: '¿Cuánto tiempo lleva reformar la instalación eléctrica de una cocina o piso entero?',
      answer: 'La reforma eléctrica parcial de cocina y baño suele ejecutarse en 2 a 3 días. La reforma completa de una vivienda de 3 habitaciones requiere entre 5 y 7 días laborables.'
    },
    {
      question: '¿Incluye la reforma la entrega del Boletín Eléctrico (CIE)?',
      answer: 'Sí. Al finalizar cualquier reforma integral de la instalación, expedimos el Certificado de Instalación Eléctrica (CIE) reglamentario para registrar las nuevas protecciones y secciones de cable ante la compañía eléctrica.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  const subservicios = [
    {
      title: 'Eliminación de Cable Textil y Plomo',
      desc: 'Sustitución de conductores degradados antiguos por cable de cobre ignífugo H07Z1-K libre de halógenos.',
      icon: Flame,
      badge: 'Sustitución'
    },
    {
      title: 'Reforma en Cocina y Baños',
      desc: 'Canalización de líneas independientes C3, C4 y C5 para vitrocerámica, lavavajillas y horno.',
      icon: Zap,
      badge: 'Circuitos'
    },
    {
      title: 'Toma de Tierra General',
      desc: 'Trazado de conductor verde/amarillo a todas las bases para derivar adecuadamente las fugas a tierra.',
      icon: Shield,
      badge: 'Seguridad'
    },
    {
      title: 'Ampliación de Puntos de Luz y Enchufes',
      desc: 'Redistribución ergonómica de mecanismos eliminando el uso de regletas y alargadores aparatosos.',
      icon: Home,
      badge: 'Confort'
    },
    {
      title: 'Rozas con Aspiración Sin Polvo',
      desc: 'Apertura de canalizaciones con maquinaria provista de aspirador industrial para minimizar la suciedad.',
      icon: Layers,
      badge: 'Obras'
    },
    {
      title: 'Expedición de Boletín Eléctrico (CIE)',
      desc: 'Documentación técnica homologada y sellada en la Generalitat al término de la reforma.',
      icon: ShieldCheck,
      badge: 'Certificado'
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
            alt="Reforma de instalación eléctrica en Barcelona"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            currentPageTitle="Reforma de Instalación Eléctrica"
            currentPageUrl="https://electricistasenbarcelona.com/reforma-instalacion-electrica"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                <Layers className="w-4 h-4 fill-current" />
                <span>Renovación Integral de Cableado REBT</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
                Reforma de la <span className="text-amber-400">instalación eléctrica</span> en Barcelona
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Renovamos la instalación eléctrica de tu vivienda, local o edificio. Eliminamos líneas obsoletas, redistribuimos puntos de luz y enchufe, y garantizamos la máxima eficiencia, seguridad y cumplimiento normativo.
              </p>

              {/* CALL CTA BOX */}
              <div className="bg-amber-500 text-slate-950 p-5 rounded-2xl shadow-2xl space-y-3 border-2 border-amber-400">
                <div className="flex items-center justify-between font-extrabold text-sm uppercase tracking-wide border-b border-slate-950/20 pb-2">
                  <span className="flex items-center gap-2">
                    <Phone className="w-5 h-5 fill-current text-slate-950" />
                    Estudio de Reforma Eléctrica
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
                    href="https://wa.me/34657144186?text=Hola,%20necesito%20presupuesto%20para%20una%20reforma%20electrica%20en%20Barcelona"
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
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Sin cable textil antiguo</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Rozas sin polvo</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Legalización CIE incluida</span>
              </div>
            </div>

            {/* FORM SIDE COLUMN */}
            <div className="lg:col-span-5">
              <ContactForm
                paginaOrigen="Reforma Eléctrica - Hero"
                title="Presupuesto Reforma"
                subtitle="Cuéntanos el alcance de la reforma y te contactamos en minutos."
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
              <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest block">Actualización Integral</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Reformas eléctricas completas y parciales en Barcelona
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                En pisos antiguos con más de 30 años es fundamental sustituir el cableado textil o envejecido para evitar cortocircuitos y adaptar las protecciones al consumo actual de electrodomésticos modernos.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/50">
                  <h3 className="font-bold text-amber-400 text-base mb-1">Garantía por escrito y expedición de Boletín Eléctrico (CIE)</h3>
                  <p className="text-xs text-slate-300">
                    Todas las reformas incluyen la legalización oficial para registrar las nuevas líneas ante la distribuidora.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Cableado Ignífugo</h4>
                    <p className="text-slate-400">Conductores de cobre H07Z1-K libres de halógenos de alta durabilidad.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Reforma de Cocina y Baños</h4>
                    <p className="text-slate-400">Líneas independientes C3, C4 y C5 respetando distancias de seguridad hídrica.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Conexión Toma de Tierra</h4>
                    <p className="text-slate-400">Puesta a tierra asegurada en el 100% de las bases de enchufe de la vivienda.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Rozas Aspiradas</h4>
                    <p className="text-slate-400">Apertura de rozas con maquinaria provista de aspiración para reducir el polvo.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="tel:+34657144186"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg transition-transform active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  Solicitar Valoración Reforma: 657 144 186
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <Image
                src="/images/hero_electrician.jpg"
                alt="Reforma de instalación eléctrica en Barcelona"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* HOW WE WORK AMBER BANNER */}
        <section className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 sm:p-8 my-12 text-slate-900">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
            <Layers className="w-6 h-6 text-amber-600 shrink-0" />
            Cómo desarrollamos la reforma eléctrica en 4 pasos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">1</div>
              <h3 className="font-bold text-slate-900 mb-1">Replanteo en Obra</h3>
              <p className="text-xs text-slate-600">Marcamos sobre pared la ubicación de interruptores, conmutados, enchufes y puntos de luz.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">2</div>
              <h3 className="font-bold text-slate-900 mb-1">Rozas y Canalización</h3>
              <p className="text-xs text-slate-600">Trazamos canalizaciones con rozadora con aspiración para minimizar la presencia de polvo.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">3</div>
              <h3 className="font-bold text-slate-900 mb-1">Cableado y Cuadro</h3>
              <p className="text-xs text-slate-600">Cableamos los circuitos independientes libres de halógenos y conectamos el nuevo cuadro.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">4</div>
              <h3 className="font-bold text-slate-900 mb-1">Mecanizados y Boletín</h3>
              <p className="text-xs text-slate-600">Montamos mecanismos, probamos la instalación y entregamos el Boletín Eléctrico (CIE).</p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US WHITE GRID */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 my-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              ¿Por qué confiar en nosotros para reformar tu instalación eléctrica?
            </h2>
            <p className="text-slate-600 text-sm">
              Garantizamos máxima pulcritud, materiales de calidad comprobada y pleno cumplimiento del REBT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Empresa Autorizada</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Técnicos certificados inscritos en el registro oficial de la Generalitat.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Cumplimiento de Plazos</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Coordinación estrecha con paletas o reformistas para no retrasar la obra.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Limpieza en Obra</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Protegemos suelos y zonas comunes utilizando aspiración continua en rozas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Garantía Total por Escrito</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Garantía oficial de 2 años en cableado, cuadros y mecanismos instalados.
              </p>
            </div>
          </div>
        </section>

        {/* SUBSERVICES GRID */}
        <section className="my-16 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-amber-500 font-extrabold text-xs uppercase tracking-widest block">Servicios de Reforma</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Catálogo de renovaciones eléctricas</h2>
            </div>
            <p className="text-slate-600 text-sm max-w-md">
              Soluciones a medida para pisos, chalets y locales comerciales en Barcelona.
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
                    <span>Solicitar valoración</span>
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
            <h2 className="text-3xl font-black text-white tracking-tight">Reformas eléctricas en toda Barcelona</h2>
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
            paginaOrigen="Reforma Eléctrica - Cierre"
            title="¿Planeas una reforma eléctrica en Barcelona?"
            subtitle="Contacta con nuestros instaladores autorizados hoy mismo."
          />
        </section>
      </div>
    </div>
  );
}
