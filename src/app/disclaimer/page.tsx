import Breadcrumbs from '@/components/Breadcrumbs';
import { ShieldAlert, Info, Scale } from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <Breadcrumbs items={[{ label: '免責事項' }]} />
      
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-6 flex items-center gap-4">
          <ShieldAlert className="text-rose-500" size={36} />
          免責事項
        </h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          当サイト「腰痛からの復帰を目指す」をご利用いただくにあたっての重要な注意事項です。
        </p>
      </div>

      <div className="space-y-12 prose prose-slate max-w-none">
        <section className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Info className="text-sky-500" size={20} />
            医療アドバイスの否定
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm">
            当サイトで提供される情報は、あくまでトレーナーとしての経験、および一般的な疼痛科学の知見に基づいた情報提供を目的としています。
            医師による診断、検査、治療、または処方箋に代わるものではありません。
            個別の症状については、必ず医師や医療従事者の指示を仰いでください。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-4">自己責任の原則</h2>
          <p className="text-slate-600 leading-relaxed text-sm">
            当サイトに掲載された情報やエクササイズを実践する際は、ご自身の体調を十分に考慮し、無理のない範囲で行ってください。
            万が一、当サイトの情報を利用したことで身体的な不調や怪我、損害が生じた場合でも、当サイトおよび運営者は一切の責任を負いかねます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-4">情報の正確性について</h2>
          <p className="text-slate-600 leading-relaxed text-sm">
            当サイトでは可能な限り最新かつ正確な情報の掲載に努めておりますが、疼痛科学や医学は常に進歩しており、情報の完全性や最新性を保証するものではありません。
            コンテンツは予告なく変更・削除される場合があります。
          </p>
        </section>

        <section className="pt-12 border-t border-slate-100 flex items-center justify-center gap-3 text-slate-400 text-xs italic">
          <Scale size={16} />
          <span>Safe movement starts with understanding your limits.</span>
        </section>
      </div>
    </div>
  );
}
