import React from "react";
import Link from "next/link";

function Logo() {
  return (
    <Link className="animate-[wiggle_500ms_ease-in-out]" href="/">
      hello
    </Link>
  );
}

export default Logo;
