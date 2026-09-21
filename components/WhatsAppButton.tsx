'use client';

import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '@/lib/gtm';

interface WhatsAppButtonProps {
  message?: string;
}

export default function WhatsAppButton({
  message = 'Hola, necesito información sobre un servicio de electricista en Barcelona'
}: WhatsAppButtonProps) {
  const encodedMsg = encodeURIComponent(message);

  return (
    <a
      href={`https://wa.me/34657144186?text=${encodedMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsAppClick}
      aria-label="Contactar por WhatsApp"
      className="hidden md:flex fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-400 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 items-center gap-2 group border-2 border-white/20"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-bold text-sm pr-1">
        ¿Hablamos por WhatsApp?
      </span>
    </a>
  );
}
