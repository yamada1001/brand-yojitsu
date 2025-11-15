'use client';

const portfolioItems = [
  {
    title: '大分IT移住プロモーション',
    category: 'ランディングページ',
    description: '大分県のIT人材誘致を目的としたランディングページ。モダンなデザインと効果的なCTAで高いコンバージョンを実現。',
  },
  {
    title: '余日コーポレートサイト',
    category: 'コーポレートサイト',
    description: '自社サイトとして、ブランドアイデンティティを表現。シンプルで洗練されたデザインが特徴。',
  },
];

export default function PortfolioMinimal() {
  return (
    <section id="portfolio" className="bg-white px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* セクションタイトル */}
        <div className="mb-20">
          <span className="mb-4 block text-sm font-medium tracking-wider text-gray-400">
            PORTFOLIO
          </span>
          <h2 className="text-4xl font-normal tracking-tight text-gray-900 md:text-5xl">
            制作実績
          </h2>
        </div>

        {/* ポートフォリオグリッド */}
        <div className="space-y-px border-t border-gray-200">
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className="group border-b border-gray-200 py-12 transition-all hover:bg-gray-50"
            >
              <div className="grid gap-8 md:grid-cols-12 md:gap-12">
                {/* 左側: 画像プレースホルダー */}
                <div className="md:col-span-5">
                  <div className="aspect-[4/3] bg-gray-100">
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        <div className="mb-2 text-5xl font-light text-gray-200">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="text-sm text-gray-400">余日</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 右側: テキスト情報 */}
                <div className="flex flex-col justify-center md:col-span-7">
                  <div className="mb-4">
                    <span className="text-xs font-medium tracking-wider text-gray-400">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="mb-4 text-2xl font-medium text-gray-900 md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mb-6 leading-relaxed text-gray-600">
                    {item.description}
                  </p>

                  <div>
                    <button className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 transition-all hover:gap-3">
                      <span>詳細を見る</span>
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            その他の実績については、お問い合わせください
          </p>
        </div>
      </div>
    </section>
  );
}
