import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Tayyab | MERN Stack Developer",
  description: "MERN Stack Developer with 2.5 years of experience in building web applications using MongoDB, Express.js, React.js, and Node.js. Expert in Web3 technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-full bg-[#0a0a0a] text-white antialiased">{children}</body>
    </html>
  );
}
