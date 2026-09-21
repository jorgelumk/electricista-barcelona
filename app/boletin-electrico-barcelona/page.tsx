import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, ShieldCheck, Clock, CheckCircle2, Zap, MapPin, ArrowRight, Award, UserCheck, FileCheck, CheckSquare, Scale, BookOpen } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import Breadcrumbs from '@/components/Breadcrumbs';
import TrustBadges from '@/components/TrustBadges';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';
import { zonasCobertura, blogGuides } from '@/lib/servicePageData';

export const metadata = {
  title: 'Boletín Eléctrico en Barcelona (CIE) | Tramitación Oficial 24-48h',
  description: 'Expedición y registro del Certificado de Instalación Eléctrica (Boletín CIE) en Barcelona para altas de luz, aumentos de potencia y cambios de titular. 📱 657 144 186.',
  alternates: {
    canonical: 'https://electricistasenbarcelona.com/boletin-electrico-barcelona/',
  }
};

export default function BoletinElectricoPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Boletín Eléctrico (CIE) en Barcelona',
    description: 'Tramitación y expedición oficial del Certificado de Instalación Eléctrica de Baja Tensión (CIE) en Barcelona por instalador autorizado registrado en el REIC.',
    url: 'https://electricistasenbarcelona.com/boletin-electrico-barcelona/'
  });

  const faqs = [
    {
      question: '¿Qué es el Certificado de Instalación Eléctrica (CIE o Boletín Eléctrico)?',
      answer: 'El Certificado de Instalación Eléctrica (CIE) es el documento técnico oficial expedido por un instalador autorizado que acredita que la instalación cumple la normativa de seguridad (REBT). Es obligatorio para dar de alta la luz en viviendas con más de 20 años sin suministro, solicitar aumentos de potencia, cambiar de monofásico a trifásico o tras una reforma.'
    },
    {
      question: '¿Cuánto tiempo se tarda en obtener el Boletín Eléctrico en Barcelona?',
      answer: 'Tras la inspección técnica presencial en la vivienda o local, si la instalación es correcta, expedimos y sellamos el certificado en el registro oficial de la Generalitat de Catalunya en un plazo de 24 a 48 horas laborables.'
    },
    {
      question: '¿Qué ocurre si la instalación no supera la inspección inicial?',
      answer: 'Si detectamos anomalías (ausencia de toma de tierra, diferencial caducado o cables fuera de norma), te entregamos un informe con las correcciones exactas necesarias y el presupuesto de adecuación para que puedas legalizarla rápidamente.'
    },
    {
      question: '¿Qué diferencia hay entre el CIE y el Certificado de Reorganización o BRIE (Boletín Azul)?',
      answer: 'El CIE (Boletín Blanco) es la memoria técnica completa exigida para altas nuevas, cambios de potencia sustanciales o reformas. El BRIE (Boletín Azul) es un documento simplificado para modificaciones menores en el ámbito de Catalunya.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  const subservicios = [
    {
      title: 'Alta de Luz y Contador Cortado',
      desc: 'Boletín indispensable para reactivar suministros cortados hace más de 2 meses o acometidas antiguas.',
      icon: Zap,
      badge: 'Altas'
    },
    {
      title: 'Aumento de Potencia Contratada',
      desc: 'Tramitación requerida si la nueva potencia supera el límite del boletín anterior o si han pasado 20 años.',
      icon: CheckSquare,
      badge: 'Potencia'
    },
    {
      title: 'Cambio de Monofásico a Trifásico',
      desc: 'Modificación del tipo de suministro para maquinaria pesada, climatización avanzada o recarga de vehículos.',
      icon: Scale,
      badge: 'Trifásico'
    },
    {
      title: 'Cambio de Titular / Venta de Inmueble',
      desc: 'Exigido por la comercializadora si la instalación supera los 20 años desde la última certificación.',
      icon: Clock,
      badge: 'Trámites'
    },
    {
      title: 'Adecuación de Cuadro Eléctrico',
      desc: 'Subsanación inmediata de defectos detectados para conseguir la aprobación oficial del boletín.',
      icon: ShieldCheck,
      badge: 'Adecuación'
    },
    {
      title: 'Inspección de Toma de Tierra',
      desc: 'Comprobación con telurómetro del valor de aislamiento y resistencia de la tierra.',
      icon: FileCheck,
      badge: 'Medición'
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
            src="/images/boletin_cie.jpg"
            alt="Boletín Eléctrico en Barcelona"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Breadcrumbs
            currentPageTitle="Boletín Eléctrico (CIE)"
            currentPageUrl="https://electricistasenbarcelona.com/boletin-electrico-barcelona/"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                <FileCheck className="w-4 h-4 fill-current" />
                <span>Tramitación Oficial Registro Generalitat</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight text-balance">
                Certificado de Instalación Eléctrica <span className="text-amber-400">(Boletín CIE)</span> en Barcelona
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Emitimos y registramos el Boletín Eléctrico oficial para altas de suministro, cambios de titularidad, reactivación de contadores y aumentos de potencia en Barcelona y área metropolitana. Inspección y gestión rápida en 24-48 horas.
              </p>

              {/* CALL CTA BOX */}
              <div className="bg-amber-500 text-slate-950 p-5 rounded-2xl shadow-2xl space-y-3 border-2 border-amber-400">
                <div className="flex items-center justify-between font-extrabold text-sm uppercase tracking-wide border-b border-slate-950/20 pb-2">
                  <span className="flex items-center gap-2">
                    <Phone className="w-5 h-5 fill-current text-slate-950" />
                    Gestión Rápida de Boletín
                  </span>
                  <span className="text-xs bg-slate-950 text-amber-400 px-2 py-0.5 rounded">Registro Oficial 24-48h</span>
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
                    href="https://wa.me/34657144186?text=Hola,%20necesito%20tramitar%20un%20boletin%20electrico%20en%20Barcelona"
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
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Sellado en 24-48 horas</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Válido para Endesa</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Inspección presencial</span>
              </div>
            </div>

            {/* FORM SIDE COLUMN */}
            <div className="lg:col-span-5">
              <ContactForm
                paginaOrigen="Boletín Eléctrico - Hero"
                title="Solicitar Boletín"
                subtitle="Dinos para qué trámite necesitas el boletín y te informamos."
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
              <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest block">Tramitación Oficial Registrada</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Boletín Eléctrico oficial en Barcelona emitido por instalador registrado
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                El Certificado de Instalación Eléctrica de Baja Tensión (CIE) es el documento indispensable exigido por distribuidoras como Endesa / e-distribución para dar de alta suministros o modificar potencias.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/50">
                  <h3 className="font-bold text-amber-400 text-base mb-1">Registro telemático oficial en la Generalitat de Catalunya</h3>
                  <p className="text-xs text-slate-300">
                    Inspeccionamos presencialmente tu inmueble y tramitamos el sellado telemático para que lo recibas firmado en PDF en 24-48 horas.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Altas de Luz</h4>
                    <p className="text-slate-400">Reactivación de contadores retirados o instalaciones de obra nueva.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Aumentos de Potencia</h4>
                    <p className="text-slate-400">Certificación de la instalación para contratar la potencia requerida.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Cambio de Titularidad</h4>
                    <p className="text-slate-400">Exigido en contrataciones de alquiler o compra con boletines caducados.</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg text-xs border border-slate-700/40">
                    <h4 className="font-bold text-white mb-1">Subsanación de Defectos</h4>
                    <p className="text-slate-400">Corrección en el acto de pequeñas deficiencias en cuadro o tierra para aprobar la inspección.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="tel:+34657144186"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg transition-transform active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  Solicitar Inspección Boletín: 657 144 186
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <Image
                src="/images/boletin_cie.jpg"
                alt="Boletín Eléctrico en Barcelona"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* HOW WE WORK AMBER BANNER */}
        <section className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 sm:p-8 my-12 text-slate-900">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-amber-600 shrink-0" />
            Cómo tramitamos tu Boletín Eléctrico en 4 pasos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">1</div>
              <h3 className="font-bold text-slate-900 mb-1">Visita e Inspección</h3>
              <p className="text-xs text-slate-600">Un técnico autorizado acude a tu inmueble en Barcelona para realizar mediciones de aislamiento y tierra.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">2</div>
              <h3 className="font-bold text-slate-900 mb-1">Adecuación Si Procede</h3>
              <p className="text-xs text-slate-600">Si detectamos pequeños fallos en bornes o automáticos, los corregimos inmediatamente.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">3</div>
              <h3 className="font-bold text-slate-900 mb-1">Firma y Registro</h3>
              <p className="text-xs text-slate-600">Redactamos la memoria técnica y la sellamos en la plataforma telemática oficial de la Generalitat.</p>
            </div>
            <div className="bg-white/80 backdrop-blur p-4 rounded-xl border border-amber-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-2">4</div>
              <h3 className="font-bold text-slate-900 mb-1">Entrega PDF Oficial</h3>
              <p className="text-xs text-slate-600">Te enviamos el CIE sellado por email listo para entregar a tu comercializadora.</p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US WHITE GRID */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 my-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              ¿Por qué tramitar tu Boletín Eléctrico con nosotros?
            </h2>
            <p className="text-slate-600 text-sm">
              Instaladores oficiales inscritos en el Registro de Agentes de la Seguridad Industrial de Catalunya (RASIC).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Registro Oficial REIC/RASIC</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Técnicos habilitados oficialmente para la firma de certificados de baja tensión.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Gestión en 24-48 horas</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Agilidad máxima en la tramitación telemática para no demorar tus trámites con la luz.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Inspección Rigurosa</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Revisamos la instalación para asegurar la protección contra electrocución y cortocircuitos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900">Asesoramiento Incluido</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Te guiamos en los trámites posteriores con Endesa o tu distribuidora eléctrica.
              </p>
            </div>
          </div>
        </section>

        {/* SUBSERVICES GRID */}
        <section className="my-16 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-amber-500 font-extrabold text-xs uppercase tracking-widest block">Servicios de Certificación</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Trámites y certificaciones eléctricas</h2>
            </div>
            <p className="text-slate-600 text-sm max-w-md">
              Emitimos boletines para viviendas, locales, garajes y comunidades en Barcelona.
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
                    <span>Tramitar certificado</span>
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
            <h2 className="text-3xl font-black text-white tracking-tight">Boletines eléctricos en toda Barcelona</h2>
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
            paginaOrigen="Boletín Eléctrico - Cierre"
            title="¿Necesitas un Boletín Eléctrico (CIE) en Barcelona?"
            subtitle="Contacta con nuestros técnicos instaladores oficiales hoy mismo."
          />
        </section>
      </div>
    </div>
  );
}
