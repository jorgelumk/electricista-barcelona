import Link from 'next/link';
import { Phone, MessageCircle, Clock, ShieldCheck, Mail, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Contacto Electricistas Barcelona | Teléfono 657 144 186',
  description: 'Atención al cliente y presupuesto de electricidad en Barcelona. Llámanos al 📱 657 144 186 o envíanos un WhatsApp. Presupuesto sin compromiso.',
  alternates: {
    canonical: 'https://electricistasenbarcelona.com/contacto/',
  }
};

export default function ContactoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        currentPageTitle="Contacto"
        currentPageUrl="https://electricistasenbarcelona.com/contacto/"
      />

      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Contacto con Electricistas en Barcelona
        </h1>
        <p className="text-slate-600 text-base">
          Estamos a tu disposición para atender consultas sobre instalaciones, reformas, boletines y servicio técnico.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
            <h2 className="text-xl font-bold text-amber-400 border-b border-slate-800 pb-3">
              Canales de Atención Directa
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="bg-amber-500 text-slate-950 p-2.5 rounded-lg shrink-0 mt-1">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">Teléfono de Atención y Cita Previa</span>
                  <a href="tel:+34657144186" className="text-xl font-black text-amber-400 hover:underline">
                    657 144 186
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Atención telefónica directa.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <div className="bg-emerald-600 text-white p-2.5 rounded-lg shrink-0 mt-1">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">WhatsApp Directo</span>
                  <a
                    href="https://wa.me/34657144186?text=Hola,%20necesito%20un%20electricista%20en%20Barcelona"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-emerald-400 hover:underline"
                  >
                    657 144 186
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Envío de fotos de averías y consultas rápidas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <div className="bg-slate-800 text-slate-300 p-2.5 rounded-lg shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">Correo Electrónico de Contacto</span>
                  <a href="mailto:info@electricistasenbarcelona.com" className="text-sm font-bold text-amber-400 hover:underline">
                    info@electricistasenbarcelona.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <div className="bg-slate-800 text-slate-300 p-2.5 rounded-lg shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">Cobertura Geográfica</span>
                  <span className="text-sm text-slate-300">Barcelona Ciudad + Área Metropolitana (Badalona, L&apos;Hospitalet, Terrassa, Sabadell...)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-2">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-emerald-400" /> Tiempo de respuesta &lt; 15 min en horario laborable</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-amber-400" /> Red de más de 10 instaladores asignados por zona</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm
            paginaOrigen="Página de Contacto"
            title="Formulario de Contacto"
            subtitle="Déjanos tus datos y un instalador asignado a tu zona se pondrá en contacto contigo."
          />
        </div>
      </div>
    </div>
  );
}
