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
import ThemeSwitcher from "../ThemeSwitcher";
import LoginButtons from "../LoginButtons";

type Props = {
  isOpen: boolean;
  closeMobileMenu: () => void; //React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileMenu({ isOpen, closeMobileMenu }: Props) {
  return (
    <DialogOverlay
      className="fixed inset-0 z-50  dark:bg-background bg-text bg-opacity-95"
      isOpen={isOpen}
      onDismiss={closeMobileMenu}
    >
      <DialogContent className="h-full flex items-start justify-end flex-col p-6">
        <button
          onClick={closeMobileMenu}
          className="absolute p-1  top-2 right-7"
        >
          <Close fontSize="large" />
          <span className="sr-only">Close mobile menu</span>
        </button>
        <nav className="absolute top-1/4 left-6 flex flex-col gap-6 w-3/4">
          <Link
            href="/"
            className=" flex gap-4 items-center  text-2xl animate-[wiggle_200ms_ease-out]"
          >
            <HomeOutlined fontSize="large" />
            Main
          </Link>
          <Link
            href="/"
            className="flex gap-4 items-center  text-2xl animate-[wiggle_400ms_ease-out]"
          >
            <Search fontSize="large" />
            Search
          </Link>
          <Link
            href="/"
            className="flex gap-4 items-center  text-2xl animate-[wiggle_600ms_ease-out]"
          >
            <PersonOutline fontSize="large" />
            Profile
          </Link>
          <Link
            href="/"
            className="flex gap-4 items-center  text-2xl animate-[wiggle_800ms_ease-out]"
          >
            <NotificationsOutlined fontSize="large" />
            Notifications
          </Link>
        </nav>
        <LoginButtons />
        <ThemeSwitcher />
      </DialogContent>
    </DialogOverlay>
  );
}

export default MobileMenu;
