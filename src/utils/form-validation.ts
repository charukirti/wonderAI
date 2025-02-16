import { FormData } from "./type";

const ValidationSchema = {
  isStepValid: (step: number, data: FormData): boolean => {
    switch (step) {
      case 0:
        return data.destination.trim().length >= 2;

      case 1:
        return (
          data.duration !== "eg. 2 days" &&
          Number(data.duration) > 0 &&
          data.budget.length > 0
        );

      case 2:
        return data.withWhom.length > 0 && data.activity.length > 0;

      default:
        return false;
    }
  },

  getStepError: (step: number, data: FormData): string | null => {
    if (ValidationSchema.isStepValid(step, data)) return null;

    switch (step) {
      case 0:
        return "Please select a valid destination";

      case 1:
        if (data.duration === "eg. 2 days" || Number(data.duration) <= 0)
          return "Please enter valid duration";
        if (!data.budget) return "Please select your budget range";
        return "Please complete all fields";

      case 2:
        if (!data.withWhom) return "Please select who you're traveling with";
        if (!data.activity) return "Please select your activities";
        return "Please complete all fields";

      default:
        return "Invalid step";
    }
  },
};

export default ValidationSchema;
