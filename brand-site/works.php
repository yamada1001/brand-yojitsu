<?php
require_once __DIR__ . '/includes/config.php';

define('PAGE_TITLE', '制作実績');
define('PAGE_DESCRIPTION', '余日（ヨジツ）の制作実績をご紹介します。Webサイト制作、LP制作、ショート動画制作の実績をご覧いただけます。');

$breadcrumb_items = [
    ['name' => 'ホーム', 'url' => SITE_URL . BASE_PATH . '/'],
    ['name' => '制作実績', 'url' => SITE_URL . BASE_PATH . '/works.php']
];

require_once __DIR__ . '/includes/header.php';
?>

<!-- ページヘッダー -->
<section class="page-header">
    <div class="container">
        <span class="section-title-en">WORKS</span>
        <h1 class="page-header-title">制作実績</h1>
        <p class="page-header-description">
            これまで手がけた制作実績をご紹介いたします。
        </p>
    </div>
</section>

<!-- 実績一覧 -->
<section class="section">
    <div class="container">
        <div class="works-grid">
            <a href="https://youtube.com/shorts/sONqhmELlT8?si=2NvrLu1BnFjWnCF4" target="_blank" rel="noopener noreferrer" class="work-item fade-in">
                <div class="work-item-image">
                    <i class="fab fa-youtube" style="font-size: 4rem;"></i>
                </div>
                <div class="work-item-content">
                    <span class="work-item-category">動画制作</span>
                    <h3 class="work-item-title">ショート動画制作実績</h3>
                    <p class="work-item-description">
                        YouTubeショート動画の制作実績です。撮影から編集までワンストップで対応いたしました。視聴者の興味を引くストーリー構成と、SNSで拡散されやすい編集テクニックを駆使しています。
                    </p>
                </div>
            </a>

            <a href="https://migration.oita-creative.jp/lp2/" target="_blank" rel="noopener noreferrer" class="work-item fade-in">
                <div class="work-item-image">
                    <i class="fas fa-file-alt" style="font-size: 4rem;"></i>
                </div>
                <div class="work-item-content">
                    <span class="work-item-category">LP制作</span>
                    <h3 class="work-item-title">LP制作実績 #1</h3>
                    <p class="work-item-description">
                        コンバージョンを最大化するランディングページを制作いたしました。ユーザーの行動を促すCTAの配置、読みやすいレイアウト、説得力のあるコピーライティングを実現しています。
                    </p>
                </div>
            </a>

            <a href="https://migration.oita-creative.jp/2025/lp/" target="_blank" rel="noopener noreferrer" class="work-item fade-in">
                <div class="work-item-image">
                    <i class="fas fa-file-alt" style="font-size: 4rem;"></i>
                </div>
                <div class="work-item-content">
                    <span class="work-item-category">LP制作</span>
                    <h3 class="work-item-title">LP制作実績 #2</h3>
                    <p class="work-item-description">
                        ユーザー体験を重視したランディングページを制作いたしました。高速表示、モバイルファースト設計、直感的なナビゲーションにより、高いコンバージョン率を実現しています。
                    </p>
                </div>
            </a>

            <div class="work-item fade-in" style="opacity: 0.7; cursor: default; pointer-events: none;">
                <div class="work-item-image">
                    <i class="fas fa-desktop" style="font-size: 4rem;"></i>
                </div>
                <div class="work-item-content">
                    <span class="work-item-category">Webサイト制作</span>
                    <h3 class="work-item-title">Webサイト制作実績（準備中）</h3>
                    <p class="work-item-description">
                        企業サイト、サービスサイトなど、様々なWebサイト制作実績がございます。詳細は準備中です。
                    </p>
                </div>
            </div>

            <div class="work-item fade-in" style="opacity: 0.7; cursor: default; pointer-events: none;">
                <div class="work-item-image">
                    <i class="fas fa-video" style="font-size: 4rem;"></i>
                </div>
                <div class="work-item-content">
                    <span class="work-item-category">動画制作</span>
                    <h3 class="work-item-title">企業PR動画制作実績（準備中）</h3>
                    <p class="work-item-description">
                        企業のPR動画、商品紹介動画など、様々な動画制作実績がございます。詳細は準備中です。
                    </p>
                </div>
            </div>

            <div class="work-item fade-in" style="opacity: 0.7; cursor: default; pointer-events: none;">
                <div class="work-item-image">
                    <i class="fas fa-bullhorn" style="font-size: 4rem;"></i>
                </div>
                <div class="work-item-content">
                    <span class="work-item-category">マーケティング</span>
                    <h3 class="work-item-title">マーケティング支援実績（準備中）</h3>
                    <p class="work-item-description">
                        SEO対策、SNS運用、広告運用代行など、マーケティング支援の実績がございます。詳細は準備中です。
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA -->
<section class="section section-bg-mint">
    <div class="container" style="text-align: center;">
        <div class="fade-in">
            <h2 style="font-size: 2.5rem; font-weight: 700; margin-bottom: var(--spacing-md);">
                お気軽にご相談ください
            </h2>
            <p style="color: var(--color-text-secondary); margin-bottom: var(--spacing-xl); line-height: 1.8;">
                Webサイト制作・LP制作・ショート動画制作のご相談は、<br>
                お問い合わせフォームまたはメールにてお気軽にご連絡ください。
            </p>
            <a href="<?php echo BASE_PATH; ?>/contact.php" class="btn btn-primary">
                お問い合わせ <i class="fas fa-envelope btn-icon"></i>
            </a>
        </div>
    </div>
</section>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
