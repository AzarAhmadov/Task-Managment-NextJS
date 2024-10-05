import { ReactNode } from "react";

export type TypeContainer = {
  children: ReactNode;
};

export type TypeFormTop = {
  title: string;
  description: string;
  href: string;
  linkText: string;
};

export type TypeTasks = {
  title: string;
  desc: string;
  level: string;
};
