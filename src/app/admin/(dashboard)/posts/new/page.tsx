'use client';

import { useState } from 'react';
import { createPost } from '../../../actions';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NewPostPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    try {
      await createPost(formData);
      router.push('/admin');
    } catch (err) {
      console.error(err);
      alert('Failed to create post');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">New Post</h1>
          <p className="text-zinc-400 mt-1">Write your new blog post using Markdown.</p>
        </div>
        <Link href="/admin" className="text-zinc-400 hover:text-white transition-colors">
          Cancel
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Title</label>
            <input 
              name="title" 
              required 
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-zinc-500" 
              placeholder="My Awesome Post"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Slug</label>
            <input 
              name="slug" 
              required 
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-zinc-500" 
              placeholder="my-awesome-post"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-zinc-300 flex justify-between">
            <span>Content (Markdown)</span>
            <span className="text-zinc-500 font-normal">Supports # headings, **bold**, etc.</span>
          </label>
          <textarea 
            name="content" 
            required 
            rows={15}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 font-mono text-sm" 
            placeholder="Write your post here..."
          />
        </div>

        <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 p-4 rounded-lg">
          <input 
            type="checkbox" 
            name="published" 
            id="published"
            className="w-5 h-5 rounded border-zinc-700 bg-zinc-800 text-white focus:ring-zinc-500 focus:ring-offset-zinc-900"
          />
          <div>
            <label htmlFor="published" className="font-medium text-white block">Publish immediately</label>
            <p className="text-sm text-zinc-400">If unchecked, this will be saved as a draft.</p>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button 
            type="submit" 
            disabled={loading}
            className="bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-zinc-200 transition-colors disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save Post'}
          </button>
        </div>
      </form>
    </div>
  );
}
