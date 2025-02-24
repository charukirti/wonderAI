import { useState } from "react";
import MyTripsBtn from "./MyTripsBtn";
import LogoutBtn from "./LogoutBtn";
import CreateTripBtn from "./CreateTripBtn";
import Avatar from "./Avatar";
import Button from "./Button";

export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center gap-4">
      <CreateTripBtn />
      <div className="relative">
        <Button
          className="flex items-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Avatar size="2rem" />
        </Button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />

            <div className="absolute right-0 z-20 mt-2 w-32 rounded-lg bg-transparent p-2 ">
              <MyTripsBtn />
              <div className="my-1 border-t border-gray-700" />
              <LogoutBtn />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
