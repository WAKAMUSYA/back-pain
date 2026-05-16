'use client';

import { useState } from 'react';
import { Activity, Trophy, Dumbbell, Zap, Search, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const athleteSections = [
  {
    title: 'BIG3への復帰',
    icon: Dumbbell,
    items: [
      { id: 'squat', title: 'スクワットと腰痛', description: 'ボトムでの違和感から脱却する。' },
      { id: 'deadlift', title: 'デッドリフト再開', description: '高重量トレーニングへの復帰戦略。' },
      { id: 'bench', title: 'ベンチプレスのブリッジ', description: '腰への負担を減らすアーチの作り方。' },
    ],
  },
  {
    title: '競技パフォーマンス',
    icon: Trophy,
    items: [
      { id: 'jump', title: 'ジャンプ動作の着地', description: '衝撃を吸収する体幹の連動。' },
      { id: 'dash', title: 'ダッシュと切り返し', description: '回旋動作での腰の安定性。' },
      { id: 'running', title: 'ランニング再開', description: '着地衝撃に負けない走りを作る。' },
      { id: 'golf', title: 'ゴルフのスイング', description: '捻転動作での腰への負担を減らす。' },
    ],
  },
  {
    title: 'スポーツ医科学・トレーニング',
    icon: Activity,
    items: [
      { id: 'eccentric', title: 'エキセントリック収縮', description: '減速動作で腰が壊れるメカニズムと対策。' },
      { id: 'valsalva', title: 'バルサルバ法と限界重量', description: '高重量を挙げる呼吸法とIAPの使い分け。' },
      { id: 'kinetic-chain', title: 'キネティックチェーン（運動連鎖）', description: '足首から股関節、腰への力の伝達エラーを直す。' },
    ],
  },
];

export default function AthletePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = athleteSections.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20 bg-slate-900 rounded-[3rem] p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 blur-[100px]" />
          <div className="flex-grow relative z-10">
            <span className="inline-block px-4 py-1.5 bg-sky-500 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
              Athlete & Trainee
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">競技・筋トレへの復帰</h1>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              「ただ痛くない」だけでは足りない。高い負荷に耐え、パフォーマンスを発揮するための復帰戦略。
            </p>
          </div>
          <div className="w-48 h-48 bg-white/5 rounded-full flex items-center justify-center border border-white/10 shrink-0">
            <Zap size={64} className="text-sky-400" />
          </div>
        </div>

        <div className="mb-12 flex justify-end">
          <div className="relative group w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-sky-500 transition-colors" size={20} />
            <input
              type="text"
              placeholder="競技別ガイドを検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/5 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredSections.length > 0 ? (
            filteredSections.map((section) => (
              <div key={section.title}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-sky-500">
                    <section.icon size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">{section.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <Link
                      key={item.id}
                      href={`/athlete/${item.id}`}
                      className="group flex items-center justify-between p-8 bg-white rounded-3xl border border-slate-100 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-900/5 transition-all"
                    >
                      <div>
                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-sky-600 transition-colors mb-1">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-sm">
                          {item.description}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-sky-50 group-hover:text-sky-500 transition-all">
                        <ChevronRight size={20} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-200">
              <p className="text-slate-400 font-medium">該当するガイドが見つかりませんでした。</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
