
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Priyanshu Riyal | Portfolio",
  description:
    "Portfolio of Priyanshu Riyal - Aspiring AI Engineer, Python Developer and Machine Learning Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("font-sans", geist.variable)}
      data-scroll-behavior="smooth"
    >
      <body>
        <Navbar />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
