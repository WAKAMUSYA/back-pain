'use client';

import { useState } from 'react';
import { Book, ChevronRight, Info, Search } from 'lucide-react';
import Link from 'next/link';

const knowledgeCategories = [
  {
    title: '基礎知識',
    items: [
      { id: 'hernia', title: 'ヘルニア＝終わりじゃない', summary: '画像診断の結果と痛みの関係について。' },
      { id: 'fear', title: '腰痛と恐怖の関係', summary: '恐怖回避思考が痛みを増幅させるメカニズム。' },
      { id: 'nerve', title: '神経の感度（中枢性感作）', summary: '慢性化する腰痛の正体は、神経の過敏さ？' },
      { id: 'lifestyle', title: 'ライフスタイルと腰痛', summary: '食事、睡眠、ストレスが痛みに与える影響。' },
      { id: 'biopsychosocial', title: '痛みのBPSモデル', summary: '身体・心理・社会の3つの視点から痛みを解き明かす最新理論。' },
    ],
  },
  {
    title: '生体力学・解剖学',
    items: [
      { id: 'iap', title: 'IAP（腹腔内圧）の真実', summary: '天然のコルセットと呼ばれる「腹圧」の正しい理解と作り方。' },
      { id: 'fascia', title: '筋膜と滑走性', summary: '筋肉のコリだけではない。結合組織の癒着が引き起こす腰痛。' },
    ]
  },
  {
    title: '症状別ガイド',
    items: [
      { id: 'morning', title: '朝起きる時の痛み', summary: 'なぜ朝一番が痛いのか、その原因と対策。' },
      { id: 'sitting', title: '座っている時の痛み', summary: '長時間のデスクワークを乗り切るコツ。' },
      { id: 'bending', title: '前屈した時の痛み', summary: 'お辞儀や床の物を拾う時の鋭い痛み。' },
      { id: 'extension', title: '後屈した時の痛み', summary: '腰を反らした時、立ちっぱなしの痛み。' },
    ],
  },
];

export default function KnowledgePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = knowledgeCategories.map(cat => ({
    ...cat,
    items: cat.items.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-6 flex items-center gap-4">
            <Book className="text-sky-500" size={36} />
            腰痛知識 図鑑
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
            最新の疼痛科学に基づいた腰痛の基礎知識。正しく知ることで、必要以上の恐怖を取り除きます。
          </p>
        </div>
        <div className="relative group w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-sky-500 transition-colors" size={20} />
          <input
            type="text"
            placeholder="図鑑を検索..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/5 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-16">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat) => (
              <div key={cat.title}>
                <h2 className="text-2xl font-bold text-slate-800 mb-8 pb-4 border-b border-slate-100 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-sky-500 rounded-full" />
                  {cat.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {cat.items.map((item) => (
                    <Link
                      key={item.id}
                      href={`/knowledge/${item.id}`}
                      className="group p-6 bg-white border border-slate-100 rounded-2xl hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/5 transition-all"
                    >
                      <h3 className="font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-6">
                        {item.summary}
                      </p>
                      <div className="flex items-center gap-1 text-xs font-bold text-sky-600 uppercase tracking-wider">
                        詳細を見る <ChevronRight size={14} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
              <p className="text-slate-400 font-medium">該当する記事が見わたりませんでした。</p>
            </div>
          )}
        </div>

        <div className="space-y-8">
          <div className="p-8 bg-slate-900 rounded-3xl text-white sticky top-24">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
              <Info size={20} className="text-sky-400" />
              探究のポイント
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              腰痛の知識は日々更新されています。古い常識に縛られず、新しい視点を取り入れましょう。
            </p>
            <ul className="space-y-3 text-sm font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-sky-400 rounded-full" />
                構造と痛みは一致しない
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-sky-400 rounded-full" />
                恐怖が痛みを支配する
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-sky-400 rounded-full" />
                動きこそが最高の良薬
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
