import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "幾徳祭トークショー",
  description: "神奈川工科大学幾徳祭トークショーWEB",
  keywords: "神奈川工科大学 梶裕貴,神奈川工科大学　梶,幾徳祭　梶,幾徳祭　梶裕貴",
  verification: {
    google: 'yXGSb9Ebci52PR0QHYXnHhEYZqQOnyNCc9AF75gyYHs',
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
