import { User, Quote, ExternalLink, Mail } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
        <div className="w-64 h-64 bg-slate-100 rounded-3xl shrink-0 flex items-center justify-center border border-slate-200">
          <User size={80} className="text-slate-300" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">About Me</h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            3度の重度腰痛から復帰し、現在は理論と実践の両面から「腰痛からの復帰」をサポートしています。
          </p>
          <div className="flex gap-4">
            <button className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-sky-500 transition-colors">
              <Mail size={24} />
            </button>
            <button className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-rose-500 transition-colors">
              <ExternalLink size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <div className="relative p-12 bg-white border border-slate-100 rounded-[3rem] shadow-sm mb-16">
          <Quote className="absolute top-8 left-8 text-slate-100" size={80} />
          <div className="relative z-10 italic text-2xl font-medium text-slate-800 leading-relaxed">
            「ベッドを出るまで30分。トイレへ行くことすら絶望的だったあの日から、再び筋トレやスポーツに復帰するまで。」
          </div>
        </div>

        <section className="space-y-12 text-lg text-slate-600 leading-relaxed">
          <h2 className="text-3xl font-bold text-slate-900">3度の絶望、そこからの再起</h2>
          <div className="space-y-6">
            <p>
              僕は過去に3回、日常生活すら困難になるレベルの腰痛を経験しました。
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><span className="font-bold">1回目（大学生）</span>：初めての激痛。何が起きたか分からず、ただ恐怖に震えた時期。</li>
              <li><span className="font-bold">2回目（社会人）</span>：デスクワークとストレスが重なり再発。日常生活すらままならない絶望感。</li>
              <li><span className="font-bold">3回目（再発）</span>：腰痛について学び、それなりに自信がついてきた頃に起きた再発。</li>
            </ul>
            <p>
              特に3回目の再発は、知識があるからこそ「なぜ自分の身体がコントロールできないのか」という深い挫折を味わいました。
            </p>
          </div>
          <p>
            「もう一生、全力で走ることはできないのか」「この痛みと一生付き合うのか」
            そんな不安の中で、僕は解剖学、生理学、そして最新の疼痛科学をさらに深く、必死に学び直しました。
          </p>
          
          <h2 className="text-3xl font-bold text-slate-900">「治してもらう」から「理解する」へ</h2>
          <p>
            多くの治療院を巡る中で気づいたのは、誰かに「治してもらう」だけでは不十分だということです。
            なぜ痛いのか、自分の身体で何が起きているのか。それを自分自身が「理解」し、
            「コントロール」できるようになって初めて、本当の意味での復帰が始まりました。
          </p>
          <p>
            このサイトでは、僕が復帰する過程で得た知識と経験を、すべてオープンにしています。
            あなたの「復帰への道のり」の、ひとつの道標になれば幸いです。
          </p>
        </section>

        <div className="mt-24 pt-16 border-t border-slate-100">
          <div className="bg-slate-50 rounded-[3rem] p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">活動を支援する</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              このサイトは研究・実践・経験をもとに運営しています。<br />
              もし役に立ったら、今後の活動の支援をしていただけると嬉しいです。
            </p>
            <div className="flex flex-col items-center gap-6">
              <a 
                href="https://donate.stripe.com/dRmeV7cQ1cQE61M7A797G00"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all shadow-xl shadow-slate-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                支援を送る
              </a>
              <p className="text-xs text-slate-400 font-bold tracking-widest uppercase">
                by STRENGTH ARTS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
