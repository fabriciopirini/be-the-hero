import styled from "styled-components";
import { buttonStyle } from "../../common/styles";
import { Link } from "react-router-dom";

export const ProfileContainer = styled.div`
  margin: 32px auto;
  max-width: 1180px;
  padding: 0 30px;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  font-size: 20px;
  margin-left: 24px;
`;

export const Img = styled.img`
  height: 64px;
`;

export const A = styled(Link)`
  ${buttonStyle}
  margin-left: auto;
  margin-top: 0;
  width: 260px;
`;

export const SmallButton = styled.button`
  background: transparent;
  border: 1px solid #dcdce6;
  border-radius: 4px;
  height: 60px;
  margin-left: 16px;
  transition: border-color 0.2s;
  width: 60px;

  &:hover {
    border-color: #999;
  }
`;

export const H1 = styled.h1`
  margin-bottom: 24px;
  margin-top: 80px;
`;

export const Ul = styled.ul`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
`;

export const Li = styled.li`
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  position: relative;

  p + strong {
    margin-top: 32px;
  }
`;

export const DeleteButton = styled.button`
  border: 0;
  cursor: pointer;
  position: absolute;
  right: 24px;
  top: 24px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Strong = styled.strong`
  color: #41414d;
  display: block;
  margin-bottom: 16px;
`;

export const P = styled.p`
  color: #737380;
  font-size: 16px;
  line-height: 21px;
`;
