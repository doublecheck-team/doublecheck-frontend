import React from 'react';
import type { Metadata } from "next";
import { Providers } from '@/app/provider';
import { pretendard } from '@/styles/fonts';

export const metadata: Metadata = {
  title: "Double Check",
  description: "Double Check",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
