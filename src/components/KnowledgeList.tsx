'use client';

import { useState } from 'react';
import { Book, ChevronRight, Search } from 'lucide-react';
import Link from 'next/link';

interface Item {
  id: string;
  title: string;
  summary: string;
}

interface Category {
  title: string;
  items: Item[];
}

export default function KnowledgeList({ categories }: { categories: Category[] }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.map(cat => ({
    ...cat,
    items: cat.items.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

  return (
    <>
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
            <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
              探究のポイント
            </h4>
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
    </>
  );
}
