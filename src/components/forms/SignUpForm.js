import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../utils/validation";
import {
  Container,
  SignupFormContainer,
  Title,
  Form,
  TextField,
  Button,
} from "../../styles/SignupStyle";
import { InputAdornment } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";
import Phone from "@material-ui/icons/Phone";
import { signup } from "../../api/signupUser";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await signup(data);
      console.log(response);
    } catch (error) {
      console.error("회원가입에 실패했습니다:", error);
    }
  };

  return (
    <Container>
      <SignupFormContainer>
        <Title>회원가입</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("name")}
            error={Boolean(errors.name)}
            label="이름"
            variant="outlined"
            helperText={errors.name?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle style={{ color: "#555", fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            {...register("userId")}
            error={Boolean(errors.userId)}
            label="아이디"
            variant="outlined"
            helperText={errors.userId?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle style={{ color: "#555", fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            {...register("password")}
            error={Boolean(errors.password)}
            label="비밀번호"
            type="password"
            variant="outlined"
            helperText={errors.password?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock style={{ color: "#555", fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            {...register("checkPassword")}
            error={Boolean(errors.checkPassword)}
            label="비밀번호 확인"
            type="password"
            variant="outlined"
            helperText={errors.checkPassword?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock style={{ color: "#555", fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            {...register("phoneNumber")}
            error={Boolean(errors.phoneNumber)}
            label="휴대폰 번호"
            variant="outlined"
            helperText={errors.phoneNumber?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone style={{ color: "#555", fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" variant="contained" color="primary">
            회원가입
          </Button>
        </Form>
      </SignupFormContainer>
    </Container>
  );
};

export default SignupForm;
