import { useMutation } from "@tanstack/react-query";
import { signup as signupAPI } from "../../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useRegister() {
  const navigate = useNavigate();

  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: signupAPI,
    onSuccess: (user) => {
      console.log("user signed- ", user);
      navigate("/auth/login");
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address.",
      );
    },
  });

  return { signup, isLoading };
}
