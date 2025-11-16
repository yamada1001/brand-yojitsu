// ========================================
// アニメーション（GSAP + ScrollTrigger）
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // GSAPの初期設定
    gsap.registerPlugin(ScrollTrigger);

    // フェードインアニメーション
    initFadeInAnimations();

    // パララックス効果
    initParallaxEffects();

    // 装飾要素のアニメーション
    initDecorationAnimations();

    // カウントアップアニメーション
    initCountUpAnimations();

    // テキストアニメーション
    initTextAnimations();
});

// ========================================
// フェードインアニメーション
// ========================================
function initFadeInAnimations() {
    // .fade-in クラスの要素
    const fadeInElements = document.querySelectorAll('.fade-in');

    fadeInElements.forEach((element) => {
        gsap.from(element, {
            opacity: 0,
            y: 30,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // .fade-in-left クラスの要素
    const fadeInLeftElements = document.querySelectorAll('.fade-in-left');

    fadeInLeftElements.forEach((element) => {
        gsap.from(element, {
            opacity: 0,
            x: -30,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // .fade-in-right クラスの要素
    const fadeInRightElements = document.querySelectorAll('.fade-in-right');

    fadeInRightElements.forEach((element) => {
        gsap.from(element, {
            opacity: 0,
            x: 30,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // .scale-in クラスの要素
    const scaleInElements = document.querySelectorAll('.scale-in');

    scaleInElements.forEach((element) => {
        gsap.from(element, {
            opacity: 0,
            scale: 0.9,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // カード要素のスタッガーアニメーション
    const cardContainers = document.querySelectorAll('.card-grid, .service-list, .works-grid');

    cardContainers.forEach((container) => {
        const cards = container.querySelectorAll('.card, .service-card, .work-item');

        gsap.from(cards, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: container,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });
}

// ========================================
// パララックス効果
// ========================================
function initParallaxEffects() {
    // 装飾要素のパララックス
    const decorationElements = document.querySelectorAll('.decoration-circle, .decoration-capsule, .decoration-square');

    decorationElements.forEach((element) => {
        const speed = element.dataset.speed || 0.5;

        gsap.to(element, {
            y: () => element.offsetHeight * speed,
            ease: 'none',
            scrollTrigger: {
                trigger: element.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // ヒーローセクションのパララックス
    const heroSection = document.querySelector('.hero-section');

    if (heroSection) {
        const heroContent = heroSection.querySelector('.hero-content');
        const heroDecoration = heroSection.querySelectorAll('.hero-decoration > *');

        if (heroContent) {
            gsap.to(heroContent, {
                y: 100,
                opacity: 0.5,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroSection,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }

        heroDecoration.forEach((element, index) => {
            const speed = 0.3 + (index * 0.1);
            gsap.to(element, {
                y: () => element.offsetHeight * speed,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroSection,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        });
    }
}

// ========================================
// 装飾要素のアニメーション
// ========================================
function initDecorationAnimations() {
    const decorationElements = document.querySelectorAll('.decoration-circle, .decoration-capsule, .decoration-square');

    decorationElements.forEach((element) => {
        // 初期状態からフェードイン・回転
        gsap.from(element, {
            opacity: 0,
            scale: 0.5,
            rotation: 180,
            duration: 1.5,
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
                trigger: element,
                start: 'top 90%',
                toggleActions: 'play none none none'
            }
        });

        // ホバー時の微妙な動き（ループ）
        gsap.to(element, {
            y: '+=20',
            rotation: '+=10',
            duration: 3,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true
        });
    });
}

// ========================================
// カウントアップアニメーション
// ========================================
function initCountUpAnimations() {
    const countElements = document.querySelectorAll('.count-number');

    countElements.forEach((element) => {
        const target = parseInt(element.dataset.count || element.textContent);
        const duration = parseFloat(element.dataset.duration || 2);

        gsap.from(element, {
            textContent: 0,
            duration: duration,
            ease: 'power1.out',
            snap: { textContent: 1 },
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            onUpdate: function() {
                element.textContent = Math.ceil(this.targets()[0].textContent);
            }
        });

        gsap.set(element, { textContent: target });
    });
}

// ========================================
// テキストアニメーション
// ========================================
function initTextAnimations() {
    // セクションタイトルのアニメーション
    const sectionTitles = document.querySelectorAll('.section-title');

    sectionTitles.forEach((title) => {
        gsap.from(title, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Split Text アニメーション（各文字をアニメーション）
    const splitTextElements = document.querySelectorAll('.split-text');

    splitTextElements.forEach((element) => {
        const text = element.textContent;
        element.innerHTML = '';

        // 各文字をspanで囲む
        text.split('').forEach((char) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            element.appendChild(span);
        });

        const chars = element.querySelectorAll('span');

        gsap.from(chars, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.05,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });
}

// ========================================
// ホバーエフェクト（カード）
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card, .service-card, .work-item');

    cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -8,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
});

// ========================================
// スクロール時のプログレスバー
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.querySelector('.scroll-progress');

    if (progressBar) {
        gsap.to(progressBar, {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true
            }
        });
    }
});

// ========================================
// ページ遷移アニメーション
// ========================================
function initPageTransition() {
    const links = document.querySelectorAll('a:not([target="_blank"]):not([href^="#"])');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // 外部リンクやメールリンクは除外
            if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
                return;
            }

            e.preventDefault();

            // ページアウトアニメーション
            gsap.to('body', {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    window.location.href = href;
                }
            });
        });
    });

    // ページイン アニメーション
    gsap.from('body', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
    });
}

// ページ遷移アニメーションの初期化（オプション）
// initPageTransition();
