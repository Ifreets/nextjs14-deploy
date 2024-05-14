// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// import { Label } from "@/components/ui/label";
// import Link from "next/link";
// import { OAuthButtons } from "../login/oauthSignin";
// import Signup from "./Signup";
// import { createClient } from "@/utils/supabase/server";
// import { redirect } from "next/navigation";

// export default async function Login({
//   searchParams,
// }: {
//   searchParams: { message: string };
// }) {
//   const supabase = await createClient();

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (user) {
//     return redirect("/todos");
//   }

//   return (
//     <section className="h-[calc(100vh-57px)] flex justify-center items-center">
//       <Card className="mx-auto min-w-[600px] py-6 px-8">
//         <CardHeader>
//           <CardTitle className="text-3xl text-center uppercase">
//             Đăng ký tài khoản
//           </CardTitle>
//           {/* <CardDescription>
//             Enter your email below to login to your account
//           </CardDescription> */}
//         </CardHeader>
//         <CardContent className="flex flex-col gap-4">
//           {/* <form id="login-form" className="flex-row gap-4">
//             <div className="gap-2 mt-4">
//               <Input
//                 id="username"
//                 name="username"
//                 type="username"
//                 placeholder="Nhập họ và tên"
//                 required
//                 label="Họ và tên"
//               />
//             </div>
//             <div className="flex justify-between gap-4">
//               <div className="flex-1 gap-2 mt-4">
//                 <InputCustomVerify
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   type="phoneNumber"
//                   placeholder="Nhập số điện thoại"
//                   required
//                   label="Số điện thoại"
//                 />
//               </div>
//               <div className="flex-1 gap-2 mt-4">
//                 <Input
//                   id="verifyCode"
//                   name="verifyCode"
//                   type="verifyCode"
//                   placeholder="Nhập mã xác thực"
//                   required
//                   label="Mã xác thực"
//                 />
//               </div>
//             </div>
//             <div className="mt-4 gap-2">
//               <div className="flex items-center"></div>
//               <InputCustom
//                 minLength={6}
//                 name="password"
//                 id="password"
//                 type="password"
//                 placeholder="Nhập mật khẩu"
//                 required
//                 label="Mật khẩu"
//               />
//             </div>
//             {searchParams.message && (
//               <div className="text-sm font-medium text-destructive">
//                 {searchParams.message}
//               </div>
//             )}
//             <div className="flex justify-between items-center py-4 text-xs">
//               Bằng việc đăng ký, bạn đã đồng ý với Trợ lý ô tô về{" "}
//               <Link href={"#"} className="underline">
//                 Điều khoản dịch vụ
//               </Link>{" "}
//               và{" "}
//               <Link href={"#"} className="underline">
//                 Chính sách bảo mật
//               </Link>
//             </div>

//             <Button formAction={signup} className="w-full">
//               Đăng ký
//             </Button>
//           </form> */}
//           <Signup />
//           <div className="border-t"></div>
//           <Label className="text-sm text-center">Hoặc đăng ký bằng</Label>
//           <OAuthButtons />
//           <div className="border-t"></div>
//           <div className="text-center text-sm">
//             Bạn đã có tài khoản?{" "}
//             <Link href="login" className="text-[#F8664F]">
//               Đăng nhập
//             </Link>
//           </div>
//         </CardContent>
//       </Card>
//     </section>
//   );
// }
