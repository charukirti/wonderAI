import { useEffect, useState } from "react";
import { parseAIResponse } from "../utils/parseAIResponse";
import { Json } from "../types/supabase";

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

type Itinerary = {
  [key: string]: ItineraryActivity[];
};

type ItineraryActivity = {
  details: string;
  image_url?: string;
  location: {
    map_url?: string;
    coordinates?: { lat: number; lng: number };
  };
  place: string;
  timings: string;
  price: number;
};

export function useGetTripData(generated_itinerary: Json) {
  const [data, setData] = useState<{ hotels: Hotel[]; itinerary: Itinerary[] }>(
    { hotels: [], itinerary: [] },
  );

  useEffect(() => {
    try {
      if (!generated_itinerary) {
        setData({ hotels: [], itinerary: [] });
        return;
      }

      const parsedData = parseAIResponse(generated_itinerary);
      console.log(parsedData);

      if (Array.isArray(parsedData?.hotels)) {
        setData({
          hotels: parsedData?.hotels,
          itinerary: parsedData?.itinerary,
        });
      } else if (parsedData?.hotels) {
        setData({
          hotels: Object.values(parsedData?.hotels),
          itinerary: Object.values(parsedData?.itinerary),
        });
      } else {
        setData({ hotels: [], itinerary: [] });
      }
    } catch (error) {
      console.error("Failed to process itinerary data:", error);
      setData({ hotels: [], itinerary: [] });
    }
  }, [generated_itinerary]);

  console.log(data);

  return data;
}
