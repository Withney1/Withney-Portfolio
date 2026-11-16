import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Winner Bukola — Frontend Developer",
  description: "Frontend developer building clean, modern web experiences with React, Next.js, and TypeScript.",
  keywords: ["frontend developer", "react", "nextjs", "typescript", "web developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ backgroundColor: "#0D0D0D", color: "#E8E8E8", fontFamily: "Inter, sans-serif" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
