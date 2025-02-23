import { useNavigate } from "react-router";
import Button from "./Button";

export default function CreateTripBtn() {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate("/create-trip")}>
      <Button.Text>Create trip</Button.Text>
    </Button>
  );
}
