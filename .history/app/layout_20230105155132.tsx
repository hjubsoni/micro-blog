"use client";
import { SkipNavLink } from "@reach/skip-nav";
import "../styles/globals.css";
import Header from "./header";
import { Space_Grotesk } from "@next/font/google";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${spaceGrotesk.variable} font-sans`}>
      <body className="bg-background ">
        <SessionProvider>
          <ThemeProvider attribute="class">
            <SkipNavLink className="absolute top-2 left-2 py-4 px-6 invisible h-0.5 w-0.5" />
            <Header />
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
