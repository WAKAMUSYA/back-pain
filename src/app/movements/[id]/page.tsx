import Breadcrumbs from '@/components/Breadcrumbs';
import { Target, ListChecks, AlertCircle, TrendingUp, Info } from 'lucide-react';
import { notFound } from 'next/navigation';

const movements = {
  breathing: {
    title: '腹式呼吸',
    category: 'LEVEL 1: リセット & リラックス',
    imageUrl: '/images/breathing.png',
    purpose: '腹圧を高める基礎を作り、自律神経を整えて痛みの閾値を下げます。',
    setup: '仰向けになり、膝を軽く曲げます。片手を胸に、もう片手をお腹に置きます。',
    points: [
      '鼻からゆっくり吸い、お腹を膨らませます（胸は動かさない）。',
      '口から細く長く吐き出し、お腹を凹ませていきます。',
      '吐き切る最後に、お腹の奥が硬くなる感覚を意識します。',
    ],
    caution: '無理に深く吸いすぎて、首や肩に力が入らないように注意してください。',
    next: '90/90 ポジションでの呼吸へ。',
  },
  '90-90': {
    title: '90/90 ポジション',
    category: 'LEVEL 1: リセット & リラックス',
    imageUrl: '/images/9090.png',
    purpose: '腰椎にかかる圧力を逃がし、腰背部の筋肉を完全にリラックスさせます。',
    setup: '床に仰向けになり、椅子やソファの上に脚を乗せます。股関節と膝がそれぞれ90度になるように調整します。',
    points: [
      '腰が床にぴったりと密着しているのを感じます。',
      'この状態で5〜10分間、リラックスして呼吸を続けます。',
      '腰の重だるさが抜けていく感覚を待ちます。',
    ],
    caution: '首の下に隙間ができる場合は、薄いタオルを置いてサポートしてください。',
    next: 'キャット＆カウなどの軽い動的動作へ。',
  },
  'childs-pose': {
    title: 'チャイルドポーズ',
    category: 'LEVEL 1: リセット & リラックス',
    imageUrl: '/images/childs-pose.png',
    purpose: '背中全体の筋肉を優しく伸ばし、呼吸を深めることでリラックスを促します。',
    setup: '正座の状態から、上半身を前に倒して床に伏せます。',
    points: [
      'おでこを床につけ、腕は前に伸ばすか、身体の横に置きます。',
      '背中に空気を送り込むイメージで、深く呼吸を繰り返します。',
      'お尻がかかとから浮かないように意識します。',
    ],
    caution: '膝や股関節に痛みがある場合は、無理に行わないでください。',
    next: 'キャット＆カウへ。',
  },
  hanging: {
    title: 'ぶら下がり',
    category: 'LEVEL 1: リセット & リラックス',
    imageUrl: '/images/hanging.png',
    purpose: '重力を利用して脊柱を牽引し、椎間板にかかる圧力を逃がします。',
    setup: '鉄棒や安定したバーに両手でぶら下がります。',
    points: [
      '腕の力だけで支えるのではなく、肩甲骨周りの筋肉も使います。',
      '足は床につけたまま、軽く膝を曲げて体重の半分程度をかけます。',
      '深呼吸をしながら、腰の骨と骨の間が広がるのをイメージします。',
    ],
    caution: '肩に痛みがある場合や、完全に体重を預けると痛む場合は避けてください。',
    next: '腹式呼吸で腹圧を高める練習へ。',
  },
  stretching: {
    title: '背伸び・伸展',
    category: 'LEVEL 2: モビリティ & コントロール',
    imageUrl: '/images/stretching.png',
    purpose: 'デスクワーク等で丸まった背骨（屈曲位）をリセットし、血流を改善します。',
    setup: '椅子に浅く座るか、立った状態で両手を頭の後ろで組みます。',
    points: [
      '息を吸いながら、胸を天井に向けて大きく開きます。',
      '腰だけを反らすのではなく、胸椎（背中の上部）から反らす意識で行います。',
      '痛みのない範囲で数回繰り返します。',
    ],
    caution: '腰に鋭い痛み（特に伸展時痛）が出る場合は無理をしないでください。',
    next: '胸椎の回旋など、さらに複雑な動きへ。',
  },
  'cat-cow': {
    title: 'キャット＆カウ',
    category: 'LEVEL 2: モビリティ & コントロール',
    imageUrl: '/images/cat-cow.png',
    purpose: '脊柱全体の連動性と、骨盤の前傾・後傾のコントロール能力を養います。',
    setup: '四つ這いになります（肩の真下に手、股関節の真下に膝）。',
    points: [
      '息を吐きながら背中を丸め、おへそを覗き込みます（キャット）。',
      '息を吸いながら胸を張り、少しずつ背中を反らせていきます（カウ）。',
      '一つ一つの背骨（椎体）が動くのを感じながら、ゆっくり行います。',
    ],
    caution: '腰を反らせすぎないよう、胸（胸椎）を動かす意識を強く持ってください。',
    next: 'ヒンジ動作の練習へ。',
  },
  'thoracic-rotation': {
    title: '胸椎の回旋',
    category: 'LEVEL 2: モビリティ & コントロール',
    imageUrl: '/images/thoracic-rotation-v2.png',
    purpose: '腰ではなく、本来動くべき胸椎の可動性を出し、腰への負担を軽減します。',
    setup: '横向きに寝て、上の脚を90度に曲げてクッション等の上に置きます。',
    points: [
      '両手を前に伸ばした状態から、上の手を大きく後ろへ回していきます。',
      '視線は動かす手の方を追いかけます。',
      '骨盤（膝）が床から浮かないように固定しておくのがポイントです。',
    ],
    caution: '無理に床につけようとせず、リラックスして重力に任せます。',
    next: 'バードドッグなどの安定性トレーニングへ。',
  },
  'hip-hinge': {
    title: 'ヒンジ動作',
    category: 'LEVEL 2: モビリティ & コントロール',
    imageUrl: '/images/hip-hinge.png',
    purpose: '腰椎を曲げずに、股関節から身体を折りたたむ正しい動作を習得します。',
    setup: '足を肩幅に開き、背筋を伸ばして立ちます。',
    points: [
      '膝を軽く曲げ、お尻を後ろの壁にタッチさせるように引いていきます。',
      'この時、背中が丸まらないように一直線を保ちます。',
      '太ももの裏（ハムストリングス）に伸びを感じたら、元の姿勢に戻ります。',
    ],
    caution: '腰が曲がってしまう場合は、壁から少し離れて立ち、お尻で壁にタッチする練習から始めます。',
    next: 'より負荷の高いプランクなどの体幹トレーニングへ。',
  },
  plank: {
    title: 'プランク',
    category: 'LEVEL 3: スタビリティ & ストレングス',
    imageUrl: '/images/plank.png',
    purpose: '体幹前面の筋持久力を高め、腰椎をニュートラルな位置に保持する能力を養います。',
    setup: 'うつ伏せの状態から両肘を床につき、つま先で身体を支えます。',
    points: [
      '頭からかかとまでが一直線になるように意識します。',
      'お尻を上げすぎず、また腰を反らせないように注意します。',
      '床を肘で強く押し、肩甲骨の間を埋めるようにします。',
    ],
    caution: '腰に痛みを感じる場合は、膝をついた状態から始めてください。',
    next: 'バードドッグやサイドプランクへ。',
  },
  'side-plank': {
    title: 'サイドプランク',
    category: 'LEVEL 3: スタビリティ & ストレングス',
    imageUrl: '/images/side-plank.png',
    purpose: '体幹の側面の安定性を高め、歩行やランニング時の骨盤のブレを防ぎます。',
    setup: '横向きになり、下側の肘で身体を支えます。',
    points: [
      '腰を床から浮かせ、身体を一直線にします。',
      '上の手は腰に置くか、天井に向けて伸ばします。',
      '呼吸を止めずに、一定時間キープします。',
    ],
    caution: '肩がすくまないよう、床をしっかり押してください。',
    next: 'さらに負荷の高い動作へ。',
  },
  'bird-dog': {
    title: 'バードドッグ',
    category: 'LEVEL 3: スタビリティ & ストレングス',
    imageUrl: '/images/bird-dog.png',
    purpose: '手足を対角線上に動かす際、脊柱を回旋させずに安定させる能力を高めます。',
    setup: '四つ這いになり、手は肩の真下、膝は股関節の真下に置きます。',
    points: [
      '右腕と左脚を、床と並行になるまでゆっくりと伸ばします。',
      'この時、背中の上に置いた水杯をこぼさないようなイメージで、体幹を固定します。',
      '3〜5秒キープし、ゆっくり戻して反対側も行います。',
    ],
    caution: '手足を高く上げようとして、腰が反ってしまうのはNGです。',
    next: 'さらに不安定な環境（バランスボール等）でのトレーニングへ。',
  },
  'dead-bug': {
    title: 'デッドバグ',
    category: 'LEVEL 3: スタビリティ & ストレングス',
    imageUrl: '/images/dead-bug.png',
    purpose: '四肢が動いている状況でも、腹圧を維持して腰椎を安定させる高度なコントロール能力を養います。',
    setup: '仰向けになり、両手と両脚（膝90度）を天井に向けて上げます。',
    points: [
      '腰を床に押し付け、隙間ができないように腹圧を高めます。',
      '右腕と左脚を、床すれすれまでゆっくりと伸ばします。',
      'この時、腰が床から浮かない範囲で動かします。',
    ],
    caution: '脚を下ろす際に腰が反ってしまう場合は、動かす範囲を小さくするか、片脚ずつ動かしてください。',
    next: '実際のスポーツ動作に近いトレーニングへ。',
  },
};

