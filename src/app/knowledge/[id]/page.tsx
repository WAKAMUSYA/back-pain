import Breadcrumbs from '@/components/Breadcrumbs';
import { ShieldCheck, AlertCircle, HelpCircle, Lightbulb, TrendingUp } from 'lucide-react';
import { notFound } from 'next/navigation';

const articles = {
  hernia: {
    title: 'ヘルニア＝終わりじゃない',
    category: '基礎知識',
    imageUrl: '/images/hernia.png',
    symptoms: '脚のしびれ、力が入らない、特定の動作での鋭い痛みなど。',
    causes: '椎間板の中身が飛び出し、神経を圧迫している状態。しかし、最新の研究では画像上の異常と痛みの強さは必ずしも一致しないことが分かっています。',
    confirmation: 'まずは専門医による診断が必要です。排尿障害や顕著な筋力低下、麻痺がある場合は緊急性を要します。',
    todo: '過度な安静は筋肉を弱らせ、回復を遅らせます。痛みのない範囲で積極的に身体を動かし、血流を促すことが重要です。',
    recovery: '神経の鎮静化に伴い、段階的に負荷を戻していきます。適切なフォームを身につければ、再び高負荷な活動も可能です。',
    recommendedMovements: [
      { id: 'breathing', title: '腹式呼吸', description: '痛みを落ち着かせ、リラックスするための基礎。' },
      { id: '90-90', title: '90/90 ポジション', description: '腰椎の圧力を逃がす休息姿勢。' }
    ]
  },
  fear: {
    title: '腰痛と恐怖の関係',
    category: '基礎知識',
    imageUrl: '/images/fear.png',
    symptoms: '「動かしたらまた痛くなるかも」という不安。特定の動きに対する強い抵抗感や身体の硬直。',
    causes: '脳が過去の痛みを記憶し、身体を守ろうとして過剰に警戒している状態（恐怖回避思考）。これが逆に痛みの閾値を下げてしまいます。',
    confirmation: 'その動き自体が物理的に危険なのか、それとも「怖いから痛い」のかを客観的に見極める必要があります。',
    todo: 'まずは「この動きは安全である」という認識を脳に上書きすること。リラックスした状態での深呼吸や、小さくゆっくりとした動作から始めます。',
    recovery: '「動いても大丈夫」という成功体験を積み重ねることで、脳の警戒レベルが下がり、自然な動きを取り戻せます。',
    recommendedMovements: [
      { id: 'cat-cow', title: 'キャット＆カウ', description: '痛みのない範囲で背骨を動かし、「安全だ」と脳に教える。' },
      { id: 'childs-pose', title: 'チャイルドポーズ', description: '背中を優しく伸ばし、緊張を解く。' }
    ]
  },
  nerve: {
    title: '神経の感度',
    category: '基礎知識',
    imageUrl: '/images/nerve.png',
    symptoms: '怪我自体は治っているはずなのに、痛みが長引く。少しの刺激で過剰に反応してしまう。',
    causes: '痛みが慢性化すると、中枢神経系が過敏になり、通常では痛みと感じない刺激を「痛み」として処理してしまう現象（感作）。',
    confirmation: '痛みが場所を変えて現れたり、天候やストレスによって変動したりする場合は、神経の感度が関わっている可能性が高いです。',
    todo: '睡眠、栄養、ストレス管理などのライフスタイルを見直し、神経系全体を落ち着かせること。有酸素運動も神経の鎮静に効果的です。',
    recovery: '神経のボリューム調整（感度を下げる）には時間がかかりますが、正しい知識とアプローチで必ず改善していきます。',
    recommendedMovements: [
      { id: 'breathing', title: '腹式呼吸', description: '自律神経を整え、神経の過敏さを抑える。' },
      { id: 'thoracic-rotation', title: '胸椎の回旋', description: '心地よいストレッチでリラックスを促す。' }
    ]
  },
  lifestyle: {
    title: 'ライフスタイルと腰痛',
    category: '基礎知識',
    symptoms: '慢性的な重だるさ、休日に逆に痛くなる、夕方になると悪化するなど。',
    causes: '長時間の座りすぎ、運動不足、栄養バランスの偏り、そして過度なストレス。これらが複合的に痛みの背景を作ります。',
    confirmation: '一日の活動量、座っている時間、リラックスできている時間を確認してください。',
    todo: '劇的な変化を求めず、まずは「1時間に1回立ち上がる」「10分歩く」などの小さな習慣から始めます。',
    recovery: '身体への物理的なアプローチだけでなく、生活の質全体を向上させることが、再発しない最大の防御になります。',
    recommendedMovements: [
      { id: 'stretching', title: '背伸び・伸展', description: 'デスクワークの合間にできる姿勢リセット。' },
    ]
  },
  morning: {
    title: '朝起きる時の痛み',
    category: '症状別ガイド',
    symptoms: '起床直後の数分から数十分、腰が固まったように痛む。顔を洗うなどの中腰が辛い。',
    causes: '就寝中の不動による血流低下、組織の水分含有量の変化、または「朝は痛いものだ」という脳の予期不安。',
    confirmation: '動いているうちに楽になるかどうか。また、寝返りが十分に打てているかを確認してください。',
    todo: '起き上がる前に、ベッドの中で膝を抱えたり、足首を回したりして、優しく身体に「今から動くよ」と伝えます。',
    recovery: '血流が良くなり、朝の予期不安が解消されると、驚くほどスムーズに一日を始められるようになります。',
    recommendedMovements: [
      { id: 'childs-pose', title: 'チャイルドポーズ', description: '起床時にベッドの上でできる穏やかなストレッチ。' },
    ]
  },
  sitting: {
    title: '座っている時の痛み',
    category: '症状別ガイド',
    symptoms: 'デスクワークを始めて30分ほどで腰が重だるくなる。立ち上がる瞬間に腰が伸びにくい。',
    causes: '同じ姿勢が続くことによる局所的な筋肉の疲労と血流不全。また、骨盤の後傾による腰椎への持続的な負荷。',
    confirmation: '座る環境（椅子の高さなど）や、座っている時の骨盤の向きを確認してください。',
    todo: '30分に一度は立ち上がる、または座ったまま骨盤を前後に動かす「キャット＆カウ」のような動作を取り入れます。',
    recovery: '座り方の工夫と、定期的な「ムーブメント・ブレイク」を習慣化することで、長時間の作業も快適になります。',
    recommendedMovements: [
      { id: 'stretching', title: '背伸び・伸展', description: '座りっぱなしで丸まった背骨をリセット。' },
      { id: 'thoracic-rotation', title: '胸椎の回旋', description: '上半身のねじりを入れて血流を改善。' }
    ]
  },
  bending: {
    title: '前屈した時の痛み',
    category: '症状別ガイド',
    symptoms: '靴下を履く、床の物を拾う、お辞儀をする動作で腰に鋭い痛みが出る。',
    causes: '股関節の動きが硬く、腰椎だけで曲げようとしている。または、前屈動作に対する脳の防御反応。',
    confirmation: 'お尻を後ろに引く「ヒンジ動作」ができるか、膝を曲げれば痛くないかを確認。',
    todo: '膝を深く曲げて物を拾う。股関節の柔軟性を高めるモビリティドリルを行う。',
    recovery: '正しい重心移動と股関節の使い方を覚えることで、前屈への恐怖はなくなります。',
    recommendedMovements: [
      { id: 'hip-hinge', title: 'ヒンジ動作', description: '腰を曲げず、股関節から折り曲げる感覚を掴む。' },
    ]
  },
  extension: {
    title: '後屈した時の痛み',
    category: '症状別ガイド',
    symptoms: '腰を反らす、高い所の物を取る、長時間立っていると腰が痛む。',
    causes: '胸椎（胸）が硬く、腰椎の一箇所だけで反ってしまっている。または腹圧の不足。',
    confirmation: '胸を張る動きができるか、腹筋に力を入れると痛みが減るかを確認。',
    todo: '胸椎のストレッチ。腹圧（IAP）を高める練習。',
    recovery: '背骨全体でしなやかに反れるようになると、腰への局所的な負担は激減します。',
    recommendedMovements: [
      { id: 'cat-cow', title: 'キャット＆カウ', description: '背骨を正しく反らすコントロールを練習。' },
      { id: 'plank', title: 'プランク', description: '腰が反りすぎないように、前面から支える力をつける。' }
    ]
  },
  biopsychosocial: {
    title: '痛みのBPSモデル',
    category: '基礎知識',
    symptoms: '画像診断では「異常なし」と言われたが痛い。ストレスを感じると痛みが強くなる。',
    causes: '痛みは「身体的（Biological）」「心理的（Psychological）」「社会的（Social）」な要因が複雑に絡み合って生じます。例えば、職場の人間関係のストレスが痛みの閾値を下げることが科学的に証明されています。',
    confirmation: '痛みが強くなるタイミングに規則性はないか？特定の場所や人といる時に痛まないかを確認します。',
    todo: 'まずは「痛みの原因は腰そのものだけではないかもしれない」と知ること。そして、睡眠不足や心理的ストレスなど、身体以外の要素にも目を向けてみましょう。',
    recovery: '多角的な視点から自分の環境を整えることで、長引く慢性痛のループから抜け出すことができます。',
    recommendedMovements: [
      { id: 'breathing', title: '腹式呼吸', description: '自律神経を整え、心理的な緊張を緩和する。' },
      { id: 'childs-pose', title: 'チャイルドポーズ', description: '身体を丸めて安心感を得る。' }
    ]
  },
  iap: {
    title: 'IAP（腹腔内圧）の真実',
    category: '生体力学・解剖学',
    symptoms: '重い物を持つと腰が抜けそうになる。コルセットを手放せない。',
    causes: '腹腔（お腹の中の空間）の圧力が低く、脊柱を内側から支えられていない状態です。単に「腹筋（表面の筋肉）」が弱いのではなく、「横隔膜・骨盤底筋・腹横筋」が連動して風船のように膨らむ機能が低下しています。',
    confirmation: '息を吸った時にお腹だけでなく、背中や脇腹も360度膨らむか（ブレーシングができているか）を確認します。',
    todo: '仰向けになり、お腹と背中に空気を入れる練習から始めます。コルセットは補助として使い、最終的には自前の筋肉でコルセットを作れるようにします。',
    recovery: '正しいIAPを獲得すれば、重い重量を扱ったり、急な動作をしたりしても、腰椎はガッチリと保護されます。',
    recommendedMovements: [
      { id: 'breathing', title: '腹式呼吸', description: 'IAPの基礎となる横隔膜の動きを練習。' },
      { id: 'dead-bug', title: 'デッドバグ', description: '手足が動いてもIAPを維持する高度なトレーニング。' }
    ]
  },
  fascia: {
    title: '筋膜と滑走性',
    category: '生体力学・解剖学',
    symptoms: '腰から背中全体が突っ張る感じがする。朝起きると背中がバキバキに硬い。',
    causes: '筋肉を包む「筋膜（ファシア）」という組織が、運動不足や長時間の同一姿勢によって水分を失い、隣り合う筋肉や皮膚と癒着している状態です。これにより、筋肉がスムーズに滑走できず、突っ張りや痛みを生じます。',
    confirmation: '腰や背中の皮膚をつまんでみて、硬くてつまめない場所、あるいはつまむと強い痛みがある場所がないか確認します。',
    todo: '水分をしっかり摂り、多方向へ身体を動かす（ストレッチやモビリティドリル）ことで、筋膜の水分量と滑走性を取り戻します。フォームローラーを使った軽いリリースも有効です。',
    recovery: '筋膜の癒着が解けると、身体が「ウェットスーツを脱いだ後」のように軽く、自由に動かせるようになります。',
    recommendedMovements: [
      { id: 'cat-cow', title: 'キャット＆カウ', description: '背中全体の筋膜を優しくスライディングさせる。' },
      { id: 'thoracic-rotation', title: '胸椎の回旋', description: '胸から腰にかけての斜めの筋膜ライン（スパイラルライン）を伸ばす。' }
    ]
  },
};

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, PlayCircle } from 'lucide-react';

export default async function KnowledgeArticlePage({ params }: { params: Promise<{ id: string }> }) {
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
          { label: '腰痛知識', href: '/knowledge' },
          { label: article.title },
        ]}
      />

      <div className="mb-12">
        <span className="inline-block px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
          {article.category}
        </span>
        <h1 className="text-4xl font-bold text-slate-900 leading-tight">
          {article.title}
        </h1>
      </div>

      {article.imageUrl && (
        <div className="mb-16 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm relative aspect-[2/1] w-full">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

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
            <h2 className="text-2xl font-bold text-slate-800">おすすめのリカバリー動作</h2>
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

    </div>
  );
}
