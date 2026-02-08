import Link from 'next/link';
import Button from './components/ui/Button';

export default function NotFound() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-xl font-semibold">
        Note not found
      </h1>

      <p className="mt-2 text-sm text-gray-500">
        The requested note does not exist.
      </p>

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
