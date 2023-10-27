"use client";

import { usePathname } from "next/navigation";

import React, { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

interface Props {
  id?: string;
  text: string;
  icon: ReactNode;
}

const SideBarItem = ({ id = "", text, icon }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === `/${id}`;

  return (
    <Link
      className={clsx(
        "link  py-4 rounded-r-full items-center grid grid-cols-[80px_minmax(0,1fr)] text-foreground relative transition-colors text-sm xl:text-base ",
        {
          ["bg-accent text-primary font-bold"]: isActive,
          ["bg-transparent text-foreground"]: !isActive,
        }
      )}
      href={`/${id}`}
    >
      <span className="center px-1 relative">
        {icon}
        <span
          className={clsx(
            "aspect-square  left-[18%] bg-primary transition-opacity w-1 rounded-full absolute top-1/2 -translate-y-1/2",
            {
              ["opacity-100 "]: isActive,
              ["opacity-0"]: !isActive,
            }
          )}
        />
      </span>
      <span className="capitalize icon-text pr-2  transition-[transform, opacity]">
        {text}
      </span>
    </Link>
  );
};

export default SideBarItem;
