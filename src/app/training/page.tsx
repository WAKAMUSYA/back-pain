import { Dumbbell, PlayCircle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function TrainingPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold text-slate-900 mb-6 flex items-center justify-center gap-4">
          <Dumbbell className="text-slate-900" size={36} />
          実践ガイド
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          痛みを恐れず、身体を正しく使うためのエクササイズとトレーニング。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { title: '呼吸の基本', icon: PlayCircle, duration: '5 min' },
            { title: '骨盤のコントロール', icon: PlayCircle, duration: '8 min' },
            { title: '股関節の可動域', icon: PlayCircle, duration: '12 min' },
            { title: '腹圧トレーニング', icon: PlayCircle, duration: '10 min' },
          ].map((v) => (
            <div key={v.title} className="p-8 bg-white border border-slate-100 rounded-3xl group hover:border-sky-200 transition-all cursor-pointer">
              <v.icon className="text-slate-200 group-hover:text-sky-500 transition-colors mb-6" size={40} />
              <h3 className="font-bold text-xl mb-2">{v.title}</h3>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">{v.duration} Video Guide</span>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100">
            <h3 className="font-bold text-emerald-900 text-xl mb-4 flex items-center gap-2">
              <ShieldCheck size={24} />
              安全のためのルール
            </h3>
            <ul className="space-y-4 text-emerald-700 text-sm leading-relaxed">
              <li className="flex gap-2">
                <span className="font-bold">1.</span>
                「耐えられない痛み」がある場合は中止する
              </li>
              <li className="flex gap-2">
                <span className="font-bold">2.</span>
                翌日の痛みの変化を確認する
              </li>
              <li className="flex gap-2">
                <span className="font-bold">3.</span>
                呼吸を止めない
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
