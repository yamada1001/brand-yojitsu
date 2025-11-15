'use client';

import { motion } from 'framer-motion';

export default function ContactDesigner() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-32">
      {/* 背景エフェクト */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-accent-1 opacity-10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent-3 opacity-10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 block text-sm font-medium tracking-widest text-white/40">CONTACT</span>
          <h2 className="gradient-text text-5xl font-bold md:text-6xl lg:text-7xl">お問い合わせ</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">まずはお気軽にご相談ください</p>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2">
          {/* コンタクト情報 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8 md:p-12"
          >
            <h3 className="mb-12 text-3xl font-bold text-white">余日 / YOJITSU</h3>

            <div className="space-y-8">
              <div>
                <div className="mb-2 text-xs font-medium tracking-widest text-white/40">ADDRESS</div>
                <div className="text-lg text-white">大分県</div>
              </div>

              <div>
                <div className="mb-2 text-xs font-medium tracking-widest text-white/40">PHONE</div>
                <a
                  href="tel:080-4692-9681"
                  className="group text-lg text-white transition-colors"
                >
                  <span className="bg-gradient-to-r from-accent-1 to-accent-2 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-300 group-hover:bg-[length:100%_2px]">
                    080-4692-9681
                  </span>
                </a>
              </div>

              <div>
                <div className="mb-2 text-xs font-medium tracking-widest text-white/40">EMAIL</div>
                <a
                  href="mailto:yamada@yojitu.com"
                  className="group text-lg text-white transition-colors"
                >
                  <span className="bg-gradient-to-r from-accent-1 to-accent-2 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-300 group-hover:bg-[length:100%_2px]">
                    yamada@yojitu.com
                  </span>
                </a>
              </div>

              <div>
                <div className="mb-2 text-xs font-medium tracking-widest text-white/40">HOURS</div>
                <div className="text-lg text-white">10:00 - 22:00</div>
                <div className="text-sm text-white/50">定休日なし</div>
              </div>

              <div>
                <div className="mb-2 text-xs font-medium tracking-widest text-white/40">REGISTRATION</div>
                <div className="text-lg text-white">T9810094141774</div>
              </div>

              <div>
                <div className="mb-2 text-xs font-medium tracking-widest text-white/40">ESTABLISHED</div>
                <div className="text-lg text-white">2025.05.14</div>
              </div>
            </div>
          </motion.div>

          {/* メッセージフォーム */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8 md:p-12"
          >
            <h3 className="mb-8 text-2xl font-bold text-white">メッセージを送る</h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/60">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 backdrop-blur-sm transition-all focus:border-accent-1 focus:outline-none"
                  placeholder="山田太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/60">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 backdrop-blur-sm transition-all focus:border-accent-1 focus:outline-none"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/60">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 backdrop-blur-sm transition-all focus:border-accent-1 focus:outline-none"
                  placeholder="お問い合わせ内容をご記入ください"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="hover-glow w-full rounded-xl bg-gradient-to-r from-accent-1 to-accent-2 py-4 font-semibold text-white"
              >
                送信する
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* フッター */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 border-t border-white/10 pt-12"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/40">© 2025 余日 / YOJITSU. All rights reserved.</p>
            <p className="text-sm text-white/40">大分から始まる、新しいビジネスの形</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
