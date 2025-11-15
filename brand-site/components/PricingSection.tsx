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
    features: [
      '1〜5ページ制作',
      'レスポンシブ対応',
      '基本SEO対策',
      'お問い合わせフォーム',
      'SSL設定',
    ],
    notIncluded: ['ブログ機能', '更新機能'],
    popular: false,
  },
  {
    name: '30万円プラン',
    price: '¥300,000',
    description: 'ブログ更新・Web集客志向',
    features: [
      '10万円プラン全機能',
      'WordPress/軽量CMS',
      'Analytics設定',
      '詳細SEO対策',
      'SNS連携',
      '1ヶ月無料サポート',
    ],
    notIncluded: [],
    popular: true,
  },
  {
    name: 'カスタムプラン',
    price: '¥500万〜',
    description: '本格的なシステム開発',
    features: [
      '完全オリジナル開発',
      '会員・決済機能',
      'API連携',
      '継続保守サポート',
      '専任担当者',
    ],
    notIncluded: [],
    popular: false,
  },
];

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top bottom-=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.2,
      ease: 'power4.out',
    });
  }, [index]);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-3xl p-8 shadow-2xl transition-all duration-300 ${
        plan.popular
          ? 'bg-gradient-to-br from-natural-brown to-natural-brown-dark text-white'
          : 'bg-white text-gray-900'
      }`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-natural-brown-light px-6 py-2 text-sm font-bold">
          おすすめ
        </div>
      )}

      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
        <p className={`text-sm ${plan.popular ? 'text-gray-100' : 'text-gray-600'}`}>
          {plan.description}
        </p>
      </div>

      <div className="mb-8">
        <div className="text-5xl font-bold">{plan.price}</div>
        <div className={`text-sm ${plan.popular ? 'text-gray-200' : 'text-gray-500'}`}>
          〜
        </div>
      </div>

      <ul className="mb-8 space-y-4">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <svg
              className={`mt-1 h-5 w-5 flex-shrink-0 ${
                plan.popular ? 'text-white' : 'text-natural-brown'
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
        {plan.notIncluded.map((feature, i) => (
          <li key={`not-${i}`} className="flex items-start gap-3 opacity-50">
            <svg
              className="mt-1 h-5 w-5 flex-shrink-0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full rounded-full py-4 font-semibold transition-all duration-300 ${
          plan.popular
            ? 'bg-white text-natural-brown hover:bg-gray-100'
            : 'bg-natural-brown text-white hover:bg-natural-brown-dark'
        }`}
      >
        お問い合わせ
      </button>
    </motion.div>
  );
}

export default function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    });
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative min-h-screen px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          ref={titleRef}
          className="mb-4 text-center text-5xl font-bold md:text-6xl"
        >
          <span className="text-natural-brown">料金プラン</span>
        </h2>
        <p className="mb-16 text-center text-xl text-gray-600">
          あなたのビジネスに最適なプランをお選びください
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-natural-brown-light to-natural-brown p-8 text-white">
          <h3 className="mb-4 text-2xl font-bold">
            なぜ10万円から提供できるのか？
          </h3>
          <p className="leading-relaxed">
            創業者が一人で対応することで、コストを大幅に削減。ディレクター、デザイナー、エンジニアなど通常8職種が必要なWeb制作を、一人で効率的に行うことで、高品質ながら低価格を実現しています。
          </p>
        </div>
      </div>
    </section>
  );
}
