# Double Check - Frontend

## Skills

- 코어: Next.js, TypeScript
- 스타일: Emotion.js
- 버전 관리: Github
- 서버 통신: Axios, 
- 서버통신 상태 관리: Tanstack query
- 패키지: Yarn Berry


## Coding Convention

- 함수 선언

  ```bash
  # 화살표 함수
  const action = () => {}
  ```

- 함수 네이밍

  ```bash
  # 일반함수: 동사 + 명사 구조로 작성
  
  # 생성
  const createData = () => {}
  # 수정
  const updateData = () => {}
  # 삭제
  const removeData = () => {}
  # 초기화
  const setData = () => {}
  # 조회
  const getData = () => {}

  # 이벤트 함수: 앞에 handle 붙일것
  
  # 클릭
  const handleClick = () => {}
  # 변경
  const handleChange = () => {}
  ```

- import rule

  ```bash
  # package import시 상단, 프로젝트 내에서 import시 하단
  import React from 'react';
  import styled from '@emotion/styled';
    
  import { Logo } from '@/components/atoms/Logo';
  import { PaletteType } from '@/types/paletteType';
  ```

- type 정의 **주로** 사용

  ```bash
  # 앞에 대문자 T를 붙이고 시작
  type TExample = {
    id: number;
  }
  ```

- interface 정의 **상속이 필요한 타입의 경우** 사용

  ```bash
  # 앞에 대문자 I를 붙이고 시작
  interface IExample {
    id: number;
  }
  ```

## git commit message
- feat: 기능 생성, library 설치 등
- modify: 생성된 기능 수정, 함수이름 수정, 파일이름 수정 등
- add: 생성된 기능이나 컴포넌트에 기능 추가
- refactor: 기능은 변경되지 않고 구조 변경
- style: 스타일 수정
- docs: docs 문서 수정 readme.md 수정
- resource: png, svg, font 등 파일 추가
- chore: 코드 줄바꿈, 코드 위치 바꿈, paragraph(text) 수정 등 minor한 코드 수정
- remove: 제거된 파일, resource 등

## Git Branch Strategy

- main
    - 현재 출시중인 브랜치

- develop
    - 다음 출시 버전을 개발하는 브랜치

- feature
  - 기능 단위 브랜치
