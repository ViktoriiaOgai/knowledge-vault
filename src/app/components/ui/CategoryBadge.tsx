import { Category } from '@/types/note';

type Props = {
  category: Category | 'all'; // Разрешаем 'all' для фильтра
  isSelected?: boolean;       // Новое: проверка на активность
  onClick?: () => void;      // Новое: функция клика
};

export default function CategoryBadge({ category, isSelected, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`mt-4
        rounded border px-3 py-1 text-xs capitalize transition-colors duration-200
        focus:outline-none focus:ring-1 focus:ring-gray-700
        ${isSelected 
          ? 'bg-gray-500 border border-gray-500 text-blue-400' // Стили если выбрано
          : 'bg-blue-200 text-blue-900' //  базовые стили
        }
      `}
    >
      {category}
    </button>
  );
}