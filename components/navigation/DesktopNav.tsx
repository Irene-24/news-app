import React from "react";
import SideBar from "./SideBar";
import Image from "next/image";

const DesktopNav = () => {
  return (
    <div className="fixed hidden [&_nav_div:first-child]:mt-2 [&_.cat_p]:pl-2 lg:block max-w-[250px] w-[20vw] top-0 h-screen">
      <SideBar />
    </div>
  );
};

export default DesktopNav;
