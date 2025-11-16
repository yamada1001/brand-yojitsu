<?php
require_once __DIR__ . '/includes/config.php';

define('PAGE_TITLE', '');
define('PAGE_DESCRIPTION', 'Webサイト制作、LP制作、ショート動画制作を提供する余日（ヨジツ）の公式サイト。マーケティング視点を活かした制作で、お客様のビジネスをサポートします。');

$breadcrumb_items = [
    ['name' => 'ホーム', 'url' => SITE_URL . BASE_PATH . '/']
];

require_once __DIR__ . '/includes/header.php';
?>

<style>
/* トップページ専用スタイル */
.hero-section {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-bg-beige);
    position: relative;
    overflow: hidden;
    padding: var(--spacing-2xl) var(--spacing-md);
}

.hero-decoration {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 0;
}

.hero-decoration .decoration-circle-hero-1 {
    width: 200px;
    height: 200px;
    background-color: var(--color-accent-yellow);
    opacity: 0.6;
    position: absolute;
    border-radius: 50%;
    top: 10%;
    right: 10%;
}

.hero-decoration .decoration-circle-hero-2 {
    width: 150px;
    height: 150px;
    background-color: var(--color-accent-teal);
    opacity: 0.6;
    position: absolute;
    border-radius: 50%;
    bottom: 20%;
    left: 5%;
}

.hero-decoration .decoration-capsule-hero {
    width: 120px;
    height: 240px;
    background-color: var(--color-accent-orange);
    opacity: 0.6;
    position: absolute;
    border-radius: var(--radius-pill);
    top: 30%;
    left: 15%;
}

.hero-content {
    max-width: 800px;
    text-align: center;
    position: relative;
    z-index: 1;
}

.hero-title {
    font-size: 3rem;
    font-weight: 900;
    line-height: 1.3;
    margin-bottom: var(--spacing-md);
    color: var(--color-text-primary);
}

.hero-title-highlight {
    color: var(--color-accent-teal);
}

.hero-subtitle {
    font-size: 1.25rem;
    line-height: 1.8;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-xl);
}

.hero-buttons {
    display: flex;
    gap: var(--spacing-md);
    justify-content: center;
    flex-wrap: wrap;
}

.service-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
}

.service-card {
    background-color: var(--color-white);
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    box-shadow: var(--shadow-md);
    transition: all var(--transition-normal);
}

.service-card:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
}

.service-card-icon {
    width: 60px;
    height: 60px;
    background-color: var(--color-bg-mint);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    color: var(--color-accent-teal);
    margin-bottom: var(--spacing-md);
}

.service-card-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
}

.service-card-price {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--color-accent-orange);
    margin-bottom: var(--spacing-sm);
}

.service-card-description {
    color: var(--color-text-secondary);
    line-height: 1.8;
    margin-bottom: var(--spacing-md);
}

.service-card-features {
    list-style: none;
    margin-bottom: var(--spacing-md);
}

.service-card-features li {
    padding: var(--spacing-xs) 0;
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    color: var(--color-text-secondary);
}

.service-card-features i {
    color: var(--color-accent-teal);
}

.works-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
}

.work-item {
    background-color: var(--color-white);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: all var(--transition-normal);
}

.work-item:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
}

.work-item-image {
    width: 100%;
    height: 250px;
    overflow: hidden;
    background-color: var(--color-base);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-light);
}

.work-item-content {
    padding: var(--spacing-lg);
}

.work-item-category {
    display: inline-block;
    padding: 4px 12px;
    background-color: var(--color-accent-teal);
    color: var(--color-white);
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
}

.work-item-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
}

.work-item-description {
    color: var(--color-text-secondary);
    line-height: 1.8;
}

.news-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.news-item {
    background-color: var(--color-white);
    border-radius: var(--radius-md);
    padding: var(--spacing-md);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-fast);
    display: flex;
    gap: var(--spacing-md);
    align-items: center;
}

.news-item:hover {
    box-shadow: var(--shadow-md);
}

.news-date {
    font-family: var(--font-en);
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    white-space: nowrap;
}

.news-title {
    flex: 1;
    font-weight: 500;
    color: var(--color-text-primary);
}

.news-arrow {
    color: var(--color-accent-teal);
    transition: transform var(--transition-fast);
}

.news-item:hover .news-arrow {
    transform: translateX(4px);
}

