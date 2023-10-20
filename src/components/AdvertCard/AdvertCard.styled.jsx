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
    font-size: 14px;
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
  margin-top: 14px;
  margin-bottom: 8px;
`;
export const Accent = styled.span`
  color: var(--button-color);
  margin: 0;
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

export const AboutCar = styled.p`
  margin: 0;
  margin-bottom: auto;
  > span {
    border-right: 1px solid var(--line-color);
    padding: 0 6px;
    font-size: 12px;

    color: var(--about-text);
    &:last-child {
      border-right: none;
      padding-right: 0;
    }
    &:first-of-type {
      padding-left: 0;
    }

    &:not(:first-of-type) span {
      margin-left: 0;
    }
  }
`;

export const CarBrand = styled.p`
  margin: 0;
  color: var(--car--name--text);
  font-size: 16px;
`;

export const CarPrice = styled.span`
  color: var(--car--name--text);
  font-size: 16px;
`;
