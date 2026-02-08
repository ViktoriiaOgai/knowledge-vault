import { Note } from '@/types/note';
import Link from 'next/link';
import CategoryBadge from '@/app/components/ui/CategoryBadge';

type Props = {
  note: Note;
};

export default function NoteCard({ note }: Props) {
  return (
    <Link
      href={`/notes/${note.id}`}
      className="block rounded-lg border border-blue-900 p-4 shadow-md shadow-blue-300 transition-all        /* Плавность для всех изменений */
  hover:shadow-lg hover:shadow-blue-500 "
    >
      <h3 className="text-lg font-semibold  text-blue-900">
        {note.title}
      </h3>

      <p className="mt-1 text-sm text-gray-600">
        {note.description}
      </p>

      <div className="mt-3 flex items-center justify-between">
        <CategoryBadge category={note.category} />

        <span className="text-xs text-blue-900">
          {note.createdAt}
        </span>
      </div>
    </Link>
  );
}
