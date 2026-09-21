'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, PhoneCall, ShieldCheck, Clock } from 'lucide-react';
import { trackFormSubmit } from '@/lib/gtm';

interface ContactFormProps {
  defaultService?: string;
  poblacion?: string;
  paginaOrigen?: string;
  title?: string;
  subtitle?: string;
}

export default function ContactForm({
  defaultService = 'Consulta General / Presupuesto',
  poblacion = 'Barcelona',
  paginaOrigen = 'Home',
  title = 'Solicita Presupuesto Sin Compromiso',
  subtitle = 'Cuéntanos qué necesitas y te responderemos con una propuesta técnica y económica adaptada.'
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    poblacion: poblacion,
    servicio: defaultService,
    mensaje: ''
  });
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!aceptaTerminos) {
      setStatus('error');
      setErrorMessage('Debes aceptar la política de privacidad y los términos y condiciones.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          aceptaTerminos,
          paginaOrigen
        })
      });

      const data = await res.json();

      if (res.ok) {
        trackFormSubmit(formData.nombre, formData.telefono);
        setStatus('success');
        setFormData({
          nombre: '',
          telefono: '',
          poblacion: 'Barcelona',
          servicio: defaultService,
          mensaje: ''
        });
        setAceptaTerminos(false);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Ha ocurrido un error. Inténtalo llamando al 657 144 186.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Error de conexión. Llámanos directamente al 657 144 186.');
    }
  };

  return (
    <div id="presupuesto-form" className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-800 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center max-w-xl mx-auto mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
          <Clock className="w-3.5 h-3.5" /> Atención al Cliente y Presupuestos
        </span>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">{title}</h2>
        <p className="text-slate-400 text-sm mt-2">{subtitle}</p>
      </div>

      {status === 'success' ? (
        <div className="bg-emerald-950/80 border border-emerald-500/40 p-6 rounded-xl text-center my-4 animate-fade-in">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-white mb-1">¡Solicitud Recibida Correctamente!</h3>
          <p className="text-slate-300 text-sm">
            Un técnico especializado revisará tus datos y te contactará a la mayor brevedad.
          </p>
          <div className="mt-4 pt-4 border-t border-emerald-800/40 text-xs text-slate-400">
            ¿Tienes alguna consulta urgente? Llámanos directamente al{' '}
            <a href="tel:+34657144186" className="text-amber-400 font-bold underline">
              657 144 186
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nombre" className="block text-xs font-semibold text-slate-300 mb-1">
                Nombre completo *
              </label>
              <input
                type="text"
                id="nombre"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                placeholder="Ej. Carlos García"
                className="w-full bg-slate-800/90 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-xs font-semibold text-slate-300 mb-1">
                Teléfono de contacto *
              </label>
              <input
                type="tel"
                id="telefono"
                required
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                placeholder="Ej. 657 144 186"
                className="w-full bg-slate-800/90 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="poblacion" className="block text-xs font-semibold text-slate-300 mb-1">
                Población o Código Postal
              </label>
              <input
                type="text"
                id="poblacion"
                value={formData.poblacion}
                onChange={(e) => setFormData({ ...formData, poblacion: e.target.value })}
                placeholder="Ej. Barcelona (Eixample) / 08007"
                className="w-full bg-slate-800/90 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="servicio" className="block text-xs font-semibold text-slate-300 mb-1">
                Tipo de servicio
              </label>
              <select
                id="servicio"
                value={formData.servicio}
                onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                className="w-full bg-slate-800/90 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
              >
                <option value="Consulta General / Presupuesto">Consulta General / Presupuesto</option>
                <option value="Instalación Eléctrica Completa">Instalación Eléctrica Completa</option>
                <option value="Reforma Eléctrica">Reforma Eléctrica</option>
                <option value="Cambio de Cuadro Eléctrico">Cambio de Cuadro Eléctrico</option>
                <option value="Enchufes, Interruptores e Iluminación">Enchufes, Interruptores e Iluminación</option>
                <option value="Boletín Eléctrico (CIE)">Boletín Eléctrico (CIE)</option>
                <option value="Mantenimiento Comunidades / Locales">Mantenimiento Comunidades / Locales</option>
                <option value="Domótica">Domótica y Automatización</option>
                <option value="Urgencia 24h / Avería Eléctrica">Urgencia 24h / Avería Eléctrica</option>
                <option value="Otro Servicio">Otro Servicio</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-xs font-semibold text-slate-300 mb-1">
              Detalles del trabajo (Opcional)
            </label>
            <textarea
              id="mensaje"
              rows={3}
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              placeholder="Describe brevemente qué necesitas (ej. salta el diferencial, necesito aumentar potencia...)"
              className="w-full bg-slate-800/90 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
            />
          </div>

          <div className="flex items-start gap-2.5 pt-1">
            <input
              type="checkbox"
              id="aceptaTerminos"
              required
              checked={aceptaTerminos}
              onChange={(e) => setAceptaTerminos(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-slate-700 bg-slate-800 text-amber-500 focus:ring-amber-400 focus:ring-offset-slate-900 cursor-pointer shrink-0 accent-amber-500"
            />
            <label htmlFor="aceptaTerminos" className="text-xs text-slate-300 leading-snug cursor-pointer select-none">
              He leído y acepto la{' '}
              <a href="/politica-de-privacidad" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline hover:text-amber-300">
                política de privacidad
              </a>{' '}
              y los{' '}
              <a href="/aviso-legal" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline hover:text-amber-300">
                términos y condiciones
              </a>. *
            </label>
          </div>

          {status === 'error' && (
            <div className="bg-red-950/80 border border-red-500/50 p-3 rounded-lg flex items-center gap-2 text-red-200 text-xs">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 px-6 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2 text-base uppercase tracking-wider disabled:opacity-50"
          >
            {status === 'loading' ? (
              <span>Enviando solicitud...</span>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Solicitar Presupuesto Gratis</span>
              </>
            )}
          </button>

          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Sin compromiso ni permanencia
            </span>
            <span className="flex items-center gap-1">
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" /> Atendemos también al 657 144 186
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
