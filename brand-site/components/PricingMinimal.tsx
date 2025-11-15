'use client';

const plans = [
  {
    name: '10万円プラン',
    price: '¥100,000',
    period: '〜',
    description: '個人事業主、低予算希望者向け',
    features: [
      '1〜5ページ制作',
      'レスポンシブ対応',
      '基本SEO対策',
      'お問い合わせフォーム',
      'SSL設定',
    ],
    recommended: false,
  },
  {
    name: '30万円プラン',
    price: '¥300,000',
    period: '〜',
    description: 'ブログ更新・Web集客志向',
    features: [
      '10万円プラン全機能',
      'WordPress/軽量CMS',
      'Analytics設定',
      '詳細SEO対策',
      'SNS連携',
      '1ヶ月無料サポート',
    ],
    recommended: true,
  },
  {
    name: 'カスタムプラン',
    price: '¥500万',
    period: '〜',
    description: '本格的なシステム開発',
    features: [
      '完全オリジナル開発',
      '会員・決済機能',
      'API連携',
      '継続保守サポート',
      '専任担当者',
    ],
    recommended: false,
  },
];

export default function PricingMinimal() {
  return (
    <section id="pricing" className="bg-gray-50 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* セクションタイトル */}
        <div className="mb-20">
          <span className="mb-4 block text-sm font-medium tracking-wider text-gray-400">
            PRICING
          </span>
          <h2 className="text-4xl font-normal tracking-tight text-gray-900 md:text-5xl">
            料金プラン
          </h2>
        </div>

        {/* プランカード */}
        <div className="grid gap-px bg-gray-200 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative bg-white p-8 md:p-12"
            >
              {plan.recommended && (
                <div className="mb-6">
                  <span className="inline-block bg-gray-900 px-3 py-1 text-xs font-medium tracking-wider text-white">
                    RECOMMENDED
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="mb-2 text-2xl font-medium text-gray-900">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500">{plan.description}</p>
              </div>

              <div className="mb-10">
                <div className="flex items-baseline">
                  <span className="text-4xl font-normal text-gray-900">{plan.price}</span>
                  <span className="ml-2 text-sm text-gray-400">{plan.period}</span>
                </div>
              </div>

              <ul className="mb-10 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-900"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full border border-gray-900 bg-white py-3 text-sm font-medium text-gray-900 transition-all hover:bg-gray-900 hover:text-white">
                お問い合わせ
              </button>
            </div>
          ))}
        </div>

        {/* 説明文 */}
        <div className="mt-20 border-t border-gray-200 pt-12">
          <div className="max-w-3xl">
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              なぜ10万円から提供できるのか？
            </h3>
            <p className="leading-relaxed text-gray-600">
              創業者が一人で対応することで、コストを大幅に削減。ディレクター、デザイナー、エンジニアなど通常8職種が必要なWeb制作を、一人で効率的に行うことで、高品質ながら低価格を実現しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
