"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputCustom } from "@/components/ui/inputCustom";
import { InputCustomVerify } from "@/components/ui/inputCustomVerify";
import ModalContent from "@/components/ui/ModalContent";
import ModalMessage from "@/components/ui/ModalMessage";
import { useState } from "react";
import Validation from "./Validation";

export default function Signup() {
  const [value, setValue] = useState({
    username: "",
    phone: "",
    verifyCode: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [openToS, setOpenToS] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);

  const handleSignup = (e: any) => {
    setErrors(Validation(value));
    const checkValidation = Validation(value);

    if (Object.keys(checkValidation).length === 0) {
      setSignupSuccess(true);
    }
  };
  const handleOnChange = (e: any) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });

    setErrors({});
  };
  const handleTermsOfService = () => {
    setOpenToS(true);
  };
  const handlePrivacyPolicy = () => {
    setOpenPrivacy(true);
  };
  return (
    <>
      {/* <form id="login-form" className="flex-row gap-4"> */}
      <div className="gap-2 mt-4">
        <Input
          value={value?.username}
          onChange={handleOnChange}
          id="username"
          name="username"
          type="username"
          placeholder="Nhập họ và tên"
          required
          label="Họ và tên"
        />
        {errors.username && (
          <p className="p text-destructive text-xs">{errors.username}</p>
        )}
      </div>
      <div className="flex justify-between gap-4">
        <div className="flex-1 gap-2 mt-4">
          <InputCustomVerify
            value={value?.phone}
            onChange={handleOnChange}
            id="phone"
            name="phone"
            type="phone"
            placeholder="Nhập số điện thoại"
            required
            label="Số điện thoại"
          />
          {errors.phone && (
            <p className="p text-destructive text-xs">{errors.phone}</p>
          )}
        </div>
        <div className="flex-1 gap-2 mt-4">
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
        </div>
      </div>
      <div className="mt-4 gap-2">
        <div className="flex items-center"></div>
        <InputCustom
          onChange={handleOnChange}
          value={value?.password}
          minLength={6}
          name="password"
          id="password"
          type="password"
          placeholder="Nhập mật khẩu"
          required
          label="Mật khẩu"
        />
        {errors.password && (
          <p className="p text-destructive text-xs">{errors.password}</p>
        )}
      </div>

      <div className="flex justify-between items-center py-4 text-xs">
        Bằng việc đăng ký, bạn đã đồng ý với Trợ lý ô tô về&nbsp;
        <button onClick={handleTermsOfService} className="underline">
          Điều khoản dịch vụ
        </button>
        &nbsp;và&nbsp;
        <button onClick={handlePrivacyPolicy} className="underline">
          Chính sách bảo mật
        </button>
        {/* <Link href={"#"} className="underline"></Link> và{" "}
        <Link href={"#"} className="underline">
          Chính sách bảo mật
        </Link> */}
      </div>

      <Button onClick={handleSignup} className="w-full bg-[#717171]">
        Đăng ký
      </Button>
      {/* </form> */}
      {signupSuccess && (
        <ModalMessage
          onSubmit={() => setSignupSuccess(false)}
          title="Đăng ký thành công"
          message="Cảm ơn bạn đăng ký tài khoản tại Trợ lý ô tô"
          onCancel={() => setSignupSuccess(false)}
          onOpen={signupSuccess}
          onNavigate="/login"
          type="success"
          navigateTitle="Trở lại đăng nhập"
        />
      )}
      {openToS && (
        <ModalContent
          onSubmit={() => setOpenToS(false)}
          title="Điều khoản dịch vụ"
          message={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`}
          onCancel={() => setOpenToS(false)}
          onOpen={openToS}
        >
          <p>Cảm ơn bạn đăng ký tài khoản tại Trợ lý ô tô</p>
        </ModalContent>
      )}
      {openPrivacy && (
        <ModalContent
          onSubmit={() => setOpenPrivacy(false)}
          title="Chính sách bảo mật"
          message={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Why do we use it?
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`}
          onCancel={() => setOpenPrivacy(false)}
          onOpen={openPrivacy}
        >
          <p>Cảm ơn bạn đăng ký tài khoản tại Trợ lý ô tô</p>
        </ModalContent>
      )}
    </>
  );
}
