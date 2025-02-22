import LoginForm from "../features/auth/login/LoginForm";
import logo from "../assets/logo.svg";
export default function Login() {
  return (
    <div className="mx-auto mt-20 max-w-md rounded-lg bg-gray-500 p-4">
      <img src={logo} alt="wonderAI" className="mx-auto mb-2 h-15"/>
      <LoginForm />
    </div>
  );
}
