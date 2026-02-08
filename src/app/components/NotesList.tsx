'use client';

import { useState, useEffect } from 'react';
import { Note, Category } from '@/types/note';
import NoteCard from '../components/notes/NoteCard';
import CategoryBadge from './ui/CategoryBadge';
import Input from './ui/Input';
import { notes as mockNotes } from '@/data/notes'; // Импорт моков

type Props = {
  notes: Note[];
};

const categories: Category[] = [
  'frontend',
  'backend',
  'career',
  'other',
];

export default function NotesList({ notes: initialNotes }: Props) {
  // 1. Инициализируем стейт
  const [allNotes, setAllNotes] = useState<Note[]>(initialNotes);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // 2. При загрузке проверяем localStorage
  useEffect(() => {
    const saved = localStorage.getItem('my_notes');
    if (saved) {
      const parsedSaved = JSON.parse(saved);
      // Объединяем моки и сохраненные (чтобы новые были сверху)
      setAllNotes([...parsedSaved, ...mockNotes]);
    }
  }, []);

  // 3. Исправленная логика поиска (фильтруем по двум полям)
  const filteredNotes = allNotes.filter((note) => {
    const matchesCategory = selectedCategory === 'all' || note.category === selectedCategory;
    const matchesSearch = 
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section>
      <Input
        placeholder="Search by title or description..."
        value={searchQuery}
        onChange={setSearchQuery}
        className="mb-4"
      />
      {/* Фильтр */}
      <div className="mb-6 flex flex-wrap gap-2">
  {/* Кнопка All */}
  <CategoryBadge
    category="all"
    isSelected={selectedCategory === 'all'}
    onClick={() => setSelectedCategory('all')}
  />

  {/* Остальные категории */}
  {categories.map((category) => (
    <CategoryBadge
      key={category}
      category={category}
      isSelected={selectedCategory === category}
      onClick={() => setSelectedCategory(category)}
    />
  ))}
</div>

      {/* Список заметок */}
      {filteredNotes.length === 0 ? (
        <p className="text-lg text-gray-500 text-center *:block max-w-md w-full rounded-lg border border-blue-900 p-4 
      shadow-md shadow-blue-300 transition-all    
        hover:shadow-lg hover:shadow-blue-500 ">
          No notes found
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      )}
    </section>
  );
}
