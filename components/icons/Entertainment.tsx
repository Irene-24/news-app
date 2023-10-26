import React, { ComponentProps } from "react";

const Entertainment = ({ className, ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={`w-6 h-6 ${className}`}
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx={12} cy={12} r={10} />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  );
};

export default Entertainment;
