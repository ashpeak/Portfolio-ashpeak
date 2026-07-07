'use client';

import { useTransition } from 'react';
import { Trash2, Loader2 } from 'lucide-react';
import { deletePost } from '../actions';

export function DeleteButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this post?')) {
      startTransition(async () => {
        await deletePost(id);
      });
    }
  };

  return (
    <button 
      onClick={handleDelete}
      disabled={isPending}
      className="text-red-400 hover:text-red-300 transition-colors disabled:opacity-50"
    >
      {isPending ? <Loader2 size={18} className="animate-spin" /> : <Trash2 size={18} />}
    </button>
  );
}
