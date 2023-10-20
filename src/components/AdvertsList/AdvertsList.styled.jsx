import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px;
  margin: 0px;
  column-gap: 29px;
  row-gap: 50px;
`;

export const LoadMoreBtn = styled.button`
  background-color: transparent;
  border-color: transparent;
  font-size: 16px;
  color: var(--button-color);
  text-decoration: underline;
  &:hover {
    color: var(--button-hover-color);
  }
`;
