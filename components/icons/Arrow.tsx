import React, { ComponentProps } from "react";

const Arrow = ({ className, ...props }: ComponentProps<"svg">) => {
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
      <path d="M6 8l-4 4 4 4M2 12h20" />
    </svg>
  );
};

export default Arrow;
