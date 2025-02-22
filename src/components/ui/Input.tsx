import { UseFormRegister, Path, RegisterOptions } from "react-hook-form";
import { LoginFormData, RegisterFormData } from "../../types/types";

interface InputProps<T extends LoginFormData | RegisterFormData> {
  name: Path<T>;
  register: UseFormRegister<T>;
  type?: string;
  placeholder?: string;
  registerOptions?: RegisterOptions<T, Path<T>>;
}

export default function Input<T extends LoginFormData | RegisterFormData>({
  name,
  register,
  type = "text",
  registerOptions,
  ...props
}: InputProps<T>) {
  return (
    <input
      type={type}
      {...register(name, registerOptions)}
      {...props}
      className="mb-2 rounded-lg bg-gray-100 p-2 text-base text-gray-800 outline-none"
      
    />
  );
}
