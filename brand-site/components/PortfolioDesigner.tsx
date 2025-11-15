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
    category: 'ランディングページ',
    description: '大分県のIT人材誘致を目的としたランディングページ。モダンなデザインと効果的なCTAで高いコンバージョンを実現。',
    gradient: 'from-accent-1 via-accent-2 to-accent-1',
  },
  {
    title: '余日コーポレートサイト',
    category: 'コーポレートサイト',
    description: '自社サイトとして、ブランドアイデンティティを表現。シンプルで洗練されたデザインが特徴。',
    gradient: 'from-accent-2 via-accent-3 to-accent-2',
  },
];

export default function PortfolioDesigner() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.portfolio-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="gradient-bg relative overflow-hidden px-6 py-32">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* タイトル */}
        <div className="portfolio-title mb-20 text-center">
          <span className="mb-4 block text-sm font-medium tracking-widest text-white/40">PORTFOLIO</span>
          <h2 className="gradient-text text-5xl font-bold md:text-6xl lg:text-7xl">制作実績</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            私たちが手がけたプロジェクトの一部をご紹介します
          </p>
        </div>

        {/* ポートフォリオアイテム */}
        <div className="space-y-32">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className={`grid gap-12 ${index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2'}`}>
                {/* 画像エリア */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`glass group relative overflow-hidden rounded-3xl ${index % 2 === 1 ? 'md:order-2' : ''}`}
                >
                  <div className={`animate-gradient aspect-video bg-gradient-to-br ${item.gradient} opacity-20`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-4 text-7xl font-bold text-white opacity-10">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="text-2xl font-bold text-white opacity-30">余日</div>
                      <div className="mt-2 text-sm text-white opacity-20">YOJITSU</div>
                    </div>
                  </div>

                  {/* ホバーオーバーレイ */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="glass rounded-full px-8 py-3 font-semibold text-white"
                    >
                      詳細を見る
                    </motion.button>
                  </div>
                </motion.div>

                {/* テキストエリア */}
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="mb-4">
                    <span className="glass inline-block rounded-full px-4 py-1 text-xs font-medium tracking-wider text-white/80">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="mb-6 text-4xl font-bold text-white md:text-5xl">{item.title}</h3>

                  <p className="mb-8 leading-relaxed text-white/70">{item.description}</p>

                  <div>
                    <motion.a
                      href="#"
                      whileHover={{ x: 10 }}
                      className="group inline-flex items-center gap-3 text-lg font-semibold text-white"
                    >
                      <span className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        詳細を見る
                      </span>
                      <svg
                        className="h-5 w-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-white/50">その他の実績については、お問い合わせください</p>
        </div>
      </div>
    </section>
  );
}
