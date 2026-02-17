'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ManagerDashboard() {
  const router = useRouter();
  // 左側のメニューで何が選ばれているかを記憶する変数
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-[#f8f6f0] flex text-[#373c4f]">
      
      {/* --- 左側のサイドバー（マネージャー専用メニュー） --- */}
      <div className="w-64 bg-white border-r border-[#e2dccf] flex flex-col z-10 shadow-[2px_0_8px_-4px_rgba(0,0,0,0.1)]">
        <div className="p-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-1">
            <span className="text-[#e26b48]">🔥</span> ふわまるOS
          </h2>
          <p className="text-xs font-bold text-[#de7c5a] bg-[#fff4f1] inline-block px-2 py-1 rounded-md">Manager Mode</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          <p className="text-xs font-bold text-gray-400 mt-2 mb-2 pl-2">アナリティクス</p>
          <button onClick={() => setActiveTab('dashboard')} className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'dashboard' ? 'bg-[#e9f0ff] text-blue-700 shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}>📊 リアルタイム売上</button>
          <button onClick={() => setActiveTab('ai')} className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'ai' ? 'bg-[#e9f0ff] text-blue-700 shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}>🤖 AI経営分析・予測</button>

          <p className="text-xs font-bold text-gray-400 mt-6 mb-2 pl-2">店舗オペレーション</p>
          <button onClick={() => setActiveTab('menu')} className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'menu' ? 'bg-[#e9f0ff] text-blue-700 shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}>📋 メニュー・在庫マスタ</button>
          <button onClick={() => setActiveTab('shift')} className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'shift' ? 'bg-[#e9f0ff] text-blue-700 shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}>📅 シフト・勤怠管理</button>

          <p className="text-xs font-bold text-gray-400 mt-6 mb-2 pl-2">設定・DAO</p>
          <button onClick={() => setActiveTab('dao')} className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'dao' ? 'bg-[#e9f0ff] text-blue-700 shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}>💎 ゲームバランス設定</button>
        </nav>

        <div className="p-4 border-t border-[#e2dccf]">
          <button onClick={() => router.push('/')} className="w-full px-4 py-3 text-[#de7c5a] font-bold hover:bg-[#fff4f1] rounded-xl transition-colors text-left flex items-center gap-2">
            🚪 ログアウト
          </button>
        </div>
      </div>

      {/* --- 右側のメインコンテンツ --- */}
      <div className="flex-1 p-8 overflow-y-auto">
        
        {/* === 「リアルタイム売上」が選ばれている時の画面 === */}
        {activeTab === 'dashboard' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
            <header className="mb-8 flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-bold mb-2">リアルタイム売上分析</h1>
                <p className="text-gray-500">本日の営業状況と、AIによる自動インサイトです。</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-gray-400">最終更新: たった今</p>
              </div>
            </header>

            {/* 上部のサマリーカード3つ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2dccf]">
                <p className="text-sm font-bold text-gray-500 mb-1">本日の総売上</p>
                <p className="text-4xl font-bold text-[#373c4f] tracking-tight">¥142,500</p>
                <p className="text-sm text-green-500 font-bold mt-2 flex items-center gap-1">📈 前週比 +15%</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2dccf]">
                <p className="text-sm font-bold text-gray-500 mb-1">来店客数 / 客単価</p>
                <p className="text-4xl font-bold text-[#373c4f] tracking-tight">128<span className="text-lg text-gray-400 font-normal">名</span> <span className="text-2xl text-gray-300">/</span> <span className="text-2xl">¥1,113</span></p>
                <p className="text-sm text-blue-500 font-bold mt-2 flex items-center gap-1">🌤️ 晴れの影響でテイクアウト増</p>
              </div>
              <div className="bg-gradient-to-br from-[#fff4f1] to-[#ffe8e0] p-6 rounded-2xl shadow-sm border border-[#ffd5c8]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-bold text-[#e26b48] flex items-center gap-1">✨ AI インサイト (Gemini)</span>
                </div>
                <p className="text-sm text-[#5a3a31] font-bold leading-relaxed">
                  「午後から近隣で音楽イベントがあります。アイスコーヒーとクッキーのセット需要が予測されます。コーヒー豆の在庫を+20%補充することをおすすめします！」
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 人気商品ランキング */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2dccf]">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span>🏆</span> 人気商品ランキング
                </h3>
                <div className="space-y-4">
                  {[
                    { rank: 1, name: 'ふわまるブレンド', count: 45, sales: '¥20,250', emoji: '☕' },
                    { rank: 2, name: '自家製チーズケーキ', count: 32, sales: '¥17,600', emoji: '🍰' },
                    { rank: 3, name: 'アイスカフェラテ', count: 28, sales: '¥14,000', emoji: '🧊' },
                  ].map((item) => (
                    <div key={item.rank} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
                      <div className="flex items-center gap-4">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm ${item.rank === 1 ? 'bg-gradient-to-br from-yellow-200 to-yellow-400 text-yellow-800' : item.rank === 2 ? 'bg-gradient-to-br from-gray-200 to-gray-300 text-gray-700' : 'bg-gradient-to-br from-orange-200 to-orange-300 text-orange-800'}`}>
                          {item.rank}
                        </span>
                        <span className="font-bold text-gray-700 flex items-center gap-2">
                          <span className="text-xl">{item.emoji}</span> {item.name}
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-gray-800">{item.count}杯/個</p>
                        <p className="text-xs text-gray-400 font-mono">{item.sales}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 現在の稼働状況（勤怠） */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2dccf]">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span>👥</span> 現在の出勤スタッフ
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-green-300 flex items-center justify-center font-bold text-green-700 shadow-sm text-lg">A</div>
                      <div>
                        <p className="font-bold text-green-800 flex items-center gap-2">
                          アリス <span className="text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded-full">Lv.12</span>
                        </p>
                        <p className="text-xs text-green-600 font-bold mt-1">役割: ホール / レジ</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold bg-green-500 text-white px-3 py-1.5 rounded-full shadow-sm">稼働中</span>
                      <p className="text-xs text-green-600 mt-2 font-mono">10:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-blue-300 flex items-center justify-center font-bold text-blue-700 shadow-sm text-lg">B</div>
                      <div>
                        <p className="font-bold text-blue-800 flex items-center gap-2">
                          ボブ <span className="text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full">Lv.8</span>
                        </p>
                        <p className="text-xs text-blue-600 font-bold mt-1">役割: バリスタ / 調理</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold bg-blue-500 text-white px-3 py-1.5 rounded-full shadow-sm">稼働中</span>
                      <p className="text-xs text-blue-600 mt-2 font-mono">12:00 - 20:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* === 他のメニューが選ばれている時の仮画面 === */}
        {activeTab !== 'dashboard' && (
          <div className="h-[80vh] flex items-center justify-center bg-white rounded-2xl border border-[#e2dccf] shadow-sm animate-in fade-in zoom-in-95 duration-300">
            <div className="text-center">
              <p className="text-6xl mb-6 animate-bounce">🚧</p>
              <h2 className="text-2xl font-bold text-gray-700 mb-3">この機能は開発中です</h2>
              <p className="text-gray-500 font-bold">次はここを作りますか？</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}