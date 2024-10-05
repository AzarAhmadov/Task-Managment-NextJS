import React from "react";
import Link from "next/link";
import { FaRegUserCircle, FaRegMoon } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="py-4 px-2 bg-white border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h5 className="font-[500] text-lg">👋🏻 Welcome to TaskAza</h5>
          <p className="font-[400] text-sm mt-1 text-textPrimary">
            Please login or register to view your tasks
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <ul className="flex items-center gap-x-4">
            <li className="flex gap-x-2">
              <Button asChild>
                <Link href={"/login"}> Login </Link>
              </Button>

              <Button asChild variant={"outline"}>
                <Link href={"/register"}> Register </Link>
              </Button>
            </li>
            <li>
              <button className="text-[25px]">
                <FaRegUserCircle />
              </button>
            </li>
            <li>
              <button className="text-[25px]">
                <FaRegMoon />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
