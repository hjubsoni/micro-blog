"use client";
import { SkipNavContent } from "@reach/skip-nav";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;

  if (status === "loading") {
    return <p>Hang on there...</p>;
  }

  if (status === "authenticated") {
    return (
      <>
        <p className="text-text">Signed in as {userEmail}</p>
        <button onClick={() => signOut()}>Sign out</button>
        <img src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png" />
      </>
    );
  }

  return (
    <>
      <p className="text-text">Not signed in.</p>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
