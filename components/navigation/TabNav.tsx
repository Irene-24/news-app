"use client";

import SideBar from "./SideBar";
import clsx from "clsx";
import Hamburger from "@/icons/Hamburger";
import useDialogState from "@/hooks/useDialogState";
import MobileJokes from "../jokes/MobileJokes";
import MobileConverter from "../converter/MobileConverter";

interface Props {
  jokesComp: React.ReactNode;
}

const TabNav = ({ jokesComp }: Props) => {
  const { isOpen, setIsOpen } = useDialogState();
  return (
    <>
      <div
        className={clsx(
          "fixed hidden md:block bg-background z-10 lg:hidden max-w-[250px] will-change-[width] [&_.cat_p]:delay-100  duration-300 transition-width  top-0 h-screen border-r ",
          isOpen
            ? "[&_.cat_p]:scale-100 [&_.cat_p]:opacity-100"
            : "[&_.icon-text]:opacity-0  [&_.cat_p]:scale-0 [&_.cat_p]:opacity-0 ",
          {
            ["w-20  [&_.cat_p]:hidden [&_.cat]:space-x-0 [&_.first_.icon-text]:sr-only [&_.cat]:mb-0 "]:
              !isOpen,
            ["w-full [&_.icon-text]:opacity-100 [&_.icon-text]:delay-100  [&_.cat_p]:pl-2 [&_.link]:mr-2 "]:
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

      <section className="hidden p-2 [&_.nav-btn]:ring-[1.5px]  [&_.nav-btn]:ring-inset [&_.nav-btn]:bg-white [&_.nav-btn]:rounded-full [&_.nav-btn]:min-h-[64px] [&_.nav-btn_span]:text-[10px] [&_.nav-btn]:px-1.5 [&_.nav-btn]:py-1 space-y-1 md:block lg:hidden fixed right-3 bottom-3 z-50">
        <MobileJokes contentClass="max-w-[45vw] pt-[4vw]">
          {jokesComp}
        </MobileJokes>

        <MobileConverter />

        <button
          className={clsx("center text-white bg-primary rounded-md p-1.5")}
          onClick={() => setIsOpen((s) => !s)}
        >
          <Hamburger />
          <span className="sr-only"> {isOpen ? "Close" : "Open"} Menu</span>
        </button>
      </section>
    </>
  );
};

export default TabNav;
