import Breadcrumbs from '@/components/Breadcrumbs';
import { ShieldCheck, AlertCircle, HelpCircle, Lightbulb, TrendingUp, Dumbbell } from 'lucide-react';
import { notFound } from 'next/navigation';

const articles = {
  squat: {
    title: 'スクワットと腰痛',
    category: 'BIG3への復帰',
    symptoms: 'ボトム付近での鋭い痛み、または立ち上がりでの不安定感。',
    causes: 'バットウィンク（骨盤の後傾）、腹圧の抜け、股関節の可動域不足。',
    confirmation: 'フォームチェックを行い、特定の深さや負荷で痛みが出るか確認する。',
    todo: 'まずは痛みの出ない範囲（ハーフ等）での実施。腹圧の入れ方の再構築（ドローインやブレーシング）。',
    recovery: '徐々に深さを出し、最終的にはフルスクワットでの高重量復帰を目指します。',
    recommendedMovements: [
      { id: 'bird-dog', title: 'バードドッグ', description: '体幹を固定しながら四肢を動かす基礎。' },
      { id: 'hip-hinge', title: 'ヒンジ動作', description: '正しい股関節の折りたたみを習得する。' }
    ]
  },
  deadlift: {
    title: 'デッドリフト再開',
    category: 'BIG3への復帰',
    symptoms: '引き始めやフィニッシュでの腰の違和感。後日の強い張り。',
    causes: '背中の丸まり、バーの軌道が体から離れる、足裏の重心不足。',
    confirmation: 'ルーマニアンデッドリフト等でヒンジ動作ができるか確認。',
    todo: 'ラックプル（高い位置からの開始）や、軽い重量での丁寧なフォーム習得。',
    recovery: '脊柱起立筋だけでなく、ハムストリングスと大臀筋で引く感覚を戻し、安全な高重量トレーニングを目指します。',
    recommendedMovements: [
      { id: 'hip-hinge', title: 'ヒンジ動作', description: '腰を曲げずに股関節主導で動く感覚を体に覚え込ませる。' },
      { id: 'plank', title: 'プランク', description: 'バーベルを引く瞬間に腰椎が曲がらない強さを養う。' }
    ]
  },
  bench: {
    title: 'ベンチプレスのブリッジ',
    category: 'BIG3への復帰',
    symptoms: 'アーチを作った際の腰の詰まり感、または挙上中の鋭い痛み。',
    causes: '腰椎だけで反ろうとしている（胸椎の可動性不足）。足の踏ん張りが腰に逃げている。',
    confirmation: '胸椎の伸展テストと、レッグドライブ時の腰の安定性を確認。',
    todo: '胸椎のモビリティドリル。腰を反らせるのではなく、胸を張る意識への変換。',
    recovery: '安定したブリッジにより、肩の保護と挙上重量アップを両立させます。',
    recommendedMovements: [
      { id: 'thoracic-rotation', title: '胸椎の回旋', description: 'アーチを作るために不可欠な胸の可動域を広げる。' },
      { id: 'cat-cow', title: 'キャット＆カウ', description: '腰椎ではなく胸椎を伸展させるコントロールを学ぶ。' }
    ]
  },
  jump: {
    title: 'ジャンプ動作の着地',
    category: '競技パフォーマンス',
    symptoms: '着地の瞬間に腰に響くような痛み。ジャンプを繰り返すと腰が重くなる。',
    causes: '膝が内側に入る、足首が硬い、体幹のクッション機能（腹圧）の不足。',
    confirmation: 'スクワットジャンプやボックスジャンプでの着地姿勢を確認。',
    todo: '静かな着地（ソフトランディング）の練習。臀部を使った衝撃吸収の習得。',
    recovery: '瞬発的な動作でも腰を守れる強さを獲得し、競技での爆発力を取り戻します。',
    recommendedMovements: [
      { id: 'plank', title: 'プランク', description: '着地時に上体がブレないように体幹を強化する。' },
      { id: 'dead-bug', title: 'デッドバグ', description: '手足が動いても腹圧を維持する高度なコントロール。' }
    ]
  },
  dash: {
    title: 'ダッシュと切り返し',
    category: '競技パフォーマンス',
    symptoms: '急加速や急停止での腰の抜け感。横方向の動きでの痛み。',
    causes: '骨盤の過度な前傾または後傾。回旋動作時の体幹の安定性不足。',
    confirmation: '片脚立ちの安定性、サイドプランクでの側腹部の筋力を確認。',
    todo: '抗回旋トレーニング（パロフプレス等）。減速動作（エキセントリック）の強化。',
    recovery: '多方向への素早い動きに対応できる「ブレない軸」を作り、フィールドへ戻ります。',
    recommendedMovements: [
      { id: 'side-plank', title: 'サイドプランク', description: '横方向の力に対して骨盤を安定させる。' },
      { id: 'bird-dog', title: 'バードドッグ', description: '対角の連動で回旋のブレを防ぐ。' }
    ]
  },
  running: {
    title: 'ランニング再開',
    category: '競技パフォーマンス',
    symptoms: '走り始めて10分ほどで腰が重くなる、着地ごとに響く痛み。',
    causes: '着地衝撃の吸収不足。または、体幹の回旋を腰だけで受けてしまっている。',
    confirmation: 'ピッチ（歩数）が少なすぎないか、上半身がリラックスできているか。',
    todo: 'まずはウォーキングから。徐々にジョギングの時間を増やし、痛みが出ない範囲を広げる。',
    recovery: 'スムーズな重心移動を身につけ、再び風を切って走れる身体を目指します。',
    recommendedMovements: [
      { id: 'side-plank', title: 'サイドプランク', description: '歩行・走行時の骨盤の沈み込みを防ぐ。' },
      { id: 'dead-bug', title: 'デッドバグ', description: '脚の上下動に対して腰椎を安定させる。' }
    ]
  },
  golf: {
    title: 'ゴルフのスイング',
    category: '競技パフォーマンス',
    symptoms: 'スイングのフィニッシュや、長時間のラウンド後の強い張り。',
    causes: '胸椎と股関節の回旋不足を、腰椎の回旋で補っている（腰椎は本来回旋に弱い）。',
    confirmation: 'アドレス時の姿勢（骨盤の向き）と、上半身の捻転可動域を確認。',
    todo: '胸椎の回旋ストレッチ。腹圧を維持した状態でのスイング練習。',
    recovery: '腰に頼らないしなやかなスイングで、飛距離アップと腰痛予防を両立させます。',
    recommendedMovements: [
      { id: 'thoracic-rotation', title: '胸椎の回旋', description: '捻転の主役である胸椎の可動性を引き出す。' },
      { id: 'bird-dog', title: 'バードドッグ', description: '回旋中に体幹の軸をブラさない能力を高める。' }
    ]
  },
  eccentric: {
    title: 'エキセントリック収縮',
    category: 'スポーツ医科学・トレーニング',
    symptoms: 'ジャンプの着地、切り返し、重りを下ろすネガティブ動作時に腰がピキッとする。',
    causes: '筋肉が伸ばされながら力を発揮する「エキセントリック（伸張性）収縮」は、筋肉への微細な損傷や筋膜への負担が最も大きくなります。この減速フェーズで体幹のコントロールが抜けると、負荷がダイレクトに腰椎に掛かります。',
    confirmation: '階段を降りる時や、スクワットでしゃがんでいく局面で恐怖感や不安定感がないか確認します。',
    todo: 'コンセントリック（挙上・加速）だけでなく、ゆっくりとコントロールして下ろす（3〜4秒かけてしゃがむ等）テンポトレーニングを取り入れ、伸張性収縮に対する組織の耐性を高めます。',
    recovery: '「ブレーキをかける力」が強化されることで、あらゆるスポーツ動作での安全域が格段に広がります。',
    recommendedMovements: [
      { id: 'plank', title: 'プランク', description: 'エキセントリックな衝撃に耐えるためのアイソメトリック（等尺性）なベースを作る。' },
      { id: 'hip-hinge', title: 'ヒンジ動作', description: 'ハムストリングスのエキセントリック収縮をコントロールする。' }
    ]
  },
  valsalva: {
    title: 'バルサルバ法と限界重量',
    category: 'スポーツ医科学・トレーニング',
    symptoms: '1RM（最大挙上重量）に挑戦した翌日から数日間、強い腰の痛みが続く。',
    causes: '高重量を挙げる際に、息を完全に止めて力む「バルサルバ法（怒責）」を用いると、一過性に強烈な腹圧と脊柱の固定力を得られますが、挙上後に一気に圧力が抜けた瞬間や、フォームが崩れた際の腰へのダメージが莫大になります。',
    confirmation: '息を止めること（バルサルバ）に頼りすぎていないか？息を「シュー」と吐きながらでも安定して挙上できる重量はどのくらいかを確認します。',
    todo: '普段のトレーニング（70〜80%1RM）では、息を止め切らずに腹圧を維持する「ブレーシング」をマスターします。バルサルバ法は競技の試技など、ここぞという時に限定します。',
    recovery: '呼吸のグラデーション（使い分け）を習得することで、神経系の疲労と腰の怪我を防ぎながら筋力アップが可能です。',
    recommendedMovements: [
      { id: 'breathing', title: '腹式呼吸', description: '息を吐きながらでもお腹の硬さ（IAP）を維持する練習。' },
      { id: 'dead-bug', title: 'デッドバグ', description: '呼吸を止めずに四肢を動かし、ブレーシングを完璧にする。' }
    ]
  },
  'kinetic-chain': {
    title: 'キネティックチェーン（運動連鎖）',
    category: 'スポーツ医科学・トレーニング',
    symptoms: '腰痛だけでなく、過去に足首の捻挫や股関節の怪我の既往歴がある。',
    causes: '足首が硬いとしゃがむ時に膝が前に出すぎ、それを庇うために骨盤が後傾し、結果として腰が丸まって痛む。このように、患部（腰）ではなく、離れた関節の機能不全が「連鎖」して腰にシワ寄せが来ている状態です。',
    confirmation: '足首の背屈（つま先を上げる動き）の左右差、股関節の回旋の左右差など、腰以外の関節がスムーズに動くかを確認します。',
    todo: '腰の治療だけでなく、足首のモビリティドリルや、股関節のストレッチを念入りに行い、全身の連動性（チェーン）を修復します。',
    recovery: 'エラーの根本原因（足や股関節）が解決することで、局所的だった腰の痛みが嘘のように消え去ります。',
    recommendedMovements: [
      { id: '90-90', title: '90/90 ポジション', description: '股関節の連動性をリセットする基礎的な姿勢。' },
      { id: 'thoracic-rotation', title: '胸椎の回旋', description: '胸椎の可動不全による腰へのシワ寄せ（キネティックチェーンの破綻）を防ぐ。' }
    ]
  },
};

