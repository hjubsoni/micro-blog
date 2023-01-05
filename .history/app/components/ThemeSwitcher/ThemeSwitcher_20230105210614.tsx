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
        <button className="flex " onClick={() => setTheme("light")}>
          <WbSunnyOutlined fontSize="large" />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <NightsStayOutlined fontSize="large" />
        </button>
      )}
    </>
  );
}

export default ThemeSwitcher;
