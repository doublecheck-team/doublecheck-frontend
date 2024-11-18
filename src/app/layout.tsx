import type { Metadata } from "next";
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
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
