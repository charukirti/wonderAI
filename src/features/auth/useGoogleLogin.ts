import { useMutation } from "@tanstack/react-query";
import { continueWithGoogle } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useGoogleLogin() {
  const { mutate, isPending } = useMutation({
    mutationFn: continueWithGoogle,
    onError: () => {
      toast.error("There was an error while google signup");
    },
  });

  return { mutate, isPending };
}
