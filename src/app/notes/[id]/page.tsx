import { getNoteData, getSortedNotesData } from '@/lib/notes';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import Breadcrumbs from '@/components/Breadcrumbs';

export async function generateStaticParams() {
  const notes = getSortedNotesData();
  return notes.map((note) => ({
    id: note.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const noteData = getNoteData(id);
  
  if (!noteData) {
    return { title: 'Note Not Found' };
  }

  return {
    title: `${noteData.title} | 研究ノート`,
  };
}

export default async function NotePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const noteData = getNoteData(id);

  if (!noteData) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <Breadcrumbs
          items={[
            { label: '研究ノート', href: '/notes' },
            { label: noteData.title },
          ]}
        />

        <article className="mt-12">
          <header className="mb-12">
            <span className="inline-block px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">
              Research Note
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              {noteData.title}
            </h1>
          </header>

          <div className="markdown-content">
            <ReactMarkdown
              components={{
                h2: ({node, ...props}) => (
                  <h2 className="text-2xl font-bold text-slate-800 mt-16 mb-6 pb-4 border-b border-slate-100 flex items-center gap-2" {...props}>
                    <span className="w-1.5 h-6 bg-sky-500 rounded-full inline-block" />
                    {props.children}
                  </h2>
                ),
                h3: ({node, ...props}) => <h3 className="text-xl font-bold text-slate-800 mt-10 mb-4" {...props} />,
                p: ({node, ...props}) => {
                  const children = String(props.children);
                  // Highlight checklist items
                  if (children.startsWith('□')) {
                    return (
                      <div className="bg-slate-50 p-6 rounded-2xl mb-6 border border-slate-100">
                        <p className="text-slate-700 leading-relaxed whitespace-pre-wrap m-0 font-medium">{props.children}</p>
                      </div>
                    );
                  }
                  return <p className="text-slate-600 leading-relaxed mb-8 whitespace-pre-wrap" {...props} />;
                },
                ul: ({node, ...props}) => <ul className="space-y-3 mb-8" {...props} />,
                li: ({node, ...props}) => (
                  <li className="flex items-start gap-2 text-slate-600">
                    <span className="text-sky-500 font-bold mt-0.5">•</span>
                    <span>{props.children}</span>
                  </li>
                ),
              }}
            >
              {noteData.content}
            </ReactMarkdown>
          </div>
        </article>

        <div className="mt-20 pt-10 border-t border-slate-100">
          <Link href="/notes" className="text-sky-600 font-bold hover:underline flex items-center gap-2">
            ← 研究ノート一覧へ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
