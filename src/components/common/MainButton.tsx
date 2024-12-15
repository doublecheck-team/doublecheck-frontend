import React from 'react';
import styled from '@emotion/styled';
import { Color } from '@/styles/colors';
import { Typography } from '@/styles/fonts';

type TProps = {
  text: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
}

export const MainButton = ({
  text,
  style,
  onClick,
  disabled
}: TProps) => {
  return (
    <S.Button style={style} onClick={onClick} disabled={disabled}>
      {text}
    </S.Button>
  )
}

const S = {
  Button: styled.button`
    ${Typography.B3Regular};
    background-color: ${Color.Primary};
    color: ${Color.White};
    width: 100%;
    border-radius: 12px;
    padding: 12px 0;
    &:disabled{
      background-color: ${Color.Gray03};
    }
  `
}
