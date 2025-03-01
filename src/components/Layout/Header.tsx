import { Link, useNavigate } from "react-router";
import logo from "../../assets/logo.svg";
import { useUser } from "../../features/auth/useUser";
import HeaderMenu from "../ui/HeaderMenu";

export default function Header() {
  const navigate = useNavigate();
  const {  isAuthenticated } = useUser();

  function handleNavigation() {
    navigate("/auth/login");
  }

  return (
    <header className="sticky top-0 z-50 mt-2 flex items-center justify-between bg-gray-800 p-2">
      <div className="flex items-center gap-2">
        <img src={logo} alt="" className="sm:h-8" />
        <Link to="/">
          <h1 className="text-xl font-bold lg:text-3xl">WonderAI</h1>
        </Link>
      </div>
      {isAuthenticated ? (
        <HeaderMenu />
      ) : (
        <button
          className="cursor-pointer rounded-lg bg-[#ff6b6b] p-2 font-bold text-white transition-colors hover:bg-[#ff8989] lg:text-lg"
          onClick={handleNavigation}
        >
          Get started!
        </button>
      )}
    </header>
  );
}
