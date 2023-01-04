"use client";
import { MenuRounded } from "@mui/icons-material";
import Logo from "./components/Logo";

export default function Header() {
  return (
    <div>
      <header className="h-16">
        <Logo />
      </header>
    </div>
  );
}
