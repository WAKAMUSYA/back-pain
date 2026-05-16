'use client';

import { useState } from 'react';
import { PlayCircle, ChevronRight, Search, Activity, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

const movementLevels = [
  {
    level: 'LEVEL 1: リセット & リラックス',
    description: '神経を落ち着かせ、組織の緊張を解くための第一歩。',
    icon: Shield,
    color: 'text-sky-500',
    bg: 'bg-sky-50',
    items: [
      { id: 'breathing', title: '腹式呼吸', summary: '横隔膜を使い、自律神経を整えて痛みの閾値を下げます。' },
      { id: '90-90', title: '90/90 ポジション', summary: '腰椎への負担を最小限にし、深部筋肉をリラックスさせます。' },
      { id: 'childs-pose', title: 'チャイルドポーズ', summary: '背中の緊張を優しく解放するリラックスの基本。' },
      { id: 'hanging', title: 'ぶら下がり', summary: '重力を利用して脊柱を牽引し、圧力を逃がします。' },
    ],
  },
  {
    level: 'LEVEL 2: モビリティ & コントロール',
    description: '固まった筋肉をほぐし、骨盤や背骨を意識的に動かす。',
    icon: Activity,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    items: [
      { id: 'stretching', title: '背伸び・伸展', summary: '座り姿勢で丸まった背骨をリセットする動作。' },
      { id: 'cat-cow', title: 'キャット＆カウ', summary: '脊柱全体の連動性と、骨盤のコントロールを養います。' },
      { id: 'thoracic-rotation', title: '胸椎の回旋', summary: '腰に負担をかけないための、胸の可動域作り。' },
      { id: 'hip-hinge', title: 'ヒンジ動作', summary: '腰ではなく股関節を使って動くための基礎練習。' },
    ],
  },
  {
    level: 'LEVEL 3: スタビリティ & ストレングス',
    description: '負荷に耐えられる強い体幹を作り、再発を予防する。',
    icon: Zap,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    items: [
      { id: 'plank', title: 'プランク', summary: '体幹前面を安定させ、腰の反りすぎを防ぎます。' },
      { id: 'side-plank', title: 'サイドプランク', summary: '側面の安定性を高め、骨盤のブレを抑えます。' },
      { id: 'bird-dog', title: 'バードドッグ', summary: '対角線上の連動を高め、回旋への安定性を作ります。' },
      { id: 'dead-bug', title: 'デッドバグ', summary: '手足を動かしても腹圧を維持する高度なコントロール。' },
    ],
  },
];

export default function MovementsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLevels = movementLevels.map(lvl => ({
    ...lvl,
    items: lvl.items.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(lvl => lvl.items.length > 0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <Breadcrumbs items={[{ label: 'リカバリー動作図鑑' }]} />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-6 flex items-center gap-4">
            <PlayCircle className="text-emerald-500" size={36} />
            リカバリー動作図鑑
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            「今のあなた」に最適な動作を選んでください。無理にレベルを上げる必要はありません。
          </p>
        </div>
        <div className="relative group w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" size={20} />
          <input
            type="text"
            placeholder="動作を検索..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all"
          />
        </div>
      </div>

      <div className="space-y-20">
        {filteredLevels.map((lvl) => (
          <div key={lvl.level}>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 ${lvl.bg} ${lvl.color} rounded-2xl flex items-center justify-center`}>
                  <lvl.icon size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">{lvl.level}</h2>
              </div>
              <p className="text-slate-500 text-sm pl-15">{lvl.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {lvl.items.map((item) => (
                <Link
                  key={item.id}
                  href={`/movements/${item.id}`}
                  className="group p-6 bg-white border border-slate-100 rounded-[2rem] hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all flex flex-col h-full"
                >
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-300 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-all mb-4">
                    <PlayCircle size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6 flex-grow">
                    {item.summary}
                  </p>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 uppercase tracking-widest">
                    詳細 <ChevronRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
