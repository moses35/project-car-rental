import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 40px;
  background-color: var(--button-text-color);
  border-radius: 24px;
`;

export const ImgBlock = styled.div`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const AboutBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  gap: 8px;
  margin-bottom: 14px;
`;

export const AccessoriesBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 461px;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Img = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  object-fit: cover;
`;

export const Icon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border-color: transparent;
`;

export const Descreption = styled.p`
  max-width: 461px;
  font-size: 14px;
  margin: 0;
  margin-bottom: 24px;
`;

export const Accessories = styled.p`
  margin: 0;
`;
export const RentalInfo = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px 14px;
    height: 32px;
    background-color: var(--rental-bg);
    border-radius: 35px;
  }
`;

export const RentalBtn = styled.button`
  margin: 0;
  width: 168px;
  height: 44px;
  color: var(--button-text-color);
  background-color: var(--button-color);
  border-radius: 12px;
  border-color: transparent;
  &:hover {
    background-color: var(--button-hover-color);
  }
`;

export const Accent = styled.span`
  margin: 0;
  margin-left: 1px;
  color: var(--button-color);
`;
