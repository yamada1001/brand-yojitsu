'use client';

import { motion } from 'framer-motion';

export default function StudioPricing() {
  const plans = [
    {
      name: 'スタータープラン',
      price: '¥100,000',
      subtitle: '個人事業主、低予算希望者向け',
      features: [
        '1〜5ページ制作',
        'レスポンシブ対応',
        '基本SEO対策',
        'お問い合わせフォーム',
        'SSL設定',
        '1ヶ月間の無料サポート',
      ],
      highlighted: false,
    },
    {
      name: 'ビジネスプラン',
      price: '¥300,000',
      subtitle: 'ブログ更新・Web集客志向',
      features: [
        'スタータープラン全機能',
        'WordPress/軽量CMS導入',
        'Google Analytics設定',
        '詳細SEO対策',
        'SNS連携',
        '3ヶ月間の無料サポート',
        '月1回の無料更新',
      ],
      highlighted: true,
      badge: 'おすすめ',
    },
    {
      name: 'カスタムプラン',
      price: '要相談',
      subtitle: '本格的なシステム開発',
      features: [
        '完全オリジナル開発',
        '会員・決済機能',
        'API連携',
        'カスタムダッシュボード',
        '継続保守サポート',
        '専任担当者',
        '優先対応',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">料金プラン</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            明確で透明性のある価格設定。あなたのビジネスに最適なプランをお選びください。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-black text-white shadow-2xl scale-105 md:scale-110'
                  : 'bg-white border-2 border-gray-200 hover:border-black'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={!plan.highlighted ? { y: -8 } : {}}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-white text-black text-sm font-medium rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                  {plan.subtitle}
                </p>
              </div>

              <div className="mb-8">
                <div className="text-4xl font-bold mb-1">{plan.price}</div>
                {plan.price !== '要相談' && (
                  <p className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                    税込・初期費用込み
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? 'text-white' : 'text-black'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                className={`block w-full py-3 text-center rounded-full font-medium transition-all ${
                  plan.highlighted
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                お問い合わせ
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-4xl mx-auto p-8 rounded-2xl bg-gray-50 border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-center">なぜこの価格で提供できるのか？</h3>
          <p className="text-gray-600 leading-relaxed text-center">
            創業者が一人で対応することで、コストを大幅に削減。ディレクター、デザイナー、エンジニアなど通常8職種が必要なWeb制作を、一人で効率的に行うことで、高品質ながら低価格を実現しています。大分県を拠点に、無駄なコストを省き、お客様に最大の価値を提供します。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
