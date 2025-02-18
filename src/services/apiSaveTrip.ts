import { supabase } from "../supabase/supabase";
import { FormData, formDataToTrip } from "../features/create-trip/type";
import toast from "react-hot-toast";

export async function saveTripData(formData: FormData, generatedTrip: string) {
  const tripData = formDataToTrip(formData);

  const { data, error } = await supabase
    .from("trips")
    .insert([
      {
        ...tripData,
        generated_itinerary: generatedTrip,
      },
    ])
    .select("*")
    .single();
  if (error) toast.error("unable to add data into supabase");
 

  return data;
}
