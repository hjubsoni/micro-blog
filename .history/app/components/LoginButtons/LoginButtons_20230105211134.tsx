import Link from "next/link";
import React from "react";

function LoginButtons() {
  return (
    <div className="flex gap-8">
      <button className="p-4 bg-primary rounded-lg">
        <Link href="/" className="text-2xl">
          Log in
        </Link>
      </button>
      <button>
        <Link href="/" className="text-2xl">
          Sign up
        </Link>
      </button>
    </div>
  );
}

export default LoginButtons;
