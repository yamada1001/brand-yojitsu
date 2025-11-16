<?php
if (!defined('PAGE_TITLE')) define('PAGE_TITLE', '');
if (!defined('PAGE_DESCRIPTION')) define('PAGE_DESCRIPTION', SITE_DESCRIPTION);
if (!defined('PAGE_KEYWORDS')) define('PAGE_KEYWORDS', SITE_KEYWORDS);
if (!defined('OG_TYPE')) define('OG_TYPE', 'website');
if (!defined('OG_IMAGE')) define('OG_IMAGE', SITE_URL . IMG_PATH . '/og-image.png');
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php echo PAGE_DESCRIPTION; ?>">
    <meta name="keywords" content="<?php echo PAGE_KEYWORDS; ?>">
    <meta name="author" content="<?php echo COMPANY_NAME; ?>">

    <!-- OGP -->
    <meta property="og:title" content="<?php echo getPageTitle(PAGE_TITLE); ?>">
    <meta property="og:description" content="<?php echo PAGE_DESCRIPTION; ?>">
    <meta property="og:type" content="<?php echo OG_TYPE; ?>">
    <meta property="og:url" content="<?php echo getCurrentUrl(); ?>">
    <meta property="og:image" content="<?php echo OG_IMAGE; ?>">
    <meta property="og:site_name" content="<?php echo SITE_NAME; ?>">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo getPageTitle(PAGE_TITLE); ?>">
    <meta name="twitter:description" content="<?php echo PAGE_DESCRIPTION; ?>">
    <meta name="twitter:image" content="<?php echo OG_IMAGE; ?>">

    <title><?php echo getPageTitle(PAGE_TITLE); ?></title>

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="<?php echo IMG_PATH; ?>/favicon.ico">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="<?php echo CSS_PATH; ?>/style.css">
    <?php if (defined('BLOG_PAGE') && BLOG_PAGE): ?>
    <link rel="stylesheet" href="<?php echo CSS_PATH; ?>/blog.css">
    <?php endif; ?>

    <!-- GSAP -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

    <!-- 構造化データ -->
    <script type="application/ld+json">
    <?php echo getOrganizationSchema(); ?>
    </script>
    <script type="application/ld+json">
    <?php echo getWebSiteSchema(); ?>
    </script>
    <?php if (isset($breadcrumb_items) && !empty($breadcrumb_items)): ?>
    <script type="application/ld+json">
    <?php echo getBreadcrumbSchema($breadcrumb_items); ?>
    </script>
    <?php endif; ?>
</head>
<body>
    <!-- Cookie同意バナー -->
    <div id="cookie-consent" class="cookie-consent" style="display: none;">
        <div class="cookie-consent-content">
            <p>当サイトでは、サービス向上のためCookieを使用しています。詳しくは<a href="<?php echo BASE_PATH; ?>/privacy.php">プライバシーポリシー</a>をご確認ください。</p>
            <div class="cookie-consent-buttons">
                <button id="cookie-accept" class="btn btn-primary">同意する</button>
                <button id="cookie-decline" class="btn btn-secondary">拒否する</button>
            </div>
        </div>
    </div>

    <!-- ローディングアニメーション -->
    <div id="loading" class="loading-screen">
        <div class="loading-content">
            <div class="loading-logo">
                <span class="loading-text">余日</span>
            </div>
            <div class="loading-spinner"></div>
        </div>
    </div>

    <!-- Header -->
    <header class="header">
        <div class="header-container">
            <div class="header-logo">
                <a href="<?php echo BASE_PATH; ?>/">
                    <span class="logo-ja">余日</span>
                    <span class="logo-en">YOJITSU</span>
                </a>
            </div>

            <!-- デスクトップナビゲーション -->
            <nav class="header-nav desktop-nav">
                <ul class="nav-list">
                    <?php foreach ($nav_items as $item): ?>
                    <li class="nav-item">
                        <a href="<?php echo $item['url']; ?>" class="nav-link">
                            <span class="nav-label-en"><?php echo $item['label']; ?></span>
                            <span class="nav-label-ja"><?php echo $item['label_ja']; ?></span>
                        </a>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </nav>

            <!-- ハンバーガーメニューボタン -->
            <button class="hamburger" id="hamburger" aria-label="メニュー">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
        </div>
    </header>

    <!-- モバイルメニュー -->
    <div class="mobile-menu" id="mobile-menu">
        <nav class="mobile-nav">
            <ul class="mobile-nav-list">
                <?php foreach ($nav_items as $item): ?>
                <li class="mobile-nav-item">
                    <a href="<?php echo $item['url']; ?>" class="mobile-nav-link">
                        <span class="mobile-nav-label-en"><?php echo $item['label']; ?></span>
                        <span class="mobile-nav-label-ja"><?php echo $item['label_ja']; ?></span>
                    </a>
                </li>
                <?php endforeach; ?>
            </ul>
        </nav>

        <!-- 幾何学的装飾 -->
        <div class="mobile-menu-decoration">
            <div class="decoration-circle decoration-circle-1"></div>
            <div class="decoration-circle decoration-circle-2"></div>
            <div class="decoration-capsule decoration-capsule-1"></div>
        </div>
    </div>

    <!-- カスタムカーソル -->
    <div class="custom-cursor" id="custom-cursor"></div>
    <div class="custom-cursor-follower" id="custom-cursor-follower"></div>

    <!-- メインコンテンツ -->
    <main class="main-content">
