import React from "react";
import Link from "next/link";
import { IoGridOutline, IoTimeOutline } from "react-icons/io5";
import { GrCompliance } from "react-icons/gr";
import { LuTimerOff } from "react-icons/lu";

const Sidebar = () => {
  return (
    <aside className="container mx-auto mt-7">
      <ul className="space-y-10 top-[125px] bg-white fixed h-screen">
        <li>
          <Link href={"/"} className="text-[25px]">
            <IoGridOutline />
          </Link>
        </li>
        <li>
          <Link href={"/"} className="text-[25px]">
            <GrCompliance />
          </Link>
        </li>
        <li>
          <Link href={"/"} className="text-[25px]">
            <IoTimeOutline />
          </Link>
        </li>
        <li>
          <Link href={"/"} className="text-[25px]">
            <LuTimerOff />
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
