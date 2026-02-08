export type Category =
  | 'frontend'
  | 'backend'
  | 'career'
  | 'other';

export type NoteType = 'note' | 'link';

export interface Note {
  id: string;
  title: string;
  description: string;
  category: Category;
  type: NoteType;
  url?: string;
  createdAt: string;
}
