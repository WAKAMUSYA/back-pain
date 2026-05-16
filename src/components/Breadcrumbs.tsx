import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 overflow-x-auto whitespace-nowrap pb-2 md:pb-0">
      <Link href="/" className="hover:text-sky-600 transition-colors flex items-center gap-1">
        <Home size={14} />
        TOP
      </Link>
      {items.map((item, i) => (
        <div key={item.label} className="flex items-center gap-2">
          <ChevronRight size={12} className="shrink-0" />
          {item.href ? (
            <Link href={item.href} className="hover:text-sky-600 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-800">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
