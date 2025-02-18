import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveTripData } from "../services/apiSaveTrip";
import { genrateAIresponse } from "../services/Gemini";
import { createTripInput } from "../features/create-trip/type";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useCreateTrip() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: generateTrip, isPending: isCreating } = useMutation({
    mutationFn: async ({ finalPrompt, formData }: createTripInput) => {
      const ai_response = await genrateAIresponse(finalPrompt);
      const saveData = await saveTripData(formData, ai_response);
      console.log(saveData);
      return { saveData };
    },
    onSuccess: (data) => {
      toast.success("Your trip has been created successfully");
      queryClient.invalidateQueries({ queryKey: ["trips"] });
      navigate(`/trip-deatils/${data.saveData?.id}`);
    },
    onError: () => {
      toast.error("Failed to crete trip");
    },
  });

  return { generateTrip, isCreating };
}
