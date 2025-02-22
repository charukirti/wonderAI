import {
  FieldErrors,
  UseFormRegister,
  Path,
  get,
  RegisterOptions,
} from "react-hook-form";
import { LoginFormData, RegisterFormData } from "../../types/types";
import FormLabel from "./FormLabel";
import Input from "./Input";
import { HTMLInputTypeAttribute, ReactNode } from "react";

interface FormRowProps<T extends LoginFormData | RegisterFormData> {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  type: HTMLInputTypeAttribute;
  name: Path<T>;
  label: ReactNode;
  registerOptions?: RegisterOptions<T, Path<T>>;
}

export default function FormRow<T extends LoginFormData | RegisterFormData>({
  register,
  errors,
  name,
  type,
  label,
  registerOptions,
}: FormRowProps<T>) {
  // Used get() helper to safely access nested error fields
  const errorMessage = get(errors, name)?.message as string | undefined;

  return (
    <div className="flex flex-col gap-1">
      <FormLabel>{label}</FormLabel>
      <Input
        name={name}
        register={register}
        type={type}
        placeholder={`Enter your ${name}`}
        registerOptions={registerOptions}
      />
      {errorMessage && (
        <span className="text-sm font-semibold text-red-500">
          {errorMessage}
        </span>
      )}
    </div>
  );
}
