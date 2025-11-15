'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroDesigner() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // タイトルの文字を分割してアニメーション
      const title = document.querySelector('.hero-title');
      if (title) {
        const chars = title.textContent?.split('') || [];
        title.innerHTML = chars
          .map((char) => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
          .join('');

        gsap.from('.hero-title span', {
          y: 100,
          opacity: 0,
          rotateX: -90,
          stagger: 0.02,
          duration: 0.8,
          ease: 'back.out(1.7)',
        });
      }

      // サブテキストのアニメーション
      gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: 'power4.out',
      });

      // CTAボタンのアニメーション
      gsap.from('.hero-cta', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        delay: 1.2,
        ease: 'back.out(1.7)',
      });

      // スクロールでパララックス効果
      gsap.to('.hero-title', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        y: -200,
        opacity: 0.3,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="gradient-bg relative flex min-h-screen items-center overflow-hidden px-6 py-20"
    >
      {/* 浮遊する要素 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-accent-1 opacity-10 blur-3xl" />
        <div
          className="animate-float absolute right-[10%] top-[60%] h-96 w-96 rounded-full bg-accent-2 opacity-10 blur-3xl"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="animate-float absolute bottom-[20%] left-[30%] h-72 w-72 rounded-full bg-accent-3 opacity-10 blur-3xl"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* ラベル */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <span className="glass inline-block rounded-full px-6 py-2 text-sm font-medium tracking-wider text-white/80">
            WEB PRODUCTION
          </span>
        </motion.div>

        {/* メインタイトル */}
        <h1 className="hero-title mb-8 text-6xl font-bold leading-[1.1] tracking-tight md:text-8xl lg:text-9xl">
          <span className="gradient-text">10万円から</span>
          <br />
          始める
          <br />
          プロフェッショナル
          <br />
          Web制作
        </h1>

        {/* サブタイトル */}
        <p className="hero-subtitle mb-12 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
          余日は大分県を拠点とするデジタルマーケティング企業です。
          <br />
          本質に向き合う余裕を、デジタルで創る。
        </p>

        {/* CTA */}
        <div className="hero-cta flex flex-col gap-4 sm:flex-row sm:gap-6">
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent-1 to-accent-2 px-10 py-5 text-center text-lg font-semibold text-white transition-all"
          >
            <span className="relative z-10">料金プランを見る</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-2 to-accent-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.a>

          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass group rounded-full px-10 py-5 text-center text-lg font-semibold text-white transition-all hover:bg-white/10"
          >
            制作実績を見る
          </motion.a>
        </div>

        {/* スクロールインジケーター */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest text-white/40">SCROLL</span>
            <div className="h-12 w-px bg-gradient-to-b from-accent-1 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
