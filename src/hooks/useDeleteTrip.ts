import { useMutation } from "@tanstack/react-query";
import { deleteTrip } from "../services/apiDeleteTrip";
import toast from "react-hot-toast";

export default function useDeleteTrip() {
  const { mutate, isPending: deleting } = useMutation({
    mutationFn: (id: string) => deleteTrip(id),
    onSuccess: () => {
      toast.success("Your trip has been deleted successfully!");
    },
    onError: () => {
      toast.error("There was a problem while deleting your trip.");
    },
  });

  return { deleteTrip: mutate, deleting };
}
