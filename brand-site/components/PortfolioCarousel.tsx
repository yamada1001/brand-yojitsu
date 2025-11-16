'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolios = [
    {
      title: '大分IT移住プロモーション',
      category: 'Landing Page',
      description: '大分県のIT人材誘致を目的としたランディングページ。モダンなデザインと効果的なCTAで高いコンバージョンを実現。Next.js + TypeScriptで高速なページを実現しました。',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      year: '2024',
    },
    {
      title: '余日コーポレートサイト',
      category: 'Corporate Site',
      description: '自社サイトとして、ブランドアイデンティティを表現。シンプルで洗練されたデザインが特徴。ミニマルなUIと滑らかなアニメーションで訪問者を魅了します。',
      tags: ['React', 'Framer Motion', 'Responsive'],
      year: '2025',
    },
    {
      title: 'ECサイト構築',
      category: 'E-commerce',
      description: '地域の特産品を販売するECサイト。決済システムの統合から在庫管理まで、包括的なソリューションを提供。ユーザビリティを重視した設計です。',
      tags: ['Shopify', 'API Integration', 'SEO'],
      year: '2024',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolios.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [portfolios.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolios.length) % portfolios.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolios.length);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">制作実績</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            多様な業界で培った経験と実績。お客様のビジネスを成功に導きます。
          </p>
        </motion.div>

        <div className="relative">
          {/* カルーセルコンテンツ */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="p-12 md:p-16 min-h-[400px] flex flex-col justify-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                    {portfolios[currentIndex].category}
                  </span>
                  <span className="text-sm text-gray-400 ml-4">
                    {portfolios[currentIndex].year}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  {portfolios[currentIndex].title}
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl">
                  {portfolios[currentIndex].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {portfolios[currentIndex].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ナビゲーションボタン */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
              aria-label="前へ"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* ドットインジケーター */}
            <div className="flex gap-2">
              {portfolios.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-black w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`スライド ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
              aria-label="次へ"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
