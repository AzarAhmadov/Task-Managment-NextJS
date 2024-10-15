"use client";

import { tasksData } from "@/constants/constants";
import { TypeContainer } from "@/types/types";
import React, { createContext, useContext, useState } from "react";

type Task = {
  title: string;
  desc: string;
  level: string;
};

type AppContextType = {
  taskFilter: Task[];
  filterTaskLevel: any;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppContextProvider: React.FC<TypeContainer> = ({ children }) => {
  const [taskFilter, setTaskFilter] = useState<Task[]>(tasksData);

  const filterTaskLevel = (level: string) => {
    if (level === "all") {
      setTaskFilter(tasksData);
    } else {
      const filteredTasks = tasksData.filter((item) => item.level === level);
      setTaskFilter(filteredTasks);
    }
  };

  const values = {
    taskFilter,
    filterTaskLevel,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

export default AppContextProvider;