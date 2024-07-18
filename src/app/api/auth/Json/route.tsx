"use server";

import { cMember } from "../../../../../public/include/Member/cMember";
import { eMember_Privilege } from "../../../../../public/include/Member/eMember_Privilege";
import { NextRequest, NextResponse } from "next/server";
const API = "THY_API_HERE";

async function mem(request: Request) {
  try {
    const resJSON = await fetch(API + "/a.json");
    const EXCEPTION = {"holidayState": []};
    const dataJSON = resJSON ? await resJSON.json() : EXCEPTION;
  
    const resDISCORD = await fetch("https://resaviors.vercel.app/api/auth/token", {
      "headers": {
        "cookie": (request.headers.get("Cookie") ??  "")
      },
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
      "method": "GET"
    });

    const jsonDISCORD = resDISCORD ? await resDISCORD.json() : JSON.parse(`{"sub": 0}`);
    return new cMember(jsonDISCORD["sub"], dataJSON["holidayState"]);
  } catch(e) {
    return new cMember("0", []);
  }
}

export async function GET(request: Request) {
  const resJSON = await fetch(API + "/a.json");
  const EXCEPTION = {"holidayState": []};
  const dataJSON = resJSON ? (await resJSON.json()) : EXCEPTION;

  const resDISCORD = await fetch("https://resaviors.vercel.app/api/auth/token", {
    "headers": {
      "cookie": (request.headers.get("Cookie") ??  "")
    },
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET"
  });
  const jsonDISCORD = resDISCORD ? (await resDISCORD.json()) : { "sub": "0" };
  
  try {
    const mem = new cMember(jsonDISCORD["sub"], dataJSON["holidayState"]);
    return NextResponse.json((mem.groupID.getPrivilege().get(eMember_Privilege.ViewHidden) ? dataJSON : EXCEPTION));
  } catch(e) {
    return NextResponse.json({error: e}, {status: 500});
  }
}

export async function POST(request: NextRequest) {
  try {
    const data : cMember = await mem(request);
    if(data.groupID.getPrivilege().get(eMember_Privilege.Edit)) {
      const Fetched = await fetch(API + "/a.json", {
        method: "POST",
        body: JSON.stringify((await request.json()))
      });
      return await Fetched.json();
    }
  
    const JSONED = { "holidayState": data._LIST };
    return NextResponse.json(JSONED, {status: 200});
  } catch(e) {
    return NextResponse.json({error: "Nope"}, {status: 500});
  }
}