import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="mx-3 min-h-screen lg:mx-10">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
