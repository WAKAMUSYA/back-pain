'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Book, Quote } from 'lucide-react';

const notes = [
  {
    title: '腰痛は恐怖によって増幅されるのか？',
    date: '2024.03.15',
    hypothesis: '「また痛くなるかも」という予期不安が、神経の感度を高めているのではないか。',
    category: '心理・神経系',
  },
  {
    title: '呼吸と腰痛の関係',
    date: '2024.03.10',
    hypothesis: '腹圧（IAP）のコントロール不足が、特定の動作での不安定感を招いている仮説。',
    category: 'バイオメカニクス',
  },
  {
    title: 'なぜ同じMRIでも痛みが違う？',
    date: '2024.03.05',
    hypothesis: '構造的な異常（ヘルニア等）と、実際の痛みには乖離がある。その要因は何か。',
    category: '臨床研究',
  },
];

export default function ResearchNotes() {
  return (
    <section className="section-spacing bg-white relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold mb-6">
            <Lightbulb size={16} />
            <span>復帰への探究 / 研究ノート</span>
          </div>
          <h3 className="text-4xl font-bold text-slate-900 mb-6 italic tracking-tight">仮説と探究のログ</h3>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            「治す」のではなく「理解する」。<br />
            日々の探究で見えてきた、腰痛の新しい捉え方を記録しています。
          </p>
        </div>

        <div className="space-y-12">
          {notes.map((note, i) => (
            <motion.div
              key={note.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row gap-8 items-start group"
            >
              <div className="w-full md:w-32 pt-2 flex flex-col items-center">
                <span className="text-sm font-mono text-slate-300 group-hover:text-sky-400 transition-colors">{note.date}</span>
                <div className="hidden md:block w-[1px] h-24 bg-slate-100 mt-4 group-hover:bg-sky-100 transition-colors" />
              </div>
              
              <div className="flex-grow p-8 md:p-10 bg-slate-50/50 rounded-3xl border border-slate-100 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-slate-200/40 group-hover:border-white transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-slate-400 border border-slate-100 uppercase tracking-tighter">
                    {note.category}
                  </span>
                </div>
                
                <h4 className="text-2xl font-bold text-slate-800 mb-6 leading-snug underline decoration-slate-200 underline-offset-8 group-hover:decoration-sky-200 transition-all">
                  {note.title}
                </h4>
                
                <div className="relative pl-8">
                  <Quote size={20} className="absolute left-0 top-0 text-slate-200 group-hover:text-sky-200 transition-colors" />
                  <p className="text-slate-600 leading-relaxed italic">
                    {note.hypothesis}
                  </p>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button className="flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-sky-600 transition-colors">
                    <Book size={16} />
                    ログを読む
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <button className="px-10 py-4 bg-white border border-slate-200 rounded-2xl font-bold text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-all shadow-sm">
            すべての研究ログを表示
          </button>
        </div>
      </div>
    </section>
  );
}
