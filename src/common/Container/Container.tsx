import { TypeContainer } from "@/types/types";
import React from "react";

const Container: React.FC<TypeContainer> = ({ children }) => {
  return <div className="container mx-auto mt-[25px] ps-[60px]">{children}</div>;
};

export default Container;
