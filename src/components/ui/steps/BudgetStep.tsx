import FormLabel from "../../../components/ui/FormLabel";
import { OptionCard } from "../../../components/ui/OptionCard";
import { budgetOptions } from "../../../utils/constants";
import { FormData } from "../../../features/create-trip/type";
import { FormLabels } from "../../../utils/FormLabels";

interface BudgetProps {
  budgetValue: FormData["budget"];
  onSelection: (budgetValue: FormData["budget"]) => void;
}

export default function BudgetStep({ budgetValue, onSelection }: BudgetProps) {
  function handleToggleSelection(selectedTitle: string) {
    const select = budgetValue === selectedTitle ? "" : selectedTitle;
    onSelection(select);
  }
  return (
    <div className="flex flex-col gap-4">
      <FormLabel>{FormLabels.budget.label}</FormLabel>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {budgetOptions.map((option) => (
          <OptionCard
            key={option.title}
            selected={budgetValue === option.title}
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
