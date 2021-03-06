import styled from "styled-components";

import {
  baseContainerStyle,
  baseContentStyle,
  baseInputStyle
} from "../../common/styles";

export const RegisterContainer = styled.div`
  ${baseContainerStyle}
  justify-content: center;
`;

export const Content = styled.div`
  ${baseContentStyle}
  border-radius: 8px;
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

export const Input = styled.input`
  ${baseInputStyle}
  margin-top: 8px;
`;

export const InputGroup = styled.div`
  display: flex;

  input + input {
    margin-left: 8px;
  }
`;
