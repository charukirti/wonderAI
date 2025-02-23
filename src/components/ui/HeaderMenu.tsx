import MyTripsBtn from "./MyTripsBtn";
import LogoutBtn from "./LogoutBtn";
import CreateTripBtn from "./CreateTripBtn";

export default function HeaderMenu() {
  return (
    <div className="flex items-center gap-3">
      <CreateTripBtn />
      <MyTripsBtn />
      <LogoutBtn />
    </div>
  );
}
