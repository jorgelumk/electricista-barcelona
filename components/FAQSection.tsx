'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { generateFAQSchema, FAQItem } from '@/lib/schema';

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQSection({
  faqs,
  title = 'Preguntas Frecuentes sobre Electricistas en Barcelona',
  subtitle = 'Resolvemos las dudas más habituales sobre nuestros servicios de electricidad e instalaciones en Barcelona.'
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = generateFAQSchema(faqs);

  return (
    <section className="py-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-10 my-12 shadow-xl border border-slate-800">
      {/* JSON-LD Schema FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{title}</h2>
        <p className="text-slate-400 text-sm mt-2">{subtitle}</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-slate-800/80 border border-slate-700/60 rounded-xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-slate-100 hover:text-amber-400 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-slate-300 text-sm leading-relaxed border-t border-slate-700/40 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
