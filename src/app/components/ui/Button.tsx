type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

export default function Button({
  children,
  type = 'button',
  onClick,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        rounded
        bg-blue-200
        px-4
        py-2
        text-sm
        text-blue-900
        hover:text-blue-400
        hover:bg-gray-500
        mt-4
        border 
        capitalize 
        transition-colors 
        duration-200
        focus:outline-none 
        focus:ring-1
         focus:ring-gray-700
      "
    >
      {children}
    </button>
  );
}
