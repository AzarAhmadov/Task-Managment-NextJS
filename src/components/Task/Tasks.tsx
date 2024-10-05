import React from "react";
import TaskItem from "./TaskItem";

const Tasks = () => {
  const tasksData = [
    {
      title: "Plan Weekend Trip Edit",
      desc: "Plan a weekend lorem ipsim dolor sit amer",
      level: "high",
    },
    {
      title: "Plan Weekend Trip Edit",
      desc: "Plan a weekend lorem ipsim dolor sit amer",
      level: "medium",
    },
    {
      title: "Plan Weekend Trip Edit",
      desc: "Plan a weekend lorem ipsim dolor sit amer",
      level: "low",
    },
    {
      title: "Task 1 ",
      desc: "Task Description",
      level: "medium",
    },
    {
      title: "Task 1 ",
      desc: "Task Description",
      level: "high",
    },
    {
      title: "Plan Weekend Trip Edit",
      desc: "Plan a weekend lorem ipsim dolor sit amer",
      level: "high",
    },
    {
      title: "Plan Weekend Trip Edit",
      desc: "Plan a weekend lorem ipsim dolor sit amer",
      level: "medium",
    },
    {
      title: "Plan Weekend Trip Edit",
      desc: "Plan a weekend lorem ipsim dolor sit amer",
      level: "low",
    },
    {
      title: "Task 1 ",
      desc: "Task Description",
      level: "medium",
    },
    {
      title: "Task 1 ",
      desc: "Task Description",
      level: "high",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {tasksData.map((item, index) => (
        <TaskItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Tasks;
