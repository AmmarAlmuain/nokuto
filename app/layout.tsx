import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
