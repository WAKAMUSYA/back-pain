import KnowledgeList from '@/components/KnowledgeList';
import RelatedNotes from '@/components/RelatedNotes';

const knowledgeCategories = [
  {
    title: '基礎知識',
    items: [
      { id: 'hernia', title: 'ヘルニア＝終わりじゃない', summary: '画像診断の結果と痛みの関係について。' },
      { id: 'fear', title: '腰痛と恐怖の関係', summary: '恐怖回避思考が痛みを増幅させるメカニズム。' },
      { id: 'nerve', title: '神経の感度（中枢性感作）', summary: '慢性化する腰痛の正体は、神経の過敏さ？' },
      { id: 'lifestyle', title: 'ライフスタイルと腰痛', summary: '食事、睡眠、ストレスが痛みに与える影響。' },
      { id: 'biopsychosocial', title: '痛みのBPSモデル', summary: '身体・心理・社会の3つの視点から痛みを解き明かす最新理論。' },
    ],
  },
  {
    title: '生体力学・解剖学',
    items: [
      { id: 'iap', title: 'IAP（腹腔内圧）の真実', summary: '天然のコルセットと呼ばれる「腹圧」の正しい理解と作り方。' },
      { id: 'fascia', title: '筋膜と滑走性', summary: '筋肉のコリだけではない。結合組織の癒着が引き起こす腰痛。' },
    ]
  },
  {
    title: '症状別ガイド',
    items: [
      { id: 'morning', title: '朝起きる時の痛み', summary: 'なぜ朝一番が痛いのか、その原因と対策。' },
      { id: 'sitting', title: '座っている時の痛み', summary: '長時間のデスクワークを乗り切るコツ。' },
      { id: 'bending', title: '前屈した時の痛み', summary: 'お辞儀や床の物を拾う時の鋭い痛み。' },
      { id: 'extension', title: '後屈した時の痛み', summary: '腰を反らした時、立ちっぱなしの痛み。' },
    ],
  },
];

export default function KnowledgePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <KnowledgeList categories={knowledgeCategories} />
      <RelatedNotes />
    </div>
  );
}
