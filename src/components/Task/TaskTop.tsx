"use client";

import { useAppContext } from "@/context/AppContext";
import { firstTextStartUppercase } from "@/helper/helper";
import { useParams } from "next/navigation";
import React, { useState } from "react";

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
  const { slug } = useParams();
  const { filterTaskLevel } = useAppContext();

  const handleButton = (data: any) => {
    setTab(data.title);
    filterTaskLevel(data.title);
  };

  return (
    <div className="flex justify-between items-center">
      <h4 className="text-xl font-[600]">
        {firstTextStartUppercase(slug?.toString()) || "All"} Tasks
      </h4>

      <div className="flex gap-x-1 bg-gradient-to-r from-gray-800 to-stone-800 p-2 text-white rounded-full text-sm">
        {tasksBtn.map((item, index) => (
          <button
            onClick={() => handleButton(item)}
            key={index}
            className={`${
              tab === item.title ? "bg-white text-black " : null
            } px-5 rounded-full py-1 max-w-[100px] transition-all`}
          >
            {firstTextStartUppercase(item?.title)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskTop;
