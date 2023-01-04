"use client";
import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";

type Props = {
  isOpen: boolean;
  closeMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileMenu({ isOpen, closeMobileMenu }: Props) {
  return (
    <DialogOverlay className="fixed inset-0" isOpen={isOpen}>
      <DialogContent className="absolute inset-0 flex flex-col items-center justify-center"></DialogContent>
      <button>
        <CloseIcon className="text-text" />
        <span className="sr-only">Close mobile menu</span>
      </button>
    </DialogOverlay>
  );
}

export default MobileMenu;
