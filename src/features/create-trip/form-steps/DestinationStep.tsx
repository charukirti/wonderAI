import { ChangeEvent, useEffect, useState } from "react";
import { FormInput } from "../../../components/ui/FormInput";
import FormLabel from "../../../components/ui/FormLabel";
import { usePlaces } from "../../../hooks/usePlaces";
import { FormLabels } from "../../../utils/FormLabels";

interface places {
  display_name: string;
}

interface DestinationProp {
  value: string;
  onChange: (value: string) => void;
}

export default function DestinationStep({ value, onChange }: DestinationProp) {
  const [query, setQuery] = useState<string>(value ?? "");
  const [suggestions, setSuggestions] = useState<places[]>([]);

  // fetching cities
  const { data: fetchedSuggestions, isLoading } = usePlaces(query);

  // setting search query
  function handleSetQuery(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setQuery(newValue);
    onChange(newValue);
  }

  // selecting place
  function selectPlace(place: places) {
    const selectedValue = place.display_name;

    setQuery(selectedValue);
    setSuggestions([]);
    onChange(selectedValue); // coming from parent component to track data
  }

  useEffect(() => {
    if (fetchedSuggestions) {
      setSuggestions(fetchedSuggestions);
    }
  }, [fetchedSuggestions]);

  useEffect(() => {
    if (value !== undefined) {
      setQuery(value);
    }
  }, [value]);

  return (
    <div className="flex flex-col gap-2">
      <FormLabel>{FormLabels.destination.label} </FormLabel>
      <FormInput
        type="text"
        placeholder={FormLabels.destination.placeholder}
        onChange={handleSetQuery}
        value={query}
      />
      {isLoading && <p className="mt-10">Loading suggestions...</p>}

      <ul className="mt-10 w-64 rounded-xl shadow-xl md:w-full">
        {suggestions.map((place, index) => (
          <li
            key={index}
            onClick={() => selectPlace(place)}
            className="font-inter mb-4 cursor-pointer px-2 text-base font-medium md:text-xl"
          >
            {place.display_name}
          </li>
        ))}
      </ul>
    </div>
  );
}
