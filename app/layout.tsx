import type { Metadata } from "next";
import { Georama, Roboto_Mono } from "next/font/google";
import "./globals.css";

const georama = Georama({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-georama", // הגדרת משתנה CSS לשימוש ב-Tailwind
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "arikxl",
  description: "Welcome to arikxl (Arik Alexandrov) showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${georama.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
