'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'ヘルニアと言われましたが、もう重いものは持てませんか？',
    answer: 'いいえ、そんなことはありません。画像診断上のヘルニアがあっても、痛みのないアスリートはたくさんいます。段階的な負荷（プログレッシブ・オーバーロード）をかけることで、以前よりも強い身体に戻ることが可能です。',
  },
  {
    question: '腰痛がある時は安静にしたほうがいいですか？',
    answer: '激痛で動けない直後の1〜2日は安静が必要な場合もありますが、それ以降は「痛みのない範囲で動く」ほうが回復が早いことが科学的に証明されています。過度な安静は筋肉を弱らせ、恐怖心を強めてしまいます。',
  },
  {
    question: '筋トレ中に腰を痛めました。いつから再開できますか？',
    answer: '「日常生活で痛みがないこと」が最初の目安です。その後、まずは自体重での動作確認から始め、痛みが強まらなければ徐々に重量を戻していきます。具体的な復帰ステップは「復帰ガイド」を参考にしてください。',
  },
  {
    question: '腹筋を鍛えれば腰痛は治りますか？',
    answer: '単に腹筋を鍛えるだけではなく、「腹圧（IAP）」を適切にコントロールし、脊柱を安定させる能力が重要です。また、腰だけでなく股関節や胸椎の可動性も、腰への負担を減らす鍵となります。',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-spacing bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
            <HelpCircle className="text-sky-500" />
            よくある質問
          </h3>
          <p className="text-slate-500">復帰にあたって多くの方が抱える不安にお答えします。</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-800 leading-snug">{faq.question}</span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${openIndex === i ? 'bg-slate-900 text-white' : 'bg-white text-slate-400'}`}>
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm">
                      <div className="pt-4 border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
