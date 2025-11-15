'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.from(infoRef.current?.children || [], {
        scrollTrigger: {
          trigger: infoRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power4.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          ref={titleRef}
          className="mb-4 text-center text-5xl font-bold md:text-6xl"
        >
          <span className="text-natural-brown">お問い合わせ</span>
        </h2>
        <p className="mb-16 text-center text-xl text-gray-600">
          まずはお気軽にご相談ください
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* コンタクト情報 */}
          <motion.div
            ref={infoRef}
            className="rounded-3xl bg-gradient-to-br from-natural-brown to-natural-brown-dark p-8 text-white md:p-12"
          >
            <h3 className="mb-8 text-3xl font-bold">余日 / YOJITSU</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <svg
                  className="mt-1 h-6 w-6 flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div>
                  <div className="font-semibold">所在地</div>
                  <div className="text-gray-200">大分県</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  className="mt-1 h-6 w-6 flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <div>
                  <div className="font-semibold">電話</div>
                  <a href="tel:080-4692-9681" className="text-gray-200 hover:text-white">
                    080-4692-9681
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  className="mt-1 h-6 w-6 flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <div className="font-semibold">メール</div>
                  <a
                    href="mailto:yamada@yojitu.com"
                    className="text-gray-200 hover:text-white"
                  >
                    yamada@yojitu.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  className="mt-1 h-6 w-6 flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <div className="font-semibold">営業時間</div>
                  <div className="text-gray-200">10:00 - 22:00</div>
                  <div className="text-sm text-gray-300">（定休日なし）</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  className="mt-1 h-6 w-6 flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <div>
                  <div className="font-semibold">登録番号</div>
                  <div className="text-gray-200">T9810094141774</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  className="mt-1 h-6 w-6 flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <div className="font-semibold">設立</div>
                  <div className="text-gray-200">2025年5月14日</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* メッセージフォーム */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl bg-white p-8 shadow-2xl md:p-12"
          >
            <h3 className="mb-6 text-2xl font-bold">メッセージを送る</h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block font-semibold text-gray-700">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition-colors focus:border-natural-brown focus:outline-none"
                  placeholder="山田太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-semibold text-gray-700">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition-colors focus:border-natural-brown focus:outline-none"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-semibold text-gray-700">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition-colors focus:border-natural-brown focus:outline-none"
                  placeholder="お問い合わせ内容をご記入ください"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full rounded-full bg-natural-brown py-4 font-semibold text-white transition-all duration-300 hover:bg-natural-brown-dark hover:shadow-xl"
              >
                送信する
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* フッター */}
        <div className="mt-20 text-center text-gray-500">
          <p className="mb-2">
            © 2025 余日 / YOJITSU. All rights reserved.
          </p>
          <p className="text-sm">
            大分から始まる、新しいビジネスの形
          </p>
        </div>
      </div>
    </section>
  );
}
