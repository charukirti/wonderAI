import { activityOptions, budgetOptions, groupOptions } from "../../utils/constants";

export type BudgetType = typeof budgetOptions[number]['title'];
export type GroupType = typeof groupOptions[number]['title'];
export type ActivityType = typeof activityOptions[number]['title'];

export interface FormData {
  destination: string;
  duration: string | number;
  budget: BudgetType;
  withWhom: GroupType;
  activity: ActivityType;
}