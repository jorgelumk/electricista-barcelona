'use client';

import { useState } from 'react';
import { Share2, Check, Copy, MessageCircle, Twitter, Facebook, Linkedin } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const fullUrl = typeof window !== 'undefined' ? `${window.location.origin}${url}` : `https://electricistasbarcelona.com${url}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="bg-slate-100 border border-slate-200 rounded-2xl p-4 sm:p-5 my-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-800">
      <div className="flex items-center gap-2 font-extrabold text-sm text-slate-900">
        <Share2 className="w-4 h-4 text-amber-500" />
        <span>Compartir esta guía técnica:</span>
      </div>

      <div className="flex items-center flex-wrap gap-2 w-full sm:w-auto justify-center sm:justify-end">
        {/* WhatsApp */}
        <a
          href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartir en WhatsApp"
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-2.5 rounded-xl transition-transform hover:scale-105 flex items-center gap-1.5 text-xs font-bold"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span className="hidden md:inline">WhatsApp</span>
        </a>

        {/* X / Twitter */}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartir en X / Twitter"
          className="bg-slate-900 hover:bg-slate-800 text-white p-2.5 rounded-xl transition-transform hover:scale-105 flex items-center gap-1.5 text-xs font-bold"
        >
          <Twitter className="w-4 h-4 fill-current" />
          <span className="hidden md:inline">X / Twitter</span>
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartir en Facebook"
          className="bg-blue-600 hover:bg-blue-500 text-white p-2.5 rounded-xl transition-transform hover:scale-105 flex items-center gap-1.5 text-xs font-bold"
        >
          <Facebook className="w-4 h-4 fill-current" />
          <span className="hidden md:inline">Facebook</span>
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Compartir en LinkedIn"
          className="bg-sky-700 hover:bg-sky-600 text-white p-2.5 rounded-xl transition-transform hover:scale-105 flex items-center gap-1.5 text-xs font-bold"
        >
          <Linkedin className="w-4 h-4 fill-current" />
          <span className="hidden md:inline">LinkedIn</span>
        </a>

        {/* Copy Link */}
        <button
          onClick={handleCopy}
          className="bg-slate-800 hover:bg-slate-700 text-amber-400 p-2.5 rounded-xl transition-all flex items-center gap-1.5 text-xs font-bold border border-amber-500/30"
          aria-label="Copiar enlace"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? '¡Copiado!' : 'Copiar Enlace'}</span>
        </button>
      </div>
    </div>
  );
}
