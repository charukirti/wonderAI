import ItineraryCard from "../../components/ui/ItineraryCard";
import { useGetTripData } from "../../hooks/useGetTripData";
import { Tables } from "../../types/supabase";
type TripProps = Pick<
  // it makes missing props optional
  Tables<"trips">,
  "generated_itinerary"
>;

interface ItineraryActivity {
  details: string;
  image_url?: string;
  location: {
    map_url?: string;
    coordinates?: { lat: number; lng: number };
  };
  place: string;
  timings: string;
  price: number;
}

interface Itinerary {
  [key: string]: ItineraryActivity[];
}

export default function ItinerarySection({ generated_itinerary }: TripProps) {
  const { itinerary } = useGetTripData( generated_itinerary );

  console.log(itinerary);
  return (
    <section className="mt-3 space-y-6">
      <h2 className="mb-3 text-3xl font-bold">Generated itinerary</h2>
      {Object.entries(itinerary as unknown as Itinerary).map(
        ([day, activities]) => (
          <div key={day}>
            <h3 className="text-xl font-semibold">{day.replace("_", "-")}</h3>
            {activities.map((activity, index) => (
              <ItineraryCard
                key={`${day}-activity-${index}`}
                activity={activity}
              />
            ))}
          </div>
        ),
      )}
    </section>
  );
}
