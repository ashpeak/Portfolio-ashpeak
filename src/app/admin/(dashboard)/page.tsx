import { getPosts, deletePost } from '../actions';
import Link from 'next/link';
import { Pencil, Trash2, ExternalLink } from 'lucide-react';

export default async function AdminDashboard() {
  const posts = await getPosts();

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-zinc-400 mt-1">Manage your blog posts here.</p>
        </div>
        <Link 
          href="/admin/posts/new" 
          className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-zinc-200 transition-colors"
        >
          Create Post
        </Link>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        {posts.length === 0 ? (
          <div className="p-8 text-center text-zinc-500">
            No posts found. Create your first post!
          </div>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-zinc-950/50 border-b border-zinc-800">
              <tr>
                <th className="px-6 py-4 text-sm font-medium text-zinc-400">Title</th>
                <th className="px-6 py-4 text-sm font-medium text-zinc-400">Status</th>
                <th className="px-6 py-4 text-sm font-medium text-zinc-400">Date</th>
                <th className="px-6 py-4 text-sm font-medium text-zinc-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {posts.map((post: { _id: string, title: string, slug: string, content: string, published: boolean, createdAt: string }) => (
                <tr key={post._id} className="hover:bg-zinc-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-medium text-white">{post.title}</p>
                    <p className="text-sm text-zinc-500 truncate max-w-xs">/{post.slug}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 text-xs rounded-full border ${
                      post.published 
                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                        : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                    }`}>
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-400">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right flex justify-end gap-3">
                    <Link href={`/blog/${post.slug}`} target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                      <ExternalLink size={18} />
                    </Link>
                    <Link href={`/admin/posts/${post._id}`} className="text-zinc-400 hover:text-white transition-colors">
                      <Pencil size={18} />
                    </Link>
                    <form action={async () => {
                      'use server';
                      await deletePost(post._id);
                    }}>
                      <button type="submit" className="text-red-400 hover:text-red-300 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
