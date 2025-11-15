'use client';

export default function ContactMinimal() {
  return (
    <section className="bg-gray-50 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* セクションタイトル */}
        <div className="mb-20">
          <span className="mb-4 block text-sm font-medium tracking-wider text-gray-400">
            CONTACT
          </span>
          <h2 className="text-4xl font-normal tracking-tight text-gray-900 md:text-5xl">
            お問い合わせ
          </h2>
        </div>

        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          {/* 左側: コンタクト情報 */}
          <div>
            <h3 className="mb-12 text-2xl font-medium text-gray-900">余日 / YOJITSU</h3>

            <div className="space-y-8">
              <div>
                <div className="mb-2 text-sm font-medium tracking-wider text-gray-400">
                  ADDRESS
                </div>
                <div className="text-gray-900">大分県</div>
              </div>

              <div>
                <div className="mb-2 text-sm font-medium tracking-wider text-gray-400">
                  PHONE
                </div>
                <a
                  href="tel:080-4692-9681"
                  className="text-gray-900 transition-colors hover:text-accent"
                >
                  080-4692-9681
                </a>
              </div>

              <div>
                <div className="mb-2 text-sm font-medium tracking-wider text-gray-400">
                  EMAIL
                </div>
                <a
                  href="mailto:yamada@yojitu.com"
                  className="text-gray-900 transition-colors hover:text-accent"
                >
                  yamada@yojitu.com
                </a>
              </div>

              <div>
                <div className="mb-2 text-sm font-medium tracking-wider text-gray-400">
                  HOURS
                </div>
                <div className="text-gray-900">10:00 - 22:00</div>
                <div className="text-sm text-gray-500">定休日なし</div>
              </div>

              <div>
                <div className="mb-2 text-sm font-medium tracking-wider text-gray-400">
                  REGISTRATION
                </div>
                <div className="text-gray-900">T9810094141774</div>
              </div>

              <div>
                <div className="mb-2 text-sm font-medium tracking-wider text-gray-400">
                  ESTABLISHED
                </div>
                <div className="text-gray-900">2025.05.14</div>
              </div>
            </div>
          </div>

          {/* 右側: お問い合わせフォーム */}
          <div>
            <h3 className="mb-8 text-xl font-medium text-gray-900">
              メッセージを送る
            </h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-gray-900 focus:outline-none"
                  placeholder="山田太郎"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-gray-900 focus:outline-none"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  メッセージ
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-gray-900 focus:outline-none"
                  placeholder="お問い合わせ内容をご記入ください"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full border border-gray-900 bg-gray-900 py-4 text-sm font-medium text-white transition-all hover:bg-gray-800"
              >
                送信する
              </button>
            </form>
          </div>
        </div>

        {/* フッター */}
        <div className="mt-24 border-t border-gray-200 pt-12">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              © 2025 余日 / YOJITSU. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              大分から始まる、新しいビジネスの形
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
