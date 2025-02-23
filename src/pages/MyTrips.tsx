import TripCard from "../components/ui/TripCard";
import { useUser } from "../features/auth/useUser";
import { useGetUserTrip } from "../hooks/useGetUserTrip";

export default function MyTrips() {
  const { user } = useUser();

  const { tripDetail: tripDetails, isLoading } = useGetUserTrip(user?.id ?? "");
  console.log(tripDetails);

  if (!tripDetails) return <p>No trips found</p>;

  if (isLoading) return <p>Loading...</p>;
  return (
    <section className="mt-4">
      <h1 className="mb-4 text-3xl font-bold">My trips</h1>
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tripDetails.map((tripDetail) => (
          <TripCard
            destination={tripDetail.destination}
            budget={tripDetail.budget}
            number_of_days={tripDetail.number_of_days}
            preferred_activities={tripDetail.preferred_activities}
            travel_with={tripDetail.travel_with}
            id={tripDetail.id}
            created_at={tripDetail.created_at}
            key={tripDetail.id}
          />
        ))}
      </div>
    </section>
  );
}
