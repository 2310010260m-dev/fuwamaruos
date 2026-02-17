'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); // 画面を移動するための魔法の杖！

  // ログインボタンを押したときの処理
  const handleLogin = () => {
    // 今回はパスワードチェックなどは省き、そのままダッシュボードへ移動します
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#f3efe4] flex flex-col items-center justify-center p-4 text-[#373c4f]">
      {/* メインのログインカード */}
      <div className="w-full max-w-md bg-[#f3efe4] rounded-2xl p-8 shadow-sm border border-[#e2dccf]">
        
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
            <span className="text-[#e26b48] text-3xl">🔥</span> 
            <span className="text-[#373c4f]">ふわまるOS</span>
          </h1>
          <h2 className="text-xl font-bold tracking-wider mb-2">マネージャーログイン</h2>
          <p className="text-sm text-gray-500">メールアドレスとパスワードを入力してください</p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-bold mb-2">メールアドレス</label>
            <input 
              type="email" 
              placeholder="hisafukui123@gmail.com"
              className="w-full p-3 bg-[#e9f0ff] border border-transparent rounded-lg focus:outline-none focus:border-blue-300 text-gray-800"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold mb-2">パスワード</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                defaultValue="••••••••••"
                className="w-full p-3 bg-[#e9f0ff] border border-transparent rounded-lg focus:outline-none focus:border-blue-300 text-gray-800 tracking-widest"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-600 hover:text-gray-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* ここに onClick={handleLogin} を追加しました！ */}
          <button 
            onClick={handleLogin}
            className="w-full bg-[#de7c5a] text-white font-bold py-3.5 rounded-lg hover:bg-[#c96a4a] transition-colors mt-2 shadow-sm"
          >
            ログイン
          </button>
        </div>

        <div className="mt-8 text-center text-sm text-[#4a5568] space-y-3">
          <p>
            アカウントをお持ちでないですか？{' '}
            <a href="/" className="underline hover:text-[#2d3748]">新規登録</a>
          </p>
          <p>
            <a href="/" className="underline hover:text-[#2d3748]">パスワードを忘れましたか？</a>
          </p>
        </div>
      </div>

      <div className="flex items-center w-full max-w-md my-6">
        <hr className="flex-grow border-[#dbd5c6]" />
        <span className="px-4 text-sm text-gray-500">または</span>
        <hr className="flex-grow border-[#dbd5c6]" />
      </div>

      <button 
        onClick={handleLogin}
        className="max-w-md w-full flex items-center justify-center gap-2 p-3.5 border border-[#dbd5c6] rounded-lg hover:bg-[#ebe5d8] transition-colors text-[#373c4f]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
        スタッフとして利用する
      </button>

    </div>
  );
}
