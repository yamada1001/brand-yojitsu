<?php
require_once __DIR__ . '/includes/config.php';

define('PAGE_TITLE', '会社概要');
define('PAGE_DESCRIPTION', '余日（ヨジツ）の会社概要・代表プロフィールをご紹介します。Web制作会社での3年の経験を経て独立し、マーケティング視点を活かした制作サービスを提供しています。');

$breadcrumb_items = [
    ['name' => 'ホーム', 'url' => SITE_URL . BASE_PATH . '/'],
    ['name' => '会社概要', 'url' => SITE_URL . BASE_PATH . '/about.php']
];

require_once __DIR__ . '/includes/header.php';
?>

<style>
.page-header {
    background-color: var(--color-bg-beige);
    padding: var(--spacing-3xl) var(--spacing-md) var(--spacing-xl);
    text-align: center;
}

.page-header-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
}

.page-header-description {
    color: var(--color-text-secondary);
    max-width: 600px;
    margin: 0 auto;
}

.about-content {
    max-width: 900px;
    margin: 0 auto;
}

.about-card {
    background-color: var(--color-white);
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    box-shadow: var(--shadow-md);
    margin-bottom: var(--spacing-xl);
}

.about-card-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: var(--spacing-md);
    padding-bottom: var(--spacing-sm);
    border-bottom: 3px solid var(--color-accent-teal);
}

.about-table {
    width: 100%;
}

.about-table tr {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.about-table tr:last-child {
    border-bottom: none;
}

.about-table th,
.about-table td {
    padding: var(--spacing-md) 0;
    text-align: left;
}

.about-table th {
    font-weight: 600;
    color: var(--color-text-secondary);
    width: 200px;
}

.profile-section {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
}

.profile-image {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
}

.profile-image-placeholder {
    width: 100%;
    aspect-ratio: 1;
    background-color: var(--color-bg-mint);
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    color: var(--color-accent-teal);
}

.profile-info h3 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
}

.profile-info h4 {
    font-size: 1.25rem;
    color: var(--color-accent-teal);
    margin-bottom: var(--spacing-md);
}

.profile-info p {
    line-height: 1.9;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-md);
}

.career-list {
    list-style: none;
    padding-left: 0;
}

.career-list li {
    padding: var(--spacing-sm) 0;
    padding-left: var(--spacing-md);
    position: relative;
    line-height: 1.8;
}

.career-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: var(--color-accent-teal);
    border-radius: 50%;
}

@media (min-width: 768px) {
    .profile-section {
        grid-template-columns: 300px 1fr;
    }

    .about-table th {
        width: 250px;
    }
}
</style>

<!-- ページヘッダー -->
<section class="page-header">
    <div class="container">
        <span class="section-title-en">ABOUT</span>
        <h1 class="page-header-title">会社概要</h1>
        <p class="page-header-description">
            マーケティング視点を活かした制作で、<br>
            お客様のビジネスを成長させます。
        </p>
    </div>
</section>

<!-- 会社概要 -->
<section class="section">
    <div class="container">
        <div class="about-content">
            <div class="about-card fade-in">
                <h2 class="about-card-title">会社情報</h2>
                <table class="about-table">
                    <tr>
                        <th>屋号</th>
                        <td>余日（ヨジツ）</td>
                    </tr>
                    <tr>
                        <th>英語表記</th>
                        <td>YOJITSU</td>
                    </tr>
                    <tr>
                        <th>代表</th>
                        <td><?php echo REPRESENTATIVE; ?></td>
                    </tr>
                    <tr>
                        <th>事業内容</th>
                        <td>
                            Webサイト制作<br>
                            ランディングページ制作<br>
                            ショート動画制作<br>
                            マーケティング支援<br>
                            外部CMO・PM業務
                        </td>
                    </tr>
                    <tr>
                        <th>メールアドレス</th>
                        <td><a href="mailto:<?php echo CONTACT_EMAIL; ?>"><?php echo CONTACT_EMAIL; ?></a></td>
                    </tr>
                </table>
            </div>

            <div class="about-card fade-in">
                <h2 class="about-card-title">代表プロフィール</h2>
                <div class="profile-section">
                    <div class="profile-image">
                        <div class="profile-image-placeholder">
                            <i class="fas fa-user"></i>
                        </div>
                    </div>
                    <div class="profile-info">
                        <h3><?php echo REPRESENTATIVE; ?></h3>
                        <h4><?php echo REPRESENTATIVE_EN; ?></h4>
                        <p>
                            Web制作会社にてマーケティング、Web制作を3年ほど経験を積み独立。<br>
                            マーケティング領域では主にSEO・SNS・広告運用代行などを行った。<br>
                            独立後は外部CMOやPM、動画制作やWeb制作を行う。
                        </p>
                        <h4 style="margin-top: var(--spacing-lg);">経歴</h4>
                        <ul class="career-list">
                            <li>Web制作会社にて3年間、マーケティング・Web制作に従事</li>
                            <li>SEO対策、SNS運用、広告運用代行を担当</li>
                            <li>独立後、外部CMO・PM業務を開始</li>
                            <li>動画制作、Web制作サービスを展開</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="about-card fade-in">
                <h2 class="about-card-title">理念</h2>
                <p style="line-height: 1.9; color: var(--color-text-secondary);">
                    「余日」は、お客様のビジネスに「余裕」と「成長」をもたらすことを目指しています。<br>
                    マーケティング視点を活かした戦略的な制作により、単なる見た目の良さだけでなく、
                    実際に成果を生み出すWebサイト・LP・動画を提供いたします。<br><br>
                    お客様のビジネスパートナーとして、長期的な成功をサポートすることが私たちの使命です。
                </p>
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
