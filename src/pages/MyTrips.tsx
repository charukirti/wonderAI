import NoTrips from "../components/ui/NoTrips";
import TripCard from "../components/ui/TripCard";
import { useUser } from "../features/auth/useUser";
import { useGetUserTrip } from "../hooks/useGetUserTrip";

export default function MyTrips() {
  const { user } = useUser();

  const { tripDetail: tripDetails, isLoading } = useGetUserTrip(user?.id ?? "");

  if (isLoading) return <p>Loading...</p>;
  if (!tripDetails) return <NoTrips />;
  return (
    <section className="mt-4">
      <h1 className="mb-4 text-3xl font-bold">My trips</h1>
      {tripDetails.length === 0 ? (
        <NoTrips />
      ) : (
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tripDetails.map((tripDetail) => (
            <TripCard key={tripDetail.id} {...tripDetail} />
          ))}
        </div>
      )}
    </section>
  );
}
