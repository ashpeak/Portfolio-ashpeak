import connectToDatabase from '@/lib/mongoose';
import Post from '@/models/Post';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const revalidate = 60; // Revalidate every 60 seconds

async function getPublishedPosts() {
  await connectToDatabase();
  const posts = await Post.find({ published: true }).sort({ createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(posts));
}

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Writing
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl">
            Thoughts, tutorials, and insights about web development, design, and building products.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="p-12 border border-white/10 rounded-2xl text-center bg-white/5">
            <p className="text-zinc-400 text-lg">No posts published yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post: { _id: string, title: string, slug: string, content: string, published: boolean, createdAt: string }) => (
              <Link 
                href={`/blog/${post.slug}`} 
                key={post._id}
                className="group block p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-4">
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                      {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-zinc-200 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-zinc-400 line-clamp-3 mb-6 flex-1">
                    {/* Primitive way to extract text from markdown, a real app might store a summary field */}
                    {post.content.replace(/[#*`_\[\]]/g, '').slice(0, 150)}...
                  </p>
                  <div className="flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                    Read Post <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
