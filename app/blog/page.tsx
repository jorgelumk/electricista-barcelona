'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight, Zap, BookOpen, ShieldCheck, PhoneCall, Search, Filter } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog';

export default function BlogIndex() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const categories = ['Todas', ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];

  const filteredArticles = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.keyword.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'Todas' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* HERO BANNER */}
      <section className="bg-slate-900 text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>Guías Técnicas y Normativa Eléctrica (15 Artículos)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Blog de Electricidad y Consejos para el Hogar
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Resolvemos tus dudas sobre averías eléctricas, normativa oficial REBT, certificados CIE, ahorro energético y seguridad en instalaciones de Barcelona. Guías elaboradas por instaladores autorizados.
          </p>

          {/* SEARCH BAR */}
          <div className="pt-4 max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar artículo (ej. diferencial, boletín, potencia, enchufe)..."
              className="w-full bg-slate-800/90 border border-slate-700 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors shadow-inner"
            />
          </div>
        </div>
      </section>

      {/* ARTICLES & FILTERS CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* CATEGORY FILTER CHIPS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all shadow-sm ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 shadow-amber-500/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ARTICLES GRID */}
        {filteredArticles.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-3">
            <p className="text-slate-600 font-bold">No se han encontrado artículos que coincidan con tu búsqueda.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Todas');
              }}
              className="text-amber-600 font-bold text-xs underline hover:text-amber-700"
            >
              Restablecer filtros y ver los 15 artículos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* IMAGEN PRINCIPAL DEL POST */}
                  <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.alt || post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[11px] font-black px-3 py-1 rounded-lg uppercase tracking-wider shadow-md">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-extrabold text-slate-900 leading-snug group-hover:text-amber-600 transition-colors">
                      <Link href={`/blog/${post.slug}/`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-semibold">{post.author}</span>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-amber-600 hover:text-amber-700 uppercase tracking-wider"
                  >
                    <span>Leer artículo</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* TRUST & CTA BANNER */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 justify-center md:justify-start">
              <Zap className="w-4 h-4" /> Asesoramiento Técnico Directo
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">¿Tienes una consulta técnica sobre tu instalación eléctrica?</h2>
            <p className="text-slate-300 text-sm">Nuestra red de instaladores autorizados REIC atiende urgencias 24h y solicitudes de presupuesto en Barcelona.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="tel:+34657144186"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
            >
              <PhoneCall className="w-4 h-4" />
              Llamar al 657 144 186
            </a>
            <Link
              href="/contacto/"
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 border border-slate-700"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Pedir Presupuesto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
