interface ItineraryActivity {
    place: string;
    details: string;
    timings: string;
    price: number;
    location?: {
      map_url?: string;
      coordinates?: {
        lat: number;
        lng: number;
      };
    };
  }
  
  interface ItineraryCardProps {
    activity: ItineraryActivity;
  }
export default function ItineraryCard({ activity }: ItineraryCardProps) {
  return (
    <div className="rounded-md border p-3 shadow-md mb-4">
      <h4 className="font-bold">{activity.place}</h4>
      <p>{activity.details}</p>
      <p>
        <strong>Timings:</strong> {activity.timings}
      </p>
      <p>
        <strong>Price:</strong> ${activity.price}
      </p>
      {activity.location?.map_url && (
        <a
          href={activity.location.map_url}
          target="_blank"
          className="text-blue-600 underline"
        >
          View on Map
        </a>
      )}
    </div>
  );
}
