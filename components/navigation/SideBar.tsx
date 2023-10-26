import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import Image from "next/image";
import Headlines from "@/icons/Headlines";
import Business from "@/icons/Business";
import Entertainment from "@/icons/Entertainment";
import Health from "@/icons/Health";
import Sports from "@/icons/Sports";
import Technology from "@/icons/Technology";
import SideBarItem from "./SideBarItem";

const links = [
  {
    id: "business",
    text: "Business",
    icon: <Business />,
  },
  {
    id: "entertainment",
    text: "entertainment",
    icon: <Entertainment />,
  },
  {
    id: "health",
    text: "health",
    icon: <Health />,
  },
  {
    id: "sports",
    text: "sports",
    icon: <Sports />,
  },
  {
    id: "technology",
    text: "technology",
    icon: <Technology />,
  },
];

const SideBar = () => {
  return (
    <nav className="h-full flex flex-col">
      <div className="center overflow-x-hidden p-2">
        <Link className="block w-full h-10 relative " href="/">
          <span className="sr-only">Aster news</span>
          <Image
            src={"/images/logo-full.svg"}
            alt="News app logo"
            fill
            objectPosition="center"
            loading="eager"
          />
        </Link>
      </div>

      <div className="first my-2">
        <SideBarItem text={"Around the world"} icon={<Headlines />} />
      </div>

      <div className="relative my-2 btwn space-x-1 font-mono text-secondary-foreground cat transition-opacity transition-transform">
        <p className="font-semibold">Categories</p>
        <hr className="flex-1 border-t-border border-t-2 translate-y-1/2" />
      </div>

      <ScrollArea className="flex-1">
        <ul className="space-y-1 mt-2">
          {links.map((li) => (
            <li key={li.id}>
              <SideBarItem id={li.id} text={li.text} icon={li.icon} />
            </li>
          ))}
        </ul>
      </ScrollArea>
    </nav>
  );
};

export default SideBar;
