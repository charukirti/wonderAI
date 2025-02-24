import { useNavigate } from "react-router";
import { MdAddCircleOutline } from "react-icons/md";
import Button from "./Button";

export default function NoTrips() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-4">
      <div className="max-w-md space-y-6 text-center">
        <div className="inline-block rounded-full bg-gray-100 p-4">
          <MdAddCircleOutline className="h-12 w-12 text-gray-500" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">No trips planned</h2>
          <p className="text-gray-500">
            You haven't created any trips yet. Start planning your next
            adventure!
          </p>
        </div>

        <Button
          onClick={() => navigate("/create-trip")}
          className="flex items-center gap-2"
        >
          <MdAddCircleOutline className="h-4 w-4" />
          Create your first trip
        </Button>
      </div>
    </div>
  );
}
