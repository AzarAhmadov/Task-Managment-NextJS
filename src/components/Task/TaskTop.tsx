"use client";

import { useAppContext } from "@/context/AppContext";
import React, { useState } from "react";
import { date } from "zod";

const TaskTop = () => {
  const tasksBtn = [
    {
      title: "all",
    },
    {
      title: "low",
    },
    {
      title: "medium",
    },
    {
      title: "high",
    },
  ];

  const [tab, setTab] = useState("all");

  const { filterTaskLevel } = useAppContext();

  const handleButton = (data: any) => {
    setTab(data.title);
    filterTaskLevel(data.title);
  };

  return (
    <div className="flex justify-between items-center">
      <h4 className="text-xl font-[600]">All Tasks</h4>

      <div className="flex gap-x-1 bg-gradient-to-r from-gray-800 to-stone-800 p-2 text-white rounded-full text-sm">
        {tasksBtn.map((item, index) => (
          <button
            onClick={() => handleButton(item)}
            key={index}
            className={`${
              tab === item.title ? "bg-white text-black " : null
            } px-5 rounded-full py-1 max-w-[100px] transition-all`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskTop;
