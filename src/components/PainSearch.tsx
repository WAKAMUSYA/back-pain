'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const painTypes = [
  { label: '朝起きると痛い', icon: '🌅' },
  { label: '前屈で痛い', icon: '🙇‍♂️' },
  { label: '反ると痛い', icon: '🙆‍♀️' },
  { label: '座ると痛い', icon: '🪑' },
  { label: 'スクワット', icon: '🏋️‍♂️' },
  { label: 'デッドリフト', icon: '🏗️' },
  { label: 'スポーツ', icon: '🏃‍♂️' },
];

export default function PainSearch() {
  return (
    <section className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-6 flex items-center justify-center gap-3">
            <Search className="text-sky-500" size={32} />
            痛みから探す
          </h3>
          <p className="text-slate-500">当てはまる状況をクリックしてください。</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {painTypes.map((type, i) => (
            <motion.button
              key={type.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -5, boxShadow: '0 10px 20px -10px rgba(0,0,0,0.1)' }}
              className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-sky-200 transition-all text-center flex flex-col items-center gap-4 group"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">{type.icon}</span>
              <span className="text-sm font-bold text-slate-700 group-hover:text-sky-600 transition-colors leading-tight">
                {type.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
