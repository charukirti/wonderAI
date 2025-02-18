import { useParams } from "react-router";

export default function TripDetails() {
  const { id } = useParams();
  console.log(id);
  return <></>;
}
