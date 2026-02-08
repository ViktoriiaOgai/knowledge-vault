import Link from 'next/link';
import Button from './components/ui/Button';

export default function NotFound() {
  return (
    <main className="p-4 min-h-screen flex flex-col items-center justify-center text-center">
      <div className='block max-w-md w-full rounded-lg border border-blue-900 p-4 
      shadow-md shadow-blue-300 transition-all    
        hover:shadow-lg hover:shadow-blue-500 '>
      <h1 className="text-xl font-semibold">
        Note not found
      </h1>

      <p className="mt-2 text-sm text-gray-500">
        The requested note does not exist.
      </p>
</div>
      <Link
        href="/"
              >
        <Button >
        ← Back to notes
      </Button>
      </Link>
    </main>
  );
}
