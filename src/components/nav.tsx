"use client";

import { Button } from "./ui/button";
import { signOut, signIn, useSession } from "next-auth/react";

export default function Nav() {
  const { status, data: session } = useSession();

  return (
    <>
      <nav>
        <div className="container align-left mt-5 max-w-screen-md">
          <span className="titlesHead h2-style">
            <span className="text-orange-400">FOXWORKSPACE</span> Admin Dashboard
            {status === "authenticated" && (
              <Button
                variant="link"
                onClick={() => signOut({ callbackUrl: "/dashboard" })}
              >
                로그아웃
              </Button>
            )}
            {status === "unauthenticated" && (
              <Button variant="link" onClick={() => signIn("discord")}>
                로그인
              </Button>
            )}
          </span>
        </div>
      </nav>
    </>
  );
}
