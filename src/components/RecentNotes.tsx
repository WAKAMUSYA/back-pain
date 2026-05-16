import Link from 'next/link';
import { PenTool, ChevronRight } from 'lucide-react';
import { getSortedNotesData } from '@/lib/notes';

export default function RecentNotes() {
  const allNotes = getSortedNotesData();
  // 最新の3件だけを取得（今回はファイル名順などに依存しますが、日付を持たせていないので上から3つとします）
  const recentNotes = allNotes.slice(0, 3);

  if (recentNotes.length === 0) return null;

  return (
    <section className="section-spacing bg-slate-50 border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <PenTool className="text-sky-500" />
              研究ノート
            </h3>
            <p className="text-slate-500">
              現場のトレーナー視点で、腰痛と身体の最新の話題を探究します。
            </p>
          </div>
          <Link href="/notes" className="text-sky-600 font-bold hover:text-sky-700 transition-colors flex items-center gap-1 shrink-0">
            すべてのノートを見る <ChevronRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {recentNotes.map((note) => (
            <Link
              key={note.id}
              href={`/notes/${note.id}`}
              className="group bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/5 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex-grow">
                <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-sky-600 transition-colors">
                  {note.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                  {note.excerpt}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-sky-50 group-hover:text-sky-600 transition-all shrink-0 hidden md:flex">
                <ChevronRight size={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
