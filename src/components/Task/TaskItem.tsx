"use client";

import { TypeTasks } from "@/types/types";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";

interface Itask {
  item: TypeTasks;
}

const TaskItem: React.FC<Itask> = ({ item }) => {
  const { title, desc, level } = item;

  const levelColors: { [key: string]: string } = {
    high: "text-red-500",
    medium: "text-yellow-500",
    low: "text-green-500",
  };

  const levelOfBg = levelColors[level];

  return (
    <div className="bg-white p-5 rounded-lg border">
      <>
        <h3 className="mb-3 text-lg font-[600]">{title}</h3>
        <p className="text-[#000000ab] text-sm">{desc}</p>
      </>

      <div className="mt-12 flex justify-between items-center">
        <span className="text-[#000000ab] text-[12px]">4 days ago</span>
        <span className={`${levelOfBg} text-[12px] font-[600]`}>{level}</span>
        <div className="flex items-center gap-x-2">
          <button className="text-[22px] text-blue-500">
            <BiEditAlt />
          </button>
          <button className="text-[22px] text-red-500">
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
