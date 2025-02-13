import { Link } from "react-router";

export default function Home() {
  return (
    <section className="mt-20 flex flex-col items-center gap-9 pt-10 pb-16 md:mx-10 lg:mx-28 xl:mx-44">
      <h1 className="font-inter text-center text-3xl font-extrabold md:text-[44px] lg:text-[50px]">
        Your Next Adventure, Curated by AI:{" "}
        <span className="text-[#f56551]">
          Seamless Trip Planning at Your Fingertips
        </span>
      </h1>

      <p className="text-center text-lg/tight text-gray-500">
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your interest and budget
      </p>

      <Link to="/create-trip">
        <button className="cursor-pointer rounded-lg bg-[#ff6b6b] px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-[#ff8989]">
          Get started, it's free!!
        </button>
      </Link>
    </section>
  );
}
