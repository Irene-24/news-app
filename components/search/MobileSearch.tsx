"use client";

import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Search from "@/icons/Search";
import SearchInput from "./SearchInput";
import useDialogState from "@/hooks/useDialogState";

const MobileSearch = () => {
  const { isOpen, setIsOpen } = useDialogState();

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen((s) => !s)}>
      <DialogTrigger className="!flex-col text-primary center 2xs:space-y-1">
        <Search />
        <span className="sr-only text-xs  2xs:not-sr-only">Search</span>
      </DialogTrigger>
      <DialogContent className="mx-auto max-w-[95vw]">
        <SearchInput />
      </DialogContent>
    </Dialog>
  );
};

export default MobileSearch;
