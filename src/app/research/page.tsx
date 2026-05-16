import { Lightbulb, Search, MessageSquare, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const logs = [
  {
    title: '腰痛は恐怖によって増幅されるのか？',
    category: '神経科学',
    date: '2024.03.15',
    summary: '脳内での痛み処理と情動の関係について。',
  },
  {
    title: '呼吸と腰痛の関係',
    category: 'バイオメカニクス',
    date: '2024.03.10',
    summary: '腹圧のコントロールが腰椎の安定性に与える影響。',
  },
  {
    title: 'MRIと痛みは一致するのか？',
    category: '臨床学',
    date: '2024.03.05',
    summary: '画像上の異常があっても痛くない人がいるのはなぜか。',
  },
  {
    title: '痛みの閾値を下げる要因',
    category: 'ライフスタイル',
    date: '2024.02.28',
    summary: '睡眠、ストレス、栄養が痛みの感じ方にどう影響するか。',
  },
];

export default function ResearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-500 mb-6 uppercase tracking-wider">
            <Lightbulb size={14} />
            Research Notes
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 italic">復帰への探究</h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            定説を疑い、理論と実践の間にある「真実」を探究するブログ形式のログ。
            「治す」のその先へ行くための、日々の仮説と検証の記録です。
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="仮説を検索..."
              className="pl-10 pr-6 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:border-sky-500 transition-all text-sm w-64"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {logs.map((log) => (
          <Link key={log.title} href="#" className="group">
            <article className="border-b border-slate-100 pb-12 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-slate-400">{log.date}</span>
                <span className="px-3 py-1 bg-slate-50 rounded-full text-[10px] font-bold text-slate-500 uppercase">
                  {log.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-sky-600 transition-colors leading-snug">
                {log.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                {log.summary}
              </p>
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><MessageSquare size={14} /> 12 Comments</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="mt-20 p-12 bg-sky-50 rounded-[3rem] text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">探究は続きます。</h3>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto italic">
          「なぜ？」という問いが、身体を自由にする第一歩になります。
        </p>
        <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all">
          研究ログをもっと見る
        </button>
      </div>
    </div>
  );
}
