import React from "react";
import SignupForm from "../components/forms/SignUpForm";
import styled from "styled-components";

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f6f7;
`;

const SignupPage = () => {
  return (
    <SignupContainer>
      <SignupForm />
    </SignupContainer>
  );
};

export default SignupPage;
