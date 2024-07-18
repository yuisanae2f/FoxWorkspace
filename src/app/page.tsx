"use client";

import Image from "next/image";
import Link from "next/link"
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import INDEX_TOP from "@/markdown/index.mdx";
// import LOADING from "@/markdown/loading.mdx";
import ComponentOnLoad from "@/components/ComponentOnLoad";

export default function Main() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <ComponentOnLoad />
    );

  return (
    <>
      <div className="container mx-auto align-left max-w-screen-md">
        <div className="mt-24 md:mt-48px hidden md:flex bgg rounded-xl p-7">
          <div>
            <INDEX_TOP />
            <Button>
              <Link href="/dashboard">대시보드로 이동하기</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto align-left">
        <div className="mt-24 md:hidden flex items-center">
          <div>
            <INDEX_TOP />
          </div>
        </div>
      </div>
    </>
  );
}
