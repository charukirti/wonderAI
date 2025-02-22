import logo from "../assets/logo.svg";
import RegisterForm from "../features/auth/register/RegisterForm";

export default function Register() {
  return (
    <div className="mx-auto max-w-md rounded-lg bg-gray-500 p-4">
      <img src={logo} alt="wonderAI" className="mx-auto mb-2 h-15" />
      <RegisterForm />
    </div>
  );
}
