'use client';

import styled from '@emotion/styled';
import { MainButton } from '@/components/common/MainButton';
import { TextTitle } from '@/components/atoms/TextTitle';
import { useState } from 'react';
import { InputText } from '@/components/atoms/InputText';

export default function NicknamePage() {
  const [nickName, setNickName] = useState<string>('');

  return(
    <S.Wrapper>
      <TextTitle>닉네임을 설정해주세요</TextTitle>
      <S.Content>
        <InputText
          type="text"
          value={nickName}
          setState={setNickName}
          placeholder="한글, 영문, 숫자 포함 최대 6자"
        />
      </S.Content>
      <S.ButtonWrapper>
        <MainButton
          text="다음"
          disabled={!(nickName !== "")}
          style={{ flex: 1 }}
        />
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
      padding: 42px 24px;
      display: flex;
      flex-direction: column;
      height: 100vh;
  `,
  Content: styled.ul`
    margin: 24px 0;
  `,
  ButtonWrapper: styled.div`
    margin-top: auto;
  `,
}
