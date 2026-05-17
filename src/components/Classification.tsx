'use client';

import { motion } from 'framer-motion';
import { User, Activity, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const targetGroups = [
  {
    title: '一般',
    description: '日常生活を取り戻したい方',
    icon: User,
    examples: ['朝起きる', '家事', '抱っこ', 'デスクワーク', '歩行'],
    color: 'bg-emerald-500/20',
    iconColor: 'text-emerald-400',
    textColor: 'text-emerald-400',
    hoverBorder: 'hover:border-emerald-500/50',
    href: '/knowledge',
    image: '/images/common.png',
  },
  {
    title: 'アスリート・トレーニー',
    description: '筋トレや競技へ戻りたい方',
    icon: Activity,
    examples: ['スクワット', 'デッドリフト', 'ジャンプ', '競技復帰'],
    color: 'bg-sky-500/20',
    iconColor: 'text-sky-400',
    textColor: 'text-sky-400',
    hoverBorder: 'hover:border-sky-500/50',
    href: '/athlete',
    image: '/images/athlete.png',
  },
];

export default function TargetSelection() {
  return (
    <section className="section-spacing bg-slate-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">対象選択</h3>
          <p className="text-slate-500">あなたの目的に合わせてコンテンツを切り替えます。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {targetGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative p-10 rounded-3xl border border-slate-800 bg-slate-900 shadow-sm ${group.hoverBorder} transition-colors duration-500 overflow-hidden transform-gpu`}
            >
              {/* 背景画像 */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                  src={group.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* いただいた画像のような黒の半透明オーバーレイ */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500" />
              </div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${group.color} flex items-center justify-center ${group.iconColor} mb-8 transition-transform group-hover:rotate-3 backdrop-blur-sm`}>
                  <group.icon size={32} />
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{group.title}</h4>
                <p className="text-slate-200 mb-8 drop-shadow">{group.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {group.examples.map((ex) => (
                    <span key={ex} className="px-4 py-1.5 rounded-lg bg-white/10 text-white/90 text-sm font-medium backdrop-blur-sm border border-white/10">
                      {ex}
                    </span>
                  ))}
                </div>
                
                <Link href={group.href} className={`inline-flex items-center gap-2 font-bold ${group.textColor} group/btn drop-shadow-md`}>
                  復帰ガイドを見る
                  <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
