import React from "react";
import Link from "next/link";

function Logo() {
  return (
    <Link
      className="animate-[wiggle_500ms_ease-in-out] inline-block text-xl font-bold text-gray-900"
      href="/"
    >
      Micro Blog
    </Link>
  );
}

export default Logo;