.cta-section {
    background: linear-gradient(135deg, var(--color-accent-teal) 0%, #6BBFB3 100%);
    color: var(--color-white);
    text-align: center;
    padding: var(--spacing-3xl) var(--spacing-md);
    position: relative;
    overflow: hidden;
}

.cta-content {
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.cta-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: var(--spacing-md);
}

.cta-description {
    font-size: 1.125rem;
    line-height: 1.8;
    margin-bottom: var(--spacing-xl);
    opacity: 0.9;
}

@media (min-width: 768px) {
    .hero-title {
        font-size: 4rem;
    }

    .service-list {
        grid-template-columns: repeat(3, 1fr);
    }

    .works-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .news-item {
        flex-direction: row;
    }
}

@media (min-width: 1024px) {
    .hero-title {
        font-size: 4.5rem;
    }
}
</style>

<!-- ヒーローセクション -->
<section class="hero-section">
    <div class="hero-decoration">
        <div class="decoration-circle-hero-1" data-speed="0.3"></div>
        <div class="decoration-circle-hero-2" data-speed="0.5"></div>
        <div class="decoration-capsule-hero" data-speed="0.4"></div>
    </div>
    <div class="hero-content fade-in">
        <h1 class="hero-title">
            マーケティング視点を活かした<br>
            <span class="hero-title-highlight">Web制作・動画制作</span>
        </h1>
        <p class="hero-subtitle">
            お客様のビジネスを成長させる、<br>
            戦略的なWebサイト・LP・ショート動画を制作いたします。
        </p>
        <div class="hero-buttons">
            <a href="<?php echo BASE_PATH; ?>/service.php" class="btn btn-primary">
                サービス一覧 <i class="fas fa-arrow-right btn-icon"></i>
            </a>
            <a href="<?php echo BASE_PATH; ?>/contact.php" class="btn btn-secondary">
                お問い合わせ <i class="fas fa-envelope btn-icon"></i>
            </a>
        </div>
    </div>
</section>

<!-- サービスセクション -->
<section class="section section-bg-mint">
    <div class="container">
        <div class="fade-in">
            <span class="section-title-en">SERVICE</span>
            <h2 class="section-title">サービス</h2>
            <p class="section-description">
                3つの柱で、お客様のビジネスをトータルサポートいたします。
            </p>
        </div>

        <div class="service-list">
            <div class="service-card scale-in">
                <div class="service-card-icon">
                    <i class="fas fa-desktop"></i>
                </div>
                <h3 class="service-card-title">Webサイト制作</h3>
                <p class="service-card-price">¥200,000<span style="font-size: 1rem; font-weight: 400;">~</span></p>
                <p class="service-card-description">
                    マーケティング視点を活かした、成果の出るWebサイトを制作します。
                </p>
                <ul class="service-card-features">
                    <li><i class="fas fa-check"></i> レスポンシブデザイン</li>
                    <li><i class="fas fa-check"></i> SEO最適化</li>
                    <li><i class="fas fa-check"></i> CMS導入可能</li>
                    <li><i class="fas fa-check"></i> 運用サポート</li>
                </ul>
                <a href="<?php echo BASE_PATH; ?>/service.php#website" class="btn btn-primary">
                    詳しく見る <i class="fas fa-arrow-right btn-icon"></i>
                </a>
            </div>

            <div class="service-card scale-in">
                <div class="service-card-icon">
                    <i class="fas fa-file-alt"></i>
                </div>
                <h3 class="service-card-title">LP制作</h3>
                <p class="service-card-price">¥50,000<span style="font-size: 1rem; font-weight: 400;">~</span></p>
                <p class="service-card-description">
                    コンバージョンに特化した、効果的なランディングページを制作します。
                </p>
                <ul class="service-card-features">
                    <li><i class="fas fa-check"></i> 高速表示</li>
                    <li><i class="fas fa-check"></i> CTA最適化</li>
                    <li><i class="fas fa-check"></i> A/Bテスト対応</li>
                    <li><i class="fas fa-check"></i> 広告連携</li>
                </ul>
                <a href="<?php echo BASE_PATH; ?>/service.php#lp" class="btn btn-primary">
                    詳しく見る <i class="fas fa-arrow-right btn-icon"></i>
                </a>
            </div>

            <div class="service-card scale-in">
                <div class="service-card-icon">
                    <i class="fas fa-video"></i>
                </div>
                <h3 class="service-card-title">ショート動画制作</h3>
                <p class="service-card-price">¥20,000<span style="font-size: 1rem; font-weight: 400;">/本</span></p>
                <p class="service-card-description">
                    SNSで拡散される、魅力的なショート動画を撮影・編集いたします。
                </p>
                <ul class="service-card-features">
                    <li><i class="fas fa-check"></i> 撮影・編集込み</li>
                    <li><i class="fas fa-check"></i> SNS最適化</li>
                    <li><i class="fas fa-check"></i> 10本セット割引</li>
                    <li><i class="fas fa-check"></i> 企画提案</li>
                </ul>
                <a href="<?php echo BASE_PATH; ?>/service.php#video" class="btn btn-primary">
                    詳しく見る <i class="fas fa-arrow-right btn-icon"></i>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- 実績セクション -->
<section class="section">
    <div class="container">
        <div class="fade-in">
            <span class="section-title-en">WORKS</span>
            <h2 class="section-title">制作実績</h2>
            <p class="section-description">
                これまで手がけた制作実績の一部をご紹介いたします。
            </p>
        </div>

        <div class="works-grid">
            <a href="https://youtube.com/shorts/sONqhmELlT8?si=2NvrLu1BnFjWnCF4" target="_blank" rel="noopener noreferrer" class="work-item">
                <div class="work-item-image">
                    <i class="fab fa-youtube" style="font-size: 4rem;"></i>
                </div>
                <div class="work-item-content">
                    <span class="work-item-category">動画制作</span>
                    <h3 class="work-item-title">ショート動画制作実績</h3>
                    <p class="work-item-description">
                        YouTubeショート動画の制作実績です。撮影から編集までワンストップで対応いたしました。
                    </p>
                </div>
            </a>

            <a href="https://migration.oita-creative.jp/lp2/" target="_blank" rel="noopener noreferrer" class="work-item">
                <div class="work-item-image">
                    <i class="fas fa-file-alt" style="font-size: 4rem;"></i>
                </div>
                <div class="work-item-content">
                    <span class="work-item-category">LP制作</span>
                    <h3 class="work-item-title">LP制作実績 #1</h3>
                    <p class="work-item-description">
                        コンバージョンを最大化するランディングページを制作いたしました。
                    </p>
                </div>
            </a>

            <a href="https://migration.oita-creative.jp/2025/lp/" target="_blank" rel="noopener noreferrer" class="work-item">
                <div class="work-item-image">
                    <i class="fas fa-file-alt" style="font-size: 4rem;"></i>
                </div>
                <div class="work-item-content">
                    <span class="work-item-category">LP制作</span>
                    <h3 class="work-item-title">LP制作実績 #2</h3>
                    <p class="work-item-description">
                        ユーザー体験を重視したランディングページを制作いたしました。
                    </p>
                </div>
            </a>
        </div>

        <div style="text-align: center; margin-top: var(--spacing-xl);">
            <a href="<?php echo BASE_PATH; ?>/works.php" class="btn btn-orange">
                すべての実績を見る <i class="fas fa-arrow-right btn-icon"></i>
            </a>
        </div>
    </div>
</section>

<!-- お知らせセクション -->
<section class="section section-bg-blue">
    <div class="container">
        <div class="fade-in">
            <span class="section-title-en">NEWS</span>
            <h2 class="section-title">お知らせ</h2>
        </div>

        <div class="news-list">
            <a href="<?php echo BASE_PATH; ?>/news.php" class="news-item fade-in">
                <span class="news-date">2024.01.15</span>
                <span class="news-title">Webサイトをリニューアルしました</span>
                <i class="fas fa-arrow-right news-arrow"></i>
            </a>
            <a href="<?php echo BASE_PATH; ?>/news.php" class="news-item fade-in">
                <span class="news-date">2024.01.10</span>
                <span class="news-title">ショート動画制作プラン10本セット割引開始</span>
                <i class="fas fa-arrow-right news-arrow"></i>
            </a>
            <a href="<?php echo BASE_PATH; ?>/news.php" class="news-item fade-in">
                <span class="news-date">2024.01.05</span>
                <span class="news-title">新年のご挨拶</span>
                <i class="fas fa-arrow-right news-arrow"></i>
            </a>
        </div>

        <div style="text-align: center; margin-top: var(--spacing-xl);">
            <a href="<?php echo BASE_PATH; ?>/news.php" class="btn btn-primary">
                お知らせ一覧 <i class="fas fa-arrow-right btn-icon"></i>
            </a>
        </div>
    </div>
</section>

<!-- CTAセクション -->
<section class="cta-section">
    <div class="cta-content fade-in">
        <h2 class="cta-title">お気軽にご相談ください</h2>
        <p class="cta-description">
            Webサイト制作・LP制作・ショート動画制作のご相談は、<br>
            お問い合わせフォームまたはメールにてお気軽にご連絡ください。
        </p>
        <a href="<?php echo BASE_PATH; ?>/contact.php" class="btn btn-secondary" style="background-color: var(--color-white); color: var(--color-accent-teal);">
            お問い合わせ <i class="fas fa-envelope btn-icon"></i>
        </a>
    </div>
</section>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