import Link from 'next/link';
import { ChevronRight, PlayCircle } from 'lucide-react';
import RelatedNotes from '@/components/RelatedNotes';

export default async function AthleteArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = articles[id as keyof typeof articles] as any;

  if (!article) {
    notFound();
  }

  const sections = [
    { title: '症状', content: article.symptoms, icon: AlertCircle, color: 'text-amber-500', bg: 'bg-amber-50' },
    { title: '考えられる原因', content: article.causes, icon: HelpCircle, color: 'text-sky-500', bg: 'bg-sky-50' },
    { title: '確認', content: article.confirmation, icon: ShieldCheck, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { title: '今できること', content: article.todo, icon: Lightbulb, color: 'text-indigo-500', bg: 'bg-indigo-50' },
    { title: '復帰', content: article.recovery, icon: TrendingUp, color: 'text-rose-500', bg: 'bg-rose-50' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Breadcrumbs
        items={[
          { label: 'アスリート・トレーニー', href: '/athlete' },
          { label: article.title },
        ]}
      />

      <div className="mb-16 flex items-start justify-between gap-6">
        <div>
          <span className="inline-block px-3 py-1 bg-sky-100 rounded-lg text-[10px] font-bold text-sky-600 uppercase tracking-widest mb-4">
            {article.category}
          </span>
          <h1 className="text-4xl font-bold text-slate-900 leading-tight">
            {article.title}
          </h1>
        </div>
        <div className="hidden md:flex w-20 h-20 bg-slate-50 rounded-2xl items-center justify-center text-slate-300 border border-slate-100">
          <Dumbbell size={40} />
        </div>
      </div>

      <div className="space-y-12 mb-20">
        {sections.map((section) => (
          <section key={section.title} className="relative pl-12 md:pl-16">
            <div className={`absolute left-0 top-0 w-10 h-10 md:w-12 md:h-12 ${section.bg} ${section.color} rounded-2xl flex items-center justify-center`}>
              <section.icon size={24} />
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">{section.title}</h2>
            <div className="text-slate-600 leading-relaxed text-lg">
              {section.content}
            </div>
          </section>
        ))}
      </div>

      {article.recommendedMovements && article.recommendedMovements.length > 0 && (
        <div className="mt-16 pt-16 border-t border-slate-100">
          <div className="flex items-center gap-3 mb-8">
            <PlayCircle className="text-emerald-500" size={28} />
            <h2 className="text-2xl font-bold text-slate-800">復帰へ向けたリカバリー動作</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {article.recommendedMovements.map((movement: any) => (
              <Link
                key={movement.id}
                href={`/movements/${movement.id}`}
                className="group p-6 bg-white border border-slate-100 rounded-[2rem] hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all flex items-center justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-600 transition-colors mb-1">
                    {movement.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-1">
                    {movement.description}
                  </p>
                </div>
                <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-all shrink-0 ml-4">
                  <ChevronRight size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <RelatedNotes limit={3} />
    </div>
  );
}
