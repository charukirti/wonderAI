import { useState } from "react";
import { FormData } from "./type";
import ValidationSchema from "../../utils/form-validation";
import Progress from "../../components/ui/Progress";
import { NavigationButtons } from "../../components/ui/NavigationButtonComponent";
import DestinationStep from "./form-steps/DestinationStep";
import BudgetDuration from "./form-steps/BudgetDuration";
import { GroupAndActivities } from "./form-steps/GroupAndActivities";
import { PROMPT } from "../../utils/constants";

import { useCreateTrip } from "../../hooks/useCreateTrip";

export default function CreateTripForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const { generateTrip, isCreating } = useCreateTrip();
  const [formData, setFormData] = useState<FormData>({
    destination: "",
    duration: 0,
    budget: "",
    withWhom: "",
    activity: "",
  });

  const totalSteps = 3;

  function handleNext() {
    const isValid = ValidationSchema.isStepValid(currentStep, formData);

    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
      setError(null);
    } else {
      setError(ValidationSchema.getStepError(currentStep, formData));
    }
  }

  function handlePrevious() {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    setError(null);
  }

  function handleSubmit() {
    const isValid = ValidationSchema.isStepValid(currentStep, formData);

    if (isValid) {
      console.log("Final form data", formData);

      const finalPrompt = PROMPT.replace("{location}", formData?.destination)
        .replace("{noOfDays}", formData?.duration.toString())
        .replace("{People}", formData?.withWhom)
        .replace("{Budget}", formData?.budget)
        .replace("{activity}", formData?.activity);

      console.log("final prompt:--", finalPrompt);

      generateTrip({ formData, finalPrompt }); // coming from useCreateTrip 
    } else {
      setError(ValidationSchema.getStepError(currentStep, formData));
    }
  }

  return (
    <section className="mx-auto mt-5 w-80 md:w-[30rem] lg:w-[60rem]">
      <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
        Tell us about your travel preference 🌴🏖️
      </h2>

      {error && (
        <div className="mt-4 rounded-md bg-red-50 p-3 text-red-500">
          {error}
        </div>
      )}

      <div className="my-8 flex items-center justify-between">
        <Progress totalSteps={totalSteps} currentStep={currentStep} />

        <NavigationButtons
          currentStep={currentStep}
          totalSteps={totalSteps}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSubmit={handleSubmit}
          isSubmitting={isCreating}
        />
      </div>

      <div className="mb-8">
        {currentStep === 0 && (
          <DestinationStep
            value={formData.destination}
            onChange={(value) => {
              setFormData((prev) => ({ ...prev, destination: value }));
              setError(null);
            }}
          />
        )}
        {currentStep === 1 && (
          <BudgetDuration
            durationValue={formData.duration}
            durationChange={(value) => {
              setFormData((prev) => ({ ...prev, duration: value }));
              setError(null);
            }}
            budgetValue={formData.budget}
            onSelection={(value) => {
              setFormData((prev) => ({ ...prev, budget: value }));
              setError(null);
            }}
          />
        )}
        {currentStep === 2 && (
          <GroupAndActivities
            groupValue={formData.withWhom}
            groupChange={(value) => {
              setFormData((prev) => ({ ...prev, withWhom: value }));
              setError(null);
            }}
            activityValue={formData.activity}
            activityChange={(value) => {
              setFormData((prev) => ({ ...prev, activity: value }));
              setError(null);
            }}
          />
        )}
      </div>
    </section>
  );
}
