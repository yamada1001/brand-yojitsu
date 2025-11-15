'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function SimpleLayout() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      {/* ヘッダー */}
      <motion.header
        className="mb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-3 text-5xl md:text-7xl tracking-tight">余日</h1>
        <p className="text-xl text-muted md:text-2xl">10万円から始めるプロフェッショナルなWeb制作</p>
      </motion.header>

      {/* ナビゲーション */}
      <motion.nav
        className="mb-24"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <ul className="flex flex-wrap gap-6 text-sm font-medium md:gap-8 md:text-base">
          <motion.li variants={fadeInUp}>
            <a href="#about" className="hover:text-accent-light transition-colors">
              About
            </a>
          </motion.li>
          <motion.li variants={fadeInUp}>
            <a href="#pricing" className="hover:text-accent-light transition-colors">
              料金プラン
            </a>
          </motion.li>
          <motion.li variants={fadeInUp}>
            <a href="#portfolio" className="hover:text-accent-light transition-colors">
              制作実績
            </a>
          </motion.li>
          <motion.li variants={fadeInUp}>
            <a href="#contact" className="hover:text-accent-light transition-colors">
              お問い合わせ
            </a>
          </motion.li>
        </ul>
      </motion.nav>

      {/* About */}
      <motion.section
        id="about"
        className="mb-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-muted">About</h2>
        <div className="space-y-6 text-lg leading-relaxed md:text-xl">
          <p className="text-foreground">
            余日は大分県を拠点とするデジタルマーケティング企業です。
          </p>
          <p className="text-foreground">
            本質に向き合う余裕を、デジタルで創る。
          </p>
          <p className="text-muted">
            Web制作・ショート動画制作を通じて、あなたのビジネスをサポートします。
          </p>
        </div>
      </motion.section>

      {/* 料金プラン */}
      <motion.section
        id="pricing"
        className="mb-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-12 text-sm font-semibold uppercase tracking-wider text-muted">料金プラン</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {/* 10万円プラン */}
          <motion.div
            className="rounded-2xl border border-border bg-white p-8 transition-shadow hover:shadow-lg"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="mb-2 text-2xl font-semibold">¥100,000</h3>
            <p className="mb-6 text-sm text-muted">個人事業主、低予算希望者向け</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="mr-2 text-accent">✓</span>
                <span>1〜5ページ制作</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-accent">✓</span>
                <span>レスポンシブ対応</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-accent">✓</span>
                <span>基本SEO対策</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-accent">✓</span>
                <span>お問い合わせフォーム</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-accent">✓</span>
                <span>SSL設定</span>
              </li>
            </ul>
          </motion.div>

          {/* 30万円プラン */}
          <motion.div
            className="rounded-2xl border-2 border-accent bg-white p-8 shadow-md transition-shadow hover:shadow-xl"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-2xl font-semibold">¥300,000</h3>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">おすすめ</span>
            </div>
            <p className="mb-6 text-sm text-muted">ブログ更新・Web集客志向</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="mr-2 text-accent">✓</span>
                <span>10万円プラン全機能</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-accent">✓</span>
                <span>WordPress/軽量CMS</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-accent">✓</span>
                <span>Analytics設定</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-accent">✓</span>
                <span>詳細SEO対策</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-accent">✓</span>
                <span>SNS連携</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-accent">✓</span>
                <span>1ヶ月無料サポート</span>
              </li>
            </ul>
          </motion.div>

          {/* カスタムプラン */}
          <motion.div
            className="rounded-2xl border border-border bg-white p-8 transition-shadow hover:shadow-lg"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="mb-2 text-2xl font-semibold">カスタム</h3>
            <p className="mb-6 text-sm text-muted">本格的なシステム開発</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="mr-2 text-accent">✓</span>
                <span>完全オリジナル開発</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-accent">✓</span>
                <span>会員・決済機能</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-accent">✓</span>
                <span>API連携</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-accent">✓</span>
                <span>継続保守サポート</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-accent">✓</span>
                <span>専任担当者</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 rounded-xl bg-white p-8 border border-border">
          <p className="text-sm leading-relaxed text-muted">
            創業者が一人で対応することで、コストを大幅に削減。ディレクター、デザイナー、エンジニアなど通常8職種が必要なWeb制作を、一人で効率的に行うことで、高品質ながら低価格を実現しています。
          </p>
        </div>
      </motion.section>

      {/* 制作実績 */}
      <motion.section
        id="portfolio"
        className="mb-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-12 text-sm font-semibold uppercase tracking-wider text-muted">制作実績</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            className="group cursor-pointer rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-lg"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-xl">🚀</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">大分IT移住プロモーション</h3>
                <p className="text-xs text-muted uppercase tracking-wider">Landing Page</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              大分県のIT人材誘致を目的としたランディングページ。モダンなデザインと効果的なCTAで高いコンバージョンを実現。
            </p>
          </motion.div>

          <motion.div
            className="group cursor-pointer rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-lg"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-xl">💼</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">余日コーポレートサイト</h3>
                <p className="text-xs text-muted uppercase tracking-wider">Corporate Site</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              自社サイトとして、ブランドアイデンティティを表現。シンプルで洗練されたデザインが特徴。
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* お問い合わせ */}
      <motion.section
        id="contact"
        className="mb-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-12 text-sm font-semibold uppercase tracking-wider text-muted">お問い合わせ</h2>
        <div className="rounded-2xl border border-border bg-white p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">Address</div>
                <div className="text-base">大分県</div>
              </div>
              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">Phone</div>
                <a href="tel:080-4692-9681" className="text-base hover:text-accent-light transition-colors">
                  080-4692-9681
                </a>
              </div>
              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">Email</div>
                <a href="mailto:yamada@yojitu.com" className="text-base hover:text-accent-light transition-colors">
                  yamada@yojitu.com
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">Hours</div>
                <div className="text-base">10:00 - 22:00</div>
                <div className="text-sm text-muted">定休日なし</div>
              </div>
              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">Established</div>
                <div className="text-base">2025.05.14</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* フッター */}
      <footer className="border-t border-border pt-12 pb-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
          <p>© 2025 余日 / YOJITSU. All rights reserved.</p>
          <p className="text-xs">本質に向き合う余裕を、デジタルで創る。</p>
        </div>
      </footer>
    </div>
  );
}
