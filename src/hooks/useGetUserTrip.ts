import { useQuery } from "@tanstack/react-query";
import { getUserTrips } from "../services/apiGetUserTrips";




export function useGetUserTrip(id: string) {
  const {
    data: tripDetail,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["trips", id],
    queryFn: () => getUserTrips(id),
    enabled: id !== undefined,
  });

  return { tripDetail, isLoading, isError };
}
