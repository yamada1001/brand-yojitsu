# 余日（ヨジツ）公式サイト

マーケティング視点を活かしたWebサイト制作・LP制作・ショート動画制作を提供する余日（YOJITSU）の公式コーポレートサイトです。

## サイト構成

```
brand-site/
├── index.php              # トップページ
├── about.php              # 会社概要
├── service.php            # サービス一覧
├── works.php              # 制作実績
├── news.php               # お知らせ
├── contact.php            # お問い合わせ
├── privacy.php            # プライバシーポリシー
├── sitemap.xml            # サイトマップ
├── .htaccess              # Apache設定
├── includes/              # 共通ファイル
│   ├── config.php         # サイト設定
│   ├── header.php         # ヘッダー
│   └── footer.php         # フッター
├── assets/                # 静的ファイル
│   ├── css/
│   │   ├── style.css      # メインCSS
│   │   └── blog.css       # ブログ用CSS
│   ├── js/
│   │   ├── main.js        # メインJS
│   │   ├── animations.js  # アニメーション
│   │   └── cookie-consent.js  # Cookie同意
│   └── images/            # 画像ファイル
└── blog/                  # ブログディレクトリ
```

## 技術スタック

- **PHP**: サーバーサイド処理、共通パーツのインクルード
- **HTML5/CSS3**: マークアップ、スタイリング
- **JavaScript**: インタラクション、アニメーション
- **GSAP**: アニメーションライブラリ
- **Font Awesome**: アイコンライブラリ
- **Google Fonts**: Webフォント（Noto Sans JP, Inter）

## デザインコンセプト

- ソフトで親しみやすい、温かみのあるモダンデザイン
- パステルカラーを基調とした柔らかい配色
- 幾何学的装飾（円、カプセル形、四角形）
- カラフルだが統一感のある配色

## カラーパレット

- **ベース**: #F5F3F0（ライトベージュ）
- **背景**: #D4EFE8（ミントグリーン）、#E8F3F8（ライトブルー）
- **アクセント**: #FF6B35（オレンジ）、#C1405D（レッド）、#F4D03F（イエロー）、#7ECFC3（ティール）

## 主な機能

- レスポンシブデザイン（モバイルファースト）
- ハンバーガーメニュー（モバイル）
- カスタムカーソル（デスクトップ）
- スクロールアニメーション（GSAP + ScrollTrigger）
- Cookie同意バナー
- 構造化データ（JSON-LD）
- SEO最適化

## セットアップ

1. ファイルをサーバーにアップロード
2. `includes/config.php` を環境に合わせて編集
3. 画像ファイルを `assets/images/` に配置
4. お問い合わせフォームの送信処理を実装（必要に応じて）

## サーバー要件

- PHP 7.4以上
- Apache（mod_rewrite推奨）
- HTTPS対応推奨

## カスタマイズ

### サイト情報の変更

`includes/config.php` でサイト名、会社情報、連絡先などを変更できます。

### デザインの変更

`assets/css/style.css` のCSS変数を変更することで、カラーパレットやスペーシングを一括変更できます。

### アニメーションの調整

`assets/js/animations.js` でGSAPアニメーションの設定を変更できます。

## ブラウザ対応

- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）

## ライセンス

© 2024 余日（YOJITSU）. All Rights Reserved.

## お問い合わせ

- Email: info@yojitu.com
- Website: https://yojitu.com
