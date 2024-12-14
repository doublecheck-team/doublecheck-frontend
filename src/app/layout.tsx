import React from 'react';
import type { Metadata } from "next";

import '@/styles/globals.css';
import '@/styles/reset.css';
import { Providers } from '@/app/provider';

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
    <html lang="ko">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
