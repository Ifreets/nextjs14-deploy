export default function Validation(value: { email: string; password: string }) {
  let error = {};
  if (!value.email) {
    error.email = "Không được để trống trường này";
  } else if (value.email.length < 4 || value.email.length > 80) {
    error.email = "Họ và tên phải từ 4 đến 80 ký tự";
  }
  if (!value.password) {
    error.password = "Không được để trống trường này";
  } else if (value.password.length < 1 || value.password.length > 16) {
    error.password = "Mật khẩu phải từ 1 đến 16 ký tự";
  }
  return error;
}
