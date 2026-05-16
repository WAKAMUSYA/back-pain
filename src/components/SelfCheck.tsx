'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardCheck, ChevronRight, RefreshCcw, AlertCircle, Home, Dumbbell, Clock, Activity, Heart } from 'lucide-react';
import Link from 'next/link';

type Step = 'start' | 'q1_redflags' | 'q2_duration' | 'q3_pattern' | 'q4_fear' | 'q5_goal' | 'result';

interface Answers {
  redflags: boolean;
  duration: 'acute' | 'chronic';
  pattern: 'morning' | 'sitting' | 'moving';
  fear: boolean;
  goal: 'life' | 'sport';
}

export default function SelfCheck() {
  const [step, setStep] = useState<Step>('start');
  const [answers, setAnswers] = useState<Answers>({
    redflags: false,
    duration: 'acute',
    pattern: 'morning',
    fear: false,
    goal: 'life',
  });

  const nextStep = (current: Step, next: Step, data?: Partial<Answers>) => {
    if (data) setAnswers(prev => ({ ...prev, ...data }));
    setStep(next);
  };

  const getResult = () => {
    if (answers.redflags) return {
      title: '至急、医療機関の受診を',
      desc: '足のしびれや排尿障害がある場合、重大な神経圧迫の可能性があります。自己判断せず医師の診察を受けてください。',
      link: '/disclaimer',
      linkText: '免責事項と注意点',
      icon: AlertCircle,
      color: 'bg-rose-100 text-rose-600',
      btnColor: 'bg-rose-600'
    };

    if (answers.fear) return {
      title: '「恐怖回避」の解消から',
      desc: '痛みへの恐怖が、逆に回復を遅らせている可能性があります。まずは脳のパニックを鎮める知識を身につけましょう。',
      link: '/notes/fear',
      linkText: '腰痛と恐怖のノート',
      icon: Heart,
      color: 'bg-indigo-100 text-indigo-600',
      btnColor: 'bg-indigo-600'
    };

    if (answers.goal === 'sport') return {
      title: '「アスリート復帰」ルート',
      desc: '競技やトレーニングへの復帰には、高いレベルの体幹制御と連動性が必要です。実践的な戦略を学びましょう。',
      link: '/notes/sports',
      linkText: 'スポーツ復帰ノート',
      icon: Dumbbell,
      color: 'bg-sky-100 text-sky-600',
      btnColor: 'bg-sky-600'
    };

    if (answers.pattern === 'morning') return {
      title: '「朝の不調」改善ルート',
      desc: '朝一番の痛みは、椎間板の水分代謝や血流が関係しています。寝起きの習慣から変えていきましょう。',
      link: '/notes/morning',
      linkText: '朝の腰痛ノート',
      icon: Clock,
      color: 'bg-orange-100 text-orange-600',
      btnColor: 'bg-orange-600'
    };

    if (answers.pattern === 'sitting') return {
      title: '「デスクワーク」改善ルート',
      desc: '長時間の座り姿勢による血流低下が原因かもしれません。姿勢を固定せず、動かす技術を習得しましょう。',
      link: '/notes/sitting',
      linkText: '座り方のノート',
      icon: Home,
      color: 'bg-emerald-100 text-emerald-600',
      btnColor: 'bg-emerald-600'
    };

    return {
      title: '「基礎知識」習得ルート',
      desc: 'まずは腰痛の一般的な正体を知り、正しく向き合うことから始めましょう。',
      link: '/knowledge',
      linkText: '知識図鑑を見る',
      icon: ClipboardCheck,
      color: 'bg-slate-100 text-slate-600',
      btnColor: 'bg-slate-900'
    };
  };

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  const result = step === 'result' ? getResult() : null;

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

        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 min-h-[500px] flex flex-col justify-center relative overflow-hidden">
          {/* Progress bar */}
          {step !== 'start' && step !== 'result' && (
            <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-200">
              <motion.div 
                className="h-full bg-sky-500"
                initial={{ width: 0 }}
                animate={{ 
                  width: `${(
                    ['q1_redflags', 'q2_duration', 'q3_pattern', 'q4_fear', 'q5_goal'].indexOf(step) + 1
                  ) * 20}%` 
                }}
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            {step === 'start' && (
              <motion.div key="start" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="text-center">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-sky-500 mx-auto mb-8 shadow-sm">
                  <RefreshCcw size={40} />
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-6">チェックを始めましょう</h4>
                <p className="text-slate-500 mb-10 max-w-md mx-auto">
                  5つの質問に答えるだけで、今のあなたに必要な知識とアクションが分かります。
                </p>
                <button
                  onClick={() => setStep('q1_redflags')}
                  className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg"
                >
                  開始する
                </button>
              </motion.div>
            )}

            {step === 'q1_redflags' && (
              <motion.div key="q1" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="text-center">
                <span className="text-xs font-bold text-sky-500 uppercase tracking-widest mb-4 block">Question 1 / 5</span>
                <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-10">
                  足のしびれ、麻痺、排尿の異常などはありますか？
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                  <button onClick={() => nextStep('q1_redflags', 'result', { redflags: true })} className="p-6 bg-white border border-rose-100 rounded-2xl hover:border-rose-300 hover:bg-rose-50 transition-all text-left flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform">
                      <AlertCircle size={24} />
                    </div>
                    <span className="font-bold text-slate-700">はい、あります</span>
                  </button>
                  <button onClick={() => nextStep('q1_redflags', 'q2_duration', { redflags: false })} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-sky-300 hover:bg-sky-50 transition-all text-left flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center text-sky-500 group-hover:scale-110 transition-transform">
                      <ChevronRight size={24} />
                    </div>
                    <span className="font-bold text-slate-700">いいえ、ありません</span>
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'q2_duration' && (
              <motion.div key="q2" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="text-center">
                <span className="text-xs font-bold text-sky-500 uppercase tracking-widest mb-4 block">Question 2 / 5</span>
                <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-10">
                  その痛みはいつから続いていますか？
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                  <button onClick={() => nextStep('q2_duration', 'q3_pattern', { duration: 'acute' })} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-sky-300 hover:bg-sky-50 transition-all text-left flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform">
                      <Clock size={24} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-700 block">最近（1ヶ月以内）</span>
                      <span className="text-[10px] text-slate-400">急に痛くなった・ぎっくり腰など</span>
                    </div>
                  </button>
                  <button onClick={() => nextStep('q2_duration', 'q3_pattern', { duration: 'chronic' })} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-sky-300 hover:bg-sky-50 transition-all text-left flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform">
                      <RefreshCcw size={24} />
                    </div>
                    <div>
                      <span className="font-bold text-slate-700 block">ずっと（3ヶ月以上）</span>
                      <span className="text-[10px] text-slate-400">良くなったり悪くなったりを繰り返す</span>
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'q3_pattern' && (
              <motion.div key="q3" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="text-center">
                <span className="text-xs font-bold text-sky-500 uppercase tracking-widest mb-4 block">Question 3 / 5</span>
                <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-10">
                  一番つらい、または不安な状況はどれですか？
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  <button onClick={() => nextStep('q3_pattern', 'q4_fear', { pattern: 'morning' })} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-sky-300 hover:bg-sky-50 transition-all flex flex-col items-center gap-4 group">
                    <Clock size={32} className="text-slate-300 group-hover:text-sky-500" />
                    <span className="font-bold text-slate-700 text-sm">朝、起きる時</span>
                  </button>
                  <button onClick={() => nextStep('q3_pattern', 'q4_fear', { pattern: 'sitting' })} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-sky-300 hover:bg-sky-50 transition-all flex flex-col items-center gap-4 group">
                    <Home size={32} className="text-slate-300 group-hover:text-sky-500" />
                    <span className="font-bold text-slate-700 text-sm">座っている時</span>
                  </button>
                  <button onClick={() => nextStep('q3_pattern', 'q4_fear', { pattern: 'moving' })} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-sky-300 hover:bg-sky-50 transition-all flex flex-col items-center gap-4 group">
                    <Activity size={32} className="text-slate-300 group-hover:text-sky-500" />
                    <span className="font-bold text-slate-700 text-sm">動いた時</span>
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'q4_fear' && (
              <motion.div key="q4" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="text-center">
                <span className="text-xs font-bold text-sky-500 uppercase tracking-widest mb-4 block">Question 4 / 5</span>
                <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-10">
                  「動くと腰が壊れるのではないか」という恐怖がありますか？
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                  <button onClick={() => nextStep('q4_fear', 'q5_goal', { fear: true })} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-sky-300 hover:bg-sky-50 transition-all text-left flex items-center gap-4 group">
                    <Heart size={24} className="text-rose-400" />
                    <span className="font-bold text-slate-700">はい、怖いです</span>
                  </button>
                  <button onClick={() => nextStep('q4_fear', 'q5_goal', { fear: false })} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-sky-300 hover:bg-sky-50 transition-all text-left flex items-center gap-4 group">
                    <Activity size={24} className="text-sky-400" />
                    <span className="font-bold text-slate-700">いいえ、それほどでもない</span>
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'q5_goal' && (
              <motion.div key="q5" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="text-center">
                <span className="text-xs font-bold text-sky-500 uppercase tracking-widest mb-4 block">Question 5 / 5</span>
                <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-10">
                  最終的にどのような状態を目指したいですか？
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                  <button onClick={() => nextStep('q5_goal', 'result', { goal: 'life' })} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-sky-300 hover:bg-sky-50 transition-all text-left flex items-center gap-4 group">
                    <Home size={24} className="text-emerald-500" />
                    <div>
                      <span className="font-bold text-slate-700 block">日常生活の安定</span>
                      <span className="text-[10px] text-slate-400">不安なく日常を送りたい</span>
                    </div>
                  </button>
                  <button onClick={() => nextStep('q5_goal', 'result', { goal: 'sport' })} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-sky-300 hover:bg-sky-50 transition-all text-left flex items-center gap-4 group">
                    <Dumbbell size={24} className="text-sky-500" />
                    <div>
                      <span className="font-bold text-slate-700 block">競技・筋トレへの復帰</span>
                      <span className="text-[10px] text-slate-400">全力でスポーツを楽しみたい</span>
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {step === 'result' && result && (
              <motion.div key="result" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="text-center">
                <div className={`w-16 h-16 ${result.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <result.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-4">{result.title}</h4>
                <p className="text-slate-500 mb-10 max-w-md mx-auto leading-relaxed">
                  {result.desc}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button onClick={() => setStep('start')} className="px-8 py-4 text-slate-400 font-bold hover:text-slate-600 transition-colors order-2 sm:order-1">
                    やり直す
                  </button>
                  <Link href={result.link} className={`px-10 py-4 ${result.btnColor} text-white rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg order-1 sm:order-2`}>
                    {result.linkText}
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

