import { useNavigate } from "react-router";
import { useUser } from "../../features/auth/useUser";
import { ReactNode, useEffect } from "react";

interface ProtectedRouteProp {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProp) {
  const navigate = useNavigate();

  // load authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // if there is no user, redirect to login

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/auth/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  if (isAuthenticated) return children;
}
