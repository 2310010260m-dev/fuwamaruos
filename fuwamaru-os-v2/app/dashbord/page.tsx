'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f3efe4] flex text-[#373c4f]">
      {/* サイドバー（メニュー） */}
      <div className="w-64 bg-white border-r border-[#e2dccf] p-4 flex flex-col h-screen overflow-y-auto">
        <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
          <span className="text-[#e26b48]">🔥</span> ふわまるOS
        </h2>
        
        <nav className="flex-1 space-y-1">
          <p className="text-xs font-bold text-gray-400 mt-4 mb-2 pl-2">1. 基礎（心臓部）</p>
          <button className="w-full text-left p-3 rounded-lg bg-[#e9f0ff] text-blue-700 font-bold">🏠 ダッシュボード</button>
          <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors">📱 次世代POSレジ</button>
          <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors">📦 動的在庫管理</button>

          <p className="text-xs font-bold text-gray-400 mt-6 mb-2 pl-2">2. AI（知能の拡張）</p>
          <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors">📊 AI経営分析</button>
          <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors">🤖 AIシフト作成</button>
          <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors">🦉 ふわまるオラクル</button>

          <p className="text-xs font-bold text-gray-400 mt-6 mb-2 pl-2">3. DAO ＆ 組織</p>
          <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors">🏆 ミッションボード</button>
          <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors">✨ ピア・ボーナス</button>
        </nav>

        <button 
          onClick={() => router.push('/')}
          className="mt-8 p-3 text-sm text-red-500 hover:bg-red-50 rounded-lg text-left transition-colors font-bold"
        >
          ログアウト
        </button>
      </div>

      {/* メインコンテンツ */}
      <div className="flex-1 p-8 overflow-y-auto h-screen">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">本日のサマリー</h1>
          <p className="text-gray-500">ようこそ！AIが今日の店舗状況を分析しています。</p>
        </header>

        {/* サマリーカード（現状は仮のデータです） */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2dccf]">
            <h3 className="text-gray-500 text-sm font-bold mb-2">現在の売上</h3>
            <p className="text-3xl font-bold">¥124,500</p>
            <p className="text-sm text-green-500 mt-2 font-bold">↑ AI予測より +12%</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2dccf]">
            <h3 className="text-gray-500 text-sm font-bold mb-2">稼働中のスタッフ</h3>
            <p className="text-3xl font-bold">4名</p>
            <p className="text-sm text-blue-500 mt-2 font-bold">🌟 チームXP: +350</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2dccf]">
            <h3 className="text-gray-500 text-sm font-bold mb-2">AI アラート</h3>
            <p className="text-lg font-bold text-[#e26b48]">コーヒー豆が残りわずか</p>
            <p className="text-sm text-gray-500 mt-2">自律型発注システムを承認待ち</p>
          </div>
        </div>

        {/* メインエリア */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e2dccf] h-64 flex items-center justify-center">
          <p className="text-gray-400 font-bold">ここに詳細なデータやPOSレジ画面が表示されます</p>
        </div>
      </div>
    </div>
  );
}