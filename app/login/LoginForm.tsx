"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { InputCustom } from "@/components/ui/inputCustom";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Validation from "./Validation";
import { emailLogin } from "./actions";
import { useState } from "react";

export default function LoginForm() {
  const [value, setValue] = useState<any>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleLogin = (e: any) => {
    setErrors(Validation(value));

    const checkValidation = Validation(value);
    const formData = new FormData();
    if (Object.keys(checkValidation).length === 0) {
      // console.log("no error");
      // for (let key in value) {
      //   formData.append(key, value[key]);
      // }
      emailLogin(formData);
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
    <>
      <div>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Nhập số điện thoại"
          required
          label="Số điện thoại"
          onChange={handleOnChange}
          value={value.email}
        />
        {errors.email && (
          <p className="p text-destructive text-xs">{errors.email}</p>
        )}
      </div>
      <div className="mt-4 gap-2">
        <div className="flex items-center"></div>
        <InputCustom
          minLength={6}
          name="password"
          id="password"
          type="password"
          placeholder="Nhập mật khẩu"
          required
          label="Mật khẩu"
          onChange={handleOnChange}
          value={value.password}
        />
        {errors.password && (
          <p className="p text-destructive text-xs">{errors.password}</p>
        )}
      </div>
      <div className="flex justify-between items-center py-4">
        <div className="flex gap-2 items-center">
          <Checkbox />
          <Label className="text-sm">Lưu tài khoản</Label>
        </div>
        <Link href={"/forgot-password"} className="text-sm">
          Quên mật khẩu
        </Link>
      </div>
      <Button onClick={handleLogin} className="w-full bg-[#717171]">
        Đăng nhập
      </Button>
    </>
  );
}
