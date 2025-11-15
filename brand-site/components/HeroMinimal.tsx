'use client';

import { useEffect, useRef } from 'react';

export default function HeroMinimal() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // シンプルなフェードイン
    if (heroRef.current) {
      heroRef.current.style.opacity = '0';
      setTimeout(() => {
        if (heroRef.current) {
          heroRef.current.style.transition = 'opacity 0.8s ease-out';
          heroRef.current.style.opacity = '1';
        }
      }, 100);
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center bg-white px-6 py-32 md:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">
          {/* 小さなラベル */}
          <div className="mb-8">
            <span className="text-sm font-medium tracking-wider text-gray-400">
              WEB PRODUCTION
            </span>
          </div>

          {/* メインタイトル - シンプルで大きく */}
          <h1 className="mb-12 text-5xl font-normal leading-tight tracking-tight text-gray-900 md:text-7xl lg:text-8xl">
            10万円から
            <br />
            始める
            <br />
            <span className="text-accent">プロフェッショナル</span>
            <br />
            Web制作
          </h1>

          {/* サブテキスト - 控えめに */}
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            余日は大分県を拠点とするデジタルマーケティング企業です。
            本質に向き合う余裕を、デジタルで創る。
          </p>

          {/* CTA - シンプルなボタン */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center border border-gray-900 bg-gray-900 px-8 py-4 text-base font-medium text-white transition-all hover:bg-gray-800"
            >
              料金プランを見る
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center border border-gray-300 bg-white px-8 py-4 text-base font-medium text-gray-900 transition-all hover:border-gray-900"
            >
              制作実績を見る
            </a>
          </div>
        </div>

        {/* 下部のスクロールヒント - 控えめ */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 opacity-40">
            <span className="text-xs tracking-widest text-gray-400">SCROLL</span>
            <div className="h-12 w-px bg-gray-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
