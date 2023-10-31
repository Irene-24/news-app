"use client";
import Hamburger from "@/icons/Hamburger";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import SideBar from "./SideBar";
import MobileSearch from "@/components/search/MobileSearch";
import useDialogState from "@/hooks/useDialogState";
import MobileJokes from "@/components/jokes/MobileJokes";
import MobileConverter from "@/components/converter/MobileConverter";

interface Props {
  jokesComp: React.ReactNode;
}

const MobileNav = ({ jokesComp }: Props) => {
  const { isOpen, setIsOpen } = useDialogState();

  return (
    <Sheet open={isOpen} onOpenChange={() => setIsOpen((s) => !s)}>
      <div className="md:hidden">
        <nav className="grid grid-cols-4 fixed bottom-0 w-full z-10 bg-border rounded-t-xl p-2">
          <SheetTrigger className="!flex-col text-primary center 2xs:space-y-1">
            <Hamburger />
            <span className="sr-only text-xs  2xs:not-sr-only">Menu</span>
          </SheetTrigger>

          <MobileSearch />

          <MobileJokes contentClass="max-w-[95vw] sm:max-w-[500px]">
            {jokesComp}
          </MobileJokes>

          <MobileConverter />
        </nav>
      </div>

      <SheetContent
        sheetCloseClass="sr-only"
        side="left"
        className="px-0 py-1.5 [&_.cat_p]:pl-2"
      >
        <SideBar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