import Image from 'next/image';

export default async function MovementDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const movement = movements[id as keyof typeof movements] as any;

  if (!movement) {
    notFound();
  }

  const sections = [
    { title: '目的', content: movement.purpose, icon: Target, color: 'text-sky-500', bg: 'bg-sky-50' },
    { title: 'セットアップ', content: movement.setup, icon: Info, color: 'text-indigo-500', bg: 'bg-indigo-50' },
    { title: 'やり方とポイント', content: (
      <ul className="list-disc pl-5 space-y-3">
        {movement.points.map((p: string, i: number) => <li key={i}>{p}</li>)}
      </ul>
    ), icon: ListChecks, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { title: '注意点', content: movement.caution, icon: AlertCircle, color: 'text-amber-500', bg: 'bg-amber-50' },
    { title: '次のステップ', content: movement.next, icon: TrendingUp, color: 'text-rose-500', bg: 'bg-rose-50' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <Breadcrumbs
        items={[
          { label: 'リカバリー動作図鑑', href: '/movements' },
          { label: movement.title },
        ]}
      />

      <div className="mb-12">
        <span className="inline-block px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
          {movement.category}
        </span>
        <h1 className="text-4xl font-bold text-slate-900 leading-tight">
          {movement.title}
        </h1>
      </div>

      {movement.imageUrl && (
        <div className="mb-16 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm relative aspect-square max-w-lg mx-auto">
          <Image
            src={movement.imageUrl}
            alt={movement.title}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      )}

      <div className="space-y-12">

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
    </div>
  );
}
