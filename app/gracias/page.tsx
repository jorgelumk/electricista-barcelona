import Link from 'next/link';
import { CheckCircle2, Phone, ArrowLeft, Clock } from 'lucide-react';

export const metadata = {
  title: '¡Solicitud Recibida! | Electricistas Barcelona',
  description: 'Hemos recibido tu solicitud de presupuesto correctamente. Te contactaremos en breve.',
  robots: {
    index: false,
    follow: false,
  }
};

export default function GraciasPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-8">
      <div className="bg-emerald-50 border border-emerald-200 p-8 sm:p-12 rounded-3xl space-y-6 shadow-sm">
        <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          ¡Gracias por tu solicitud!
        </h1>
        <p className="text-slate-600 text-base max-w-xl mx-auto leading-relaxed">
          Hemos recibido los datos de tu consulta correctamente. Un técnico o instalador autorizado asignado a tu zona en Barcelona revisará tu petición y te contactará en breve al número facilitado.
        </p>
        <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-700 border border-amber-500/30 text-xs font-bold px-4 py-2 rounded-full">
          <Clock className="w-4 h-4" /> Tiempo medio de respuesta: &lt; 2 horas laborables
        </div>
      </div>

      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl space-y-4">
        <h2 className="text-xl font-bold text-amber-400">¿Es una urgencia o prefieres hablar ahora mismo?</h2>
        <p className="text-xs sm:text-sm text-slate-300">
          Puedes llamarnos de inmediato al teléfono de atención directa:
        </p>
        <div>
          <a
            href="tel:+34657144186"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3.5 rounded-xl text-base shadow-lg transition-transform active:scale-95"
          >
            <Phone className="w-5 h-5 fill-current" />
            Llamar al 657 144 186
          </a>
        </div>
      </div>

      <div className="pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm font-bold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Volver a la página principal
        </Link>
      </div>
    </div>
  );
}
