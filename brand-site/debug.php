<?php
echo "Debug mode enabled<br>";
echo "PHP Version: " . phpversion() . "<br>";
echo "Current directory: " . __DIR__ . "<br>";
echo "File exists check:<br>";
echo "config.php: " . (file_exists(__DIR__ . '/includes/config.php') ? 'YES' : 'NO') . "<br>";
echo "header.php: " . (file_exists(__DIR__ . '/includes/header.php') ? 'YES' : 'NO') . "<br>";
echo "footer.php: " . (file_exists(__DIR__ . '/includes/footer.php') ? 'YES' : 'NO') . "<br>";

echo "<br>Trying to include config.php...<br>";
require_once __DIR__ . '/includes/config.php';
echo "Config loaded successfully!<br>";
echo "SITE_NAME: " . SITE_NAME . "<br>";
echo "BASE_PATH: '" . BASE_PATH . "'<br>";
