"use client";
import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { Close, PersonOutline } from "@mui/icons-material";
import Link from "next/link";

type Props = {
  isOpen: boolean;
  closeMobileMenu: () => void; //React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileMenu({ isOpen, closeMobileMenu }: Props) {
  return (
    <DialogOverlay
      className="fixed inset-0 z-50  bg-background bg-opacity-95"
      isOpen={isOpen}
      onDismiss={closeMobileMenu}
    >
      <DialogContent className="absolute inset-0 flex flex-col items-center justify-center ">
        <button onClick={closeMobileMenu}>
          <Close className="text-text" />
          <span className="sr-only">Close mobile menu</span>
        </button>
        <nav className="flex flex-col">
          <Link href="/">
            <PersonOutline />
            hello
          </Link>
          <Link href="/">hello</Link>
          <Link href="/">hello</Link>
          <Link href="/">hello</Link>
        </nav>
      </DialogContent>
    </DialogOverlay>
  );
}

export default MobileMenu;
