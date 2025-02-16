import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="mx-3 flex min-h-screen flex-col lg:mx-10">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
