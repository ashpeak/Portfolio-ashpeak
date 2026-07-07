'use client';

import { LogOut } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const handleLogout = async () => {
    setLoading(true);
    await authClient.signOut();
    router.push('/admin/login');
  };

  return (
    <button 
      onClick={handleLogout}
      disabled={loading}
      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white mt-8 disabled:opacity-50"
    >
      <LogOut size={20} />
      <span className="font-medium">{loading ? 'Exiting...' : 'Exit Admin'}</span>
    </button>
  );
}
