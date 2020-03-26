import styled from "styled-components";
import { FormInput } from "../../common/styles";

export const RegisterContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: #f0f0f5;
  border-radius: 8px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  padding: 96px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  max-width: 380px;
  width: 100%;
`;

export const H1 = styled.h1`
  font-size: 32px;
  margin: 64px 0 32px;
`;

export const P = styled.p`
  color: #737380;
  font-size: 18px;
  line-height: 32px;
`;

export const Form = styled.form`
  max-width: 450px;
  width: 100%;
`;

export const Input = styled(FormInput)`
  margin-top: 8px;
`;

export const InputGroup = styled.div`
  display: flex;

  input + input {
    margin-left: 8px;
  }
`;
