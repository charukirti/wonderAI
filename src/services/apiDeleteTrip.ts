import { supabase } from "../supabase/supabase";

export async function deleteTrip(id: string) {
  const { error } = await supabase.from("trips").delete().eq("id", id);

  if (error) throw new Error("There was an error while deleting the trip");

  return true;
}
