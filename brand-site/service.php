<?php
require_once __DIR__ . '/includes/config.php';

define('PAGE_TITLE', 'サービス');
define('PAGE_DESCRIPTION', '余日（ヨジツ）のサービス一覧。Webサイト制作、LP制作、ショート動画制作をマーケティング視点で提供いたします。');

$breadcrumb_items = [
    ['name' => 'ホーム', 'url' => SITE_URL . BASE_PATH . '/'],
    ['name' => 'サービス', 'url' => SITE_URL . BASE_PATH . '/service.php']
];

require_once __DIR__ . '/includes/header.php';
?>

<style>
.service-detail-card {
    background-color: var(--color-white);
    border-radius: var(--radius-lg);
    padding: var(--spacing-2xl);
    box-shadow: var(--shadow-md);
    margin-bottom: var(--spacing-2xl);
}

.service-detail-header {
    text-align: center;
    margin-bottom: var(--spacing-xl);
}

.service-detail-icon {
    width: 80px;
    height: 80px;
    background-color: var(--color-bg-mint);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: var(--color-accent-teal);
    margin: 0 auto var(--spacing-md);
}

.service-detail-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
}

.service-detail-price {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-accent-orange);
    margin-bottom: var(--spacing-md);
}

.service-detail-description {
    font-size: 1.125rem;
    line-height: 1.9;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-xl);
}

.service-features {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-xl);
}

.service-feature-item {
    background-color: var(--color-base);
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-sm);
}

.service-feature-icon {
    color: var(--color-accent-teal);
    font-size: 1.25rem;
    margin-top: 4px;
}

.service-feature-content h4 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 4px;
}

.service-feature-content p {
    color: var(--color-text-secondary);
    line-height: 1.7;
    font-size: 0.9375rem;
}

.service-process {
    margin-bottom: var(--spacing-xl);
}

.service-process-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: var(--spacing-md);
    text-align: center;
}

.process-steps {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
}

.process-step {
    display: flex;
    gap: var(--spacing-md);
}

.process-step-number {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    background-color: var(--color-accent-teal);
    color: var(--color-white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
}

.process-step-content h4 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 4px;
}

.process-step-content p {
    color: var(--color-text-secondary);
    line-height: 1.7;
    font-size: 0.9375rem;
}

