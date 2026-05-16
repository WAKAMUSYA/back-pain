import { Shield } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'プライバシーポリシー | 腰痛からの復帰を目指す',
  description: '当サイトのプライバシーポリシー（個人情報保護方針）について。',
};

export default function PrivacyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <Link href="/" className="text-sky-600 font-bold hover:underline mb-8 inline-block">
            ← トップページへ戻る
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center">
              <Shield size={24} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              プライバシーポリシー
            </h1>
          </div>
          <p className="text-slate-500">
            制定日：2024年5月15日
          </p>
        </div>

        <div className="bg-white rounded-[2rem] border border-slate-100 p-8 md:p-12 shadow-sm space-y-10">
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">
              1. 基本方針
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              当サイト「腰痛からの復帰を目指す」（以下、「当サイト」とします）は、ユーザーの個人情報の重要性を認識し、その保護を徹底するため、以下のプライバシーポリシー（個人情報保護方針）を定めます。情報の適切な取り扱いと安全な管理に努めます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">
              2. 個人情報の取得と利用目的
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              当サイトでは、お問い合わせフォーム等を通じて、名前（ハンドルネーム）、メールアドレス等の個人情報をご登録いただく場合がございます。<br /><br />
              これらの個人情報は、質問に対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">
              3. 個人情報の第三者への開示
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              当サイトでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-slate-600 text-sm">
              <li>本人のご了解がある場合</li>
              <li>法令等への協力のため、開示が必要となる場合</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">
              4. アクセス解析ツールについて
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              当サイトでは、サイトの利用状況を把握しコンテンツを改善するために、アクセス解析ツール（Googleアナリティクス等）を利用する場合があります。<br />
              これらのトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">
              5. 免責事項
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。<br /><br />
              また当サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。特に健康・医療に関する情報については、個人の状態により結果が異なるため、実践する際は専門機関にご相談の上、ご自身の責任において行ってください。<br /><br />
              詳細は<Link href="/disclaimer" className="text-sky-600 hover:underline">免責事項（重要）</Link>のページをご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">
              6. プライバシーポリシーの変更
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。<br />
              修正された最新のプライバシーポリシーは常に本ページにて開示されます。
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
