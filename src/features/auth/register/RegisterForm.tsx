import { useForm } from "react-hook-form";
import { RegisterFormData } from "../../../types/types";
import { Link } from "react-router";
import Button from "../../../components/ui/Button";
import { FcGoogle } from "react-icons/fc";
import FormRow from "../../../components/ui/FormRow";


export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();
    
    
    function onSubmit(data: RegisterFormData) {
        const { email, password, name } = data
        
        
        console.log('register', data)
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="mb-2 text-center text-2xl font-bold text-white">
        Welcome, to WonderAI!
      </h1>

      <FormRow
        register={register}
        type="text"
        name="name"
        label="Name"
        errors={errors}
      />

      <FormRow
        register={register}
        type="email"
        name="email"
        label="Email"
        errors={errors}
        registerOptions={{
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email format",
          },
        }}
      />

      <FormRow
        register={register}
        type="password"
        name="password"
        label="Password"
        errors={errors}
        registerOptions={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters long",
          },
        }}
      />

      <p className="text-right text-base">
        Already have an account, <Link to="/auth/login">login.</Link>
      </p>

      <div className="mt-3 flex flex-col gap-2">
        <Button size="lg" className="bg-[#ff6b6b] p-2 font-bold">
          <Button.Text>Register</Button.Text>
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
