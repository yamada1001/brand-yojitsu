<?php
require_once __DIR__ . '/includes/config.php';

define('PAGE_TITLE', '');
define('PAGE_DESCRIPTION', 'Webサイト制作、LP制作、ショート動画制作を提供する余日（ヨジツ）の公式サイト。マーケティング視点を活かした制作で、お客様のビジネスをサポートします。');

$breadcrumb_items = [
    ['name' => 'ホーム', 'url' => SITE_URL . BASE_PATH . '/']
];

require_once __DIR__ . '/includes/header.php';
?>

<section style="padding: 100px 20px; background-color: #F5F3F0; min-height: 80vh;">
    <div style="max-width: 1200px; margin: 0 auto; text-align: center;">
        <h1 style="font-size: 3rem; font-weight: 700; margin-bottom: 20px; color: #333;">
            マーケティング視点を活かした<br>
            <span style="color: #7ECFC3;">Web制作・動画制作</span>
        </h1>
        <p style="font-size: 1.25rem; color: #666; margin-bottom: 40px;">
            お客様のビジネスを成長させる、<br>
            戦略的なWebサイト・LP・ショート動画を制作いたします。
        </p>
        <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
            <a href="<?php echo BASE_PATH; ?>/service.php" style="display: inline-flex; align-items: center; gap: 8px; padding: 14px 32px; background-color: #7ECFC3; color: white; border-radius: 30px; text-decoration: none; font-weight: 600;">
                サービス一覧 <i class="fas fa-arrow-right"></i>
            </a>
            <a href="<?php echo BASE_PATH; ?>/contact.php" style="display: inline-flex; align-items: center; gap: 8px; padding: 14px 32px; background-color: white; color: #333; border: 2px solid #333; border-radius: 30px; text-decoration: none; font-weight: 600;">
                お問い合わせ <i class="fas fa-envelope"></i>
            </a>
        </div>
    </div>
</section>

<section style="padding: 80px 20px; background-color: #D4EFE8;">
    <div style="max-width: 1200px; margin: 0 auto;">
        <h2 style="text-align: center; font-size: 2.5rem; font-weight: 700; margin-bottom: 60px;">サービス</h2>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div style="background: white; padding: 40px; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <div style="width: 60px; height: 60px; background: #D4EFE8; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                    <i class="fas fa-desktop" style="font-size: 1.75rem; color: #7ECFC3;"></i>
                </div>
                <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 10px;">Webサイト制作</h3>
                <p style="font-size: 1.75rem; font-weight: 700; color: #FF6B35; margin-bottom: 10px;">¥200,000~</p>
                <p style="color: #666; line-height: 1.8;">マーケティング視点を活かした、成果の出るWebサイトを制作します。</p>
            </div>

            <div style="background: white; padding: 40px; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <div style="width: 60px; height: 60px; background: #D4EFE8; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                    <i class="fas fa-file-alt" style="font-size: 1.75rem; color: #7ECFC3;"></i>
                </div>
                <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 10px;">LP制作</h3>
                <p style="font-size: 1.75rem; font-weight: 700; color: #FF6B35; margin-bottom: 10px;">¥50,000~</p>
                <p style="color: #666; line-height: 1.8;">コンバージョンに特化した、効果的なランディングページを制作します。</p>
            </div>

            <div style="background: white; padding: 40px; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <div style="width: 60px; height: 60px; background: #D4EFE8; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                    <i class="fas fa-video" style="font-size: 1.75rem; color: #7ECFC3;"></i>
                </div>
                <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 10px;">ショート動画制作</h3>
                <p style="font-size: 1.75rem; font-weight: 700; color: #FF6B35; margin-bottom: 10px;">¥20,000/本</p>
                <p style="color: #666; line-height: 1.8;">SNSで拡散される、魅力的なショート動画を撮影・編集いたします。</p>
            </div>
        </div>
    </div>
</section>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
