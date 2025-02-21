import { Tables } from "../../types/supabase";
import Hotel from "../../components/ui/Hotel";
import { useGetTripData } from "../../hooks/useGetTripData";

type TripProps = Pick<
  // it makes missing props optional
  Tables<"trips">,
  "generated_itinerary"
>;

type Hotel = {
  name: string;
  description: string;
  address: string;
  rating: number;
  price: number;
  location: {
    map_url?: string;
    coordinates?: { lat: number; lng: number };
  };
  image_url?: string;
};

export default function HotelsSection({ generated_itinerary }: TripProps) {
  const { hotels } = useGetTripData(generated_itinerary);
  return (
    <section className="space-y-6">
      <h2 className="mt-3 mb-3 text-3xl font-bold">Recommended hotels</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {hotels.map((hotel, index) => (
          <Hotel key={index} hotel={hotel} />
        ))}
      </div>
    </section>
  );
}
