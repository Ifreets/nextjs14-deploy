"use client";

import { Button } from "@/components/ui/button";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Provider } from "@supabase/supabase-js";
import { oAuthSignIn } from "./actions";

type OAuthProvider = {
  name: Provider;
  displayName: string;
  icon?: JSX.Element;
};

export function OAuthButtons() {
  const oAuthProviders: OAuthProvider[] = [
    // {
    //   name: "github",
    //   displayName: "GitHub",
    //   icon: <Github className="size-5" />,
    // },
    {
      name: "facebook",
      displayName: "Facebook",
      icon: <FaFacebook className="size-5" color="#1877F2" />,
    },
    {
      name: "google",
      displayName: "Google",
      icon: <FcGoogle className="size-5" />,
    },
  ];

  return (
    <>
      <div className="flex justify-between gap-2">
        <Button
          className="flex-1 items-center justify-center gap-2"
          variant="outline"
          onClick={async () => {
            await oAuthSignIn(oAuthProviders[0].name);
          }}
        >
          {oAuthProviders[0].icon}
          {oAuthProviders[0].displayName}
        </Button>
        <Button
          className="flex-1 items-center justify-center gap-2"
          variant="outline"
          onClick={async () => {
            await oAuthSignIn(oAuthProviders[1].name);
          }}
        >
          {oAuthProviders[1].icon}
          {oAuthProviders[1].displayName}
        </Button>
      </div>
    </>
  );
}
