import { getPostById } from '../../../actions';
import EditPostForm from './EditPostForm';
import { notFound } from 'next/navigation';

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  let post;
  
  try {
    post = await getPostById(resolvedParams.id);
  } catch {
    notFound();
  }

  return <EditPostForm post={post} />;
}
