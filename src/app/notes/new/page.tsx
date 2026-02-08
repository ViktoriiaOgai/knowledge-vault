'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Category, NoteType } from '@/types/note';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/ui/Button';
import Input from '@/app/components/ui/Input';

const categories: Category[] = [
  'frontend',
  'backend',
  'career',
  'other',
];

export default function NewNotePage() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] =
    useState<Category>('frontend');
  const [type, setType] =
    useState<NoteType>('note');
  const [url, setUrl] = useState('');

  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  // 1. Базовая валидация
  if (!title.trim()) {
    setError('Title is required');
    return;
  }
  if (type === 'link' && !url.trim()) {
    setError('URL is required for link notes');
    return;
  }

  setError('');

  // 2. Создаем объект новой заметки (строгая типизация)
  const newNote = {
    id: Date.now().toString(), // Простой способ генерации ID
    title: title.trim(),
    description: description.trim(),
    category,
    type,
    url: type === 'link' ? url.trim() : undefined,
    createdAt: new Date().toISOString(),
  };

  // 3. Сохраняем в localStorage
  const existingNotes = JSON.parse(localStorage.getItem('my_notes') || '[]');
  const updatedNotes = [newNote, ...existingNotes];
  localStorage.setItem('my_notes', JSON.stringify(updatedNotes));

  // 4. Возврат на главную
  router.push('/');
}

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="mb-6 text-2xl font-semibold text-blue-900">
        Add new note
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {/* Title */}
        <Input
            label="Title"
            required
            value={title}
            onChange={setTitle}
            placeholder="Enter title..."
            className="mb-4"
          />

        {/* Description */}
        <Input
            label="Description"
            required
            value={description}
            onChange={setDescription}
            placeholder="Enter description..."
            className="mb-4"
          />
               {/* Category */}

               
        <div>
          <label className="block text-sm mb-1 text-blue-900">
            Category
          </label>
          <select
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value as Category
              )
            }
            className="w-full rounded border  border-blue-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900  text-blue-500
        hover:text-blue-900">
            {categories.map((cat) => (
              <option
                key={cat}
                value={cat}
              >
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm mb-1 text-blue-900">
            Type
          </label>
          <select
            value={type}
            onChange={(e) =>
              setType(
                e.target.value as NoteType
              )
            }
            className="w-full rounded border  border-blue-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900  text-blue-500
        hover:text-blue-900">
            <option value="note">
              Note
            </option>
            <option value="link">
              Link
            </option>
          </select>
        </div>

        {/* URL (conditional) */}
        {type === 'link' && (
          <Input
            label="URL"
            required
            value={url}
            onChange={setUrl}
            placeholder="URL..."
            className="mb-4"
          />
          )}

        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}
<div className='flex flex-row items-center gap-10'>
        <Button type="submit">Save</Button>
        <Link
        href="/"
              >
        <Button>
        ← Back to notes
      </Button>
      </Link>
      </div>
      </form>
    </main>
  );
}
