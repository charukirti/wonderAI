import useLogout from "../../features/auth/useLogout";

export default function LogoutBtn() {
  const { logout, isLoading: logoutloading } = useLogout();
  function handleLogout() {
    logout();
  }
  return (
    <button
      className="cursor-pointer rounded-lg bg-[#ff6b6b] p-2 font-bold text-white transition-colors hover:bg-[#ff8989] lg:text-lg"
      onClick={handleLogout}
    >
      {logoutloading ? "Logging out.." : "Log out"}
    </button>
  );
}