@media (min-width: 768px) {
    .service-features {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>

<!-- ページヘッダー -->
<section class="page-header">
    <div class="container">
        <span class="section-title-en">SERVICE</span>
        <h1 class="page-header-title">サービス</h1>
        <p class="page-header-description">
            3つの柱で、お客様のビジネスをトータルサポートいたします。
        </p>
    </div>
</section>

<!-- Webサイト制作 -->
<section class="section" id="website">
    <div class="container">
        <div class="service-detail-card fade-in">
            <div class="service-detail-header">
                <div class="service-detail-icon">
                    <i class="fas fa-desktop"></i>
                </div>
                <h2 class="service-detail-title">Webサイト制作</h2>
                <p class="service-detail-price">¥200,000<span style="font-size: 1.25rem; font-weight: 400;">~</span></p>
                <p class="service-detail-description">
                    マーケティング視点を活かした、成果の出るWebサイトを制作します。<br>
                    SEO対策、ユーザビリティ、コンバージョン最適化を考慮した設計で、<br>
                    お客様のビジネス目標達成をサポートいたします。
                </p>
            </div>

            <div class="service-features">
                <div class="service-feature-item">
                    <div class="service-feature-icon"><i class="fas fa-mobile-alt"></i></div>
                    <div class="service-feature-content">
                        <h4>レスポンシブデザイン</h4>
                        <p>PC・タブレット・スマートフォンすべてのデバイスに最適化されたデザインを提供します。</p>
                    </div>
                </div>

                <div class="service-feature-item">
                    <div class="service-feature-icon"><i class="fas fa-search"></i></div>
                    <div class="service-feature-content">
                        <h4>SEO最適化</h4>
                        <p>検索エンジンで上位表示されるよう、構造化データやメタタグを最適化します。</p>
                    </div>
                </div>

                <div class="service-feature-item">
                    <div class="service-feature-icon"><i class="fas fa-tachometer-alt"></i></div>
                    <div class="service-feature-content">
                        <h4>高速表示</h4>
                        <p>画像最適化やコード圧縮により、ページの高速表示を実現します。</p>
                    </div>
                </div>

                <div class="service-feature-item">
                    <div class="service-feature-icon"><i class="fas fa-tools"></i></div>
                    <div class="service-feature-content">
                        <h4>CMS導入可能</h4>
                        <p>WordPress等のCMSを導入し、お客様ご自身で簡単に更新できる仕組みを構築します。</p>
                    </div>
                </div>
            </div>

            <div class="service-process">
                <h3 class="service-process-title">制作の流れ</h3>
                <div class="process-steps">
                    <div class="process-step">
                        <div class="process-step-number">1</div>
                        <div class="process-step-content">
                            <h4>ヒアリング</h4>
                            <p>お客様のビジネス目標、ターゲット、要望を詳しくお伺いします。</p>
                        </div>
                    </div>
                    <div class="process-step">
                        <div class="process-step-number">2</div>
                        <div class="process-step-content">
                            <h4>企画・設計</h4>
                            <p>サイトマップ、ワイヤーフレームを作成し、全体の構成を設計します。</p>
                        </div>
                    </div>
                    <div class="process-step">
                        <div class="process-step-number">3</div>
                        <div class="process-step-content">
                            <h4>デザイン</h4>
                            <p>ブランドイメージに合わせた魅力的なデザインを制作します。</p>
                        </div>
                    </div>
                    <div class="process-step">
                        <div class="process-step-number">4</div>
                        <div class="process-step-content">
                            <h4>開発・実装</h4>
                            <p>最新の技術を使用し、高品質なコーディングを行います。</p>
                        </div>
                    </div>
                    <div class="process-step">
                        <div class="process-step-number">5</div>
                        <div class="process-step-content">
                            <h4>テスト・納品</h4>
                            <p>動作確認を行い、問題がなければ納品いたします。</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style="text-align: center;">
                <a href="<?php echo BASE_PATH; ?>/contact.php" class="btn btn-primary">
                    お問い合わせ <i class="fas fa-envelope btn-icon"></i>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- LP制作 -->
<section class="section section-bg-mint" id="lp">
    <div class="container">
        <div class="service-detail-card fade-in">
            <div class="service-detail-header">
                <div class="service-detail-icon">
                    <i class="fas fa-file-alt"></i>
                </div>
                <h2 class="service-detail-title">LP制作</h2>
                <p class="service-detail-price">¥50,000<span style="font-size: 1.25rem; font-weight: 400;">~</span></p>
                <p class="service-detail-description">
                    コンバージョンに特化した、効果的なランディングページを制作します。<br>
                    広告からの流入を最大限に活かし、お問い合わせ・購入につなげる<br>
                    戦略的なLPをご提供いたします。
                </p>
            </div>

            <div class="service-features">
                <div class="service-feature-item">
                    <div class="service-feature-icon"><i class="fas fa-bullseye"></i></div>
                    <div class="service-feature-content">
                        <h4>CTA最適化</h4>
                        <p>ユーザーの行動を促すCTA（Call To Action）を戦略的に配置します。</p>
                    </div>
                </div>

                <div class="service-feature-item">
                    <div class="service-feature-icon"><i class="fas fa-bolt"></i></div>
                    <div class="service-feature-content">
                        <h4>高速表示</h4>
                        <p>離脱率を下げるため、ページの高速表示を徹底的に最適化します。</p>
                    </div>
                </div>

                <div class="service-feature-item">
                    <div class="service-feature-icon"><i class="fas fa-chart-line"></i></div>
                    <div class="service-feature-content">
                        <h4>A/Bテスト対応</h4>
                        <p>効果測定とA/Bテストに対応し、継続的な改善が可能です。</p>
                    </div>
                </div>

                <div class="service-feature-item">
                    <div class="service-feature-icon"><i class="fas fa-ad"></i></div>
                    <div class="service-feature-content">
                        <h4>広告連携</h4>
                        <p>Google広告、Facebook広告などとスムーズに連携します。</p>
                    </div>
                </div>
            </div>

            <div style="text-align: center;">
                <a href="<?php echo BASE_PATH; ?>/contact.php" class="btn btn-primary">
                    お問い合わせ <i class="fas fa-envelope btn-icon"></i>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- ショート動画制作 -->
<section class="section" id="video">
    <div class="container">
        <div class="service-detail-card fade-in">
            <div class="service-detail-header">
                <div class="service-detail-icon">
                    <i class="fas fa-video"></i>
                </div>
                <h2 class="service-detail-title">ショート動画制作</h2>
                <p class="service-detail-price">
                    ¥20,000<span style="font-size: 1.25rem; font-weight: 400;">/本</span><br>
                    <span style="font-size: 1.5rem;">10本セット ¥150,000</span>
                </p>
                <p class="service-detail-description">
                    SNSで拡散される、魅力的なショート動画を撮影・編集いたします。<br>
                    YouTube Shorts、Instagram Reels、TikTokなど、<br>
                    各プラットフォームに最適化した動画を制作します。
                </p>
            </div>

            <div class="service-features">
                <div class="service-feature-item">
                    <div class="service-feature-icon"><i class="fas fa-camera"></i></div>
                    <div class="service-feature-content">
                        <h4>撮影・編集込み</h4>
                        <p>プロの撮影・編集技術で、クオリティの高い動画を制作します。</p>
                    </div>
                </div>

                <div class="service-feature-item">
                    <div class="service-feature-icon"><i class="fas fa-hashtag"></i></div>
                    <div class="service-feature-content">
                        <h4>SNS最適化</h4>
                        <p>各SNSのアルゴリズムやトレンドを考慮した動画を制作します。</p>
                    </div>
                </div>

                <div class="service-feature-item">
                    <div class="service-feature-icon"><i class="fas fa-lightbulb"></i></div>
                    <div class="service-feature-content">
                        <h4>企画提案</h4>
                        <p>バズる動画の企画からご提案いたします。</p>
                    </div>
                </div>

                <div class="service-feature-item">
                    <div class="service-feature-icon"><i class="fas fa-percentage"></i></div>
                    <div class="service-feature-content">
                        <h4>10本セット割引</h4>
                        <p>10本セットで¥150,000（1本あたり¥15,000）とお得です。</p>
                    </div>
                </div>
            </div>

            <div style="text-align: center;">
                <a href="<?php echo BASE_PATH; ?>/contact.php" class="btn btn-primary">
                    お問い合わせ <i class="fas fa-envelope btn-icon"></i>
                </a>
            </div>
        </div>
    </div>
</section>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
