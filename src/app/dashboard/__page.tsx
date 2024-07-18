"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import { useState, useEffect } from "react";
import { NextPage } from "next";
import { cMember } from "../../../public/include/Member/cMember";
import { rMember_raw } from "../../../public/include/Member/rMember_raw";
import { rMember_raw_el } from "../../../public/include/Member/rMember_raw_el";
import { cMember_Privilege } from "../../../public/include/Member/cMember_Privilege";
import { eMember_Privilege } from "../../../public/include/Member/eMember_Privilege";
import { cUndefined } from "../../../public/include/builtin/cUndefined";
import ComponentOnLoad from "@/components/ComponentOnLoad";
import UserSelect from "@/components/userselect";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@radix-ui/react-checkbox";
import LoginComponent from "@/components/auth";
import { cMember_rawBuilder } from "../../../public/include/Member/cMember_rawBuilder";

const ajson: string = "https://resaviors.vercel.app/api/auth/Json";

export function Field(): rMember_raw_el[] {
  const [field, setData] = useState<rMember_raw_el[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(ajson);

      const Json = await response.json();
      const data: rMember_raw = Json;
      setData(data["holidayState"]);
    };
    fetchData();
  }, []);

  return field ?? [];
}
export function SelfID(): string {
  const [selfID, setData] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      const res = await fetch("./api/auth/token");

      if (!res) {
        setData("0");
        return;
      }

      const data = await res.json();
      setData(data ? data["sub"] : "0");
    })();
  }, []);

  return selfID ?? "0";
}

