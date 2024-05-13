import styled from "styled-components";
import {
  Button as MuiButton,
  TextField as MuiTextField,
} from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const SignupFormContainer = styled.div`
  width: 400px;
  padding: 30px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TextField = styled(MuiTextField)`
  && {
    margin-bottom: 20px;
  }
`;

export const Button = styled(MuiButton)`
  && {
    margin-top: 20px;
  }
`;

export const InputField = styled.input`
margin-bottom: 20px;
`;
