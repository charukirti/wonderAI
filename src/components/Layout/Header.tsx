import { Link } from "react-router";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-2 sticky top-2">
      <div className="flex items-center gap-2">
        <img src="logo.svg" alt="" className="sm:h-8"/>
        <Link to="/">
          <h1 className="text-xl lg:text-3xl font-bold">WonderAI</h1>
        </Link>
      </div>
      <button className="cursor-pointer rounded-lg bg-[#ff6b6b] p-2  lg:text-lg font-bold text-white transition-colors hover:bg-[#ff8989]">
        Get started!
      </button>
    </header>
  );
}
