import localFont from 'next/font/local';

export const pretendard = localFont({
  src: [
    {
      path: '../assets/fonts/Poppins-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
});

export const FontWeight = {
  Bold: 700,
  Medium: 500,
  Regular: 400,
  Light: 300
};

export const Typography = {
  H1Bold: `
    font-size: 27px;
    line-height: 34px;
    font-weight: ${FontWeight.Bold};
  `,
  H1Medium: `
    font-size: 27px;
    line-height: 34px;
    font-weight: ${FontWeight.Medium};
  `,
  H1Regular: `
    font-size: 27px;
    line-height: 34px;
    font-weight: ${FontWeight.Regular};
  `,
  H2Bold: `
    font-size: 23px;
    line-height: 30px;
    font-weight: ${FontWeight.Bold};
  `,
  H2Medium: `
    font-size: 23px;
    line-height: 30px;
    font-weight: ${FontWeight.Medium};
  `,
  H2Regular: `
    font-size: 23px;
    line-height: 30px;
    font-weight: ${FontWeight.Regular};
  `,
  H3Bold: `
    font-size: 21px;
    line-height: 28px;
    font-weight: ${FontWeight.Bold};
  `,
  H3Medium: `
    font-size: 21px;
    line-height: 28px;
    font-weight: ${FontWeight.Medium};
  `,
  H3Regular: `
    font-size: 21px;
    line-height: 28px;
    font-weight: ${FontWeight.Regular};
  `,
  H4Bold: `
    font-size: 19px;
    line-height: 26px;
    font-weight: ${FontWeight.Bold};
  `,
  H4Medium: `
    font-size: 19px;
    line-height: 26px;
    font-weight: ${FontWeight.Medium};
  `,
  H4Regular: `
    font-size: 19px;
    line-height: 26px;
    font-weight: ${FontWeight.Regular};
  `,

  B1Bold: `
    font-size: 17px;
    line-height: 24px;
    font-weight: ${FontWeight.Bold};
  `,
  B1Medium: `
    font-size: 17px;
    line-height: 24px;
    font-weight: ${FontWeight.Medium};
  `,
  B1Regular: `
    font-size: 17px;
    line-height: 24px;
    font-weight: ${FontWeight.Regular};
  `,
  B2Bold: `
    font-size: 16px;
    line-height: 22px;
    font-weight: ${FontWeight.Bold};
  `,
  B2Medium: `
    font-size: 16px;
    line-height: 22px;
    font-weight: ${FontWeight.Medium};
  `,
  B2Regular: `
    font-size: 16px;
    line-height: 22px;
    font-weight: ${FontWeight.Regular};
  `,
  B3Bold: `
    font-size: 13px;
    line-height: 20px;
    font-weight: ${FontWeight.Bold};
  `,
  B3Medium: `
    font-size: 13px;
    line-height: 20px;
    font-weight: ${FontWeight.Medium};
  `,
  B3Regular: `
    font-size: 13px;
    line-height: 20px;
    font-weight: ${FontWeight.Regular};
  `,
  B4Bold: `
    font-size: 12px;
    line-height: 19px;
    font-weight: ${FontWeight.Bold};
  `,
  B4Medium: `
    font-size: 12px;
    line-height: 19px;
    font-weight: ${FontWeight.Medium};
  `,
  B4Regular: `
    font-size: 12px;
    line-height: 19px;
    font-weight: ${FontWeight.Regular};
  `,

  Navigation: `
    font-size: 15px;
    line-height: 24px;
    font-weight: ${FontWeight.Medium};
  `,
}
