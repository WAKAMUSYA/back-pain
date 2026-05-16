import { Activity, Trophy, Dumbbell, Zap } from 'lucide-react';
import AthleteList from '@/components/AthleteList';
import RelatedNotes from '@/components/RelatedNotes';

const athleteSections = [
  {
    title: 'BIG3への復帰',
    iconName: 'Dumbbell',
    items: [
      { id: 'squat', title: 'スクワットと腰痛', description: 'ボトムでの違和感から脱却する。' },
      { id: 'deadlift', title: 'デッドリフト再開', description: '高重量トレーニングへの復帰戦略。' },
      { id: 'bench', title: 'ベンチプレスのブリッジ', description: '腰への負担を減らすアーチの作り方。' },
    ],
  },
  {
    title: '競技パフォーマンス',
    iconName: 'Trophy',
    items: [
      { id: 'jump', title: 'ジャンプ動作の着地', description: '衝撃を吸収する体幹の連動。' },
      { id: 'dash', title: 'ダッシュと切り返し', description: '回旋動作での腰の安定性。' },
      { id: 'running', title: 'ランニング再開', description: '着地衝撃に負けない走りを作る。' },
      { id: 'golf', title: 'ゴルフのスイング', description: '捻転動作での腰への負担を減らす。' },
    ],
  },
  {
    title: 'スポーツ医科学・トレーニング',
    iconName: 'Activity',
    items: [
      { id: 'eccentric', title: 'エキセントリック収縮', description: '減速動作で腰が壊れるメカニズムと対策。' },
      { id: 'valsalva', title: 'バルサルバ法と限界重量', description: '高重量を挙げる呼吸法とIAPの使い分け。' },
      { id: 'kinetic-chain', title: 'キネティックチェーン（運動連鎖）', description: '足首から股関節、腰への力の伝達エラーを直す。' },
    ],
  },
];

export default function AthletePage() {
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

        <AthleteList sections={athleteSections} />

        <RelatedNotes />
      </div>
    </div>
  );
}
