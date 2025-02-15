interface OptionCardProps {
  selected: boolean;
  onClick: () => void;
  emoji: string;
  title: string;
  description: string;
}

export function OptionCard({
  selected,
  emoji,
  title,
  description,
  onClick,
}: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg border p-6 cursor-pointer ${
        selected
          ? "border-blue-600 bg-gray-500 text-white"
          : "border-gray-300 hover:border-blue-500"
      } transition-all duration-200`}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-2xl">{emoji}</span>
        <div className="text-center">
          <h2 className="font-semibold text-base md:text-2xl">{title}</h2>
          <p className="text-base opacity-80">{description}</p>
        </div>
      </div>
    </button>
  );
}
