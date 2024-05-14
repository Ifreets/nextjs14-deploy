// "use client";

// import { Button } from "@/components/ui/button";
// import { InputCustom } from "@/components/ui/inputCustom";
// import ModalMessage from "@/components/ui/ModalMessage";
// import Validation from "./Validation";
// import { useState } from "react";

// function UpdatePasswordForm() {
//   const [value, setValue] = useState({
//     password: "",
//     confirmPassword: "",
//   });
//   const [updatePasswordSuccess, setUpdatePasswordSuccess] = useState(false);
//   const [errors, setErrors] = useState<any>({});
//   const handleForgot = (e: any) => {
//     setErrors(Validation(value));
//     const checkValidation = Validation(value);
//     const formData = new FormData();
//     if (Object.keys(checkValidation).length === 0) {
//       console.log("no error");
//       // for (let key in value) {
//       //   formData.append(key, value[key]);
//       // }
//       setUpdatePasswordSuccess(true);
//     }
//   };
//   const handleOnChange = (e: any) => {
//     setValue({
//       ...value,
//       [e.target.name]: e.target.value,
//     });

//     setErrors({});
//   };
//   return (
//     <div>
//       <div className="mt-4 gap-2">
//         <InputCustom
//           minLength={6}
//           name="password"
//           id="password"
//           type="password"
//           placeholder="Nhập mật khẩu"
//           required
//           label="Nhập mật khẩu mới"
//           onChange={handleOnChange}
//           value={value.password}
//         />
//         {errors.password && (
//           <p className="p text-destructive text-xs">{errors.password}</p>
//         )}
//       </div>
//       <div className="mt-4 gap-2 mb-8">
//         <InputCustom
//           minLength={6}
//           name="confirmPassword"
//           id="confirmPassword"
//           type="password"
//           placeholder="Nhập mật khẩu"
//           required
//           label="Nhập lại mật khẩu mới"
//           onChange={handleOnChange}
//           value={value.confirmPassword}
//         />
//         {errors.confirmPassword && (
//           <p className="p text-destructive text-xs">{errors.confirmPassword}</p>
//         )}
//       </div>
//       <Button onClick={handleForgot} className="w-full bg-[#717171]">
//         Xác nhận
//       </Button>
//       {updatePasswordSuccess && (
//         <ModalMessage
//           onSubmit={() => setUpdatePasswordSuccess(false)}
//           title="Thành công"
//           message="Đặt lại mật khẩu thành công"
//           onCancel={() => setUpdatePasswordSuccess(false)}
//           onOpen={updatePasswordSuccess}
//           onNavigate="/login"
//           type="success"
//           navigateTitle="Trở lại đăng nhập"
//         />
//       )}
//     </div>
//   );
// }

// export default UpdatePasswordForm;
