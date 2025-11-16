<?php
echo "Step 1: Starting...<br>";

require_once __DIR__ . '/includes/config.php';
echo "Step 2: Config loaded<br>";

define('PAGE_TITLE', '');
define('PAGE_DESCRIPTION', 'Webサイト制作、LP制作、ショート動画制作を提供する余日（ヨジツ）の公式サイト。マーケティング視点を活かした制作で、お客様のビジネスをサポートします。');
echo "Step 3: Constants defined<br>";

$breadcrumb_items = [
    ['name' => 'ホーム', 'url' => SITE_URL . BASE_PATH . '/']
];
echo "Step 4: Breadcrumb created<br>";

echo "Step 5: About to include header...<br>";
require_once __DIR__ . '/includes/header.php';
echo "Step 6: Header included<br>";

echo "<h1>Test Content</h1>";

echo "Step 7: About to include footer...<br>";
require_once __DIR__ . '/includes/footer.php';
