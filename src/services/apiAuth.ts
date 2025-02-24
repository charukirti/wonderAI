import { supabase } from "../supabase/supabase";
import { LoginFormData, RegisterFormData } from "../types/types";

// for registration
export async function signup({ name, email, password }: RegisterFormData) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

// for login

export async function signIn({ email, password }: LoginFormData) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

// get current user

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data.user;
}

// for logout
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

// for google signup

export async function continueWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/my-trips`,
    },
  });

  if (error) throw new Error("There was an error while signing in with google");

  return data;
}
