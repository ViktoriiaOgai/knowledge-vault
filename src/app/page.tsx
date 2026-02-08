import Link from 'next/link';
import NotesList from '@/app/components/NotesList';
import { notes  } from '@/data/notes';
import Button from '@/app/components/ui/Button';

export default function HomePage() {
  return (
    <main className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-blue-900 text-2xl font-semibold">
          Knowledge Vault
        </h1>

        <Link href="/notes/new">
  <Button>Add Note</Button>
</Link>
      </div>

      <NotesList notes={notes} />
    </main>
  );
}
