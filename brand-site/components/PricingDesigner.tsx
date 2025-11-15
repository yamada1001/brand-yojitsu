'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const plans = [
  {
    name: '10万円プラン',
    price: '¥100,000',
    description: '個人事業主、低予算希望者向け',
    features: ['1〜5ページ制作', 'レスポンシブ対応', '基本SEO対策', 'お問い合わせフォーム', 'SSL設定'],
    gradient: 'from-accent-1 to-accent-2',
  },
  {
    name: '30万円プラン',
    price: '¥300,000',
    description: 'ブログ更新・Web集客志向',
    features: ['10万円プラン全機能', 'WordPress/軽量CMS', 'Analytics設定', '詳細SEO対策', 'SNS連携', '1ヶ月無料サポート'],
    gradient: 'from-accent-2 to-accent-3',
    recommended: true,
  },
  {
    name: 'カスタムプラン',
    price: '¥500万〜',
    description: '本格的なシステム開発',
    features: ['完全オリジナル開発', '会員・決済機能', 'API連携', '継続保守サポート', '専任担当者'],
    gradient: 'from-accent-3 to-accent-4',
  },
];

export default function PricingDesigner() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      });

      gsap.from('.pricing-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'back.out(1.7)',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="relative overflow-hidden bg-black px-6 py-32">
      {/* 背景エフェクト */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-accent-1 opacity-5 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-accent-3 opacity-5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* タイトル */}
        <div className="pricing-title mb-20 text-center">
          <span className="mb-4 block text-sm font-medium tracking-widest text-white/40">PRICING</span>
          <h2 className="gradient-text text-5xl font-bold md:text-6xl lg:text-7xl">料金プラン</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            あなたのビジネスに最適なプランをお選びください
          </p>
        </div>

        {/* プランカード */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="pricing-card glass group relative overflow-hidden rounded-3xl p-8 transition-all hover:scale-105"
              whileHover={{ y: -10 }}
            >
              {/* グラデーションオーバーレイ */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
              />

              {plan.recommended && (
                <div className="absolute -right-12 top-8 rotate-45 bg-gradient-to-r from-accent-2 to-accent-3 px-12 py-1 text-xs font-bold text-white">
                  RECOMMENDED
                </div>
              )}

              <div className="relative z-10">
                <h3 className="mb-2 text-2xl font-bold text-white">{plan.name}</h3>
                <p className="mb-6 text-sm text-white/60">{plan.description}</p>

                <div className="mb-8">
                  <div className={`bg-gradient-to-r ${plan.gradient} bg-clip-text text-5xl font-bold text-transparent`}>
                    {plan.price}
                  </div>
                  <div className="text-sm text-white/40">〜</div>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-1"
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

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`hover-glow w-full rounded-full bg-gradient-to-r ${plan.gradient} py-4 font-semibold text-white`}
                >
                  お問い合わせ
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 説明 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass mt-20 rounded-3xl p-8 md:p-12"
        >
          <h3 className="mb-4 text-2xl font-bold text-white">なぜ10万円から提供できるのか？</h3>
          <p className="leading-relaxed text-white/70">
            創業者が一人で対応することで、コストを大幅に削減。ディレクター、デザイナー、エンジニアなど通常8職種が必要なWeb制作を、一人で効率的に行うことで、高品質ながら低価格を実現しています。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
