import FormLabel from "../FormLabel";
import { OptionCard } from "../OptionCard";
import { activityOptions } from "../../../utils/constants";
import { FormData } from "../../../features/create-trip/type";
import { FormLabels } from "../../../utils/FormLabels";

interface ActivityProps {
  activityValue: FormData["activity"];
  onSelection: (AvtivityValue: FormData["activity"]) => void;
}

export default function Activities({
  activityValue,
  onSelection,
}: ActivityProps) {
  function handleToggleSelection(selectedTitle: string) {
    const select = activityValue === selectedTitle ? "" : selectedTitle;
    onSelection(select);
  }

  return (
    <div className="flex flex-col gap-3">
      <FormLabel>{FormLabels.activities.label}</FormLabel>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {activityOptions.map((option) => (
          <OptionCard
            key={option.title}
            selected={activityValue === option.title}
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
