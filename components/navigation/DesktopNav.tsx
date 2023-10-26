import React from "react";
import SideBar from "./SideBar";
import Image from "next/image";

const DesktopNav = () => {
  return (
    <div className="fixed hidden lg:block max-w-[250px] w-[20vw] top-0 h-screen">
      <SideBar />
    </div>
  );
};

export default DesktopNav;
