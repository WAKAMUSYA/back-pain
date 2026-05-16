import Hero from '@/components/Hero';
import RedFlags from '@/components/RedFlags';
import PainSearch from '@/components/PainSearch';
import TargetSelection from '@/components/Classification';
import SelfCheck from '@/components/SelfCheck';
import RecentNotes from '@/components/RecentNotes';
import FAQ from '@/components/FAQ';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      <RedFlags />
      
      <PainSearch />
      
      <TargetSelection />
      
      <SelfCheck />

      <RecentNotes />
      
      <FAQ />
      
      {/* Contact CTA */}
      <section className="section-spacing bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 via-emerald-500 to-sky-500" />
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">「治す」のその先を、一緒に考えましょう。</h3>
          <p className="text-slate-400 mb-12 text-lg md:text-xl leading-relaxed">
            腰痛は敵ではなく、身体からのメッセージかもしれません。<br />
            まずは理解することから始めてみませんか。
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/about" className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all shadow-lg">
              当サイトについて詳しく
            </Link>
            <Link href="/athlete" className="px-10 py-5 bg-slate-800 text-white border border-slate-700 rounded-2xl font-bold text-lg hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
              アスリート復帰ガイド
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
