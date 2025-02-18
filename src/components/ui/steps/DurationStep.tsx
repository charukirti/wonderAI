import { ChangeEvent } from "react";
import { FormInput } from "../../../components/ui/FormInput";
import FormLabel from "../../../components/ui/FormLabel";
import { FormLabels } from "../../../utils/FormLabels";

interface DurationStep {
  durationValue: string | number;
  durationChange: (durationValue: number) => void;
}

export default function DurationStep({
  durationValue,
  durationChange,
}: DurationStep) {
  function handleDurationChange(e: ChangeEvent<HTMLInputElement>) {
    const value = Math.max(Number(e.target.value));
    durationChange(value);
  }
  return (
    <div className="flex flex-col gap-2">
      <FormLabel>{FormLabels.duration.label} </FormLabel>
      <FormInput
        type="number"
        onChange={handleDurationChange}
        value={durationValue}
        placeholder={FormLabels.duration.placeholder}
        min={undefined}
      />
    </div>
  );
}
