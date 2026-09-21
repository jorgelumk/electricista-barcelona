import { ListOrdered } from 'lucide-react';

export interface TocItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-2xl border border-slate-800 my-8 shadow-xl">
      <div className="flex items-center gap-2 font-black text-base text-amber-400 border-b border-slate-800 pb-3 mb-4">
        <ListOrdered className="w-5 h-5 text-amber-400" />
        <span>Tabla de Contenidos del Artículo</span>
      </div>
      <nav>
        <ol className="space-y-2 text-xs sm:text-sm font-medium">
          {items.map((item, idx) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="flex items-start gap-2 text-slate-300 hover:text-amber-400 transition-colors py-0.5"
              >
                <span className="text-amber-500 font-bold shrink-0">{idx + 1}.</span>
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
