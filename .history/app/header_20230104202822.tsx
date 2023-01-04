"use client";
import { MenuRounded } from "@mui/icons-material";
import Logo from "./components/Logo";

export default function Header() {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-7xl w-full px-8">
        <header className="h-14 flex items-center">
          <Logo />

          <button className="ml-auto">
            <MenuRounded />
            <span className="sr-only">Open mobile menu</span>
          </button>
        </header>
      </div>
    </div>
  );
}
