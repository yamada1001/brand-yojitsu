<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>シンプルテスト</title>
</head>
<body>
    <h1>シンプルテストページ</h1>
    <p>このページが表示されれば、PHPは正常に動作しています。</p>

    <h2>JavaScriptファイルパステスト</h2>
    <p>CSS PATH: <?php require_once __DIR__ . '/includes/config.php'; echo CSS_PATH; ?></p>
    <p>JS PATH: <?php echo JS_PATH; ?></p>
    <p>IMG PATH: <?php echo IMG_PATH; ?></p>

    <h2>実際のパス</h2>
    <p>CSS: <a href="<?php echo CSS_PATH; ?>/style.css"><?php echo CSS_PATH; ?>/style.css</a></p>
    <p>JS: <a href="<?php echo JS_PATH; ?>/main.js"><?php echo JS_PATH; ?>/main.js</a></p>
</body>
</html>
