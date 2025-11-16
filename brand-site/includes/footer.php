    </main>

    <!-- Footer -->
    <footer class="footer">
        <!-- 幾何学的装飾 -->
        <div class="footer-decoration">
            <div class="decoration-circle decoration-circle-3"></div>
            <div class="decoration-capsule decoration-capsule-2"></div>
            <div class="decoration-square decoration-square-1"></div>
        </div>

        <div class="footer-container">
            <!-- フッター上部 -->
            <div class="footer-top">
                <div class="footer-logo-section">
                    <div class="footer-logo">
                        <span class="footer-logo-ja">余日</span>
                        <span class="footer-logo-en">YOJITSU</span>
                    </div>
                    <p class="footer-tagline">
                        マーケティング視点を活かした<br>
                        Webサイト制作・動画制作
                    </p>
                </div>

                <div class="footer-nav-section">
                    <div class="footer-nav-column">
                        <h3 class="footer-nav-title">サービス</h3>
                        <ul class="footer-nav-list">
                            <li><a href="<?php echo BASE_PATH; ?>/service.php#website">Webサイト制作</a></li>
                            <li><a href="<?php echo BASE_PATH; ?>/service.php#lp">LP制作</a></li>
                            <li><a href="<?php echo BASE_PATH; ?>/service.php#video">ショート動画制作</a></li>
                        </ul>
                    </div>

                    <div class="footer-nav-column">
                        <h3 class="footer-nav-title">会社情報</h3>
                        <ul class="footer-nav-list">
                            <?php foreach ($nav_items as $item): ?>
                            <li><a href="<?php echo $item['url']; ?>"><?php echo $item['label_ja']; ?></a></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>

                    <div class="footer-nav-column">
                        <h3 class="footer-nav-title">お問い合わせ</h3>
                        <ul class="footer-contact-list">
                            <li>
                                <i class="fas fa-envelope"></i>
                                <a href="mailto:<?php echo CONTACT_EMAIL; ?>"><?php echo CONTACT_EMAIL; ?></a>
                            </li>
                            <li>
                                <i class="fas fa-arrow-right"></i>
                                <a href="<?php echo BASE_PATH; ?>/contact.php">お問い合わせフォーム</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- SNSリンク -->
            <?php if (SNS_YOUTUBE || SNS_TWITTER || SNS_INSTAGRAM || SNS_FACEBOOK): ?>
            <div class="footer-social">
                <h3 class="footer-social-title">FOLLOW US</h3>
                <div class="footer-social-links">
                    <?php if (SNS_YOUTUBE): ?>
                    <a href="<?php echo SNS_YOUTUBE; ?>" target="_blank" rel="noopener noreferrer" class="social-link">
                        <i class="fab fa-youtube"></i>
                    </a>
                    <?php endif; ?>
                    <?php if (SNS_TWITTER): ?>
                    <a href="<?php echo SNS_TWITTER; ?>" target="_blank" rel="noopener noreferrer" class="social-link">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <?php endif; ?>
                    <?php if (SNS_INSTAGRAM): ?>
                    <a href="<?php echo SNS_INSTAGRAM; ?>" target="_blank" rel="noopener noreferrer" class="social-link">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <?php endif; ?>
                    <?php if (SNS_FACEBOOK): ?>
                    <a href="<?php echo SNS_FACEBOOK; ?>" target="_blank" rel="noopener noreferrer" class="social-link">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <?php endif; ?>
                </div>
            </div>
            <?php endif; ?>

            <!-- フッター下部 -->
            <div class="footer-bottom">
                <div class="footer-bottom-links">
                    <a href="<?php echo BASE_PATH; ?>/privacy.php">プライバシーポリシー</a>
                </div>
                <p class="footer-copyright">
                    &copy; <?php echo date('Y'); ?> <?php echo COMPANY_NAME; ?>. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>

    <!-- ページトップボタン -->
    <button id="page-top" class="page-top" aria-label="ページトップへ">
        <i class="fas fa-arrow-up"></i>
    </button>

    <!-- JavaScript -->
    <script src="<?php echo JS_PATH; ?>/main.js"></script>
    <script src="<?php echo JS_PATH; ?>/animations.js"></script>
    <script src="<?php echo JS_PATH; ?>/cookie-consent.js"></script>
</body>
</html>
