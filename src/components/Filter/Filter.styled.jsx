import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  margin-bottom: 50px;
`;

export const SelectPrice = styled.select`
  width: 125px;
  margin-right: 18px;
  height: 48px;
  background-color: var(--form-bg);
  border-radius: 14px;
  border-color: transparent;
  font-size: 18px;
  font-weight: 500;
  padding: 14px 18px;
`;

export const SelectBrand = styled.select`
  width: 224px;
  margin-right: 18px;
  height: 48px;
  background-color: var(--form-bg);
  border-radius: 14px;
  border-color: transparent;
  font-size: 18px;
  font-weight: 500;
  padding: 14px 18px;
`;

export const LabelBlock = styled.div`
  display: flex;
  flex-direction: column;
  > label {
    font-size: 18px;
    color: var(--label-color);
  }
`;
export const InputFrom = styled.input`
  width: 128px;
  height: 42px;
  background-color: var(--form-bg);
  font-size: 18px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  padding-left: 24px;
  border-left-color: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-right-color: 1px solid rgba(138, 138, 137, 0.2);
`;

export const InputTo = styled.input`
  width: 128px;
  height: 42px;
  background-color: var(--form-bg);
  font-size: 18px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  border-color: transparent;
  padding-left: 24px;
`;

export const Button = styled.button`
  width: 136px;
  height: 48px;
  background-color: var(--button-color);
  font-size: 14px;
  border-radius: 12px;
  border-color: transparent;
  color: var(--button-text-color);
  margin-left: 18px;
  &:hover {
    background-color: var(--button-hover-color);
  }
`;
