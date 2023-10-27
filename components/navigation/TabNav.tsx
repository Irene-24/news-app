"use client";

import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Image from "next/image";
import clsx from "clsx";

const TabNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsOpen(false);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <>
      <div
        className={clsx(
          "fixed hidden md:block bg-background z-10 lg:hidden max-w-[250px] will-change-[width] [&_.cat_p]:delay-100  duration-300 transition-width  top-0 h-screen border-r ",
          {
            ["w-20 [&_.icon-text]:opacity-0 [&_.cat_p]:hidden [&_.cat]:space-x-0 [&_.first_.icon-text]:sr-only  [&_.cat_p]:scale-0 [&_.cat_p]:opacity-0 [&_.cat]:mb-0 marker:"]:
              !isOpen,
            ["w-full [&_.icon-text]:opacity-100  [&_.icon-text]:delay-100 [&_.cat_p]:scale-100 [&_.cat_p]:opacity-100 [&_.cat_p]:pl-2 [&_.link]:mr-2 "]:
              isOpen,
          }
        )}
      >
        <SideBar />
      </div>

      <div
        className={clsx(
          "fixed w-screen h-screen lg:hidden hidden md:block bg-black/30 backdrop-blur-lg transition-all ",
          { ["opacity-100 z-[5]"]: isOpen, ["opacity-0 -z-10"]: !isOpen }
        )}
      />

      <section className="hidden p-2 bg-destructive md:block lg:hidden fixed right-3 bottom-3 z-10">
        <button onClick={() => setIsOpen((s) => !s)}>Menu</button>
        <p>1</p>
        <p>1</p>
      </section>
    </>
  );
};

export default TabNav;
