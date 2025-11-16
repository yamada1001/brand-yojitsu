<?php
// サイト基本設定
define('SITE_NAME', '余日 | YOJITSU');
define('SITE_URL', 'https://yojitu.com');
define('SITE_DESCRIPTION', 'Webサイト制作、LP制作、ショート動画制作を提供する余日（ヨジツ）の公式サイト。マーケティング視点を活かした制作で、お客様のビジネスをサポートします。');
define('SITE_KEYWORDS', 'Web制作,LP制作,動画制作,ショート動画,マーケティング,SEO,余日,ヨジツ');

// 会社情報
define('COMPANY_NAME', '余日');
define('COMPANY_NAME_EN', 'YOJITSU');
define('REPRESENTATIVE', '山田蓮');
define('REPRESENTATIVE_EN', 'Ren Yamada');

// 連絡先
define('CONTACT_EMAIL', 'info@yojitu.com');
define('CONTACT_TEL', '');

// SNS（必要に応じて追加）
define('SNS_TWITTER', '');
define('SNS_INSTAGRAM', '');
define('SNS_FACEBOOK', '');
define('SNS_YOUTUBE', 'https://youtube.com/@yojitsu');

// パス設定
define('BASE_PATH', '/brand-site');
define('ASSETS_PATH', BASE_PATH . '/assets');
define('CSS_PATH', ASSETS_PATH . '/css');
define('JS_PATH', ASSETS_PATH . '/js');
define('IMG_PATH', ASSETS_PATH . '/images');

// ページタイトル生成関数
function getPageTitle($page_title = '') {
    if ($page_title) {
        return $page_title . ' | ' . SITE_NAME;
    }
    return SITE_NAME;
}

// 現在のページURLを取得
function getCurrentUrl() {
    return (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
}

// ナビゲーションメニュー
$nav_items = [
    ['url' => BASE_PATH . '/', 'label' => 'HOME', 'label_ja' => 'ホーム'],
    ['url' => BASE_PATH . '/about.php', 'label' => 'ABOUT', 'label_ja' => '会社概要'],
    ['url' => BASE_PATH . '/service.php', 'label' => 'SERVICE', 'label_ja' => 'サービス'],
    ['url' => BASE_PATH . '/works.php', 'label' => 'WORKS', 'label_ja' => '実績'],
    ['url' => BASE_PATH . '/news.php', 'label' => 'NEWS', 'label_ja' => 'お知らせ'],
    ['url' => BASE_PATH . '/contact.php', 'label' => 'CONTACT', 'label_ja' => 'お問い合わせ']
];

// 構造化データ（Organization）
function getOrganizationSchema() {
    $schema = [
        '@context' => 'https://schema.org',
        '@type' => 'Organization',
        'name' => COMPANY_NAME,
        'alternateName' => COMPANY_NAME_EN,
        'url' => SITE_URL,
        'logo' => SITE_URL . IMG_PATH . '/logo.png',
        'description' => SITE_DESCRIPTION,
        'founder' => [
            '@type' => 'Person',
            'name' => REPRESENTATIVE
        ],
        'contactPoint' => [
            '@type' => 'ContactPoint',
            'contactType' => 'customer service',
            'email' => CONTACT_EMAIL
        ]
    ];

    return json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
}

// 構造化データ（WebSite）
function getWebSiteSchema() {
    $schema = [
        '@context' => 'https://schema.org',
        '@type' => 'WebSite',
        'name' => SITE_NAME,
        'url' => SITE_URL,
        'description' => SITE_DESCRIPTION,
        'publisher' => [
            '@type' => 'Organization',
            'name' => COMPANY_NAME
        ]
    ];

    return json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
}

// 構造化データ（BreadcrumbList）
function getBreadcrumbSchema($items) {
    $itemListElement = [];
    $position = 1;

    foreach ($items as $item) {
        $itemListElement[] = [
            '@type' => 'ListItem',
            'position' => $position,
            'name' => $item['name'],
            'item' => $item['url']
        ];
        $position++;
    }

    $schema = [
        '@context' => 'https://schema.org',
        '@type' => 'BreadcrumbList',
        'itemListElement' => $itemListElement
    ];

    return json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
}
