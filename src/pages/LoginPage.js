import React from "react";
import LoginForm from "../components/forms/LoginForm";
import { Container, SignupFormContainer, Title } from "../styles/SignupStyle";
import { login } from "../api/loginUser";

const LoginPage = () => {
  const handleLogin = async (data) => {
    try {
      const token = await login(data, "http://localhost:8080");
      localStorage.setItem("token", token);
      console.log("로그인이 성공적으로 완료되었습니다.");
    } catch (error) {
      console.error("로그인에 실패했습니다:", error);
    }
  };

  

  return (
    <Container>
      <SignupFormContainer>
        <Title>로그인</Title>
        <LoginForm onSubmit={handleLogin} />
      </SignupFormContainer>
    </Container>
  );
};



export default LoginPage;
