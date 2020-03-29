import styled from "styled-components";
import { baseContainerStyle, baseInputStyle } from "../../common/styles";

export const LogonContainer = styled.div`
  ${baseContainerStyle}
`;

export const Section = styled.section`
  margin-right: 30px;
  max-width: 350px;
  width: 100%;
`;

export const Form = styled.form`
  margin-top: 100px;
`;

export const H1 = styled.h1`
  font-size: 32px;
  margin-bottom: 32px;
`;

export const FormInput = styled.input`
  ${baseInputStyle}
`;
