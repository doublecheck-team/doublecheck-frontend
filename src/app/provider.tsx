'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import styled from '@emotion/styled';

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: ReactNode }) => {

  return (
    <QueryClientProvider client={queryClient}>
      <S.Wrapper>
        {children}
      </S.Wrapper>
    </QueryClientProvider>
  );
}

const S = {
  Wrapper: styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    @media (min-width: 768px) {
      width: 375px;
    }
  `
}
