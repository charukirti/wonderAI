import FormLabel from "../FormLabel";
import { OptionCard } from "../OptionCard";
import { groupOptions } from "../../../utils/constants";
import { FormData } from "../../../features/create-trip/type";
import { FormLabels } from "../../../utils/FormLabels";

interface TravelGroupProps {
  groupValue: FormData["withWhom"];
  onSelection: (GroupValue: FormData["withWhom"]) => void;
}

export default function TravelGroup({
  groupValue,
  onSelection,
}: TravelGroupProps) {
  function handleToggleSelection(selectedTitle: string) {
    const select = groupValue === selectedTitle ? "" : selectedTitle;
    onSelection(select);
  }

  return (
    <div className="flex flex-col gap-3">
      <FormLabel>{FormLabels.travelGroup.label}</FormLabel>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {groupOptions.map((option) => (
          <OptionCard
            key={option.title}
            selected={groupValue === option.title}
            onSelect={() => handleToggleSelection(option.title)}
            emoji={option.emoji}
            title={option.title}
            description={option.description}
          />
        ))}
      </div>
    </div>
  );
}
