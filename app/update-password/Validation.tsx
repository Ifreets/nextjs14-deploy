export default function Validation(value: {
  password: string;
  confirmPassword: string;
}) {
  let error = {} as any;
  if (!value.password) {
    error.password = "Không được để trống trường này";
  } else if (value.password.length < 1 || value.password.length > 16) {
    error.password = "Mật khẩu phải từ 1 đến 16 ký tự";
  }
  if (!value.confirmPassword) {
    error.confirmPassword = "Không được để trống trường này";
  } else if (
    value.confirmPassword.length < 1 ||
    value.confirmPassword.length > 16
  ) {
    error.confirmPassword = "Mật khẩu phải từ 1 đến 16 ký tự";
  }
  if (
    !!value.password &&
    !!value.confirmPassword &&
    value.password !== value.confirmPassword
  ) {
    error.confirmPassword = "Mật khẩu không trùng khớp";
  }
  return error;
}
