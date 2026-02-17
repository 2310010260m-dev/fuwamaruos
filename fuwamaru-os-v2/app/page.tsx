'use client';

import { useState } from 'react';

const STAFF_MEMBERS = [
  { id: 1, name: 'オーナー山田', role: 'owner', avatar: '👑' },
  { id: 2, name: '店長サトウ', role: 'manager', avatar: '👔' },
  { id: 3, name: '新人タナカ', role: 'staff', avatar: '🔰' },
];

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState('');

  const handleLogin = (name: string, role: string) => {
    alert(`${name}さん（${role}）としてログインしました！`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">☁️ ふわまるOS</h1>
        <p className="text-gray-500 mb-8">システムにログインしてください</p>

        <div className="space-y-4">
          {STAFF_MEMBERS.map((staff) => (
            <button
              key={staff.id}
              onClick={() => handleLogin(staff.name, staff.role)}
              className="w-full flex items-center justify-between p-4 border-2 border-gray-100 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all"
            >
              <div className="flex items-center space-x-4">
                <span className="text-4xl">{staff.avatar}</span>
                <span className="text-lg font-medium text-gray-700">{staff.name}</span>
              </div>
              <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full capitalize">
                {staff.role}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-400">セキュアログイン（オーナー専用）</p>
          <input 
            type="password" 
            placeholder="マスターパスワード" 
            className="mt-2 w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-black"
          />
        </div>
      </div>
    </div>
  );
}