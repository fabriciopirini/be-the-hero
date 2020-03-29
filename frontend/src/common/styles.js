import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

export const baseContainerStyle = css`
  height: 100vh;
  margin: 0 auto;
  max-width: 1120px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const baseInputStyle = css`
  border-radius: 8px;
  border: 1px solid #dcdce6;
  box-sizing: border-box;
  color: #333;
  font-size: 18px;
  height: 60px;
  margin-top: 8px;
  padding: 0 24px;
  width: 100%;
`;

export const baseTextAreaStyle = css`
  ${baseInputStyle}
  height: 140px;
  line-height: 24px;
  padding: 16px 24px;
  resize: none;
`;

export const baseContentStyle = css`
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  padding: 96px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const A = styled(Link)`
  align-items: center;
  color: #41414d;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  margin-top: 40px;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const buttonStyle = css`
  background: #e02041;
  border-radius: 8px;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  height: 60px;
  line-height: 60px;
  margin-top: 16px;
  text-align: center;
  text-decoration: none;
  transition: ease 0.2s;
  width: 100%;

  &:hover {
    filter: brightness(90%);
  }
`;

export const Button = styled.button`
  ${buttonStyle}
`;

export const SVG = styled(FiLogIn)`
  margin-right: 8px;
`;

export const Form = styled.form`
  max-width: 450px;
  width: 100%;
`;
