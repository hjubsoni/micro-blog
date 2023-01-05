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
    
    {
        theme === 'dark' ? <button onClick={() => setTheme('light')>
        <WbSunnyOutlined className="text-text" />
    </button>
    :
    <button onClick={() => setTheme('dark')}>
        <NightsStayOutlined className="text-text" />
    </button>
  }
  )
}

export default ThemeSwitcher;
