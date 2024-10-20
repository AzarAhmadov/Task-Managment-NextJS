import React from "react";
import Link from "next/link";
import { IoGridOutline, IoTimeOutline } from "react-icons/io5";
import { GrCompliance } from "react-icons/gr";
import { LuTimerOff } from "react-icons/lu";

const Sidebar = () => {
  const sidebarLinks = [
    {
      icon: <IoGridOutline />,
      title: "All",
    },
    {
      icon: <GrCompliance />,
      title: "Completed",
    },
    {
      icon: <IoTimeOutline />,
      title: "Pending",
    },
    {
      icon: <LuTimerOff />,
      title: "Overdue",
    },
  ];

  return (
    <aside className="container mx-auto">
      <ul className="space-y-10 top-[135px] fixed h-screen">
        {sidebarLinks.map((item, index) => (
          <li className="flex group items-center gap-x-3 w-[25px]" key={index}>
            <Link
              href={`/${item.title.toLowerCase()}`}
              className="text-[25px] hover:scale-105 transition-all"
            >
              {item.icon}
            </Link>
            <p className="bg-black invisible opacity-0 group-hover:visible -ml-1 group-hover:-ml-0   group-hover:opacity-100 transition-all duration-300 text-white rounded-full py-1 px-3 text-[14px]">
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
