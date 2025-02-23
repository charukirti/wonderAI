import { useForm } from "react-hook-form";
import { LoginFormData } from "../../../types/types";
import Button from "../../../components/ui/Button";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import FormRow from "../../../components/ui/FormRow";
import { useLogin } from "./useLogin";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>();

  const { signin, isLoading } = useLogin();

  function onSubmit(data: LoginFormData) {
    const { email, password } = data;

    if (!email || !password) return;

    signin(
      { email, password },
      {
        onSettled: () => reset(),
      },
    );
    console.log("register", data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="mb-2 text-center text-2xl font-bold text-white">
        Welcome back, to WonderAI!
      </h1>

      <FormRow
        register={register}
        errors={errors}
        type="email"
        name="email"
        label="Email"
      />
      <FormRow
        register={register}
        errors={errors}
        type="password"
        name="password"
        label="Password"
      />

      <p className="text-right text-sm">
        Don't have an account?, <Link to="/auth/register">register</Link>
      </p>

      <div className="mt-3 flex flex-col gap-2">
        <Button
          size="lg"
          className="bg-[#ff6b6b] p-2 font-bold"
          disabled={isLoading}
        >
          <Button.Text>Log in</Button.Text>
        </Button>
        <span className="text-center text-base font-semibold">Or</span>
        <Button size="lg" className="bg-gray-100 p-2 font-bold text-gray-800">
          <Button.Icon className="text-2xl">
            <FcGoogle />
          </Button.Icon>
          <Button.Text>Continue with google</Button.Text>
        </Button>
      </div>
    </form>
  );
}
