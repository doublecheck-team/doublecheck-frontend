'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from '@emotion/styled';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

import { MainButton } from '@/components/common/MainButton';
import { TextTitle } from '@/components/atoms/TextTitle';
import { CustomCheck } from '@/components/molecules/CustomCheck';
import { Color } from '@/styles/colors';

export default function AgreementPage() {
  const router = useRouter();
  const [isChecked, setChecked] = useState<boolean[]>([false, false, false]);

  const handleAllChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked, event.target.checked]);
  };

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, isChecked[1], isChecked[2]]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([isChecked[0], event.target.checked, isChecked[2]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([isChecked[0], isChecked[1], event.target.checked]);
  };

  const agreementList = [
    {title: "(필수) 서비스 이용약관", checked: isChecked[0], required: true, onChange: handleChange1, link: "/"},
    {title: "(필수) 개인정보 수집 및 이용 안내", checked: isChecked[1], required: true, onChange: handleChange2, link: "/"},
    {title: "(선택) 이벤트 및 마케팅 수신 동의", checked: isChecked[2], required: false, onChange: handleChange3, link: "/"},
  ]

  return (
    <S.Wrapper>
      <TextTitle>
        서비스 사용을 위한
        <br />
        약관에 동의해주세요
      </TextTitle>
      <S.Content>
        <div
          style={{
            paddingBottom: '10px',
            marginBottom: '42px',
            borderBottom: `1px solid ${Color.Gray01}`,
          }}>
          <CustomCheck
            text="전체 동의하기"
            checked={isChecked[0] && isChecked[1] && isChecked[2]}
            onChange={handleAllChecked}
          />
        </div>
        {agreementList?.map(item => (
          <div className="flex-box space-between">
            <CustomCheck
              text={item.title}
              required={item.required}
              checked={item.checked}
              onChange={item.onChange}
            />
            <NavigateNextOutlinedIcon sx={{color: Color.Gray04}} onClick={() => router.push(item.link)} />
          </div>
        ))}
      </S.Content>

      <S.ButtonWrapper>
        <MainButton
          text="다음"
          disabled={!(isChecked[0] && isChecked[1])}
          style={{ flex: 1 }}
        />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    padding: 42px 24px;
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,
  Content: styled.ul`
    margin: 42px 0;
  `,
  ButtonWrapper: styled.div`
    margin-top: auto;
  `,
}
