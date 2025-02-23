import { supabase } from "../supabase/supabase";

export async function getUserTrips(id: string) {
  const { data: tripData, error } = await supabase
    .from("trips")
    .select("*")
    .eq("user_id", id)
    

  if (error)
    throw new Error("We got some error while fetching your trip details");

  return tripData;
}
