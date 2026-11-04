
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Aditya Mullick | Portfolio",
  description:
    "Portfolio of Aditya Mullick - Software Engineer, Python Developer and AI/ML Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <Navbar />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
