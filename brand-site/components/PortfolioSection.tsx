'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const portfolioItems = [
  {
    title: '大分IT移住プロモーション',
    description: '大分県のIT人材誘致を目的としたランディングページ。モダンなデザインと効果的なCTAで高いコンバージョンを実現。',
    category: 'ランディングページ',
    image: '/portfolio-1.jpg',
  },
  {
    title: '余日コーポレートサイト',
    description: '自社サイトとして、ブランドアイデンティティを表現。シンプルで洗練されたデザインが特徴。',
    category: 'コーポレートサイト',
    image: '/portfolio-2.jpg',
  },
];

function PortfolioCard({ item, index }: { item: typeof portfolioItems[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse',
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.2,
      ease: 'power4.out',
    });
  }, [index]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className={`flex flex-col gap-8 ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div className="md:w-1/2">
        <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
          <div className="aspect-video bg-gradient-to-br from-natural-brown-light to-natural-brown-dark">
            {/* プレースホルダー画像の代わりにグラデーション */}
            <div className="flex h-full items-center justify-center text-white">
              <div className="text-center">
                <div className="mb-2 text-6xl font-bold opacity-20">余日</div>
                <div className="text-sm opacity-60">YOJITSU</div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-natural-brown opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
        </div>
      </div>

      <div className="flex flex-col justify-center md:w-1/2">
        <div className="mb-4 inline-block rounded-full bg-natural-brown/10 px-4 py-2 text-sm font-semibold text-natural-brown">
          {item.category}
        </div>
        <h3 className="mb-4 text-3xl font-bold">{item.title}</h3>
        <p className="mb-6 leading-relaxed text-gray-600">{item.description}</p>
        <button className="inline-flex w-fit items-center gap-2 rounded-full bg-natural-brown px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-natural-brown-dark hover:shadow-xl">
          <span>詳細を見る</span>
          <svg
            className="h-5 w-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
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
      id="portfolio"
      ref={sectionRef}
      className="relative min-h-screen px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          ref={titleRef}
          className="mb-4 text-center text-5xl font-bold md:text-6xl"
        >
          <span className="text-natural-brown">制作実績</span>
        </h2>
        <p className="mb-16 text-center text-xl text-gray-600">
          私たちが手がけたプロジェクトの一部をご紹介します
        </p>

        <div className="space-y-32">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={item.title} item={item} index={index} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg text-gray-600">
            その他の実績については、お問い合わせください
          </p>
        </div>
      </div>
    </section>
  );
}
