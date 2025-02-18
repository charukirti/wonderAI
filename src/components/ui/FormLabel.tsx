import { ReactNode } from "react";

interface FormLabelProps {
  children: ReactNode;
}

export default function FormLabel({ children }: FormLabelProps) {
  return (
    <label className="font-inter text-left text-sm font-medium md:text-xl">
      {children}
    </label>
  );
}
