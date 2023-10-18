import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  padding: 0px;
  margin: 0px;
  column-gap: 29px;
  row-gap: 50px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 426px;

  > button {
    border-color: transparent;
    background-color: var(--button-color);
    color: var(--button-text-color);
    border-radius: 12px;
    width: 274px;
    height: 44px;

    &:hover {
      background-color: var(--button-hover-color);
    }
  }
`;

export const ImageBlock = styled.div`
  min-width: 274px;
  min-height: 268px;
  border-radius: 14px;
`;

export const Image = styled.img`
  min-width: 274px;
  min-height: 268px;
  border-radius: 14px;
`;

export const InfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Accent = styled.span`
  color: var(--button-color);
`;
