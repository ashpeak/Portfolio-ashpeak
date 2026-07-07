import { Loader2 } from 'lucide-react';

export default function LoadingDashboard() {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] text-zinc-400">
      <Loader2 className="animate-spin mb-4" size={32} />
      <p>Loading dashboard...</p>
    </div>
  );
}
