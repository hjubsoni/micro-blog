"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@mui/icons-material";

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
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <Moon />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <Sun />
        </button>
      )}
    </>
  );
}

export default ThemeSwitcher;
