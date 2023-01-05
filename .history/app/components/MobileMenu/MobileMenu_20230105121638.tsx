"use client";
import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import {
  Close,
  PersonOutline,
  Search,
  HomeOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";
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
      <DialogContent className="h-full flex flex-col  justify-center ">
        <button
          onClick={closeMobileMenu}
          className="absolute p-1  top-3 right-7 "
        >
          <Close className="text-text" />
          <span className="sr-only">Close mobile menu</span>
        </button>
        <nav className="flex flex-col gap-6">
          <Link
            href="/"
            className=" flex gap-4 items-center text-text text-2xl animate-[wiggle_300ms_ease-in-out]"
          >
            <HomeOutlined />
            Main
          </Link>
          <Link
            href="/"
            className="flex gap-4 items-center text-text text-2xl animate-[wiggle_500ms_ease-in-out]"
          >
            <Search />
            Search
          </Link>
          <Link
            href="/"
            className="flex gap-4 items-center text-text text-2xl animate-[wiggle_700ms_ease-in-out]"
          >
            <PersonOutline />
            Profile
          </Link>
          <Link
            href="/"
            className="flex gap-4 items-center text-text text-2xl animate-[wiggle_900ms_ease-in-out]"
          >
            <NotificationsOutlined />
            Notifications
          </Link>
        </nav>
      </DialogContent>
    </DialogOverlay>
  );
}

export default MobileMenu;
