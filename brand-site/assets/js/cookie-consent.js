// ========================================
// Cookie同意機能
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initCookieConsent();
});

// ========================================
// Cookie同意の初期化
// ========================================
function initCookieConsent() {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptBtn = document.getElementById('cookie-accept');
    const declineBtn = document.getElementById('cookie-decline');

    if (!cookieConsent || !acceptBtn || !declineBtn) return;

    // Cookieの同意状態を確認
    const cookieStatus = getCookie('cookie_consent');

    if (!cookieStatus) {
        // 同意していない場合はバナーを表示
        setTimeout(() => {
            cookieConsent.style.display = 'block';
        }, 1000);
    }

    // 同意ボタンのクリックイベント
    acceptBtn.addEventListener('click', () => {
        setCookie('cookie_consent', 'accepted', 365);
        hideCookieConsent();
        // Google Analyticsなどのトラッキングコードをここで有効化
        enableTracking();
    });

    // 拒否ボタンのクリックイベント
    declineBtn.addEventListener('click', () => {
        setCookie('cookie_consent', 'declined', 365);
        hideCookieConsent();
    });
}

// ========================================
// Cookie同意バナーを非表示
// ========================================
function hideCookieConsent() {
    const cookieConsent = document.getElementById('cookie-consent');
    if (cookieConsent) {
        cookieConsent.style.opacity = '0';
        setTimeout(() => {
            cookieConsent.style.display = 'none';
        }, 300);
    }
}

// ========================================
// Cookieの設定
// ========================================
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

// ========================================
// Cookieの取得
// ========================================
function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// ========================================
// Cookieの削除
// ========================================
function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

// ========================================
// トラッキングの有効化
// ========================================
function enableTracking() {
    // Google Analytics（GA4）の例
    // 実際のトラッキングIDに置き換えてください
    /*
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
    */

    // その他のトラッキングコードをここに追加
    console.log('Tracking enabled');
}

// ========================================
// Cookie同意状態の確認
// ========================================
function isCookieConsentAccepted() {
    const cookieStatus = getCookie('cookie_consent');
    return cookieStatus === 'accepted';
}

// ========================================
// Cookie設定のリセット（デバッグ用）
// ========================================
function resetCookieConsent() {
    deleteCookie('cookie_consent');
    location.reload();
}

// デバッグ用: コンソールで resetCookieConsent() を実行してCookie設定をリセット可能
