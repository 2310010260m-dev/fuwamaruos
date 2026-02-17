'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// スタッフのダミーデータ
const STAFF_LIST = [
  { id: 1, name: 'アリス', icon: 'A', color: 'bg-red-100 text-red-600 border-red-300' },
  { id: 2, name: 'ボブ', icon: 'B', color: 'bg-blue-100 text-blue-600 border-blue-300' },
  { id: 3, name: 'チャーリー', icon: 'C', color: 'bg-green-100 text-green-600 border-green-300' },
];

export default function LoginPage() {
  const router = useRouter();
  // 'manager' か 'staff' か、今どっちの画面を表示しているかを記憶する変数
  const [loginMode, setLoginMode] = useState<'manager' | 'staff'>('manager');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f6f0] flex flex-col items-center justify-center p-4 text-[#373c4f]">
      
      {/* ログインカード */}
      <div className="w-full max-w-md bg-[#f8f6f0] rounded-2xl p-8 shadow-sm border border-[#e2dccf]">
        
        {/* --- 👑 マネージャーモード --- */}
        {loginMode === 'manager' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                <span className="text-[#e26b48] text-3xl">🔥</span> 
                <span className="text-[#373c4f]">ふわまるOS</span>
              </h1>
              <h2 className="text-2xl font-bold tracking-wider mb-2">マネージャーログイン</h2>
              <p className="text-sm text-gray-500">メールアドレスとパスワードを入力してください</p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-bold mb-2">メールアドレス</label>
                <input 
                  type="email" 
                  defaultValue="hisafukui123@gmail.com"
                  className="w-full p-3 bg-[#e9f0ff] border border-transparent rounded-lg focus:outline-none focus:border-blue-300 text-gray-800"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold mb-2">パスワード</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    defaultValue="password123"
                    className="w-full p-3 bg-[#e9f0ff] border border-transparent rounded-lg focus:outline-none focus:border-blue-300 text-gray-800 tracking-widest"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-600 hover:text-gray-800">
                    👁️
                  </button>
                </div>
              </div>

              <button 
                onClick={() => router.push('/manager')}
                className="w-full bg-[#de7c5a] text-white font-bold py-3.5 rounded-lg hover:bg-[#c96a4a] transition-colors mt-4 shadow-sm"
              >
                ログイン
              </button>
            </div>

            <div className="mt-8 text-center text-sm text-[#4a5568] space-y-3">
              <p>アカウントをお持ちでないですか？ <a href="#" className="underline hover:text-[#2d3748]">新規登録</a></p>
              <p><a href="#" className="underline hover:text-[#2d3748]">パスワードを忘れましたか？</a></p>
            </div>
          </div>
        )}

        {/* --- 🌟 スタッフモード --- */}
        {loginMode === 'staff' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-wider mb-2">どのスタッフで<br/>ログインしますか？</h2>
              <p className="text-sm text-gray-500">あなたの名前を選んでください。</p>
            </div>

            <div className="space-y-4">
              {STAFF_LIST.map((staff) => (
                <button
                  key={staff.id}
                  onClick={() => router.push('/staff')}
                  className="w-full bg-[#f8f6f0] border border-[#e2dccf] rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-white hover:shadow-md transition-all active:scale-95"
                >
                  <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center text-xl font-bold ${staff.color}`}>
                    {staff.icon}
                  </div>
                  <span className="text-xl font-bold text-[#373c4f]">{staff.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* --- モード切り替えボタン --- */}
      <div className="flex items-center w-full max-w-md my-6">
        <hr className="flex-grow border-[#dbd5c6]" />
        <span className="px-4 text-sm text-gray-500">または</span>
        <hr className="flex-grow border-[#dbd5c6]" />
      </div>

      <button 
        onClick={() => setLoginMode(loginMode === 'manager' ? 'staff' : 'manager')}
        className="max-w-md w-full flex items-center justify-center gap-2 p-3.5 border border-[#dbd5c6] rounded-lg hover:bg-[#ebe5d8] transition-colors text-[#373c4f] font-bold"
      >
        {loginMode === 'manager' ? '👥 スタッフとして利用する' : '👑 マネージャーログインに戻る'}
      </button>

    </div>
  );
}