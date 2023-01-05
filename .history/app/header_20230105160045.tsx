"use client";
import React from "react";
import { MenuRounded } from "@mui/icons-material";
import Logo from "./components/Logo";
import MobileMenu from "./components/MobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-7xl w-full px-8 ">
        <header className=" flex items-center h-14">
          <Logo />
          {isOpen === false ? (
            <button
              className="ml-auto p-1 -mr-1"
              onClick={() => setIsOpen(true)}
            >
              <MenuRounded />
              <span className="sr-only">Open mobile menu</span>
            </button>
          ) : null}
          <MobileMenu
            isOpen={isOpen}
            closeMobileMenu={() => setIsOpen(false)}
          />
        </header>
      </div>
    </div>
  );
}
