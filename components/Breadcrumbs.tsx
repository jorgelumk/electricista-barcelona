import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/schema';

export interface BreadcrumbItem {
  name?: string;
  label?: string;
  url?: string;
  href?: string;
}

export interface BreadcrumbsProps {
  currentPageTitle?: string;
  currentPageUrl?: string;
  items?: BreadcrumbItem[];
  dark?: boolean;
}

export default function Breadcrumbs({ currentPageTitle, currentPageUrl, items, dark = true }: BreadcrumbsProps) {
  let breadcrumbItems: { name: string; url: string }[] = [];

  if (items && items.length > 0) {
    breadcrumbItems = items.map((it, idx) => ({
      name: it.name || it.label || `Página ${idx + 1}`,
      url: it.url || (it.href ? `https://electricistasenbarcelona.com${it.href}` : 'https://electricistasenbarcelona.com')
    }));
  } else {
    breadcrumbItems = [
      { name: currentPageTitle || 'Página', url: currentPageUrl || 'https://electricistasenbarcelona.com' }
    ];
  }

  const fullBreadcrumbsForSchema = [
    { name: 'Inicio', url: 'https://electricistasenbarcelona.com' },
    ...breadcrumbItems
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(fullBreadcrumbsForSchema);

  return (
    <nav
      aria-label="Breadcrumb"
      className={`py-1.5 px-3 rounded-full text-xs transition-colors inline-flex max-w-full mb-4 ${
        dark
          ? 'bg-slate-800/80 border border-slate-700/80 text-slate-300 backdrop-blur-sm'
          : 'bg-slate-100 border border-slate-200 text-slate-600'
      }`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ol className="flex items-center gap-1.5 flex-wrap">
        <li>
          <Link
            href="/"
            className={`flex items-center gap-1 font-medium transition-colors ${
              dark ? 'hover:text-amber-400 text-slate-300' : 'hover:text-amber-600 text-slate-600'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Inicio</span>
          </Link>
        </li>
        {breadcrumbItems.map((item, idx) => (
          <li key={idx} className="flex items-center gap-1.5">
            <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${dark ? 'text-slate-500' : 'text-slate-400'}`} />
            {idx === breadcrumbItems.length - 1 ? (
              <span className={`font-semibold truncate max-w-[220px] sm:max-w-none ${dark ? 'text-white' : 'text-slate-900'}`}>
                {item.name}
              </span>
            ) : (
              <Link
                href={item.url.replace('https://electricistasenbarcelona.com', '') || '/'}
                className={`font-medium transition-colors ${
                  dark ? 'hover:text-amber-400 text-slate-300' : 'hover:text-amber-600 text-slate-600'
                }`}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
