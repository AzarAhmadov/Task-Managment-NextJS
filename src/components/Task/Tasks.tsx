"use client";

import React from "react";
import TaskItem from "./TaskItem";
import { useAppContext } from "@/context/AppContext";

const Tasks = () => {
  const { taskFilter } = useAppContext();

  return (
    <div className="grid grid-cols-3 gap-4">
      {taskFilter.map((item, index) => (
        <TaskItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Tasks;
