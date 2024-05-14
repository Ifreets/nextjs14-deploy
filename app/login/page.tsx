import { Card } from "@/components/ui/card";
import { OAuthButtons } from "./oauthSignin";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/todos");
  }

  return (
    <section className="h-[calc(100vh-57px)] flex justify-center items-center">
      <Card className="mx-auto min-w-[600px] py-6 px-8">
        {/* <CardHeader>
          <CardTitle className="text-3xl text-center uppercase">
            Đăng nhập
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <LoginForm />
          <div className="border-t"></div>
          <Label className="text-sm text-center">Hoặc đăng nhập bằng</Label> */}
        <OAuthButtons />
        {/* <div className="border-t"></div>
          <div className="text-center text-sm">
            Bạn chưa có tài khoản?{" "}
            <Link href="signup" className="text-[#F8664F]">
              Đăng ký
            </Link>
          </div>
        </CardContent> */}
      </Card>
    </section>
  );
}
