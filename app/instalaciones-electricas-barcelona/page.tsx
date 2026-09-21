import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, ShieldCheck, Clock, CheckCircle2, Zap, MapPin, ArrowRight, Award, UserCheck, Home, Building2, Store, Factory, BookOpen } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBadges from '@/components/TrustBadges';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import { zonasCobertura, blogGuides } from '@/lib/servicePageData';

export const metadata = {
  title: 'Instalaciones Eléctricas en Barcelona | Viviendas, Locales y Naves',
  description: 'Proyectos e instalaciones eléctricas en Barcelona de baja tensión para viviendas, locales comerciales y comunidades. Presupuesto sin compromiso. 📱 657 144 186.',
  alternates: {
    canonical: 'https://electricistasenbarcelona.com/instalaciones-electricas-barcelona/',
  }
};

export default function InstalacionesElectricasPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Instalaciones Eléctricas en Barcelona',
    description: 'Servicio profesional de montaje y renovación de instalaciones eléctricas de baja tensión en viviendas, locales y naves en Barcelona.',
    url: 'https://electricistasenbarcelona.com/instalaciones-electricas-barcelona/'
  });

  const faqs = [
    {
      question: '¿Qué normativa debe cumplir una instalación eléctrica en Barcelona?',
      answer: 'Todas las instalaciones deben ejecutarse conforme al Reglamento Electrotécnico para Baja Tensión (REBT 2002) y sus Instrucciones Técnicas Complementarias (ITC). Además, se deben cumplir las normativas particulares de la compañía distribuidora de la zona (Endesa / e-distribución).'
    },
    {
      question: '¿Cuánto se tarda en realizar la instalación eléctrica completa de un piso?',
      answer: 'Para una vivienda estándar de 80 m², la sustitución completa de rozas, tubo corrugado, cableado libre de halógenos y montaje de mecanismos suele requerir entre 5 y 8 días laborables.'
    },
    {
      question: '¿Entregais la documentación legal necesaria para dar de alta la luz?',
      answer: 'Sí. Tras finalizar la instalación y realizar las pruebas reglamentarias de aislamiento y tierra, expedimos el Certificado de Instalación Eléctrica (Boletín CIE) para su sellado oficial en el registro de la Generalitat.'
    },
    {
      question: '¿Qué diferencia hay entre grado de electrificación básico y elevado?',
      answer: 'El grado básico (hasta 5.75 kW) incluye 5 circuitos independientes (C1 alumbrado, C2 enchufes, C3 cocina/horno, C4 lavadora/lavavajillas/termo, C5 baños). El grado elevado (hasta 9.2 kW o más) añade circuitos para aire acondicionado, calefacción eléctrica o domótica.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  const subservicios = [
    {
      title: 'Viviendas y Pisos',
      desc: 'Instalación completa de circuitos independientes (C1 a C5), diferencial superinmunizado y tomas de tierra reglamentarias.',
      icon: Home,
      badge: 'Viviendas'
    },
    {
      title: 'Locales Comerciales',
      desc: 'Electrificación comercial de tiendas, restaurantes y oficinas con iluminación de emergencia e ignifugación.',
      icon: Store,
      badge: 'Comercial'
    },
    {
      title: 'Comunidades de Propietarios',
      desc: 'Renovación de acometidas comunitarias, centralización de contadores y líneas generales de alimentación (LGA).',
      icon: Building2,
      badge: 'Comunidades'
    },
    {
      title: 'Naves e Industria',
      desc: 'Instalaciones trifásicas para maquinaria, cuadros de distribución pesada y corrección de energía reactiva.',
      icon: Factory,
      badge: 'Industrial'
    },
    {
      title: 'Cableado Libre de Halógenos',
      desc: 'Conductores H07Z1-K ignífugos de baja emisión de humos tóxicos en caso de incendio.',
      icon: ShieldCheck,
      badge: 'Seguridad'
    },
    {
      title: 'Boletines y Legalización CIE',
      desc: 'Expedición del Certificado de Instalación Eléctrica oficial tras comprobar aislamiento y puesta a tierra.',
      icon: Zap,
      badge: 'Certificación'
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
            alt="Instalaciones eléctricas en Barcelona"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            currentPageTitle="Instalaciones Eléctricas en Barcelona"
            currentPageUrl="https://electricistasenbarcelona.com/instalaciones-electricas-barcelona/"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                <Zap className="w-4 h-4 fill-current" />
                <span>Proyectos de Baja Tensión REBT</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
                Instalaciones eléctricas en Barcelona para <span className="text-amber-400">viviendas y locales</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Ejecutamos proyectos eléctricos de baja tensión homologados para pisos, chalets, comunidades de propietarios y comercios en toda Barcelona. Garantizamos el cumplimiento estricto del REBT, máxima seguridad y entregamos Boletín Eléctrico (CIE).
              </p>

              {/* CALL CTA BOX */}
              <div className="bg-amber-500 text-slate-950 p-5 rounded-2xl shadow-2xl space-y-3 border-2 border-amber-400">
                <div className="flex items-center justify-between font-extrabold text-sm uppercase tracking-wide border-b border-slate-950/20 pb-2">
                  <span className="flex items-center gap-2">
                    <Phone className="w-5 h-5 fill-current text-slate-950" />
                    Estudio de Proyecto Eléctrico
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
                    href="https://wa.me/34657144186?text=Hola,%20necesito%20presupuesto%20para%20una%20instalacion%20electrica%20en%20Barcelona"
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
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Presupuestos detallados</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Cableado libre de halógenos</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Registro y legalización CIE</span>
              </div>
            </div>

            {/* FORM SIDE COLUMN */}
            <div className="lg:col-span-5">
              <ContactForm
                paginaOrigen="Instalaciones - Hero"
                title="Presupuesto Instalación"
                subtitle="Cuéntanos las características de tu inmueble y te contactamos."
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
              <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest block">Baja Tensión Homologada</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Proyectos eléctricos integrales con garantía oficial en Barcelona
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Calculamos cada instalación para optimizar el rendimiento energético, evitar caídas de tensión y asegurar que dispongas de los circuitos necesarios para tus electrodomésticos y equipos.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/50">
                  <h3 className="font-bold text-amber-400 text-base mb-1">Garantía por escrito y entrega de Certificado CIE</h3>
                  <p className="text-xs text-slate-300">
                    Al finalizar la instalación realizamos las pruebas de aislamiento y tierra para tramitar el Boletín Eléctrico ante la Generalitat.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Grado de Electrificación</h4>
                    <p className="text-slate-400">Diseño para nivel básico (5.75 kW) o elevado (9.2 kW) según tus necesidades.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Protecciones IGA y PCS</h4>
                    <p className="text-slate-400">Protección integral contra sobretensiones permanentes y transitorias.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Conductores Ignífugos</h4>
                    <p className="text-slate-400">Uso exclusivo de cableado H07Z1-K libre de halógenos de máxima seguridad.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Cuadros de Mando</h4>
                    <p className="text-slate-400">Montaje de cuadros empotrados con tapa y etiquetado claro de cada magnetotérmico.</p>
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
                alt="Instalaciones eléctricas en Barcelona"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* HOW WE WORK AMBER BANNER */}
        <section className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 sm:p-8 my-12 text-slate-900">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-amber-600 shrink-0" />
            Cómo ejecutamos tu instalación eléctrica en 4 pasos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">1</div>
              <h3 className="font-bold text-slate-900 mb-1">Inspección y Plano</h3>
              <p className="text-xs text-slate-600">Calculamos la potencia requerida y diseñamos el plano de puntos de luz y fuerza.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">2</div>
              <h3 className="font-bold text-slate-900 mb-1">Presupuesto Cerrado</h3>
              <p className="text-xs text-slate-600">Valoración sin compromiso con precio transparente en piezas y mano de obra.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">3</div>
              <h3 className="font-bold text-slate-900 mb-1">Canalización y Cableado</h3>
              <p className="text-xs text-slate-600">Rozas, colocación de corrugado, tirado de conductores y montaje de cajas.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">4</div>
              <h3 className="font-bold text-slate-900 mb-1">Pruebas y Legalización</h3>
              <p className="text-xs text-slate-600">Medición de aislamiento y expedición del Boletín Eléctrico (CIE) oficial.</p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US WHITE GRID */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 my-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              ¿Por qué elegirnos para tu nueva instalación eléctrica?
            </h2>
            <p className="text-slate-600 text-sm">
              Combinamos experiencia acreditada, cumplimiento normativo REBT y materiales de primera calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Cumplimiento REBT 2002</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Todas las obras respetan estrictamente la normativa legal de seguridad de baja tensión.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Técnicos Autorizados</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Instaladores certificados facultados para emitir boletines e informes oficiales.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Cumplimiento de Plazos</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nos comprometemos por contrato a finalizar la obra en las fechas acordadas.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Garantía por Escrito</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Garantía total de 2 años en todas nuestras instalaciones y componentes montados.
              </p>
            </div>
          </div>
        </section>

        {/* SUBSERVICES GRID */}
        <section className="my-16 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-amber-500 font-extrabold text-xs uppercase tracking-widest block">Catálogo de Servicios</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Proyectos e instalaciones de electricidad</h2>
            </div>
            <p className="text-slate-600 text-sm max-w-md">
              Soluciones completas para viviendas, comercios, fincas e industrias en Barcelona.
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
                    <span>Solicitar estudio</span>
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
            <h2 className="text-3xl font-black text-white tracking-tight">Instalaciones eléctricas en toda Barcelona</h2>
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
            paginaOrigen="Instalaciones - Cierre"
            title="¿Planeas una nueva instalación eléctrica en Barcelona?"
            subtitle="Pide presupuesto técnico hoy mismo. Te responderemos en minutos."
          />
        </section>
      </div>
    </div>
  );
}
