import Container from "@/common/Container/Container";
import Reyting from "@/components/Reyting/Reyting";
import Tasks from "@/components/Task/Tasks";
import TaskTop from "@/components/Task/TaskTop";
import React from "react";

const Home = () => {
  return (
    <Container>
      <div className="grid grid-cols-12 gap-x-7">
        <div className="col-span-9 shadow-sm rounded-[25px] bg-[#f9f9f997] overflow-auto px-5 pb-5 h-[calc(100vh_-_135px)]">
          <div className=" sticky py-5 top-0 bg-[#f9f9f9] z-20">
            <TaskTop />
          </div>
          <Tasks />
        </div>
        <div className="col-span-3 bg-red-300 p-5 h-[calc(100vh_-_135px)]">
          <Reyting />
        </div>
      </div>
    </Container>
  );
};

export default Home;
