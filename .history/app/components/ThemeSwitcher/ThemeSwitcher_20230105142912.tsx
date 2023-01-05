"use client";
import React from "react";
import { useTheme } from "next-themes";

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      toggle
    </button>
  );
}

export default ThemeSwitcher;
