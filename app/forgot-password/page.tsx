import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ForgotPasswordForm from "./ForgotPassword";

export default function ForgotPassword() {
  return (
    <section className="h-[calc(100vh-57px)] flex justify-center items-center">
      <Card className="mx-auto min-w-[600px] py-6 px-8">
        <CardHeader>
          <CardTitle className="text-3xl text-center uppercase">
            Đặt lại mật khẩu
          </CardTitle>
          <CardDescription className="text-center">
            Vui lòng điền email/số điện thoại đăng ký tài khoản để hệ thống gửi
            mật khẩu
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <ForgotPasswordForm />
        </CardContent>
      </Card>
    </section>
  );
}
