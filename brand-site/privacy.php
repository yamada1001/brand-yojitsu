<?php
require_once __DIR__ . '/includes/config.php';

define('PAGE_TITLE', 'プライバシーポリシー');
define('PAGE_DESCRIPTION', '余日（ヨジツ）のプライバシーポリシー。個人情報の取り扱いについてご説明いたします。');

$breadcrumb_items = [
    ['name' => 'ホーム', 'url' => SITE_URL . BASE_PATH . '/'],
    ['name' => 'プライバシーポリシー', 'url' => SITE_URL . BASE_PATH . '/privacy.php']
];

require_once __DIR__ . '/includes/header.php';
?>

<style>
.privacy-content {
    max-width: 900px;
    margin: 0 auto;
    background-color: var(--color-white);
    border-radius: var(--radius-lg);
    padding: var(--spacing-2xl);
    box-shadow: var(--shadow-md);
}

.privacy-content h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-top: var(--spacing-xl);
    margin-bottom: var(--spacing-md);
    padding-bottom: var(--spacing-sm);
    border-bottom: 2px solid var(--color-accent-teal);
}

.privacy-content h2:first-child {
    margin-top: 0;
}

.privacy-content h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: var(--spacing-md);
    margin-bottom: var(--spacing-sm);
    color: var(--color-text-primary);
}

.privacy-content p {
    line-height: 1.9;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-md);
}

.privacy-content ul {
    list-style: disc;
    padding-left: var(--spacing-lg);
    margin-bottom: var(--spacing-md);
}

.privacy-content li {
    line-height: 1.9;
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-xs);
}

.privacy-date {
    text-align: right;
    color: var(--color-text-secondary);
    font-size: 0.875rem;
    margin-top: var(--spacing-xl);
}
</style>

<!-- ページヘッダー -->
<section class="page-header">
    <div class="container">
        <span class="section-title-en">PRIVACY POLICY</span>
        <h1 class="page-header-title">プライバシーポリシー</h1>
        <p class="page-header-description">
            個人情報の取り扱いについてご説明いたします。
        </p>
    </div>
</section>

<!-- プライバシーポリシー本文 -->
<section class="section">
    <div class="container">
        <div class="privacy-content fade-in">
            <p>
                余日（以下「当方」といいます。）は、お客様の個人情報の保護に最大限の注意を払い、以下の方針に基づき、個人情報の適切な管理・保護に努めます。
            </p>

            <h2>1. 個人情報の定義</h2>
            <p>
                個人情報とは、お客様個人に関する情報であって、当該情報に含まれる氏名、生年月日、メールアドレス、電話番号、その他の記述等により特定の個人を識別できるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含む）をいいます。
            </p>

            <h2>2. 個人情報の収集</h2>
            <p>
                当方は、以下の目的のために必要な範囲で、適法かつ公正な手段により個人情報を収集します。
            </p>
            <ul>
                <li>お問い合わせへの対応</li>
                <li>サービスの提供</li>
                <li>契約の履行</li>
                <li>お客様への情報提供</li>
                <li>サービスの改善・向上</li>
            </ul>

            <h2>3. 個人情報の利用目的</h2>
            <p>
                当方は、個人情報を以下の目的で利用いたします。
            </p>
            <ul>
                <li>お問い合わせ・ご相談への回答</li>
                <li>サービス提供に関する連絡</li>
                <li>見積書・請求書等の送付</li>
                <li>契約内容の変更・解除の連絡</li>
                <li>サービス・商品に関する情報提供</li>
                <li>アンケート調査の実施</li>
                <li>統計データの作成（個人を特定できない形式）</li>
            </ul>

            <h2>4. 個人情報の第三者提供</h2>
            <p>
                当方は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません。
            </p>
            <ul>
                <li>お客様の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合であって、お客様の同意を得ることが困難である場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、お客様の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合</li>
            </ul>

            <h2>5. 個人情報の管理</h2>
            <p>
                当方は、個人情報の正確性及び安全性を確保するため、セキュリティ対策を実施し、個人情報への不正アクセス、紛失、破壊、改ざん、漏洩等を防止するための適切な措置を講じます。
            </p>

            <h2>6. 個人情報の開示・訂正・削除</h2>
            <p>
                お客様は、当方に対して、個人情報保護法の定めに従い、以下の請求を行うことができます。
            </p>
            <ul>
                <li>個人情報の開示請求</li>
                <li>個人情報の訂正・追加・削除請求</li>
                <li>個人情報の利用停止・消去請求</li>
                <li>個人情報の第三者提供の停止請求</li>
            </ul>
            <p>
                これらの請求を希望される場合は、お問い合わせフォームまたはメールにてご連絡ください。
            </p>

            <h2>7. Cookieの使用について</h2>
            <p>
                当サイトでは、サービス向上のためCookieを使用しています。Cookieは、お客様のブラウザを識別するための小さなテキストファイルです。Cookieを使用することで、お客様がより快適にサイトを利用できるようになります。<br>
                Cookieの使用を望まない場合は、ブラウザの設定でCookieを無効にすることができます。ただし、Cookieを無効にした場合、一部のサービスが正常に機能しない可能性があります。
            </p>

            <h2>8. アクセス解析ツールについて</h2>
            <p>
                当サイトでは、Googleアナリティクス等のアクセス解析ツールを使用しています。これらのツールは、トラフィックデータの収集のためにCookieを使用しています。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
            </p>

            <h2>9. プライバシーポリシーの変更</h2>
            <p>
                当方は、法令の変更等に伴い、本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、本ページに掲載した時点で効力を生じるものとします。
            </p>

            <h2>10. お問い合わせ窓口</h2>
            <p>
                個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
            </p>
            <p>
                <strong>屋号：</strong>余日（ヨジツ）<br>
                <strong>メールアドレス：</strong><a href="mailto:<?php echo CONTACT_EMAIL; ?>"><?php echo CONTACT_EMAIL; ?></a>
            </p>

            <p class="privacy-date">
                制定日：2024年1月1日
            </p>
        </div>
    </div>
</section>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
