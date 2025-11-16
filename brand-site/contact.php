<?php
require_once __DIR__ . '/includes/config.php';

define('PAGE_TITLE', 'お問い合わせ');
define('PAGE_DESCRIPTION', '余日（ヨジツ）へのお問い合わせはこちらから。Webサイト制作、LP制作、ショート動画制作のご相談はお気軽にご連絡ください。');

$breadcrumb_items = [
    ['name' => 'ホーム', 'url' => SITE_URL . BASE_PATH . '/'],
    ['name' => 'お問い合わせ', 'url' => SITE_URL . BASE_PATH . '/contact.php']
];

require_once __DIR__ . '/includes/header.php';
?>

<style>
.contact-form-container {
    max-width: 700px;
    margin: 0 auto;
}

.contact-form {
    background-color: var(--color-white);
    border-radius: var(--radius-lg);
    padding: var(--spacing-2xl);
    box-shadow: var(--shadow-md);
}

.form-group {
    margin-bottom: var(--spacing-lg);
}

.form-label {
    display: block;
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
    color: var(--color-text-primary);
}

.form-label-required {
    color: var(--color-accent-red);
    font-size: 0.75rem;
    margin-left: 4px;
}

.form-input,
.form-textarea,
.form-select {
    width: 100%;
    padding: var(--spacing-sm) var(--spacing-md);
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: var(--radius-sm);
    font-family: inherit;
    font-size: 1rem;
    transition: border-color var(--transition-fast);
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
    outline: none;
    border-color: var(--color-accent-teal);
}

.form-textarea {
    min-height: 200px;
    resize: vertical;
}

.form-submit {
    width: 100%;
    padding: var(--spacing-md);
    background-color: var(--color-accent-teal);
    color: var(--color-white);
    border: none;
    border-radius: var(--radius-pill);
    font-size: 1.125rem;
    font-weight: 600;
    cursor: pointer;
    transition: all var(--transition-normal);
}

.form-submit:hover {
    background-color: #6BBFB3;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.contact-info {
    text-align: center;
    margin-top: var(--spacing-2xl);
}

.contact-info-item {
    margin-bottom: var(--spacing-md);
}

.contact-info-item i {
    color: var(--color-accent-teal);
    margin-right: var(--spacing-xs);
}

.contact-info-item a {
    color: var(--color-accent-teal);
}
</style>

<!-- ページヘッダー -->
<section class="page-header">
    <div class="container">
        <span class="section-title-en">CONTACT</span>
        <h1 class="page-header-title">お問い合わせ</h1>
        <p class="page-header-description">
            Webサイト制作・LP制作・ショート動画制作のご相談は、<br>
            お気軽にお問い合わせください。
        </p>
    </div>
</section>

<!-- お問い合わせフォーム -->
<section class="section">
    <div class="container">
        <div class="contact-form-container fade-in">
            <form class="contact-form" id="contact-form" method="post" action="">
                <div class="form-group">
                    <label for="name" class="form-label">
                        お名前<span class="form-label-required">*必須</span>
                    </label>
                    <input type="text" id="name" name="name" class="form-input" required>
                </div>

                <div class="form-group">
                    <label for="company" class="form-label">
                        会社名・屋号
                    </label>
                    <input type="text" id="company" name="company" class="form-input">
                </div>

                <div class="form-group">
                    <label for="email" class="form-label">
                        メールアドレス<span class="form-label-required">*必須</span>
                    </label>
                    <input type="email" id="email" name="email" class="form-input" required>
                </div>

                <div class="form-group">
                    <label for="phone" class="form-label">
                        電話番号
                    </label>
                    <input type="tel" id="phone" name="phone" class="form-input">
                </div>

                <div class="form-group">
                    <label for="service" class="form-label">
                        お問い合わせ種別<span class="form-label-required">*必須</span>
                    </label>
                    <select id="service" name="service" class="form-select" required>
                        <option value="">選択してください</option>
                        <option value="website">Webサイト制作</option>
                        <option value="lp">LP制作</option>
                        <option value="video">ショート動画制作</option>
                        <option value="other">その他</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="message" class="form-label">
                        お問い合わせ内容<span class="form-label-required">*必須</span>
                    </label>
                    <textarea id="message" name="message" class="form-textarea" required></textarea>
                </div>

                <button type="submit" class="form-submit">
                    <i class="fas fa-paper-plane"></i> 送信する
                </button>
            </form>

            <div class="contact-info">
                <div class="contact-info-item">
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:<?php echo CONTACT_EMAIL; ?>"><?php echo CONTACT_EMAIL; ?></a>
                </div>
                <p style="color: var(--color-text-secondary); font-size: 0.875rem;">
                    ※お問い合わせから2営業日以内にご返信いたします。
                </p>
            </div>
        </div>
    </div>
</section>

<script>
// フォーム送信時の処理（実際の実装では、PHPなどでメール送信処理を追加）
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // フォームの値を取得
            const formData = new FormData(contactForm);

            // 簡易的なバリデーション
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            const service = formData.get('service');

            if (!name || !email || !message || !service) {
                alert('必須項目をすべて入力してください。');
                return;
            }

            // メールアドレスの形式チェック
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('正しいメールアドレスを入力してください。');
                return;
            }

            // 実際の実装では、ここでPHPなどのバックエンドにデータを送信
            // 今回はダミーのアラート表示
            alert('お問い合わせを受け付けました。\n2営業日以内にご返信いたします。');

            // フォームをリセット
            contactForm.reset();
        });
    }
});
</script>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
