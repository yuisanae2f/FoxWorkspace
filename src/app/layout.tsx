import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./auth/provider";
import Nav from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FOXWORKSPACE",
  description: "C0ZIEST & AE2F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bgmain" suppressHydrationWarning>
      <AuthProvider>
        <body className={inter.className}>
          <Nav />
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
