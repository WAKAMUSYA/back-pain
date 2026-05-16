'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-32 md:pb-40">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-gradient-to-bl from-sky-50 to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-50/40 to-transparent opacity-60" />
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-sky-600 uppercase bg-sky-50 rounded-full">
            Recovery from Back Pain
          </span>
          <h2 className="heading-xl text-slate-900 mb-8 text-balance">
            腰痛を恐れず、<br className="md:hidden" />
            また動ける身体を目指す
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16 space-y-6 text-lg text-slate-600 leading-relaxed text-balance"
        >
          <p>
            僕は3度、動けなくなるレベルの腰痛を経験しました。
          </p>
          <p className="text-base md:text-lg">
            トイレへ行こうと決めてから、<br className="hidden md:inline" />
            ベッドを出るまで30分かかったこともあります。
          </p>
          <p className="text-base md:text-lg font-medium text-slate-800">
            完全に痛みをゼロにすることだけではなく、<br className="hidden md:inline" />
            腰痛を理解し、自分で調整し、また動ける身体を目指しています。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/knowledge" className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2">
            腰痛について知る
            <ChevronRight size={20} />
          </Link>
          <Link href="/recovery" className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:border-slate-400 transition-all flex items-center justify-center gap-2">
            復帰ロードマップを見る
            <ChevronRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
