"use client";
import React from "react";
import { MenuRounded } from "@mui/icons-material";
import Logo from "./components/Logo";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-7xl w-full px-8 ">
        <header className=" flex items-center h-14">
          <Logo />
          <button className="ml-auto" onClick={() => setIsOpen(true)}>
            <MenuRounded
              className="text-text"
              isOpen={isOpen}
              closeMobileMenu={() => setIsOpen(false)}
            />
            <span className="sr-only">Open mobile menu</span>
          </button>
        </header>
      </div>
    </div>
  );
}
