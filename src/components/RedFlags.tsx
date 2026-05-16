'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Stethoscope, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const redFlags = [
  { title: '排尿・排便の異常', description: '尿が出にくい、便失禁がある、股間の感覚が麻痺している（サドル麻痺）。' },
  { title: '安静時・夜間の激痛', description: 'どんな姿勢をとっても痛みが変わらない、夜中に痛みで目が覚める。' },
  { title: '進行する神経症状', description: '足に力が入らない（脱力）、感覚が全くない、しびれが急速に悪化している。' },
  { title: 'その他の全身症状', description: '原因不明の発熱、急激な体重減少、がんの既往歴、強い打撲や転落後の痛み。' },
];

export default function RedFlags() {
  return (
    <section id="red-flags" className="section-spacing bg-rose-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-rose-200" />
      
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-100 rounded-lg text-xs font-bold text-rose-600 mb-6 uppercase tracking-wider">
              <AlertTriangle size={14} />
              Red Flags
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              まず最初に、<br />
              病院へ行くべき症状
            </h3>
            <p className="text-slate-600 leading-relaxed mb-8 text-sm">
              腰痛の多くは時間とともに改善しますが、稀に重大な疾患が隠れている場合があります。
              以下の症状（レッドフラッグ）に一つでも当てはまる場合は、自己判断せず、すぐに医療機関を受診してください。
            </p>
            <div className="p-6 bg-white rounded-2xl border border-rose-100 shadow-sm">
              <div className="flex items-center gap-3 text-rose-600 font-bold mb-3">
                <Stethoscope size={20} />
                <span>専門医を受診ください</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                整形外科、または必要に応じて大学病院等の精密検査が受けられる機関への相談を強く推奨します。
              </p>
            </div>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {redFlags.map((flag, i) => (
              <motion.div
                key={flag.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-500 rounded-full" />
                  {flag.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {flag.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-slate-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center shrink-0">
              <AlertTriangle className="text-amber-400" size={24} />
            </div>
            <div>
              <h4 className="font-bold mb-1">免責事項</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                当サイトはトレーナーとしての経験と知見に基づいた情報提供を目的としており、医学的診断や治療を代替するものではありません。
              </p>
            </div>
          </div>
          <Link href="/disclaimer" className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold text-sm hover:bg-slate-100 transition-all shrink-0 flex items-center gap-2">
            免責事項を詳しく読む
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
