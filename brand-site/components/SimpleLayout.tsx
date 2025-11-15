'use client';

export default function SimpleLayout() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      {/* ヘッダー */}
      <header className="mb-16">
        <h1 className="mb-2 text-4xl md:text-5xl">余日</h1>
        <p className="text-base text-black/60">10万円から始めるプロフェッショナルなWeb制作</p>
      </header>

      {/* ナビゲーション */}
      <nav className="mb-16">
        <ul className="space-y-3 text-base">
          <li>
            <a href="#about" className="inline-block">
              = About
            </a>
          </li>
          <li>
            <a href="#pricing" className="inline-block">
              = 料金プラン
            </a>
          </li>
          <li>
            <a href="#portfolio" className="inline-block">
              = 制作実績
            </a>
          </li>
          <li>
            <a href="#contact" className="inline-block">
              = お問い合わせ
            </a>
          </li>
        </ul>
      </nav>

      {/* About */}
      <section id="about" className="mb-16">
        <h2 className="mb-6 text-2xl">= About</h2>
        <div className="space-y-4 text-base leading-relaxed text-black/80">
          <p>
            余日は大分県を拠点とするデジタルマーケティング企業です。
          </p>
          <p>
            本質に向き合う余裕を、デジタルで創る。
          </p>
          <p>
            Web制作・ショート動画制作を通じて、あなたのビジネスをサポートします。
          </p>
        </div>
      </section>

      {/* 料金プラン */}
      <section id="pricing" className="mb-16">
        <h2 className="mb-6 text-2xl">= 料金プラン</h2>
        <div className="space-y-8">
          {/* 10万円プラン */}
          <div>
            <h3 className="mb-2 text-lg font-medium">10万円プラン</h3>
            <p className="mb-3 text-sm text-black/60">個人事業主、低予算希望者向け</p>
            <ul className="space-y-1 text-sm text-black/80">
              <li>• 1〜5ページ制作</li>
              <li>• レスポンシブ対応</li>
              <li>• 基本SEO対策</li>
              <li>• お問い合わせフォーム</li>
              <li>• SSL設定</li>
            </ul>
          </div>

          {/* 30万円プラン */}
          <div>
            <h3 className="mb-2 text-lg font-medium">30万円プラン（おすすめ）</h3>
            <p className="mb-3 text-sm text-black/60">ブログ更新・Web集客志向</p>
            <ul className="space-y-1 text-sm text-black/80">
              <li>• 10万円プラン全機能</li>
              <li>• WordPress/軽量CMS</li>
              <li>• Analytics設定</li>
              <li>• 詳細SEO対策</li>
              <li>• SNS連携</li>
              <li>• 1ヶ月無料サポート</li>
            </ul>
          </div>

          {/* カスタムプラン */}
          <div>
            <h3 className="mb-2 text-lg font-medium">カスタムプラン</h3>
            <p className="mb-3 text-sm text-black/60">本格的なシステム開発</p>
            <ul className="space-y-1 text-sm text-black/80">
              <li>• 完全オリジナル開発</li>
              <li>• 会員・決済機能</li>
              <li>• API連携</li>
              <li>• 継続保守サポート</li>
              <li>• 専任担当者</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="text-sm leading-relaxed text-black/70">
            創業者が一人で対応することで、コストを大幅に削減。ディレクター、デザイナー、エンジニアなど通常8職種が必要なWeb制作を、一人で効率的に行うことで、高品質ながら低価格を実現しています。
          </p>
        </div>
      </section>

      {/* 制作実績 */}
      <section id="portfolio" className="mb-16">
        <h2 className="mb-6 text-2xl">= 制作実績</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-base font-medium">大分IT移住プロモーション</h3>
            <p className="mb-1 text-xs text-black/50">ランディングページ</p>
            <p className="text-sm leading-relaxed text-black/70">
              大分県のIT人材誘致を目的としたランディングページ。モダンなデザインと効果的なCTAで高いコンバージョンを実現。
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-base font-medium">余日コーポレートサイト</h3>
            <p className="mb-1 text-xs text-black/50">コーポレートサイト</p>
            <p className="text-sm leading-relaxed text-black/70">
              自社サイトとして、ブランドアイデンティティを表現。シンプルで洗練されたデザインが特徴。
            </p>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="mb-16">
        <h2 className="mb-6 text-2xl">= お問い合わせ</h2>
        <div className="space-y-4 text-sm">
          <div>
            <div className="mb-1 text-xs text-black/50">ADDRESS</div>
            <div>大分県</div>
          </div>
          <div>
            <div className="mb-1 text-xs text-black/50">PHONE</div>
            <a href="tel:080-4692-9681">080-4692-9681</a>
          </div>
          <div>
            <div className="mb-1 text-xs text-black/50">EMAIL</div>
            <a href="mailto:yamada@yojitu.com">yamada@yojitu.com</a>
          </div>
          <div>
            <div className="mb-1 text-xs text-black/50">HOURS</div>
            <div>10:00 - 22:00（定休日なし）</div>
          </div>
          <div>
            <div className="mb-1 text-xs text-black/50">ESTABLISHED</div>
            <div>2025.05.14</div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-border pt-8 text-xs text-black/40">
        <p>© 2025 余日 / YOJITSU</p>
      </footer>
    </div>
  );
}
