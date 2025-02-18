interface ProgressProps {
  currentStep: number;
  totalSteps: number;
}

export default function Progress({ currentStep, totalSteps }: ProgressProps) {
  const steps = ["Destination", "Planning", "Group"];

  return (
    <div className="flex items-center gap-2">
      <div className="font-inter flex items-center">
        <span className="text-2xl font-semibold text-blue-600">
          {currentStep + 1}
        </span>
        <span className="mx-2 text-lg text-gray-400">/</span>
        <span className="text-lg text-gray-600">{totalSteps}</span>
      </div>
      <span className="text-base text-gray-500">{steps[currentStep]}</span>
    </div>
  );
}
