import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LucidLog",
  description: "Created by Fatima Mahinay, and Leandro Tupas in completion for Fullstack Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-background">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
