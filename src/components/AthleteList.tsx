'use client';

import { useState } from 'react';
import { Search, ChevronRight, Dumbbell, Trophy, Activity } from 'lucide-react';
import Link from 'next/link';

const iconMap = {
  Dumbbell,
  Trophy,
  Activity,
};

interface Item {
  id: string;
  title: string;
  description: string;
}

interface Section {
  title: string;
  iconName: string;
  items: Item[];
}

export default function AthleteList({ sections }: { sections: Section[] }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = sections.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <>
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
          filteredSections.map((section) => {
            const Icon = iconMap[section.iconName as keyof typeof iconMap] || Activity;
            return (
              <div key={section.title}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-sky-500">
                    <Icon size={24} />
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
            );
          })
        ) : (
          <div className="col-span-full text-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-200">
            <p className="text-slate-400 font-medium">該当するガイドが見つかりませんでした。</p>
          </div>
        )}
      </div>
    </>
  );
}
