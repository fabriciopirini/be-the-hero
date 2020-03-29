import styled from "styled-components";
import {
  baseContainerStyle,
  baseContentStyle,
  baseTextAreaStyle,
  baseInputStyle
} from "../../common/styles";

export const NewIncidentContainer = styled.div`
  ${baseContainerStyle}
  justify-content: center;
`;

export const Content = styled.div`
  ${baseContentStyle}
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
`;

export const TextArea = styled.textarea`
  ${baseTextAreaStyle}
`;
