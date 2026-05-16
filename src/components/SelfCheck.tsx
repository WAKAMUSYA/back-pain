'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardCheck, ChevronRight, RefreshCcw, AlertCircle, Home, Dumbbell } from 'lucide-react';
import Link from 'next/link';

type Step = 'start' | 'redflags' | 'daily_or_sport' | 'result_daily' | 'result_sport';

export default function SelfCheck() {
  const [step, setStep] = useState<Step>('start');

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <section id="self-check" className="section-spacing bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
            <ClipboardCheck className="text-sky-500" />
            セルフチェック
          </h3>
          <p className="text-slate-500 text-balance">
            あなたの現在の状況に合わせた最適な「復帰ルート」を提案します。
          </p>
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step === 'start' && (
              <motion.div
                key="start"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-center"
              >
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-sky-500 mx-auto mb-8 shadow-sm">
                  <RefreshCcw size={40} />
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-6">チェックを始めましょう</h4>
                <p className="text-slate-500 mb-10 max-w-md mx-auto">
                  3つの質問に答えるだけで、あなたに必要な知識とアクションが分かります。
                </p>
                <button
                  onClick={() => setStep('redflags')}
                  className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg"
                >
                  開始する
                </button>
              </motion.div>
            )}

            {step === 'redflags' && (
              <motion.div
                key="redflags"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h4 className="text-xl font-bold text-slate-800 mb-8 text-center">
                  Q1. 足のしびれ、麻痺、排尿の異常などはありますか？
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                  <button
                    onClick={() => {
                      const el = document.getElementById('red-flags');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-6 bg-white border border-rose-100 rounded-2xl hover:border-rose-300 hover:bg-rose-50 transition-all text-left flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform">
                      <AlertCircle size={24} />
                    </div>
                    <span className="font-bold text-slate-700">はい、あります</span>
                  </button>
                  <button
                    onClick={() => setStep('daily_or_sport')}
                    className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-sky-300 hover:bg-sky-50 transition-all text-left flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center text-sky-500 group-hover:scale-110 transition-transform">
                      <ChevronRight size={24} />
                    </div>
                    <span className="font-bold text-slate-700">いいえ、ありません</span>
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'daily_or_sport' && (
              <motion.div
                key="daily_or_sport"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h4 className="text-xl font-bold text-slate-800 mb-8 text-center">
                  Q2. 復帰の最終的な目標はどこにありますか？
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <button
                    onClick={() => setStep('result_daily')}
                    className="p-8 bg-white border border-slate-200 rounded-3xl hover:border-emerald-300 hover:bg-emerald-50 transition-all text-left group"
                  >
                    <Home className="text-emerald-500 mb-4" size={32} />
                    <h5 className="font-bold text-slate-800 mb-2">日常生活の改善</h5>
                    <p className="text-xs text-slate-500">家事、育児、仕事などを快適にこなしたい</p>
                  </button>
                  <button
                    onClick={() => setStep('result_sport')}
                    className="p-8 bg-white border border-slate-200 rounded-3xl hover:border-sky-300 hover:bg-sky-50 transition-all text-left group"
                  >
                    <Dumbbell className="text-sky-500 mb-4" size={32} />
                    <h5 className="font-bold text-slate-800 mb-2">競技・筋トレへの復帰</h5>
                    <p className="text-xs text-slate-500">スクワットやスポーツを全力で楽しみたい</p>
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'result_daily' && (
              <motion.div
                key="result_daily"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-4">「日常生活復帰」ルートへ</h4>
                <p className="text-slate-500 mb-10 max-w-md mx-auto">
                  まずは腰痛のメカニズムを正しく知り、恐怖を取り除くことから始めましょう。
                </p>
                <div className="flex justify-center gap-4">
                  <button onClick={() => setStep('start')} className="px-6 py-4 text-slate-400 font-bold hover:text-slate-600 transition-colors">やり直す</button>
                  <Link href="/knowledge" className="px-10 py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg">図鑑を見る</Link>
                </div>
              </motion.div>
            )}

            {step === 'result_sport' && (
              <motion.div
                key="result_sport"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-center"
              >
                <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Dumbbell size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-4">「アスリート復帰」ルートへ</h4>
                <p className="text-slate-500 mb-10 max-w-md mx-auto">
                  競技特有の動作解析や、高負荷に耐えるための体幹戦略を学びましょう。
                </p>
                <div className="flex justify-center gap-4">
                  <button onClick={() => setStep('start')} className="px-6 py-4 text-slate-400 font-bold hover:text-slate-600 transition-colors">やり直す</button>
                  <Link href="/athlete" className="px-10 py-4 bg-sky-600 text-white rounded-2xl font-bold hover:bg-sky-700 transition-all shadow-lg">ガイドを見る</Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
