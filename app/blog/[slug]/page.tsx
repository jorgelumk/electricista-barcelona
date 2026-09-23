import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, AlertTriangle, ArrowRight, Clock, Calendar, User, MessageCircle, HelpCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';
import ShareButtons from '@/components/ShareButtons';
import { BLOG_POSTS, getBlogPostBySlug, getRelatedPosts } from '@/lib/blog';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.description,
    keywords: [post.keyword, 'electricista barcelona', 'instalaciones electricas barcelona'],
    alternates: {
      canonical: `https://electricistasenbarcelona.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.description,
      url: `https://electricistasenbarcelona.com/blog/${post.slug}`,
      siteName: 'Electricistas Barcelona',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 675,
          alt: post.alt,
        },
      ],
      locale: 'es_ES',
      type: 'article',
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.relatedSlugs);

  // FAQPage JSON-LD schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* FAQPage JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 text-slate-800 leading-relaxed">
        <Breadcrumbs
          currentPageTitle={post.title}
          currentPageUrl={`https://electricistasenbarcelona.com/blog/${post.slug}`}
        />

        {/* ARTICLE HEADER */}
        <header className="space-y-4 border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-amber-500/10 text-amber-600 border border-amber-500/30 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-500" /> {post.readTime}
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
              <Calendar className="w-3.5 h-3.5 text-amber-500" /> {post.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="space-y-3">
            {post.intro.map((paragraph, idx) => (
              <p key={idx} className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-2 text-xs text-slate-500">
            <User className="w-4 h-4 text-amber-500" />
            <span>Por <strong>{post.author}</strong></span>
          </div>
        </header>

        {/* FEATURED MAIN IMAGE */}
        <div className="space-y-2">
          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900">
            <Image
              src={post.image}
              alt={post.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xs text-slate-500 italic text-center">
            {post.alt}
          </p>
        </div>

        {/* MANDATORY COMMERCIAL LINK IN FIRST THIRD */}
        <div className="bg-amber-500/10 border-l-4 border-amber-500 p-5 sm:p-6 rounded-r-2xl space-y-2 shadow-sm">
          <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            {post.commercialCallout.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {post.commercialCallout.text}{' '}
            <Link href={post.commercialCallout.linkHref} className="text-amber-700 font-bold underline hover:text-amber-800">
              {post.commercialCallout.linkText}
            </Link>{' '}
            o contacta directamente con nuestros instaladores autorizados en el teléfono{' '}
            <a href="tel:+34657144186" className="text-amber-700 font-bold underline">
              657 144 186
            </a>.
          </p>
        </div>

        {/* TABLE OF CONTENTS */}
        {post.tableOfContents && post.tableOfContents.length > 0 && (
          <TableOfContents items={post.tableOfContents} />
        )}

        {/* ARTICLE SECTIONS */}
        <div className="space-y-10 text-sm sm:text-base leading-relaxed text-slate-800">
          {post.sections.map((section, sIdx) => (
            <section
              key={sIdx}
              id={section.id}
              className={`space-y-4 ${section.h2 ? 'pt-6 border-t border-slate-200' : ''}`}
            >
              {section.h2 && (
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {section.h2}
                </h2>
              )}

              {section.h3 && (
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight pt-2">
                  {section.h3}
                </h3>
              )}

              {section.paragraphs.map((pText, pIdx) => (
                <p key={pIdx} className="text-slate-700 leading-relaxed">
                  {pText}
                </p>
              ))}
            </section>
          ))}

          {/* FAQ SECTION (WITH VISUAL CARDS & ACCORDION STYLE) */}
          {post.faqs && post.faqs.length > 0 && (
            <section id="preguntas-frecuentes" className="pt-8 border-t border-slate-200 space-y-6">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Preguntas Frecuentes (FAQ)
                </h2>
              </div>

              <div className="space-y-4">
                {post.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-2">
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg flex items-start gap-2">
                      <span className="text-amber-500 font-extrabold shrink-0">P:</span>
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                      <strong className="text-slate-700">R:</strong> {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA FINAL SECTION */}
          <section className="pt-8 border-t border-slate-200">
            <div className="bg-slate-900 text-white p-6 sm:p-10 rounded-3xl space-y-6 shadow-2xl">
              <div className="space-y-2">
                <span className="text-amber-400 font-extrabold text-xs uppercase tracking-wider block">
                  Asistencia Técnica Autorizada
                </span>
                <p className="text-lg sm:text-xl font-bold text-slate-100 leading-snug">
                  {post.ctaText}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href="tel:+34657144186"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg transition-transform active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  Llamar al 657 144 186
                </a>
                <a
                  href="https://wa.me/34657144186"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg transition-transform active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* SHARE BUTTONS */}
        <ShareButtons
          title={post.title}
          url={`https://electricistasenbarcelona.com/blog/${post.slug}`}
        />

        {/* RELATED POSTS SECTION */}
        {relatedPosts.length > 0 && (
          <section className="pt-8 border-t border-slate-200 space-y-6">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Artículos Relacionados que te pueden interesar
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.slug}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
                >
                  <div className="relative h-44 w-full bg-slate-900">
                    <Image
                      src={rel.image}
                      alt={rel.alt || rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="text-[10px] font-extrabold text-slate-950 bg-amber-400 px-2.5 py-0.5 rounded-full">
                        {rel.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2 flex-grow flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-amber-600 transition-colors leading-snug">
                        <Link href={`/blog/${rel.slug}/`}>{rel.title}</Link>
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2">
                        {rel.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400 font-medium">{rel.readTime}</span>
                      <Link
                        href={`/blog/${rel.slug}/`}
                        className="text-amber-600 font-extrabold text-xs flex items-center gap-1"
                      >
                        Leer <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FORM SECTION AT END */}
        <section className="pt-8">
          <ContactForm
            paginaOrigen={`Post Blog - ${post.title}`}
            title="¿Tienes una Consulta o Avería Eléctrica?"
            subtitle="Déjanos tus datos o llámanos. Te atendemos de inmediato en Barcelona."
          />
        </section>
      </div>
    </>
  );
}
