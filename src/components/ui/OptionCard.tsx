interface OptionCardProps {
  selected: boolean;
  onSelect: (value: boolean) => void;
  emoji: string;
  title: string;
  description: string;
}

export function OptionCard({
  selected,
  emoji,
  title,
  description,
  onSelect,
}: OptionCardProps) {

  function handleClick() {
    onSelect(!selected)
  }

  return (
    <button
      onClick={handleClick}
      className={`rounded-lg border p-5 cursor-pointer ${
        selected
          ? "border-gray-600 bg-gray-500 text-white"
          : "border-gray-300 hover:bg-gray-200"
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
