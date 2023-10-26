import React, { ComponentProps } from "react";

const Hamburger = ({ className, ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-6 h-6 ${className}`}
      {...props}
    >
      <circle cx={12} cy={12} r={10} />
      <path d="m10 8 4 4-4 4" />
    </svg>
  );
};

export default Hamburger;
