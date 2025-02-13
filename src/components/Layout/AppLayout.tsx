import { Outlet } from "react-router";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div className="mx-3 lg:mx-10">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
