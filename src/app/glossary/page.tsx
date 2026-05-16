import Breadcrumbs from '@/components/Breadcrumbs';
import { BookOpen, Search } from 'lucide-react';

const terms = [
  {
    term: 'IAP (Intra-Abdominal Pressure)',
    yomi: '腹圧',
    description: 'お腹の中の圧力のこと。適切に高めることで、背骨を内側から支えるクッションのような役割を果たし、腰椎の安定性を向上させます。',
  },
  {
    term: '中枢性感作 (Central Sensitization)',
    yomi: 'ちゅうすうせいかんさ',
    description: '神経系が過敏になり、通常なら痛みと感じないようなわずかな刺激に対しても「痛み」として処理してしまう状態。慢性腰痛の大きな要因の一つです。',
  },
  {
    term: '恐怖回避思考 (Fear-Avoidance Beliefs)',
    yomi: 'きょうふかいひしこう',
    description: '「動くと痛みが悪化する」「腰を曲げるのは危険だ」という強い思い込みから、身体を動かすことを極端に避けてしまう思考パターンのこと。',
  },
  {
    term: '破局的思考 (Catastrophizing)',
    yomi: 'はきょくてきしこう',
    description: '痛みに対して「もう一生治らない」「最悪の事態になる」と過度に悲観的に捉えてしまうこと。これがストレスとなり、神経の感度をさらに高めてしまいます。',
  },
  {
    term: '生物心理社会モデル (Biopsychosocial Model)',
    yomi: 'せいぶつしんりしゃかいもでる',
    description: '痛みは単なる「身体の損傷（生物）」だけでなく、「心理状態（不安、ストレス）」や「社会環境（仕事、家庭）」の3つの側面が複雑に絡み合って起きるという考え方。',
  },
  {
    term: 'レッドフラッグ (Red Flags)',
    yomi: 'れっどふらっぐ',
    description: '腰痛の背後に隠れている可能性のある重大な疾患（脊椎腫瘍、感染、骨折、馬尾症候群など）を示唆する危険な兆候のこと。',
  },
  {
    term: '漸進性過負荷 (Progressive Overload)',
    yomi: 'ぜんしんせいかふか',
    description: '身体の適応能力に合わせて、少しずつ負荷（重量、回数、難易度）を増やしていくこと。安全な復帰には欠かせない原則です。',
  },
  {
    term: 'ムーブメント・ブレイク (Movement Break)',
    yomi: 'むーぶめんと・ぶれいく',
    description: '長時間の同じ姿勢をリセットするために、短時間（数十秒〜数分）身体を動かすこと。血流を促し、組織への持続的な負荷を分散させます。',
  },
];

export default function GlossaryPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <Breadcrumbs items={[{ label: '腰痛用語辞典' }]} />
      
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <BookOpen className="text-indigo-500" size={36} />
          腰痛用語辞典
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          サイト内でよく使われる用語や、最新の疼痛科学の重要キーワードを分かりやすく解説します。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {terms.map((item) => (
          <div
            key={item.term}
            className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all group"
          >
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em] mb-2 block group-hover:text-indigo-400 transition-colors">
              {item.yomi}
            </span>
            <h2 className="text-xl font-bold text-slate-800 mb-4">{item.term}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 p-10 bg-indigo-50 rounded-[3rem] text-center">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">正しい知識が、恐怖を消す。</h3>
        <p className="text-indigo-700/70 text-sm mb-0">
          用語を理解することは、自分の身体で起きている現象を客観的に捉える助けになります。
        </p>
      </div>
    </div>
  );
}
