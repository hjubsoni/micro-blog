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
      <DialogContent className="h-full flex flex-col items-center justify-center ">
        <button
          onClick={closeMobileMenu}
          className="absolute p-4  top-0 right-4"
        >
          <Close className="text-text" />
          <span className="sr-only">Close mobile menu</span>
        </button>
        <nav className="flex flex-col">
          <Link
            href="/"
            className="flex gap-4 items-center text-text text-2xl animate-[wiggle_300ms_ease-in-out]"
          >
            <PersonOutline />
            hello
          </Link>
          <Link
            href="/"
            className="flex gap-4 items-center text-text text-2xl animate-[wiggle_500ms_ease-in-out]"
          >
            <PersonOutline />
            hello
          </Link>
          <Link
            href="/"
            className="flex gap-4 items-center text-text text-2xl animate-[wiggle_800ms_ease-in-out]"
          >
            <PersonOutline />
            hello
          </Link>
          <Link
            href="/"
            className="flex gap-4 items-center text-text text-2xl animate-[wiggle_1s_ease-in-out]"
          >
            <PersonOutline />
            hello
          </Link>
        </nav>
        // TODO: next auth theme switcher hello
      </DialogContent>
    </DialogOverlay>
  );
}

export default MobileMenu;
