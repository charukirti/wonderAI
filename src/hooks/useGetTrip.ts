import { useQuery } from "@tanstack/react-query";
import { getTripDetail } from "../services/apiGetTrip";



export function useGetTrip(id: string) {
  const {
    data: tripDetail,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["trips", id],
    queryFn: () => getTripDetail(id),
    enabled: id !== undefined,
  });

  return { tripDetail, isLoading, isError };
}
