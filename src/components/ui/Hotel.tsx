type HotelType = {
  hotel: {
    name: string;
    description: string;
    address: string;
    rating: number;
    price: number;
    location?: {
      map_url?: string;
      coordinates?: { lat: number; lng: number };
    };
    image_url?: string;
  };
};

export default function Hotel({ hotel }: HotelType) {

  const { name, description, address, rating, price, location } =
    hotel;
  return (
    <article className="overflow-hidden rounded-md border-2 p-2">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span className="rounded-full bg-blue-50 py-1 text-sm font-medium text-blue-700">
          {rating}/5
        </span>
      </div>

      <p className="mt-2 text-sm text-gray-500">{description}</p>

      <div className="mt-3 space-y-1 text-sm">
        <p className="flex gap-2">
          <span className="min-w-20 font-medium">Address:</span>
          <span>{address}</span>
        </p>
        <p className="flex gap-2">
          <span className="min-w-20 font-medium">Price:</span>
          <span>₹{price}</span>
        </p>
      </div>

      {location?.coordinates?.lat && location?.coordinates?.lng && (
        <a
          href={`https://www.openstreetmap.org/?mlat=${location.coordinates.lat}&mlon=${location.coordinates.lng}#map=15/${location.coordinates.lat}/${location.coordinates.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
        >
          <span className="mr-2">📍</span>
          View on Map
        </a>
      )}
    </article>
  );
}
