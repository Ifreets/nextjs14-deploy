"use server";

import { Provider } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/server";
import { getURL } from "@/utils/helpers";
import { redirect } from "next/navigation";

// export async function emailLogin(formData: FormData | any) {
//   const supabase = createClient();

//   // type-casting here for convenience
//   // in practice, you should validate your inputs
//   const data = {
//     email: formData.get("email") as string,
//     password: formData.get("password") as string,
//   };

//   const { error } = await supabase.auth.signInWithPassword(data);

//   if (error) {
//     redirect("/login?message=Could not authenticate user");
//   }

//   revalidatePath("/", "layout");
//   redirect("/todos");
// }

// export async function signup(formData: FormData) {
//   const supabase = createClient();
//   console.log({ formData }, "formData");
//   // type-casting here for convenience
//   // in practice, you should validate your inputs
//   const data = {
//     email: formData.get("email") as string,
//     password: formData.get("password") as string,
//   };

//   const { error } = await supabase.auth.resend({ email: "", type: "signup" });

//   if (error) {
//     redirect("/signup?message=Error signing up");
//   }

//   revalidatePath("/", "layout");
//   //   redirect("/login");
// }

export async function signOut() {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect("/login");
}

export async function oAuthSignIn(provider: Provider) {
  if (!provider) {
    return redirect("/login?message=No provider selected");
  }

  const supabase = createClient();
  const redirectUrl = getURL("/auth/callback");
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: redirectUrl,
    },
  });

  if (error) {
    redirect("/login?message=Could not authenticate user");
  }
  console.log(
    data.url,
    "urlllll ++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
  );
  return redirect(data.url);
}
export async function navigate(data: any) {
  console.log(data, "data");
  redirect(`${data}`);
}
