'use client';

import { motion } from 'framer-motion';

export default function StudioHero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            本質に向き合う余裕を、
            <br />
            デジタルで創る。
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            10万円から始める、プロフェッショナルなWeb制作。
            <br />
            大分県を拠点に、あなたのビジネスを次のステージへ。
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-black text-white text-base font-medium rounded-full hover:bg-gray-800 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              無料で相談する
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>

            <motion.a
              href="#pricing"
              className="px-8 py-4 border-2 border-black text-black text-base font-medium rounded-full hover:bg-black hover:text-white transition-all w-full sm:w-auto justify-center flex items-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              料金プランを見る
            </motion.a>
          </motion.div>

          {/* スクロールインジケーター */}
          <motion.div
            className="mt-24 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll</span>
            <motion.div
              className="w-[1px] h-12 bg-gray-300"
              animate={{ height: [48, 32, 48] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
