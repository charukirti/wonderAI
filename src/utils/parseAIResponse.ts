import { Json } from "../types/supabase";

/**
 * Safely parses AI-generated JSON responses that might include markdown formatting
 * or other non-standard JSON formats.
 * 
 * @param data - The AI response data (could be object, string with markdown, etc.)
 * @returns A properly parsed JavaScript object
 */
export function parseAIResponse(data: Json) {
  try {
    // Case 1: Already an object, return it directly
    if (typeof data === "object" && data !== null) {
      return data;
    }

    // Case 2: Handle string data that might contain JSON
    if (typeof data === "string") {
      let cleanData = data.trim();

      // Remove markdown code blocks if present
      if (cleanData.includes("```")) {
        cleanData = cleanData
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .trim();
      }
      
      // Extract JSON object if embedded in other text
      const jsonMatch = cleanData.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        cleanData = jsonMatch[0];
      }
      
      return JSON.parse(cleanData);
    }

    // Case 3: Fallback for unexpected format
    return { hotels: [], itinerary: {} };
  } catch (error) {
    console.error("Error parsing AI response:", error);
    return { hotels: [], itinerary: {} };
  }
}