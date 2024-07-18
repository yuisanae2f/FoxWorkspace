"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <div className="mt-10 container mx-auto align-left max-w-screen-md">
        <h1 id="chance" className="h3-style titlesX3">
          🚫 오류가 발생했습니다.
        </h1>
        <div className="md:mt-48px hidden md:flex bgg rounded-xl p-7">
          <h1 className="h3-style">
            <span className="text-4xl">
              <Button onClick={() => reset()}>새로고침</Button>
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}
