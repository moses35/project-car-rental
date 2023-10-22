import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--button-text-color);
  width: 100px;
  height: 30px;
  background-color: var(--button-color);
  border-radius: 12px;
  text-decoration: none;
  &:hover {
    background-color: var(--button-hover-color);
  }
`;
