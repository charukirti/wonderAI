import { useUser } from "../../features/auth/useUser";

export default function Avatar() {
  const { user } = useUser();
  const { name, avatar } = user?.user_metadata;
  return (
    <>
      <img
        src={avatar}
        alt={`Avatar of ${name}`}
        className="block w-[4rem] rounded-xl object-cover object-center outline-2"
      />
    </>
  );
}
