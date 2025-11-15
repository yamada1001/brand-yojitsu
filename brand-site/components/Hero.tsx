'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // タイトルのアニメーション
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.3,
      });

      // サブタイトルのアニメーション
      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.6,
      });

      // CTAボタンのアニメーション
      gsap.from(ctaRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.9,
      });

      // スクロールでフェードアウト
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        opacity: 0.3,
        y: -100,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center px-6 py-20"
    >
      <div className="mx-auto max-w-6xl text-center">
        <h1
          ref={titleRef}
          className="mb-8 text-6xl font-bold leading-tight tracking-tight md:text-8xl lg:text-9xl"
        >
          <span className="block text-natural-brown">10万円から</span>
          <span className="block">始める</span>
          <span className="block text-natural-brown">プロフェッショナル</span>
          <span className="block">Web制作</span>
        </h1>

        <p
          ref={subtitleRef}
          className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-gray-600 md:text-2xl"
        >
          余日は大分県を拠点とするデジタルマーケティング企業です。
          <br />
          本質に向き合う余裕を、デジタルで創る。
        </p>

        <div ref={ctaRef} className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <a
            href="#pricing"
            className="group relative overflow-hidden rounded-full bg-natural-brown px-10 py-5 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10">料金プランを見る</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-natural-brown-dark to-natural-brown-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>

          <a
            href="#portfolio"
            className="rounded-full border-2 border-natural-brown px-10 py-5 text-lg font-semibold text-natural-brown transition-all duration-300 hover:bg-natural-brown hover:text-white hover:shadow-xl"
          >
            制作実績を見る
          </a>
        </div>

        {/* スクロールインジケーター */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400">SCROLL</span>
            <svg
              className="h-6 w-6 text-natural-brown"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
