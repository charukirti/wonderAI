export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

export interface FormData {
  name: string;
  email: string;
  password: string;
}

export interface FieldErrors {
  type: string;
  message: string;
  ref?: HTMLInputElement;
}

export type FormErrors = {
  [K in keyof FormData]?: FieldErrors;
}