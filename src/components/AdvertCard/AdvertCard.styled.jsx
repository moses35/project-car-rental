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
  position: relative;
  min-width: 274px;
  min-height: 268px;
  border-radius: 14px;
`;

export const Image = styled.img`
  width: 274px;

  height: 268px;
  border-radius: 14px;
  object-fit: cover;
`;

export const InfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Accent = styled.span`
  color: var(--button-color);
`;

export const Icon = styled.button`
  display: flex;
  justify-content: center;

  align-items: center;

  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
  border-color: transparent;
  width: 18px;
  height: 18px;
`;
