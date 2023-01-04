import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <DialogOverlay className="fixed inset-0 ">
      <DialogContent className="absolute inset-0 flex flex-col items-center justify-center"></DialogContent>
    </DialogOverlay>
  );
}

export default MobileMenu;
