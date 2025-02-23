import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn as logInAPI } from "../../../services/apiAuth";
import toast from "react-hot-toast";
import { LoginFormData } from "../../../types/types";
import { useNavigate } from "react-router";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signin, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }: LoginFormData) =>
      logInAPI({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/create-trip", { replace: true });
      toast.success("User logged in successfully");
    },
    onError: (err) => {
      toast.error("Provided email or password are incorrect");
    },
  });

  return { signin, isLoading };
}
// Rtsgrt5yf