import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@/styles/fonts';
import { Color } from '@/styles/colors';

type TProps = {
  type: 'text' | 'password'| 'checkbox'
  style?: React.CSSProperties;
  value: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

export const InputText = ({
  type,
  style,
  value,
  setState,
  placeholder
}: TProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setState) {
      setState(e.target.value);
    }
  };

  return (
    <S.Input
      type={type}
      style={style}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  )
}

const S = {
  Input: styled.input`
    ${Typography.B2Medium};
    width: 100%;
    border: 1px solid ${Color.Gray03};
    border-radius: 12px;
    padding: 12px;
    &:focus{
      border: 1px solid ${Color.Primary};
    }
  `
}
