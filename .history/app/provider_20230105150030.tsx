"use client";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

export default function App() {
  return (
    <SessionProvider>
      <ThemeProvider></ThemeProvider>
    </SessionProvider>
  );
}
