import { ShieldCheck, Clock, Award, PhoneCall, CheckCircle } from 'lucide-react';

export default function TrustBadges() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm my-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
        <div className="pt-4 md:pt-0 flex flex-col items-center">
          <div className="bg-amber-100 text-amber-700 p-3 rounded-full mb-3">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">Electricistas Profesionales</h3>
          <p className="text-xs text-slate-500 mt-1">Especialistas experimentados en todo tipo de instalaciones</p>
        </div>

        <div className="pt-4 md:pt-0 md:pl-6 flex flex-col items-center">
          <div className="bg-emerald-100 text-emerald-700 p-3 rounded-full mb-3">
            <Clock className="w-7 h-7" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">Respuesta Rápida</h3>
          <p className="text-xs text-slate-500 mt-1">Cobertura ágil en Barcelona y área metropolitana</p>
        </div>

        <div className="pt-4 md:pt-0 md:pl-6 flex flex-col items-center">
          <div className="bg-blue-100 text-blue-700 p-3 rounded-full mb-3">
            <Award className="w-7 h-7" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">Garantía por Escrito</h3>
          <p className="text-xs text-slate-500 mt-1">Garantía formal en materiales y mano de obra</p>
        </div>

        <div className="pt-4 md:pt-0 md:pl-6 flex flex-col items-center">
          <div className="bg-purple-100 text-purple-700 p-3 rounded-full mb-3">
            <PhoneCall className="w-7 h-7" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">Presupuesto Previo</h3>
          <p className="text-xs text-slate-500 mt-1">Sin sorpresas en la factura final. Claridad absoluta</p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-100 bg-slate-50 rounded-xl p-4 flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-slate-700">
        <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-600" /> Red de más de 10 técnicos</span>
        <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-600" /> Atención personalizada</span>
        <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-600" /> Particulares, Comunidades y Empresas</span>
      </div>
    </div>
  );
}
