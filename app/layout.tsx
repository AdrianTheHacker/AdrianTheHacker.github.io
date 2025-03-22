import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adrian Tarantino",
  description: "Adrian Tarantino's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='sunset'>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="description" content="First Year Electrical Engineering Student at The University of Waterloo" />
        <meta name="keywords" content="Personal Website, Portfolio Website, Adrian Tarantino, AdrianTheHacker, Adrian The Hacker, NextJS, Javascript" />
        <meta name="author" content="Adrian Tarantino" />
        <title>Adrian Tarantino - Personal Website</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
