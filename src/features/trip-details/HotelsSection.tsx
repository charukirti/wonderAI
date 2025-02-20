import { useEffect, useState } from "react";
import { Tables } from "../../types/supabase";
import { parseAIResponse } from "../../utils/parseAIResponse";
import Hotel from "../../components/ui/Hotel";

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
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    try {
      if (!generated_itinerary) {
        setHotels([]);
        return;
      }

      const parsedData = parseAIResponse(generated_itinerary);

      if (Array.isArray(parsedData?.hotels)) {
        setHotels(parsedData?.hotels);
      } else if (parsedData?.hotels) {
        setHotels(Object.values(parsedData?.hotels));
      } else {
        setHotels([]);
      }
    } catch (error) {
      console.error("Failed to process itinerary data:", error);
      setHotels([]);
    }
  }, [generated_itinerary]);

  console.log(hotels);

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
