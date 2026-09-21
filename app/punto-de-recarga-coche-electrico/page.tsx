import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, ShieldCheck, Clock, CheckCircle2, Zap, MapPin, ArrowRight, Award, UserCheck, Car, Home, Building2, Shield, Euro, BookOpen } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBadges from '@/components/TrustBadges';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import { zonasCobertura, blogGuides } from '@/lib/servicePageData';

export const metadata = {
  title: 'Instalación Punto de Recarga Coche Eléctrico en Barcelona | Wallbox',
  description: 'Instalación de cargadores de vehículo eléctrico en Barcelona para garajes comunitarios y viviendas unifamiliares. Gestión de ayudas Plan MOVES III. 📱 657 144 186.',
  alternates: {
    canonical: 'https://electricistasenbarcelona.com/punto-de-recarga-coche-electrico/',
  }
};

export default function PuntoRecargaPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Instalación Punto de Recarga Coche Eléctrico en Barcelona',
    description: 'Instalación autorizada de cargadores de vehículo eléctrico (Wallbox) según normativa ITC-BT-52 en Barcelona.',
    url: 'https://electricistasenbarcelona.com/punto-de-recarga-coche-electrico/'
  });

  const faqs = [
    {
      question: '¿Qué permisos necesito para instalar un cargador de coche eléctrico en mi plaza de garaje comunitario?',
      answer: 'Según el Artículo 17.8 de la Ley de Propiedad Horizontal (LPH), solo necesitas notificar por escrito con antelación al presidente o administrador de la comunidad. No se requiere votación ni aprobación en junta de propietarios.'
    },
    {
      question: '¿Es necesario subir la potencia contratada de la vivienda para cargar el coche?',
      answer: 'En la mayoría de casos no es necesario. Instalamos cargadores inteligentes con control dinámico de potencia que regulan automáticamente la carga del coche en función del consumo del hogar en cada momento, evitando que salte el ICP.'
    },
    {
      question: '¿Qué ayudas económicas existen para la instalación de puntos de recarga?',
      answer: 'Puedes solicitar las subvenciones del Plan MOVES III, que financian entre el 70% y el 80% del coste total de la instalación y el cargador en municipios de Catalunya.'
    },
    {
      question: '¿Qué marcas de Wallbox e instaladores recomendáis?',
      answer: 'Trabajamos con los principales fabricantes del sector como Wallbox (Pulsar Plus, Copper SB), Circutor, ABB, Orbis y Schneider, adaptados tanto a instalaciones monofásicas (7.4 kW) como trifásicas (22 kW).'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  const subservicios = [
    {
      title: 'Garajes Comunitarios de Vecinos',
      desc: 'Trazado de bandeja y manguera desde tu contador individual hasta la plaza de aparcamiento sin obras molestas.',
      icon: Building2,
      badge: 'Comunidades'
    },
    {
      title: 'Viviendas Unifamiliares y Chalets',
      desc: 'Instalación de cargador exterior IP65 con manguera integrada o base Tipo 2 conectada a placas solares.',
      icon: Home,
      badge: 'Unifamiliar'
    },
    {
      title: 'Control Dinámico de Potencia',
      desc: 'Sensor inteligente que ajusta la energía del cargador para no sobrepasar la potencia contratada en casa.',
      icon: Zap,
      badge: 'Inteligente'
    },
    {
      title: 'Protecciones Específicas ITC-BT-52',
      desc: 'Cuadro dedicado con IGA, protector de sobretensiones y diferencial de detección de fuga continua 6mA DC.',
      icon: Shield,
      badge: 'Normativa'
    },
    {
      title: 'Tramitación Subvención Plan MOVES III',
      desc: 'Asesoramiento completo y preparación de la memoria técnica para solicitar hasta el 70% de subvención.',
      icon: Euro,
      badge: 'Subvención'
    },
    {
      title: 'Certificación y Boletín Eléctrico (CIE)',
      desc: 'Registro oficial de la instalación del punto de recarga ante el órgano competente de la Generalitat.',
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
            alt="Punto de recarga para coche eléctrico en Barcelona"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            currentPageTitle="Punto de Recarga Coche Eléctrico"
            currentPageUrl="https://electricistasenbarcelona.com/punto-de-recarga-coche-electrico/"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                <Car className="w-4 h-4 fill-current" />
                <span>Movilidad Eléctrica & ITC-BT-52</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
                Instalación de punto de recarga de <span className="text-amber-400">coche eléctrico</span> en Barcelona
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Instalamos cargadores inteligentes Wallbox en garajes comunitarios y chalets privados en toda Barcelona. Gestión de canalizaciones desde tu contador, control dinámico de potencia y asesoramiento para solicitar subvenciones del Plan MOVES III.
              </p>

              {/* CALL CTA BOX */}
              <div className="bg-amber-500 text-slate-950 p-5 rounded-2xl shadow-2xl space-y-3 border-2 border-amber-400">
                <div className="flex items-center justify-between font-extrabold text-sm uppercase tracking-wide border-b border-slate-950/20 pb-2">
                  <span className="flex items-center gap-2">
                    <Phone className="w-5 h-5 fill-current text-slate-950" />
                    Cargador de Coche Eléctrico Rápido
                  </span>
                  <span className="text-xs bg-slate-950 text-amber-400 px-2 py-0.5 rounded">Asesoramiento Plan MOVES</span>
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
                    href="https://wa.me/34657144186?text=Hola,%20quisiera%20presupuesto%20para%20instalar%20un%20punto%20de%20recarga%20en%20Barcelona"
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
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Control dinámico de potencia</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Garaje comunitario o privado</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Ayudas Plan MOVES III</span>
              </div>
            </div>

            {/* FORM SIDE COLUMN */}
            <div className="lg:col-span-5">
              <ContactForm
                paginaOrigen="Punto Recarga - Hero"
                title="Presupuesto Cargador"
                subtitle="Cuéntanos dónde se ubica tu plaza de aparcamiento y el modelo de coche."
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
              <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest block">Eficiencia & Carga Inteligente</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Carga tu vehículo eléctrico en casa con la máxima tranquilidad
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Cargar tu coche eléctrico por las noches en tu plaza de garaje es la forma más económica y práctica. Diseñamos la línea dedicada con manguera libre de halógenos y protecciones exclusivas según la norma ITC-BT-52.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/50">
                  <h3 className="font-bold text-amber-400 text-base mb-1">Sin necesidad de aumentar la potencia contratada de tu hogar</h3>
                  <p className="text-xs text-slate-300">
                    El modulación dinámica de potencia ajusta la energía disponible hacia el cargador evitando que salte el contador por sobrecarga.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Garajes Comunitarios</h4>
                    <p className="text-slate-400">Notificación previa según LPH y conexión limpia desde tu contador individual.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Chalets y Garajes Privados</h4>
                    <p className="text-slate-400">Instalación de Wallbox con manguera de 5 o 7 metros e integración solar.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Protección ITC-BT-52</h4>
                    <p className="text-slate-400">Cuadro dedicado con rearme automático y diferencial clase A con fuga DC 6mA.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Plan MOVES III</h4>
                    <p className="text-slate-400">Preparamos toda la documentación técnica para deducir hasta un 70% del coste.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="tel:+34657144186"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg transition-transform active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  Solicitar Asesoramiento Cargador: 657 144 186
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <Image
                src="/images/hero_electrician.jpg"
                alt="Punto de recarga coche eléctrico en Barcelona"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* HOW WE WORK AMBER BANNER */}
        <section className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 sm:p-8 my-12 text-slate-900">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
            <Car className="w-6 h-6 text-amber-600 shrink-0" />
            Cómo instalamos tu cargador de coche en 4 pasos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">1</div>
              <h3 className="font-bold text-slate-900 mb-1">Visita Técnica en Garaje</h3>
              <p className="text-xs text-slate-600">Medimos la distancia desde tu contador hasta la plaza y revisamos la línea principal.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">2</div>
              <h3 className="font-bold text-slate-900 mb-1">Notificación a Comunidad</h3>
              <p className="text-xs text-slate-600">Te entregamos la plantilla oficial redactada para informar al administrador o presidente.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">3</div>
              <h3 className="font-bold text-slate-900 mb-1">Montaje de Cargador</h3>
              <p className="text-xs text-slate-600">Trazamos la canalización, colocamos las protecciones dedicadas y fijamos el Wallbox.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">4</div>
              <h3 className="font-bold text-slate-900 mb-1">Boletín y Plan MOVES</h3>
              <p className="text-xs text-slate-600">Legalizamos la instalación con el Boletín Eléctrico y facilitamos la memoria para la subvención.</p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US WHITE GRID */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 my-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              ¿Por qué confiar en nosotros para instalar tu punto de recarga?
            </h2>
            <p className="text-slate-600 text-sm">
              Instaladores autorizados homologados en movilidad eléctrica con certificado oficial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Normativa ITC-BT-52</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Todas nuestras instalaciones cumplen con la reglamentación técnica obligatoria en garajes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Instaladores Acreditados</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Técnicos certificados para expedir boletines de legalización de recarga de vehículos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Instalación en 1 Día</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Completamos el montaje y prueba de carga en una sola jornada sin molestias para la finca.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Garantía por Escrito</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Garantía oficial de 2 años en el cargador Wallbox y en toda la manguera y protecciones.
              </p>
            </div>
          </div>
        </section>

        {/* SUBSERVICES GRID */}
        <section className="my-16 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-amber-500 font-extrabold text-xs uppercase tracking-widest block">Catálogo de Movilidad</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Servicios de recarga para vehículos eléctricos</h2>
            </div>
            <p className="text-slate-600 text-sm max-w-md">
              Soluciones para particulares, comunidades de propietarios y flotas de empresa en Barcelona.
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
                    <span>Solicitar cargador</span>
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
            <h2 className="text-3xl font-black text-white tracking-tight">Instalamos cargadores de coche en toda Barcelona</h2>
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
            paginaOrigen="Punto Recarga - Cierre"
            title="¿Quieres instalar un punto de recarga para tu vehículo?"
            subtitle="Contacta con nuestros técnicos instaladores oficiales hoy mismo."
          />
        </section>
      </div>
    </div>
  );
}
