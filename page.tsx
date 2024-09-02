'use client';

import { useState, useEffect } from 'react'

export default function Component() {
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    document.title = "幾徳祭トークショー";
    const interval = setInterval(createConfetti, 200)
    return () => clearInterval(interval)
  }, [])

  function createConfetti() {
    if (!showConfetti) return

    const confetti = document.createElement('div')
    confetti.classList.add('confetti')
    confetti.style.left = `${Math.random() * 100}vw`
    confetti.style.animationDuration = `${Math.random() * 2 + 1}s`
    confetti.style.backgroundColor = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'][Math.floor(Math.random() * 5)]
    document.getElementById('confetti-container')?.appendChild(confetti)

    setTimeout(() => {
      confetti.remove()
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-blue-50 text-blue-900">
      <div id="confetti-container" className="fixed inset-0 pointer-events-none" />
      {/* Festival Header */}
      <div className="relative bg-blue-100 text-blue-900 py-6 px-4 shadow-md">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
            第49回幾徳祭
          </h1>
          <p className="text-xl md:text-2xl font-light">
            <span className="bg-blue-200 px-3 py-1 rounded-full inline-block">
              トークショー
            </span>
          </p>
        </div>
      </div>

      {/* Existing Header section */}
      <header className="h-screen relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 gradient-bg" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
          <img src="kazi1080.png" alt="梶裕貴" className="h-3/4 object-contain object-center mb-8" />
          <div className="text-center bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 text-blue-900">
              梶 裕貴
            </h1>
            <p className="text-xl md:text-2xl font-light mb-6 text-blue-700">
              {/*トークショー*/}
            </p>
          </div>
        </div>
      </header>

      {/* Event information */}
      <div className="bg-blue-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl text-blue-800 font-medium">
            今年のステージイベントのトークショーには、声優の梶裕貴さんが出演されます。
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16 space-y-32">
        {/* Event details */}
        <section className="relative">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 space-y-8 shadow-xl">
            <h2 className="text-4xl font-bold gradient-text">神奈川工科大学 幾徳祭</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xl">11月2日</p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-xl">神奈川工科大学 A1号館 KAITアリーナ2</p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xl">OPEN 11:30 / START 12:30</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured works */}
        <section className="space-y-12">
          <h3 className="text-3xl font-bold text-center gradient-text">出演作品</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 overflow-hidden shadow-lg hover-scale">
              <div className="relative z-10">
                <h4 className="text-2xl font-semibold mb-2 text-blue-800">進撃の巨人</h4>
                <p className="text-blue-600">エレン・イェーガー役</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 overflow-hidden shadow-lg hover-scale">
              <div className="relative z-10">
                <h4 className="text-2xl font-semibold mb-2 text-blue-800">僕のヒーローアカデミア</h4>
                <p className="text-blue-600">轟焦凍役</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 overflow-hidden shadow-lg hover-scale">
              <div className="relative z-10">
                <h4 className="text-2xl font-semibold mb-2 text-blue-800">ハイキュー!!</h4>
                <p className="text-blue-600">孤爪研磨役</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 overflow-hidden shadow-lg hover-scale">
              <div className="relative z-10">
                <h4 className="text-2xl font-semibold mb-2 text-blue-800">七つの大罪</h4>
                <p className="text-blue-600">メリオダス役</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          </div>
        </section>

        {/* Profile and AI project */}
        <section className="relative">
          <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-8 md:p-12 space-y-6 shadow-xl text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">演者プロフィール</h3>
                <p className="text-lg leading-relaxed">
                  梶裕貴は、日本の声優、ナレーターです。数々の人気アニメ作品に出演し、
                  その演技力と表現力で多くのファンを魅了しています。代表作には「進撃の巨人」
                  のエレン・イェーガー役、「僕のヒーローアカデミア」の轟焦凍役などがあります。
                  また、声優活動20周年を記念して、AI音声合成プロジェクト「そよぎフラクタル」を
                  発足させるなど、常に新しい挑戦を続けています。
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">AI音声合成プロジェクト</h3>
                <p className="text-xl mb-4">声優20周年を記念して「そよぎフラクタル」を発足</p>
                <div className="flex items-center space-x-6">
                  <a href="https://www.soyogi-fractal.com/">
                    <button className="bg-white text-blue-600 hover:bg-blue-100 transition duration-300 px-6 py-2 rounded-full flex items-center">
                      詳細を見る
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </a>
                  
                  <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                      src="qr-soyogi.png"
                      alt="そよぎフラクタルプロジェクトウェブサイトのQRコード"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ticket Information */}
        <section className="relative">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 space-y-8 shadow-xl">
            <h3 className="text-3xl font-bold mb-4 gradient-text">チケット情報</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
                <p className="text-xl">学内生：1,000円 / 一般：1,500円</p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-800">［学生販売］</h4>
                <div className="pl-4 space-y-2">
                  <p className="font-medium">■応募抽選販売（e+）</p>
                  <p>［申込］9/21（土）12:00 ~ 9/26（木）18:00</p>
                  <p>［発表］9/28（土）</p>
                  <p className="text-sm text-gray-600">※チケットの申込は学内ポータルサイトからアクセスください。</p>
                  <p className="text-sm text-gray-600">※学内生は入場時学生証を確認します。</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-800">［一般販売］</h4>
                <div className="pl-4 space-y-2">
                  <p className="font-medium">■応募抽選販売（e+）</p>
                  <p>［申込］10/5（土）12:00 ~ 10/10（木）18:00</p>
                  <p>［発表］10/12（土）</p>
                  <p className="font-medium mt-4">■通常販売（先着）</p>
                  <p>［販売日］10/19（月）12:00 ~ なくなり次第終了</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="mb-2">一般販売はこちらから</p>
                {/* 下記に購入リンク */}
                <a href="" target="_blank" rel="noopener noreferrer">
                  <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white transition duration-300 px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
                    チケットを購入
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Updated Caution section */}
        <section className="relative">
          <div className="bg-yellow-100 rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-3xl font-bold mb-6 flex items-center text-yellow-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              注意事項
            </h3>
            <div className="space-y-6 text-yellow-900">
              <div>
                <h4 className="text-xl font-semibold mb-2">［チケットに関する注意事項］</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>お１人様2枚まで購入ができます。</li>
                  <li>チケットの再発行、払い戻しはできません。</li>
                  <li>チケットの転売行為は一切禁止となります。転売が認められた場合、チケットは無効となり、ご入場できません。</li>
                  <li>３歳以下のお子様は保護者１名につき１名の膝上鑑賞が可能です。但しお席が必要な場合はチケットが必要となります。（４歳以上チケット要）</li>
                  <li>車椅子の方は１名につき付き添い１名までとなります。（付き添いの方も要チケット）また購入後に必ず学友会イベント局までご連絡ください。</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2">［当日の注意事項］</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>イベント中の写真撮影、録画、録音は一切禁止となります。</li>
                  <li>会場内での飲食は禁止となります。</li>
                  <li>開場中ご本人確認をさせていただく場合がございます。必ず身分証をお持ちください。</li>
                  <li>係員の指示や上記の注意事項に沿った行動でないと判断した場合、チケットの販売、入場をお断りする場合がございます。</li>
                  <li>周囲の方に迷惑のかからないよう、マナーと節度ある行動をお願いいたします。</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-2">［問い合わせ先］</h4>
                <p>学友会イベント局：<a href="mailto:ikutoku.jikkou@gmail.com" className="underline">ikutoku.jikkou@gmail.com</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-100 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-blue-800">
          <p>Copyright © 2024 · 神奈川工科大学学友会イベント局.</p>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap');

        body {
          font-family: 'Noto Sans JP', sans-serif;
        }

        .gradient-bg {
          background: linear-gradient(to right, rgba(59, 130, 246, 0.3), rgba(16, 185, 129, 0.3));
        }

        .gradient-text {
          background: linear-gradient(to right, #2563eb, #10b981);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hover-scale {
          transition: transform 0.3s ease;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        .confetti {
          position: fixed;
          width: 10px;
          height: 10px;
          background-color: #3b82f6;
          animation: confetti-fall 3s linear infinite;
        }

        @keyframes confetti-fall {
          0% { transform: translateY(-100vh) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }
      `}</style>
    </div>
  )
}