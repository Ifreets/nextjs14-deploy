"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputCustomVerify } from "@/components/ui/inputCustomVerify";
import Validation from "./Validation";
import { navigate } from "../login/actions";
import { useState } from "react";

export default function ForgotPasswordForm() {
  const [value, setValue] = useState<any>({
    username: "",
    verifyCode: "",
  });

  const [errors, setErrors] = useState<any>({});
  const handleForgot = (e: any) => {
    setErrors(Validation(value));

    const checkValidation = Validation(value);

    const formData = new FormData();
    if (Object.keys(checkValidation).length === 0) {
      // for (let key in value) {
      //   //@ts-ignore
      //   formData.append(key, value[key]);
      // }
      navigate("/update-password");
    }
  };
  const handleOnChange = (e: any) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });

    setErrors({});
  };
  return (
    <div>
      <div className="flex-col gap-4">
        <div className="flex-1 gap-2 mt-4">
          <InputCustomVerify
            value={value?.username}
            onChange={handleOnChange}
            id="username"
            name="username"
            type="username"
            placeholder="Nhập email hoặc số điện thoại"
            required
            label="Email/Số điện thoại"
          />
          {errors.username && (
            <p className="p text-destructive text-xs">{errors.username}</p>
          )}
        </div>
        <div className="flex-1 gap-2 mt-4 mb-8">
          <Input
            onChange={handleOnChange}
            value={value?.verifyCode}
            id="verifyCode"
            name="verifyCode"
            type="verifyCode"
            placeholder="Nhập mã xác thực"
            required
            label="Mã xác thực"
          />
          {errors.verifyCode && (
            <p className="p text-destructive text-xs">{errors.verifyCode}</p>
          )}
        </div>
        <Button onClick={handleForgot} className="w-full bg-[#717171]">
          Xác nhận
        </Button>
      </div>
    </div>
  );
}
