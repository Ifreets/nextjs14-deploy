export default function Validation(value: {
  username: string;
  phone: string;
  verifyCode: string;
  password: string;
}) {
  let error = {} as any;
  if (!value.username) {
    error.username = "Không được để trống trường này";
  } else if (value.username.length < 4 || value.username.length > 80) {
    error.username = "Họ và tên phải từ 4 đến 80 ký tự";
  }
  if (!value.phone) {
    error.phone = "Không được để trống trường này";
  } else if (
    !/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/.test(value.phone)
  ) {
    error.phone = "Sai định dạng số điện thoại";
  }
  if (!value.password) {
    error.password = "Không được để trống trường này";
  } else if (value.password.length < 1 || value.password.length > 16) {
    error.password = "Mật khẩu phải từ 1 đến 16 ký tự";
  }
  return error;
}
