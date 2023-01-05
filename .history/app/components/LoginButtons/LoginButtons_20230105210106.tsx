import Link from "next/link";
import React from "react";

function LoginButtons() {
  return (
    <div className="flex gap-4">
      <button>
        <Link href="/">Log in</Link>
      </button>
      <button>
        <Link href="/">Sign up</Link>
      </button>
    </div>
  );
}

export default LoginButtons;
