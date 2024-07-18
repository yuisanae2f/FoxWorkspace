"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  KeyRound,
} from "lucide-react";

export default function LoginComponent() {
  const [LoginMenuSelected, SetLMS] = useState(false);

  return (
    <>
      <div className="mt-4 container mx-auto align-left max-w-screen-md">
        <div className="md:mt-48px hidden md:flex bgg rounded-xl p-7">
          <h1 id="chance" className="h3-style titlesX3">
            <span className=" text-center">🔐 관리하려면 로그인하세요.</span>
            <div className="space-y-4">
              <div className="grid grid-cols-1 items-center">
                <Button
                  className="mt-2 ml-1"
                  onClick={() => {
                    signIn("discord");
                  }}
                >
                  <KeyRound className="mr-2 h-4" />
                  <b>Discord로 로그인</b>
                </Button>
              </div>
            </div>
          </h1>
        </div>
      </div>
    </>
  );
}
