import { supabase } from "../supabase/supabase";

export async function getTripDetail(id: string) {
  const { data: tripData, error } = await supabase
    .from("trips")
    .select("*")
    .eq("id", id)
    .single();

  if (error)
    throw new Error("We got some error while fetching your trip details");

  return tripData;
}
