import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, FileText } from 'lucide-react';
import LogoutButton from '@/components/admin/LogoutButton';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/admin/login');
  }

  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'kumarvns130@gmail.com';
  if (session.user.email !== ADMIN_EMAIL) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white p-4 text-center">
        <div>
          <h1 className="text-3xl font-bold text-red-500 mb-2">Access Denied</h1>
          <p className="text-zinc-400">Your email ({session.user.email}) is not authorized to access the admin panel.</p>
          <div className="mt-6">
            <LogoutButton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-zinc-900 border-r border-zinc-800 p-6 flex flex-col h-auto md:h-screen sticky top-0">
        <div className="mb-10">
          <Link href="/admin" className="text-2xl font-bold tracking-tighter text-white">
            Admin<span className="text-zinc-500">Panel</span>
          </Link>
        </div>
        
        <nav className="flex-1 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-800 text-white transition-colors hover:bg-zinc-700">
            <LayoutDashboard size={20} />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link href="/admin/posts/new" className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white">
            <FileText size={20} />
            <span className="font-medium">New Post</span>
          </Link>
          <LogoutButton />
        </nav>

        <div className="pt-6 border-t border-zinc-800 mt-auto">
          <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Logged in as:</p>
          <p className="text-sm font-medium text-white truncate">{session.user.email}</p>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-10 max-w-5xl overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
