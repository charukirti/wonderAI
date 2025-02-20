import { useParams } from "react-router";
import { useGetTrip } from "../hooks/useGetTrip";
import TripOverview from "../features/trip-details/TripOverview";
import HotelsSection from "../features/trip-details/HotelsSection";

export default function TripDetails() {
  const { id } = useParams();
  console.log(id);

  if (!id) throw new Error("Id not found");

  const { tripDetail, isLoading, isError } = useGetTrip(id);

  if (isLoading) return <p>Loading</p>;

  if (!tripDetail) return <p>No trips found</p>;

  const {
    destination,
    budget,
    number_of_days,
    preferred_activities,
    generated_itinerary,
    travel_with,
  } = tripDetail;

  return (
    <section className="mx-auto mt-5  p-4">
      <TripOverview
        destination={destination}
        budget={budget}
        number_of_days={number_of_days}
        preferred_activities={preferred_activities}
        generated_itinerary={generated_itinerary}
        travel_with={travel_with}
      />

      <HotelsSection generated_itinerary={generated_itinerary} />
    </section>
  );
}
