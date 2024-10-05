"use client";

import React, { useState } from "react";

const TaskTop = () => {
  const tasksBtn = [
    {
      title: "All",
    },
    {
      title: "Low",
    },
    {
      title: "Medium",
    },
    {
      title: "High",
    },
  ];

  const [tab, setTab] = useState("All");

  return (
    <div className="flex justify-between items-center">
      <h4 className="text-xl font-[600]">All Tasks</h4>

      <div className="flex gap-x-1 bg-gradient-to-r from-gray-800 to-stone-800 p-2 text-white rounded-full text-sm">
        {tasksBtn.map((item, index) => (
          <button
            onClick={() => setTab(item.title)}
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
