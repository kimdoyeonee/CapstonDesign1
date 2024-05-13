import * as yup from "yup";

export const loginSchema = yup.object().shape({
  userId: yup.string().required("아이디가 필요합니다."),
  password: yup.string().required("비밀번호가 필요합니다."),
});

export const schema = yup.object().shape({
  name: yup.string().required("이름이 필요합니다."),
  userId: yup.string().required("아이디가 필요합니다."),
  password: yup
    .string()
    .min(8, "비밀번호는 8자 이상이어야 합니다.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
      "비밀번호는 영문,숫자,특수문자를 최소 1개 이상 포함해야 합니다."
    )
    .required("비밀번호가 필요합니다."),
  checkPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호 확인이 필요합니다."),
  phoneNumber: yup.string().required("휴대폰 번호가 필요합니다."),
});
