import connectToDatabase from '@/lib/mongoose';
import Post from '@/models/Post';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';

export const revalidate = 60;

async function getPost(slug: string) {
  await connectToDatabase();
  const post = await Post.findOne({ slug, published: true }).lean();
  if (!post) return null;
  return JSON.parse(JSON.stringify(post));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen selection:bg-white/30 selection:text-white">
      <main className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-zinc-500 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to all posts
        </Link>

        <article>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm font-mono text-zinc-500 uppercase tracking-widest border-b border-white/10 pb-8">
              <time dateTime={post.createdAt}>
                {new Date(post.createdAt).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </time>
              <span>•</span>
              <span>{Math.ceil(post.content.length / 1000)} min read</span>
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-img:rounded-xl prose-img:border prose-img:border-white/10">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
    </div>
  );
}
