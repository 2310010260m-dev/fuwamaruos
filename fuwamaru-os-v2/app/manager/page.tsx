'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ManagerDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('dashboard');

  // --- AI用の変数（前回と同じ） ---
  const [weather, setWeather] = useState('晴れ');
  const [event, setEvent] = useState('特になし');
  const [location, setLocation] = useState('📍 未取得');
  const [datetime, setDatetime] = useState('');
  const [aiAdvice, setAiAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setDatetime(new Date().toLocaleString('ja-JP'));
  }, []);

  const fetchAIAdvice = async () => { /* 前回と同じ処理なので今回はモック（仮）動作にします */
    setIsLoading(true);
    setTimeout(() => {
      setAiAdvice('【AIインサイト】\n現在の在庫状況と天気から、アイスカフェラテの注文増加が予測されます。牛乳の在庫がアラート基準を下回っているため、至急補充をお願いします！');
      setIsLoading(false);
    }, 2000);
  };

  // --- 📦 在庫管理用のダミーデータ ---
  const [inventory, setInventory] = useState([
    { id: 1, name: '☕ コーヒー豆（深煎り）', stock: 18, unit: 'kg', alertLine: 10 },
    { id: 2, name: '🥛 牛乳', stock: 4, unit: 'L', alertLine: 10 }, // 少ない！
    { id: 3, name: '🍰 チーズケーキ', stock: 2, unit: '個', alertLine: 5 }, // 少ない！
    { id: 4, name: '🍊 オレンジジュース', stock: 12, unit: '本', alertLine: 5 },
  ]);

  // --- 📅 シフト管理用の状態 ---
  const [isGeneratingShift, setIsGeneratingShift] = useState(false);
  const [shiftGenerated, setShiftGenerated] = useState(false);

  const handleGenerateShift = () => {
    setIsGeneratingShift(true);
    setTimeout(() => {
      setIsGeneratingShift(false);
      setShiftGenerated(true);
    }, 3000); // 3秒間AIが考えているフリ
  };

  // --- 📖 マニュアル用の状態 ---
  const [manualTab, setManualTab] = useState('open');

  // --- 💎 DAO (XP/FP) 用のダミーデータ ---
  const [missions, setMissions] = useState([
    { id: 1, title: '🧹 トイレの徹底清掃', xp: 50, fp: 50, status: 'active' },
    { id: 2, title: '✨ エスプレッソマシンの洗浄', xp: 100, fp: 100, status: 'active' },
    { id: 3, title: '📦 納品物の検品と棚出し', xp: 30, fp: 30, status: 'active' },
  ]);

  return (
    <div className="min-h-screen bg-[#f8f6f0] flex text-[#373c4f]">
      {/* ================= 左側サイドバー ================= */}
      <div className="w-64 bg-white border-r border-[#e2dccf] flex flex-col z-10 shadow-sm h-screen sticky top-0">
        <div className="p-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-1"><span className="text-[#e26b48]">🔥</span> ふわまるOS</h2>
          <p className="text-xs font-bold text-[#de7c5a] bg-[#fff4f1] inline-block px-2 py-1 rounded-md">Manager Mode</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <p className="text-xs font-bold text-gray-400 mt-2 mb-2 pl-2">アナリティクス</p>
          <button onClick={() => setActiveTab('dashboard')} className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'dashboard' ? 'bg-[#e9f0ff] text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}>📊 リアルタイム売上</button>
          <button onClick={() => setActiveTab('ai')} className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'ai' ? 'bg-[#e9f0ff] text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}>🤖 AI経営分析・予測</button>

          <p className="text-xs font-bold text-gray-400 mt-6 mb-2 pl-2">店舗オペレーション</p>
          <button onClick={() => setActiveTab('inventory')} className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'inventory' ? 'bg-[#e9f0ff] text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}>📦 在庫・メニュー管理</button>
          <button onClick={() => setActiveTab('shift')} className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'shift' ? 'bg-[#e9f0ff] text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}>📅 AIシフト作成・勤怠</button>
          <button onClick={() => setActiveTab('manual')} className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'manual' ? 'bg-[#e9f0ff] text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}>📖 マニュアル管理</button>

          <p className="text-xs font-bold text-gray-400 mt-6 mb-2 pl-2">設定・DAO</p>
          <button onClick={() => setActiveTab('dao')} className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-colors ${activeTab === 'dao' ? 'bg-[#e9f0ff] text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}>💎 XP/FP クエスト設定</button>
        </nav>
        <div className="p-4 border-t border-[#e2dccf]">
          <button onClick={() => router.push('/')} className="w-full px-4 py-3 text-[#de7c5a] font-bold hover:bg-[#fff4f1] rounded-xl transition-colors text-left">🚪 ログアウト</button>
        </div>
      </div>

      {/* ================= 右側メインコンテンツ ================= */}
      <div className="flex-1 p-8 overflow-y-auto h-screen">
        
        {/* 📊 ダッシュボード ＆ 🤖 AI分析 (以前と同じなので省略表示) */}
        {(activeTab === 'dashboard' || activeTab === 'ai') && (
           <div className="animate-in fade-in max-w-4xl mx-auto">
             <h1 className="text-3xl font-bold mb-4">{activeTab === 'dashboard' ? '📊 リアルタイム売上分析' : '🤖 AI経営インサイト'}</h1>
             <p className="text-gray-500 mb-8">※このページは前回作成済みです。左の新しいメニューを試してください！</p>
           </div>
        )}

        {/* 📦 在庫・メニュー管理 */}
        {activeTab === 'inventory' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 max-w-5xl mx-auto">
            <header className="mb-8 flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-bold mb-2">📦 在庫・メニューマスタ</h1>
                <p className="text-gray-500">POSと連動し、在庫が一定数を下回ると自動で警告します。</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold shadow-sm">＋ 新規アイテム登録</button>
            </header>

            <div className="bg-white rounded-2xl shadow-sm border border-[#e2dccf] overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100 text-sm text-gray-500">
                    <th className="p-4 font-bold">アイテム名</th>
                    <th className="p-4 font-bold">現在庫</th>
                    <th className="p-4 font-bold">警告ライン</th>
                    <th className="p-4 font-bold">ステータス</th>
                  </tr>
                </thead>
                <tbody>
                  {inventory.map((item) => {
                    const isLow = item.stock <= item.alertLine; // ★警告ラインを下回っているかチェック！
                    return (
                      <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-gray-700">{item.name}</td>
                        {/* ★少ない場合は文字を赤く大きくするインタラクション */}
                        <td className={`p-4 font-bold text-xl ${isLow ? 'text-red-600 animate-pulse' : 'text-gray-800'}`}>
                          {item.stock} <span className="text-sm font-normal text-gray-400">{item.unit}</span>
                        </td>
                        <td className="p-4 text-gray-500">{item.alertLine} {item.unit}</td>
                        <td className="p-4">
                          {isLow ? (
                            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold border border-red-200">⚠️ 残りわずか！発注推奨</span>
                          ) : (
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-200">✅ 良好</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 📅 AIシフト作成・勤怠 */}
        {activeTab === 'shift' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 max-w-5xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-bold mb-2">📅 AIシフト作成</h1>
              <p className="text-gray-500">スタッフからの希望シフトと目標人件費を元に、AIが最適なシフトを組みます。</p>
            </header>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2dccf] mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-700">対象期間: 来週 (10/23 - 10/29)</h3>
                  <p className="text-sm text-gray-500">提出済みスタッフ: 5/5名</p>
                </div>
                {!shiftGenerated && (
                  <button 
                    onClick={handleGenerateShift}
                    disabled={isGeneratingShift}
                    className={`px-6 py-3 rounded-xl font-bold text-white shadow-sm transition-all ${isGeneratingShift ? 'bg-gray-400 cursor-wait' : 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-105'}`}
                  >
                    {isGeneratingShift ? '🤖 AIがシフトを計算中...' : '✨ AIで最適なシフトを作成'}
                  </button>
                )}
              </div>

              {isGeneratingShift && (
                <div className="py-12 text-center text-indigo-600 animate-pulse font-bold">
                  <p className="text-4xl mb-4">⚙️🤖🧠</p>
                  <p>スタッフのXPレベル、忙しさ予測、人件費を計算しています...</p>
                </div>
              )}

              {shiftGenerated && (
                <div className="animate-in zoom-in-95 duration-500">
                  <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-4 font-bold border border-green-200">
                    ✅ AIによるシフト作成が完了しました！必要に応じて手動で修正できます。
                  </div>
                  {/* 仮のシフト表（手動で編集できるようなUI） */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-center border-collapse">
                      <thead>
                        <tr className="bg-gray-100 text-gray-600">
                          <th className="p-3 border">スタッフ</th>
                          <th className="p-3 border">月</th>
                          <th className="p-3 border">火</th>
                          <th className="p-3 border">水</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-3 border font-bold">アリス (Lv.12)</td>
                          <td className="p-3 border bg-blue-50 cursor-pointer hover:bg-blue-100">10:00-18:00</td>
                          <td className="p-3 border text-gray-400 cursor-pointer hover:bg-gray-50">休み</td>
                          <td className="p-3 border bg-blue-50 cursor-pointer hover:bg-blue-100">12:00-20:00</td>
                        </tr>
                        <tr>
                          <td className="p-3 border font-bold">ボブ (Lv.8)</td>
                          <td className="p-3 border text-gray-400 cursor-pointer hover:bg-gray-50">休み</td>
                          <td className="p-3 border bg-blue-50 cursor-pointer hover:bg-blue-100">10:00-15:00</td>
                          <td className="p-3 border bg-blue-50 cursor-pointer hover:bg-blue-100">10:00-18:00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 text-right">
                    <button className="bg-[#de7c5a] text-white px-6 py-2 rounded-lg font-bold shadow-sm">このシフトを確定してスタッフに通知</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 📖 マニュアル管理 */}
        {activeTab === 'manual' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 max-w-5xl mx-auto h-full flex flex-col">
            <header className="mb-8 flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-bold mb-2">📖 マニュアル管理</h1>
                <p className="text-gray-500">タブ形式で見やすく整理。画像や動画も追加できます。</p>
              </div>
              <button className="bg-[#de7c5a] text-white px-4 py-2 rounded-lg font-bold shadow-sm">＋ マニュアルを追加</button>
            </header>

            <div className="flex flex-1 bg-white rounded-2xl shadow-sm border border-[#e2dccf] overflow-hidden min-h-[400px]">
              {/* マニュアルのタブ（左側） */}
              <div className="w-48 bg-gray-50 border-r border-gray-100 flex flex-col">
                <button onClick={() => setManualTab('open')} className={`p-4 text-left font-bold ${manualTab === 'open' ? 'bg-white border-l-4 border-[#de7c5a] text-[#de7c5a]' : 'text-gray-500 hover:bg-gray-100'}`}>☀️ 開店準備</button>
                <button onClick={() => setManualTab('register')} className={`p-4 text-left font-bold ${manualTab === 'register' ? 'bg-white border-l-4 border-[#de7c5a] text-[#de7c5a]' : 'text-gray-500 hover:bg-gray-100'}`}>💰 レジ操作</button>
                <button onClick={() => setManualTab('close')} className={`p-4 text-left font-bold ${manualTab === 'close' ? 'bg-white border-l-4 border-[#de7c5a] text-[#de7c5a]' : 'text-gray-500 hover:bg-gray-100'}`}>🌙 閉店業務</button>
              </div>
              {/* マニュアルの内容（右側） */}
              <div className="flex-1 p-8">
                {manualTab === 'open' && (
                  <div className="animate-in fade-in">
                    <h2 className="text-2xl font-bold mb-4 border-b pb-2">☀️ 開店準備の手順</h2>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex gap-3"><span className="font-bold text-white bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">1</span> 店内の照明とBGMをつける。</li>
                      <li className="flex gap-3"><span className="font-bold text-white bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">2</span> エスプレッソマシンの電源を入れ、お湯を通す。</li>
                      <li className="flex gap-3"><span className="font-bold text-white bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">3</span> 本日の「AI経営インサイト」を確認し、おすすめメニューのPOPを出す。</li>
                    </ul>
                  </div>
                )}
                {manualTab !== 'open' && <p className="text-gray-400 font-bold">（ここにマニュアルの内容が表示されます）</p>}
              </div>
            </div>
          </div>
        )}

        {/* 💎 XP/FP クエスト設定 */}
        {activeTab === 'dao' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 max-w-5xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">💎 XP/FP クエスト設定</h1>
              <p className="text-gray-500">スタッフが実行できるミッションと、もらえる経験値(XP)・ポイント(FP)を設定します。</p>
            </header>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2dccf]">
              <div className="flex justify-between mb-6 border-b pb-4">
                <h3 className="font-bold text-lg text-gray-700">現在のミッション一覧</h3>
                <button className="text-blue-600 font-bold hover:underline">＋ 新しいミッションを作る</button>
              </div>
              
              <div className="space-y-4">
                {missions.map((mission) => (
                  <div key={mission.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-sm">📜</div>
                      <div>
                        <p className="font-bold text-lg text-gray-800">{mission.title}</p>
                        <p className="text-sm text-gray-500">スタッフが報告すると報酬が付与されます。</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-gray-50 px-6 py-3 rounded-lg border border-gray-200">
                      <div className="text-center">
                        <p className="text-xs font-bold text-gray-500">もらえる経験値</p>
                        <p className="font-bold text-xl text-blue-600">{mission.xp} <span className="text-sm">XP</span></p>
                      </div>
                      <div className="w-px h-8 bg-gray-300"></div>
                      <div className="text-center">
                        <p className="text-xs font-bold text-gray-500">もらえるポイント</p>
                        <p className="font-bold text-xl text-yellow-600">{mission.fp} <span className="text-sm">FP</span></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}