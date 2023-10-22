import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Block = styled.div`
  display: flex;
  max-width: 1300px;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-top: 10%;
`;

export const Img = styled.img`
  max-width: 1440px;
  border-radius: 50px;
  width: 700px;
  height: auto;
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const Button = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--button-text-color);
  width: 150px;
  height: 50px;
  background-color: var(--button-color);
  border-radius: 12px;
  border-color: transparent;
  text-decoration: none;
  &:hover {
    background-color: var(--button-hover-color);
  }
`;
