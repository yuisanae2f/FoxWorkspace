import router from "next/router";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { rMember_raw_el } from "../../public/include/Member/rMember_raw_el";
import { cMember } from "../../public/include/Member/cMember";
import React from "react";

function ButtonSel(user: rMember_raw_el) : JSX.Element {
  const handleReload = () => {
    setTimeout(function () {
      window.location.reload();
    }, 400);
  };

  const User = new cMember(user.identifier, [user]);

  return (
    <Button className={"mt-2 mr-1 hover:" + User.getGroupColour()} onClick={handleReload}>
    <Link href={"/dashboard?id=" + User.identifier}>
      <b>{User.getName(3, 3, "")}</b>
    </Link>
  </Button>
  );
}

export default function UserSelect(field: rMember_raw_el[]) {
  const router = useRouter();
  let arr :JSX.Element[] = [];

  field.forEach(el => {
    arr.push(ButtonSel(el));
  });

  return <>
    <div className="space-y-4">
      <div className="grid grid-cols-12 items-center">
        {React.Children.map(arr, (el) => el)}
      </div>
    </div>
  </>;
}
