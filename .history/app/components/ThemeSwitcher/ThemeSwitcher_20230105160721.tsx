"use client";
import React from "react";
import { useTheme } from "next-themes";
import { NightsStayOutlined, WbSunnyOutlined } from "@mui/icons-material";

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
          <WbSunnyOutlined fontSize="xl" />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <NightsStayOutlined />
        </button>
      )}
    </>
  );
}

export default ThemeSwitcher;
