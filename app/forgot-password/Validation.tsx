export default function Validation(value: {
  username: string;
  verifyCode: string;
}) {
  let error = {};
  if (!value.username) {
    error.username = "Không được để trống trường này";
  } else if (value.username.length < 4 || value.username.length > 80) {
    error.username = "Email hoặc số điện thoại không đúng định dạng";
  }
  if (!value.verifyCode) {
    error.verifyCode = "Không được để trống trường này";
  }

  return error;
}
