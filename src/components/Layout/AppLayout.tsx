import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="mx-3 flex min-h-screen flex-col lg:mx-14">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
