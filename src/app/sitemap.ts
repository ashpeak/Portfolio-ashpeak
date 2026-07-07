import { MetadataRoute } from 'next';
import { projectsData } from '@/lib/data/projects';
import connectToDatabase from '@/lib/mongoose';
import Post from '@/models/Post';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.ashpeak.me';

  // Base routes
  const routes = [
    '',
    '/blog',
    '/projects',
    '/resume'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Project routes
  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    await connectToDatabase();
    const posts = await Post.find({ published: true }).lean();
    blogRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.createdAt).toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Sitemap DB Error:', error);
  }

  return [...routes, ...projectRoutes, ...blogRoutes];
}
