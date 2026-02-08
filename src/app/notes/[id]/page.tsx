import Link from 'next/link';
import { notes } from '@/data/notes';
import { Note } from '@/types/note';
import CategoryBadge from '@/app/components/ui/CategoryBadge';
import { notFound } from 'next/navigation';
import Button from '@/app/components/ui/Button'; 

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function NotePage({ params }: Props) {

    const { id } = await params;

    
  const note: Note | undefined = notes.find(
    (note) => note.id === id
  );

  if (!note) {
       notFound();
         }

  return (
    
    <main className="p-6 min-h-screen flex flex-col items-center justify-center">
      <div className="block max-w-md w-full rounded-lg border border-blue-900 p-4 
      shadow-md shadow-blue-300 transition-all    
        hover:shadow-lg hover:shadow-blue-500 ">
      <h1 className="mb-2 text-2xl font-semibold">
        {note.title}
      </h1>

        <div className="mt-2">
        <CategoryBadge category={note.category} />
      </div>

      <p className="mb-6 text-gray-700">
        {note.description}
      </p>

      {note.type === 'link' && note.url && (
        <a
          href={note.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-black underline hover:text-gray-700"
        >
          Open link
        </a>
 )}
        <p className="mt-6 text-xs text-gray-400">
        Created at: {note.createdAt}
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
