import { Database } from "../../types/supabase";
import { activityOptions, budgetOptions, groupOptions } from "../../utils/constants";

export type BudgetType = typeof budgetOptions[number]['title'];
export type GroupType = typeof groupOptions[number]['title'];
export type ActivityType = typeof activityOptions[number]['title'];

export interface FormData {
  destination: string;
  duration: number;
  budget: BudgetType;
  withWhom: GroupType;
  activity: ActivityType;
}

export type Trip = Database['public']['Tables']['trips']['Insert']

export function formDataToTrip(formData: FormData): Trip {
  return {
    destination: formData.destination,
    number_of_days: formData.duration,
    budget: formData.budget,
    travel_with: formData.withWhom,
    preferred_activities: formData.activity
  }
}

export type createTripInput = {
  finalPrompt: string,
  formData: FormData
}