'use client';

import { Phone, MessageCircle, ClipboardList } from 'lucide-react';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/gtm';

interface StickyMobileBarProps {
  whatsappMessage?: string;
}

export default function StickyMobileBar({
  whatsappMessage = 'Hola, necesito un electricista urgente en Barcelona'
}: StickyMobileBarProps) {
  const encodedMsg = encodeURIComponent(whatsappMessage);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-800 p-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
        {/* Call Button */}
        <a
          href="tel:+34657144186"
          onClick={trackPhoneClick}
          className="bg-amber-500 hover:bg-amber-400 text-slate-950 py-2.5 px-2 rounded-lg flex flex-col items-center justify-center gap-1 shadow-md transition-all active:scale-95"
        >
          <Phone className="w-5 h-5 fill-current" />
          <span>Llamar Ahora</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/34657144186?text=${encodedMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsAppClick}
          className="bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 px-2 rounded-lg flex flex-col items-center justify-center gap-1 shadow-md transition-all active:scale-95"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>WhatsApp</span>
        </a>

        {/* Budget Form Scroll Button */}
        <a
          href="#presupuesto-form"
          className="bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-500/30 py-2.5 px-2 rounded-lg flex flex-col items-center justify-center gap-1 shadow-md transition-all active:scale-95"
        >
          <ClipboardList className="w-5 h-5" />
          <span>Presupuesto</span>
        </a>
      </div>
    </div>
  );
}
