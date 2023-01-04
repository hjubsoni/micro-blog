"use client";
import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { Close } from "@mui/icons-material";

type Props = {
  isOpen: boolean;
  closeMobileMenu: () => void; //React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileMenu({ isOpen, closeMobileMenu }: Props) {
  return (
    <DialogOverlay
      className="fixed inset-0 opacity-75 bg-background "
      isOpen={isOpen}
      onDismiss={closeMobileMenu}
    >
      <DialogContent className="absolute inset-0 flex flex-col items-center justify-center"></DialogContent>
      <button onClick={closeMobileMenu}>
        <Close className="text-text" />
        <span className="sr-only">Close mobile menu</span>
      </button>
    </DialogOverlay>
  );
}

export default MobileMenu;
