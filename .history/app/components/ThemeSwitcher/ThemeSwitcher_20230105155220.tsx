"use client";
import React from "react";
import { useTheme } from "next-themes";

function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
    {theme === 'dark' ? <button onClick={() => setTheme("light")}>Light</button> : <button onClick={() => setTheme("dark")}>Dark</button>
    </>
  );
}

export default ThemeSwitcher;
