import Link from 'next/link';
import { Microscope } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600">
                <Microscope size={20} />
              </div>
              <span className="font-bold text-lg text-slate-800">腰痛からの復帰を目指す</span>
            </Link>
            <p className="text-slate-500 max-w-xs leading-relaxed text-sm">
              腰痛を理解し、自分で調整し、必要以上に恐れず再び動ける身体を目指すための探究ログ。
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-slate-800 mb-6">探究コンテンツ</h3>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="/knowledge" className="hover:text-sky-600 transition-colors">知識図鑑</Link></li>
              <li><Link href="/movements" className="hover:text-sky-600 transition-colors">動作図鑑</Link></li>
              <li><Link href="/athlete" className="hover:text-sky-600 transition-colors">アスリート復帰</Link></li>
              <li><Link href="/notes" className="hover:text-sky-600 transition-colors">研究ノート</Link></li>
              <li><Link href="/glossary" className="hover:text-sky-600 transition-colors">腰痛用語辞典</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-slate-800 mb-6">サイト情報</h3>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="/about" className="hover:text-sky-600 transition-colors">当サイトについて</Link></li>
              <li><Link href="/disclaimer" className="hover:text-sky-600 transition-colors font-medium text-rose-400">免責事項（重要）</Link></li>
              <li><Link href="/privacy" className="hover:text-sky-600 transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="#" className="hover:text-sky-600 transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="max-w-xl">
            <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-wider mb-2">Notice</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              当サイトは、疼痛科学の知見とトレーナーとしての経験に基づいた情報提供を行っています。医学的な診断や治療に代わるものではありません。特定の症状がある場合は、必ず医療機関を受診してください。
            </p>
          </div>
          <p className="text-xs text-slate-400 whitespace-nowrap">
            &copy; {new Date().getFullYear()} 腰痛からの復帰を目指す.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="text-xs text-slate-400 italic">Exploring the science of movement.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
