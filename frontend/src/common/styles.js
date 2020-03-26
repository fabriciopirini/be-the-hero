import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

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
    opacity: 8px;
  }
`;

export const Button = styled.div`
  background: #e02041;
  border: 0;
  border-radius: 8px;
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
  transition: filter 0.2s;
  width: 100%;

  &:hover {
    filter: brightness(90%);
  }
`;

export const FormInput = styled.input`
  border: 1px solid #dcdce6;
  border-radius: 8px;
  box-sizing: border-box;
  color: #333;
  height: 60px;
  width: 100%;
  padding: 0 24px;
`;

export const SVG = styled(FiLogIn)`
  margin-right: 8px;
`;
