import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';

export interface PostSummary {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  image: string;
}

const allPosts: PostSummary[] = [
  {
    slug: 'por-que-salta-el-diferencial',
    title: '¿Por qué salta el diferencial de la luz? Causas y cómo solucionarlo',
    excerpt: 'Descubre las causas más comunes por las que salta el diferencial en tu vivienda o local y cómo diagnosticar si es una derivación a tierra o un electrodoméstico.',
    readTime: '9 min de lectura',
    category: 'Averías y Diagnóstico',
    image: '/images/urgencias_24h.jpg'
  },
  {
    slug: 'normativa-cuadro-electrico-vivienda',
    title: 'Normativa del cuadro eléctrico de vivienda: elementos obligatorios y REBT',
    excerpt: 'Guía técnica completa sobre la normativa oficial REBT para cuadros eléctricos residenciales. Protecciones obligatorias (IGA, PCS, ID, PIAs) e inspección.',
    readTime: '11 min de lectura',
    category: 'Normativa y Legalización',
    image: '/images/hero_electrician.jpg'
  },
  {
    slug: 'revision-instalacion-electrica',
    title: 'Revisión de la instalación eléctrica: cuándo es obligatoria y qué se inspecciona',
    excerpt: 'Periodicidad, protocolo de inspección técnica en 6 puntos clave y diferencias entre revisión informal y Certificado de Instalación Eléctrica (CIE).',
    readTime: '8 min de lectura',
    category: 'Mantenimiento y Prevención',
    image: '/images/hero_electrician.jpg'
  }
];

interface RelatedPostsProps {
  currentSlug: string;
}

export default function RelatedPosts({ currentSlug }: RelatedPostsProps) {
  const posts = allPosts.filter((p) => p.slug !== currentSlug).slice(0, 2);

  return (
    <section className="mt-16 pt-10 border-t border-slate-200 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-amber-500" />
          Artículos y Guías Relacionadas
        </h3>
        <Link href="/blog/" className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1">
          Ver todo el blog <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="relative h-44 w-full bg-slate-900">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover opacity-85 hover:opacity-100 transition-opacity"
                />
                <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
              <div className="p-5 space-y-2">
                <span className="text-[11px] text-slate-400 font-semibold flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-500" /> {post.readTime}
                </span>
                <h4 className="font-bold text-slate-900 text-base leading-snug hover:text-amber-600 transition-colors">
                  <Link href={`/blog/${post.slug}/`}>
                    {post.title}
                  </Link>
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <Link
                href={`/blog/${post.slug}/`}
                className="text-xs font-black text-amber-600 hover:text-amber-700 flex items-center gap-1 uppercase tracking-wider"
              >
                <span>Leer guía completa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
