import axios from "axios";

interface Place {
  display_name: string;
  lat: string;
  lon: string;
}

export async function fetchPlaces(searchText: string): Promise<Place[]> {
  if (searchText.length < 2) return [];

  const { data } = await axios.get(
    `https://nominatim.openstreetmap.org/search`,
    {
      params: {
        format: "json",
        q: searchText,
        limit: 8,
      },
    },
  );

  return data;
}
