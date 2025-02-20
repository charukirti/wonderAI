import { Tables } from "../../types/supabase";

type TripProps = Pick<
  // it makes missing props optional
  Tables<"trips">,
  | "destination"
  | "budget"
  | "number_of_days"
  | "preferred_activities"
  | "generated_itinerary"
  | "travel_with"
>;

export default function TripOverview({
  destination,
  budget,
  number_of_days,
  preferred_activities,
  travel_with,
}: TripProps) {
  return (
    <>
      <h2 className="mb-3 text-3xl font-bold">Trip overview</h2>
      <div className="rounded-2xl border p-6 text-white">
        <p className="text-lg">
          <strong>Destination: </strong>
          {destination}
        </p>

        <p className="text-lg">
          <strong>Budget: </strong>
          {budget}
        </p>

        <p className="text-lg">
          <strong>Duration: </strong>
          {number_of_days} Day / Day's
        </p>
        <p className="text-lg">
          <strong>With: </strong>
          {travel_with}
        </p>
        <p className="text-lg">
          <strong>Activities: </strong>
          {preferred_activities}
        </p>
      </div>
    </>
  );
}
