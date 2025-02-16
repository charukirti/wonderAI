import { FormData } from "../type";
import BudgetStep from "../../../components/ui/steps/BudgetStep";
import DurationStep from "../../../components/ui/steps/DurationStep";
interface BudgetDurationProps {
  durationValue: FormData['duration'];
  durationChange: (value: FormData['duration']) => void;
  budgetValue: FormData["budget"];
  onSelection: (value: FormData["budget"]) => void;
}

export default function BudgetDuration({
  durationChange,
  durationValue,
  budgetValue,
  onSelection,
}: BudgetDurationProps) {
  return (
    <div className="flex flex-col gap-5">
      <DurationStep
        durationChange={durationChange}
        durationValue={durationValue}
      />
      <BudgetStep budgetValue={budgetValue} onSelection={onSelection} />
    </div>
  );
}
