'use server';

import connectToDatabase from '@/lib/mongoose';
import Post from '@/models/Post';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';

// Middleware-like check for server actions
async function requireAuth() {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  if (!session) throw new Error('Unauthorized');
  
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'kumarvns130@gmail.com';
  if (session.user.email !== ADMIN_EMAIL) {
    throw new Error('Forbidden: You are not authorized to perform this action');
  }
}

export async function getPosts() {
  await requireAuth();
  await connectToDatabase();
  
  const posts = await Post.find().sort({ createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(posts)); // Serialization for server component to client component boundary if needed
}

export async function createPost(formData: FormData) {
  await requireAuth();
  await connectToDatabase();

  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const content = formData.get('content') as string;
  const published = formData.get('published') === 'on';

  const post = new Post({
    title,
    slug,
    content,
    published,
  });

  await post.save();
  revalidatePath('/admin');
  revalidatePath('/blog');
  return { success: true };
}

export async function deletePost(id: string) {
  await requireAuth();
  await connectToDatabase();
  
  await Post.findByIdAndDelete(id);
  revalidatePath('/admin');
  revalidatePath('/blog');
  return { success: true };
}
