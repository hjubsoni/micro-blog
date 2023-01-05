import Link from "next/link";
import React from "react";

function LoginButtons() {
  return (
    <div className="flex gap-8">
      <button className="py-2 px-6 bg-primary rounded-3xl">
        <Link href="/" className="text-2xl">
          Log in
        </Link>
      </button>
      <button className="py-2 px-4 border-black dark:border-white border-2 rounded-3xl">
        <Link href="/" className="text-2xl">
          Sign up
        </Link>
      </button>
    </div>
  );
}

export default LoginButtons;
