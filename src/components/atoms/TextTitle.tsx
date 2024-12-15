import React from 'react';
import styled from '@emotion/styled';

import { Typography } from '@/styles/fonts';

export const TextTitle = ({
  children,
}: {children: React.ReactNode;}) => {
  return <S.P>{children}</S.P>
}

const S = {
  P: styled.p`
    ${Typography.H4Bold}
  `
}
