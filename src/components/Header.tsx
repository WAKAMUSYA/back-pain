import Link from 'next/link';
import { Microscope } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 group-hover:bg-sky-100 transition-colors">
            <Microscope size={24} />
          </div>
          <div>
            <h1 className="font-bold text-xl tracking-tight text-slate-800">腰痛からの復帰を目指す</h1>
            <p className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">Recovery from Back Pain</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="/knowledge" className="hover:text-sky-600 transition-colors">知識図鑑</Link>
          <Link href="/movements" className="hover:text-sky-600 transition-colors">動作図鑑</Link>
          <Link href="/athlete" className="hover:text-sky-600 transition-colors">アスリート復帰</Link>
          <Link href="/notes" className="hover:text-sky-600 transition-colors">研究ノート</Link>
          <Link href="/glossary" className="hover:text-sky-600 transition-colors">用語辞典</Link>
          <Link href="/#self-check" className="px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-sm">
            セルフチェック
          </Link>
        </nav>
      </div>
    </header>
  );
}
