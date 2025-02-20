export const groupOptions = [
  {
    emoji: "👤",
    title: "Just Me",
    description: "Solo adventure",
  },
  {
    emoji: "💑",
    title: "A couple",
    description: "Romantic getaway",
  },
  {
    emoji: "👨‍👩‍👦",
    title: "Family",
    description: "Family-friendly activities",
  },
  {
    emoji: "👥",
    title: "Friends",
    description: "Group activities and fun",
  },
];

export const budgetOptions = [
  {
    emoji: "💵",
    title: "Budget Friendly", 
    description: "Affordable accommodation and activities",
    value: "budget"
  },
  {
    emoji: "💰",
    title: "Mid-Range",
    description: "Balanced comfort and value",
    value: "mid-range"
  },
  {
    emoji: "💎",
    title: "Luxury",
    description: "Premium stays and experiences",
    value: "luxury"
  }
];

export const activityOptions = [
  {
    emoji: "🏖️",
    title: "Relaxation",
    description: "Beaches, spas, and peaceful activities",
  },
  {
    emoji: "🏃",
    title: "Adventure",
    description: "Hiking, sports, and outdoor thrills",
  },
  {
    emoji: "🏛️",
    title: "Culture",
    description: "Museums, landmarks, and local history",
  },
  {
    emoji: "🍷",
    title: "Food & Nightlife",
    description: "Restaurants, bars, and entertainment",
  },
];

export const PROMPT = `Create an optimal trip itinerary based on the specified location, duration, budget, and number of people.  
- **Location:** {location}  
- **Duration:** {noOfDays} days  
- **Group Size:** {People}  
- **Budget:** {Budget}  
- **Preferred Activity:** {activity}  

### **Trip Details:**
1. **Hotels:** Provide a list of hotels within the budget, including:  
   - Name  
   - Description  
   - Address  
   - Rating  
   - Price  
   - Location (OpenStreetMap link or coordinates)  
   - Image URL (from Unsplash, Pexels, Pixabay, or Wikimedia Commons)  

2. **Itinerary for {noOfDays} days:**  
   - Suggested places to visit  
   - Name, details, pricing, timings  
   - Images (from Unsplash, Pexels, Pixabay, or Wikimedia Commons)  
   - Location (OpenStreetMap link or coordinates)  
   - Ensure all activities and accommodations fit within the budget.  

### **Output Format:**  
Return the response strictly in **JSON format** with structured keys:  
\`\`\`json
{
  "hotels": [
    {
      "name": "Hotel Name",
      "description": "Description",
      "address": "Address",
      "rating": 4.5,
      "price": 100,
      "location": {
        "osm_url": "OpenStreetMap Link",
        "coordinates": { "lat": 0.0, "lng": 0.0 }
      },
      "image_url": "https://example.com/hotel.jpg"
    }
  ],
  "itinerary": {
    "day_1": [
      {
        "place": "Place Name",
        "details": "Brief Description",
        "price": 20,
        "timings": "9 AM - 5 PM",
        "image_url": "https://example.com/place.jpg",
        "location": { "osm_url": "OpenStreetMap Link", "coordinates": { "lat": 0.0, "lng": 0.0 } }
      }
    ]
  }
}
\`\`\`
`;