const Dashboard: NextPage = () => {
  const { status, data: session } = useSession();
  const ID: string = useSearchParams().get("id") ?? "0";

  const field = Field();
  const selfID = SelfID();

  const [arg_ticketCount, arg_setTicketCount] = useState("");
  const [arg_holidayStart, arg_setHolidayStart] = useState("");
  const [arg_holidayEnd, arg_setHolidayEnd] = useState("");
  const [arg_isBonus, arg_setIsBonus] = useState(false);

  if (!(field && selfID)) {
    return <ComponentOnLoad />;
  }

  const tar = new cMember(ID, field);
  const isValidAuth: cMember_Privilege =
    "authenticated" === status
      ? new cMember(selfID, field).groupID.getPrivilege()
      : new cMember("0", field).groupID.getPrivilege();

  console.log(
    "FOXWORKSPACE\n" +
      "VIEW: " +
      (isValidAuth.get(eMember_Privilege.ViewHidden) ? "1" : "0") +
      "\n" +
      "EDIT: " +
      (isValidAuth.get(eMember_Privilege.Edit) ? "1" : "0")
  );

  return (
    <>
      <div className="mt-10 container mx-auto align-left max-w-screen-md">
        <h1 id="chance" className="h3-style text-3xl md:titlesX3">
          사용자 프로필 📚
        </h1>
        <div className="md:mt-48px md:flex bgg rounded-xl p-7">
          <h1 className="h3-style">
            {/**
             * 사항: span className= {"string" + "string"}
             * 안 이쁘다 생각되면 나중에 고치셈
             * "text-orange-400 text-4xl"
             * tar.getGroupColour() + " text-4xl"
             */}
            <span className={tar.getGroupColour() + "md:text-4xl text-xl"}>
              <b>{tar.getGroup()}</b>
            </span>
            <span className="text-2xl md:titlesX3"> {tar.getName()}</span>
            <span className="text-sm"> ( {tar.identifier} )</span>
            <div className="w-[100%] my-[1%] border-[3px] rounded-md border-black"></div>
            <div className="overflow-y-scroll flex">{UserSelect(field)}</div>
          </h1>
        </div>
      </div>

      <div className="mt-14 container mx-auto align-left max-w-screen-md">
        <h1 className="h3-style text-3xl md:titlesX3">사용자 휴가 관리 👋</h1>
        <div className="md:mt-48px md:flex bgg rounded-xl p-7">
          <h1 className="h3-style titlesX3">
            🛫 {tar.holidayTicket}개 남음
            <p className="text-sm">
              [{(tar.OnHoliday() ? "휴가임" : "휴가아님")}]{" "}
              {tar.holidayStart.toLocaleString()} ~ {tar.holidayEnd.toLocaleString()}
            </p>
            <p className="text-sm">점수: [{tar.score}]</p>
          </h1>
        </div>
      </div>

      {isValidAuth.get(eMember_Privilege.ViewHidden) &&
        isValidAuth.get(eMember_Privilege.Edit) && (
          <>
            <div className="container mt-4 mx-auto align-left max-w-screen-md">
              <div className="md:flex bgg rounded-xl p-7">
                <label className="flex items-center max-[768]:px-1">
                  <input
                    placeholder="부여할 휴가 수 입력"
                    id="set_Holiday_ticket_count"
                    type="number"
                    className="md:px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    value={arg_ticketCount}
                    onChange={(event) => {
                      arg_setTicketCount(event.target.value);
                    }}
                  />
                  <Button
                    className="size-md md:px-3 py-2 ml-2"
                    onClick={async () => {
                      let _field: cMember_rawBuilder = new cMember_rawBuilder(field);
                      _field.raw[tar.idx].holidayTicket =
                        arg_ticketCount ?? tar.holidayTicket.toString();
                      try {
                        await fetch(ajson, {
                          method: "POST",
                          body: cMember_rawBuilder.hug(_field.build(), "{", "}"),
                        });
                      } catch (e) {
                        console.log(e);
                      }
                    }}
                  >
                    발행하기
                  </Button>
                </label>
                <p className="h3-style text-xl md:text-3xl text-right md:pl-[9%] items-center mt-2">
                  휴가 수정 패널 📌
                </p>
              </div>
            </div>

            <div className="container mt-4 mx-auto align-left max-w-screen-md">
              <div className="md:flex bgg rounded-xl p-7">
                <h1
                  id="chance"
                  className="h2-style text-xl md:text-3xl items-center mt-4"
                >
                  🌙 휴가 처리 패널
                </h1>
                <label className="flex md:pl-[6%]" id="holiday_span">
                  <input
                    type="date"
                    className="px-3 items-center w-full border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    value={arg_holidayStart}
                    onChange={(event) => {
                      arg_setHolidayStart(event.target.value);
                    }}
                  />
                  <span className="\ text-4xl p-1"> ~ </span>
                  <input
                    type="date"
                    className="px-3 items-center w-full border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    value={arg_holidayEnd ?? cUndefined.DateString()}
                    onChange={(event) => {
                      arg_setHolidayEnd(event.target.value);
                    }}
                  />
                </label>
              </div>
              <label className="flex items-center mb-4">
                <div className="flex items-center space-x-2 mt-4">
                  {isValidAuth.get(eMember_Privilege.ViewHidden) && (
                    <Button
                      onClick={async () => {
                        let _field: cMember_rawBuilder = new cMember_rawBuilder(field);
                        if (!arg_isBonus) {
                          if (tar.holidayTicket == 0) return;
                          _field.raw[tar.idx].holidayTicket = (
                            tar.holidayTicket - 1
                          ).toString();
                        }

                        const _start = Date.parse(
                          arg_holidayStart ?? tar.holidayStart.toDateString()
                        );
                        const _end = Date.parse(
                          arg_holidayEnd ?? tar.holidayEnd.toDateString()
                        );

                        if (_start > _end) {
                          return;
                        }
                        if (!arg_isBonus && _end <= Date.now()) {
                          return;
                        }

                        _field.raw[tar.idx].holidayStart = _start.toString();
                        _field.raw[tar.idx].holidayEnd = _end.toString();

                        try {
                          await fetch(ajson, {
                            method: "POST",
                            body: cMember_rawBuilder.hug(_field.build(), "{", "}"),
                          });

                          console.log(cMember_rawBuilder.hug(_field.build(), "{", "}"));
                        } catch (e) {
                          console.log(e);
                        }
                      }}
                    >
                      휴가 작동
                    </Button>
                  )}
                  <span className="pr-3"></span>
                  <input type="checkbox" checked={arg_isBonus} onChange={(event) => { arg_setIsBonus(!arg_isBonus) }} />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    <span className="text-xl md:text-2xl h2-style">
                      <b>보너스 휴가 활성화</b>
                    </span>

                    <span className="pr-2"></span>
                    <span className="h2-style">
                      ( 현재 <span className={tar.getGroupColour()}>{tar.getName()}</span>
                      님의 휴가를 관리하고 있어요. )
                    </span>
                  </label>
                </div>
              </label>
            </div>
          </>
        )}
      {!isValidAuth.get(eMember_Privilege.ViewHidden) && <LoginComponent />}
    </>
  );
};

export default Dashboard;
