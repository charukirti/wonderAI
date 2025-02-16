import Button from "./Button";

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

export function NavigationButtons({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onSubmit,
}: NavigationButtonsProps) {
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div className="flex items-center justify-end gap-4">

      

      <Button
        onClick={onPrevious}
        disabled={isFirstStep}
        className="bg-gray-100 p-2 text-gray-700 hover:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-400"
      >
        <Button.Text>Previous</Button.Text>
      </Button>

      <Button
        className="bg-blue-500 p-2 text-white hover:bg-blue-600"
        onClick={isLastStep ? onSubmit : onNext}
      >
        <Button.Text>{isLastStep ? "Generate Trip" : "Next"}</Button.Text>
      </Button>
    </div>
  );
}
