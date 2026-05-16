'use client';

import { motion } from 'framer-motion';
import { ChevronRight, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32 bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-slate-50/50 rounded-bl-[10rem]" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-sky-600 uppercase bg-sky-50 rounded-full">
              <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
              Recovery from Back Pain
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              腰痛を恐れず、<br />
              また動ける身体を<br />
              自ら探究する。
            </h2>

            <div className="space-y-6 text-lg text-slate-500 leading-relaxed mb-12 max-w-xl text-balance">
              <p>
                僕は3度、動けなくなるレベルの腰痛を経験しました。
              </p>
              <p>
                完全に痛みをゼロにすることだけではなく、腰痛を正しく理解し、自分で調整し、また自由に動ける身体を目指すプロセスを共有します。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/knowledge" className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-2 group">
                腰痛を学ぶ
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/recovery" className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:border-slate-400 transition-all flex items-center justify-center gap-2">
                復帰の歩み
              </Link>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-16 flex items-center gap-3 text-slate-400 text-sm font-medium"
            >
              <div className="w-8 h-px bg-slate-200" />
              SCROLL DOWN
              <ArrowDown size={14} className="animate-bounce" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl shadow-sky-900/10 border-8 border-white">
              <Image
                src="/images/hero.png"
                alt="Back Pain Recovery Movement"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>
            
            {/* Floating stats or labels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500 font-bold text-xl">
                  3
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Experience</p>
                  <p className="text-sm font-bold text-slate-800">重度腰痛からの復帰回数</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
