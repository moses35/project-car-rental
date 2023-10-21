import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 1184px;
  margin: 0px;
  margin-bottom: 100px;
  padding: 0px;

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

export const ListBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
