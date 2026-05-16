import { getSortedNotesData } from '@/lib/notes';
import Link from 'next/link';
import { PenTool, ChevronRight } from 'lucide-react';

export const metadata = {
  title: '研究ノート | 腰痛からの復帰を目指す',
  description: '現場のトレーナー視点で腰痛について深く探究するコラム・ノート。',
};

export default function NotesPage() {
  const notes = getSortedNotesData();

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center">
              <PenTool size={24} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              研究ノート
            </h1>
          </div>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
            腰痛に正解はありません。<br />
            最新の研究と現場での経験を交えながら、身体とのより良い付き合い方を探究していくコラムです。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {notes.map((note) => (
            <Link
              key={note.id}
              href={`/notes/${note.id}`}
              className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-500/5 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex-grow">
                <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors">
                  {note.title}
                </h2>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {note.excerpt}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-sky-50 group-hover:text-sky-600 transition-all shrink-0">
                <ChevronRight size={20} />
              </div>
            </Link>
          ))}

          {notes.length === 0 && (
            <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-200">
              <p className="text-slate-400 font-medium">現在、公開されているノートはありません。</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
