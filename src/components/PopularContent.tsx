'use client';

import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, ShieldAlert, Heart } from 'lucide-react';

const contents = [
  {
    title: '僕が3回動けなくなった話',
    tag: '体験記',
    icon: BookOpen,
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    title: '腰痛から筋トレ・スポーツに復帰するまで',
    tag: 'トレーニング',
    icon: TrendingUp,
    color: 'bg-sky-50',
    iconColor: 'text-sky-500',
  },
  {
    title: 'ヘルニア＝終わりじゃない',
    tag: '基礎知識',
    icon: ShieldAlert,
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
  },
  {
    title: '腰痛と恐怖の関係',
    tag: '心理学',
    icon: Heart,
    color: 'bg-rose-50',
    iconColor: 'text-rose-500',
  },
];

export default function PopularContent() {
  return (
    <section className="section-spacing bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">人気コンテンツ</h3>
            <p className="text-slate-500">まず読んでほしい、当サイトの核となる記事です。</p>
          </div>
          <button className="text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors">
            すべての記事を見る
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contents.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0,0,0,0.1)' }}
              className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all flex flex-col h-full cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center ${item.iconColor} mb-6`}>
                <item.icon size={24} />
              </div>
              
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-3">
                {item.tag}
              </span>
              
              <h4 className="text-lg font-bold text-slate-800 leading-snug group-hover:text-sky-600 transition-colors mb-4 flex-grow">
                {item.title}
              </h4>
              
              <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                <span className="text-xs text-slate-400">Read More</span>
                <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-sky-50 group-hover:text-sky-500 transition-all">
                  <TrendingUp size={12} className="rotate-45" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
