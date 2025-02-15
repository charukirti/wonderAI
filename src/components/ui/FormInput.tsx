import React from "react";

interface FormInputProps {
  type: "text" | "number";
  placeholder: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
}

export function FormInput({
  type,
  placeholder,
  value,
  onChange,
  min,
}: FormInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      min={type === "number" ? min : undefined}
      className="mt-4 w-full rounded-lg border border-gray-300 px-2 py-1 text-base focus:ring-2 focus:ring-blue-500 focus:outline-none md:px-4 md:py-2 md:text-xl"
    />
  );
}
