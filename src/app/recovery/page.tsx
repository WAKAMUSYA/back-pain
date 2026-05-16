import { Map, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    phase: 'PHASE 01',
    title: '理解と鎮静',
    description: '痛みの正体を知り、過敏になった神経を落ち着かせる時期。',
    tasks: ['痛みのメカニズムを学ぶ', '恐怖を取り除く', '楽な姿勢を見つける'],
  },
  {
    phase: 'PHASE 02',
    title: '動きの再獲得',
    description: '恐れずに身体を動かし始め、可動域を広げていく時期。',
    tasks: ['日常生活の動作改善', '軽いストレッチ', 'ウォーキング'],
  },
  {
    phase: 'PHASE 03',
    title: '負荷への適応',
    description: '少しずつ負荷をかけ、日常生活や競技に必要な筋力を戻す時期。',
    tasks: ['自体重エクササイズ', '腹圧のコントロール', '段階的な負荷アップ'],
  },
  {
    phase: 'PHASE 04',
    title: '完全復帰・強化',
    description: '元の競技やトレーニングに戻り、再発しない強い身体を作る時期。',
    tasks: ['競技特有の動作', '高負荷トレーニング', '再発予防の習慣化'],
  },
];

export default function RecoveryPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold text-slate-900 mb-6 flex items-center justify-center gap-4">
          <Map className="text-emerald-500" size={36} />
          復帰ロードマップ
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          現在地を確認し、一歩ずつ着実に復帰への階段を登っていきましょう。
        </p>
      </div>

      <div className="space-y-12 relative before:absolute before:left-[19px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-100">
        {steps.map((step, i) => (
          <div key={step.phase} className={`relative flex flex-col md:flex-row gap-8 items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="absolute left-0 md:left-1/2 top-0 w-10 h-10 bg-white border-2 border-emerald-500 rounded-full flex items-center justify-center z-10 -ml-5">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
            </div>
            
            <div className="w-full md:w-1/2 pl-12 md:pl-0">
              <div className={`p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all ${i % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <span className="text-xs font-bold text-emerald-600 tracking-widest mb-2 block">{step.phase}</span>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">{step.title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {step.description}
                </p>
                <div className="space-y-3">
                  {step.tasks.map((task) => (
                    <div key={task} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      {task}
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-slate-50">
                  <Link href="#" className="text-sm font-bold text-slate-400 hover:text-emerald-600 flex items-center gap-1 transition-colors">
                    詳細なガイドを読む <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
