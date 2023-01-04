"use client";
import { MenuRounded } from "@mui/icons-material";
import Logo from "./components/Logo";

export default function Header() {
  return (
    <div>
      <header className="max-w-7xl">
        <Logo />
      </header>
    </div>
  );
}
