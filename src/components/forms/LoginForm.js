import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputAdornment } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";
import { Form, TextField, Button } from "../../styles/SignupStyle";
import { loginSchema } from "../../utils/validation";

const LoginForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register("userId")}
        error={Boolean(errors.userId)}
        label="아이디"
        variant="outlined"
        helperText={errors.userId?.message}
        fullWidth
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
        type="password"
        error={Boolean(errors.password)}
        label="비밀번호"
        variant="outlined"
        helperText={errors.password?.message}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock style={{ color: "#555", fontSize: 20 }} />
            </InputAdornment>
          ),
        }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        로그인
      </Button>
    </Form>
  );
};

export default LoginForm;
