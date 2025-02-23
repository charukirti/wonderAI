import { Link, useNavigate } from "react-router";
import { Tables } from "../../types/supabase";
import { convertToIndianTime } from "../../utils/convertToIndianTime";

type TripProps = Pick<
  Tables<"trips">,
  | "destination"
  | "budget"
  | "number_of_days"
  | "preferred_activities"
  | "travel_with"
  | "id"
  | "created_at"
>;

export default function TripCard({
  destination,
  budget,
  number_of_days,
  preferred_activities,
  travel_with,
  id,
  created_at,
}: TripProps) {
  const navigate = useNavigate();
  const created = created_at
    ? convertToIndianTime(created_at)
    : "Time not available";

  return (
    <div>
      <h2 className="mb-3 text-xl">
        <span className="text-gray-300">Planned at: </span>
        <span>{created}</span>
      </h2>

      <div
        className="cursor-pointer rounded-2xl border border-slate-700 bg-slate-800/50 p-4 text-white"
        onClick={() => navigate(`/trip-details/${id}`)}
      >
        <div className="space-y-3">
          <p className="text-lg">
            <span className="text-gray-300">Destination: </span>
            <span>{destination}</span>
          </p>

          <p className="text-lg">
            <span className="text-gray-300">Budget: </span>
            <span>{budget}</span>
          </p>

          <p className="text-lg">
            <span className="text-gray-300">Duration: </span>
            <span>{number_of_days} Day / Day's</span>
          </p>

          <p className="text-lg">
            <span className="text-gray-300">With: </span>
            <span>{travel_with}</span>
          </p>

          <p className="text-lg">
            <span className="text-gray-300">Activities: </span>
            <span>{preferred_activities}</span>
          </p>
        </div>

        <Link to={`/trip-details/${id}`}>
          <p className="mt-4 text-right text-gray-300 hover:text-white">
            See more details
          </p>
        </Link>
      </div>
    </div>
  );
}
