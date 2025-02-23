import { useNavigate } from "react-router";
import Button from "./Button";

export default function MyTripsBtn() {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate("/my-trips")}>
      <Button.Text>My trips</Button.Text>
    </Button>
  );
}
