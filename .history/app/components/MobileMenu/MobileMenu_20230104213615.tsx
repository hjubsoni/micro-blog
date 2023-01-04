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
      className="fixed inset-0 z-50 flex items-center justify-center bg-background bg-opacity-50"
      isOpen={isOpen}
      onDismiss={closeMobileMenu}
    >
      <DialogContent className="absolute inset-0 flex flex-col items-center justify-center bg-background ">
        <button onClick={closeMobileMenu}>
          <Close className="text-text" />
          <span className="sr-only">Close mobile menu</span>
        </button>
        <h1 className="text-text">hello</h1>
      </DialogContent>
    </DialogOverlay>
  );
}

export default MobileMenu;
