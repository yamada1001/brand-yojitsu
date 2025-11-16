<?php
require_once __DIR__ . '/includes/config.php';

define('PAGE_TITLE', 'お知らせ');
define('PAGE_DESCRIPTION', '余日（ヨジツ）からのお知らせ一覧。最新情報やサービスの更新情報をお届けします。');

$breadcrumb_items = [
    ['name' => 'ホーム', 'url' => SITE_URL . BASE_PATH . '/'],
    ['name' => 'お知らせ', 'url' => SITE_URL . BASE_PATH . '/news.php']
];

require_once __DIR__ . '/includes/header.php';
?>

<style>
.news-detail-item {
    background-color: var(--color-white);
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    box-shadow: var(--shadow-md);
    margin-bottom: var(--spacing-lg);
    transition: all var(--transition-fast);
}

.news-detail-item:hover {
    box-shadow: var(--shadow-lg);
}

.news-detail-date {
    font-family: var(--font-en);
    color: var(--color-text-secondary);
    font-size: 0.875rem;
    margin-bottom: var(--spacing-sm);
}

.news-detail-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: var(--spacing-md);
    color: var(--color-text-primary);
}

.news-detail-content {
    color: var(--color-text-secondary);
    line-height: 1.9;
}
</style>

<!-- ページヘッダー -->
<section class="page-header">
    <div class="container">
        <span class="section-title-en">NEWS</span>
        <h1 class="page-header-title">お知らせ</h1>
        <p class="page-header-description">
            最新情報やサービスの更新情報をお届けします。
        </p>
    </div>
</section>

<!-- お知らせ一覧 -->
<section class="section">
    <div class="container">
        <div style="max-width: 900px; margin: 0 auto;">
            <div class="news-detail-item fade-in">
                <p class="news-detail-date">2024.01.15</p>
                <h2 class="news-detail-title">Webサイトをリニューアルしました</h2>
                <div class="news-detail-content">
                    <p>
                        この度、余日の公式Webサイトをリニューアルいたしました。<br>
                        より見やすく、使いやすいデザインにリニューアルし、サービス内容や実績をわかりやすくご紹介できるようになりました。<br><br>
                        引き続き、お客様のビジネス成長をサポートできるよう、質の高いサービスを提供してまいります。
                    </p>
                </div>
            </div>

            <div class="news-detail-item fade-in">
                <p class="news-detail-date">2024.01.10</p>
                <h2 class="news-detail-title">ショート動画制作プラン10本セット割引開始</h2>
                <div class="news-detail-content">
                    <p>
                        ショート動画制作プランに、お得な10本セット割引を開始いたしました。<br>
                        通常1本¥20,000のところ、10本セットで¥150,000（1本あたり¥15,000）でご提供いたします。<br><br>
                        継続的にSNSで動画を発信したい企業様や、シリーズ企画をお考えの方におすすめのプランです。<br>
                        詳しくは、お問い合わせフォームまたはメールにてお気軽にご相談ください。
                    </p>
                </div>
            </div>

            <div class="news-detail-item fade-in">
                <p class="news-detail-date">2024.01.05</p>
                <h2 class="news-detail-title">新年のご挨拶</h2>
                <div class="news-detail-content">
                    <p>
                        新年あけましておめでとうございます。<br>
                        旧年中は格別のご愛顧を賜り、厚く御礼申し上げます。<br><br>
                        本年も、お客様のビジネス成長に貢献できるよう、より一層のサービス向上に努めてまいります。<br>
                        本年もどうぞよろしくお願いいたします。
                    </p>
                </div>
            </div>

            <div class="news-detail-item fade-in">
                <p class="news-detail-date">2023.12.20</p>
                <h2 class="news-detail-title">年末年始の営業について</h2>
                <div class="news-detail-content">
                    <p>
                        誠に勝手ながら、下記の期間を年末年始休業とさせていただきます。<br><br>
                        <strong>休業期間：2023年12月29日（金）〜2024年1月3日（水）</strong><br><br>
                        休業期間中のお問い合わせにつきましては、2024年1月4日（木）より順次対応させていただきます。<br>
                        ご不便をおかけいたしますが、何卒ご理解のほどよろしくお願い申し上げます。
                    </p>
                </div>
            </div>

            <div class="news-detail-item fade-in">
                <p class="news-detail-date">2023.12.01</p>
                <h2 class="news-detail-title">LP制作実績を追加しました</h2>
                <div class="news-detail-content">
                    <p>
                        制作実績ページに、新たなLP制作実績を追加いたしました。<br>
                        コンバージョン最適化やユーザビリティを重視した制作事例をご覧いただけます。<br><br>
                        LP制作をご検討の方は、ぜひ制作実績ページをご覧ください。
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
