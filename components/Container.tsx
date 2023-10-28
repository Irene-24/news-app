import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const Container = ({ children, className = "" }: ComponentProps<"div">) => {
  return (
    <div className={twMerge(`w-full mx-auto 4xl:px-[10%]`, className)}>
      {children}
    </div>
  );
};

export default Container;
