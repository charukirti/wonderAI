import { useQuery } from "@tanstack/react-query";
import { fetchPlaces } from "../services/placesService";
import { useEffect, useState } from "react";

export function usePlaces(searchText: string) {
  const [debouncedSearch, setDebouncedSearch] = useState(searchText);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchText); // debuncing
    }, 400);

    return () => clearTimeout(handler);
  }, [searchText]);

  return useQuery({
    queryKey: ["places", debouncedSearch],
    queryFn: () => fetchPlaces(debouncedSearch),
    enabled: debouncedSearch.length >= 2,
    staleTime: 4 * 60 * 1000,
  });
}
