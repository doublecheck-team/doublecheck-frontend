'use client';

import Image from 'next/image';
import styled from '@emotion/styled';

import KakaoButton from '@/assets/images/kakao_button.png';
import LogoWhite from '@/assets/images/logo_white.png';
import { Color } from '@/styles/colors';
import { Typography } from '@/styles/fonts';

export default function loginPage() {
  return (
    <S.Wrapper>
      <S.LogoWrap>
        <Image src={LogoWhite} alt="logo-white" />
        <h1>더블체크</h1>
      </S.LogoWrap>
      <S.LoginBtn>
        <p>
          소지품 리스트를 등록하고
          <br />
          외출 전에 까먹지 말고 챙겨가세요
        </p>
        <button>
          <Image src={KakaoButton} alt="kakao-button" />
        </button>
      </S.LoginBtn>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    background-color: ${Color.Primary};
    width: 100%;
    height: 100vh;
    position: relative;
  `,
  LogoWrap: styled.div`
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translateX(-50%);
    img {
      margin-left: 20px;
      width: 100px;
    }
    h1 {
      ${Typography.H3Regular};
      color: ${Color.White};
      font-family: GmarketSans, 'sans-serif';
      text-align: center;
      margin-top: 14px;
    }
  `,
  LoginBtn: styled.div`
    position: absolute;
    left: 50%;
    bottom: 10%;
    transform: translateX(-50%);
    width: 100%;
    padding: 24px;
    margin: 0 auto;
    text-align: center;
    p{
      ${Typography.B4Regular};
      color: ${Color.Gray01};
      text-align: center;
    }
    button {
      margin: 24px auto 0;
      text-align: center;
    }
  `,
};
