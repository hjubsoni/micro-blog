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
      className="fixed inset-0 "
      isOpen={isOpen}
      onDismiss={closeMobileMenu}
    >
      <DialogContent className="h-full w-4/5 bg-background ">
        <button onClick={closeMobileMenu}>
          <Close className="text-text" />
          <span className="sr-only">Close mobile menu</span>
        </button>
        <nav className="flex flex-col">
          <Link href="/" className="flex gap-4 items-center">
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
