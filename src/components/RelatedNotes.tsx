import Link from 'next/link';
import { PenTool, ChevronRight } from 'lucide-react';
import { getSortedNotesData } from '@/lib/notes';

interface RelatedNotesProps {
  limit?: number;
  title?: string;
}

export default function RelatedNotes({ limit = 3, title = "併せて読みたい研究ノート" }: RelatedNotesProps) {
  const allNotes = getSortedNotesData();
  const notes = allNotes.slice(0, limit);

  if (notes.length === 0) return null;

  return (
    <section className="mt-20 pt-20 border-t border-slate-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
            <PenTool className="text-sky-500" size={28} />
            {title}
          </h3>
          <p className="text-slate-500 text-sm">
            現場のトレーナー視点で、腰痛と身体の話題を深掘りします。
          </p>
        </div>
        <Link href="/notes" className="text-sky-600 font-bold hover:text-sky-700 transition-colors flex items-center gap-1 text-sm shrink-0">
          すべてのノートを見る <ChevronRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {notes.map((note) => (
          <Link
            key={note.id}
            href={`/notes/${note.id}`}
            className="group bg-white p-6 rounded-[2rem] border border-slate-100 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-500/5 transition-all flex flex-col justify-between h-full"
          >
            <div>
              <h4 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors leading-snug">
                {note.title}
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                {note.excerpt}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span>Read More</span>
              <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-sky-50 group-hover:text-sky-500 transition-all">
                <ChevronRight size={12} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
