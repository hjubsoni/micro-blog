"use client";
import React from "react";
import { useTheme } from "next-themes";
import { WbSunnyOutlined, NightsStayOutlined } from "@mui/icons-material";

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
    
    return <h1>hello</h1>
  )
}

export default ThemeSwitcher;
