// ========================================
// メインJavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // ローディング画面の制御
    initLoading();

    // ハンバーガーメニュー
    initHamburgerMenu();

    // ページトップボタン
    initPageTop();

    // カスタムカーソル
    initCustomCursor();

    // スムーススクロール
    initSmoothScroll();

    // ヘッダースクロール効果
    initHeaderScroll();
});

// ========================================
// ローディング画面
// ========================================
function initLoading() {
    const loadingScreen = document.getElementById('loading');

    // ページが完全に読み込まれたらローディング画面を非表示
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 500);
    });
}

// ========================================
// ハンバーガーメニュー
// ========================================
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (!hamburger || !mobileMenu) return;

    // ハンバーガーメニューのトグル
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // モバイルメニューリンクのクリックでメニューを閉じる
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // メニュー外をクリックで閉じる
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ========================================
// ページトップボタン
// ========================================
function initPageTop() {
    const pageTopBtn = document.getElementById('page-top');

    if (!pageTopBtn) return;

    // スクロール時の表示/非表示
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            pageTopBtn.classList.add('visible');
        } else {
            pageTopBtn.classList.remove('visible');
        }
    });

    // クリックでページトップへ
    pageTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// カスタムカーソル
// ========================================
function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    const cursorFollower = document.getElementById('custom-cursor-follower');

    if (!cursor || !cursorFollower) return;

    // デスクトップのみ有効
    if (window.innerWidth < 768) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    // マウス移動時
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    // フォロワーカーソルのアニメーション
    function animateFollower() {
        const distX = mouseX - followerX;
        const distY = mouseY - followerY;

        followerX += distX * 0.1;
        followerY += distY * 0.1;

        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';

        requestAnimationFrame(animateFollower);
    }

    animateFollower();

    // リンクやボタンにホバー時
    const interactiveElements = document.querySelectorAll('a, button, .card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });

        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// ========================================
// スムーススクロール
// ========================================
function initSmoothScroll() {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // # のみの場合はページトップへ
            if (href === '#') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            // 特定の要素へスクロール
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = 80;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// ヘッダースクロール効果
// ========================================
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        // スクロール量に応じてヘッダーにクラスを追加
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ========================================
// フォームバリデーション（お問い合わせフォーム用）
// ========================================
function initFormValidation() {
    const contactForm = document.getElementById('contact-form');

    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // フォームの値を取得
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // バリデーション
        let isValid = true;
        let errorMessage = '';

        if (!name) {
            isValid = false;
            errorMessage += 'お名前を入力してください。\n';
        }

        if (!email) {
            isValid = false;
            errorMessage += 'メールアドレスを入力してください。\n';
        } else if (!isValidEmail(email)) {
            isValid = false;
            errorMessage += '正しいメールアドレスを入力してください。\n';
        }

        if (!message) {
            isValid = false;
            errorMessage += 'お問い合わせ内容を入力してください。\n';
        }

        if (!isValid) {
            alert(errorMessage);
            return;
        }

        // フォーム送信（実際の実装では、PHPなどで処理）
        contactForm.submit();
    });
}

// メールアドレスのバリデーション
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ========================================
// ユーティリティ関数
// ========================================

// デバウンス（リサイズなどで使用）
function debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// スロットル（スクロールなどで使用）
function throttle(func, limit = 100) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
