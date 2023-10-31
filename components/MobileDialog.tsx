"use client";

import React, { ComponentProps } from "react";
import useDialogState from "@/hooks/useDialogState";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

cn;

interface Props {
  children: React.ReactNode;
}

const MobileDialogWrapper = ({ children }: Props) => {
  const { isOpen, setIsOpen } = useDialogState();

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen((s) => !s)}>
      {children}
    </Dialog>
  );
};

interface TProps extends ComponentProps<typeof DialogTrigger> {}

const Trigger = ({ className = "", ...c }: TProps) => {
  return (
    <DialogTrigger
      className={cn(
        "!flex-col nav-btn text-primary center 2xs:space-y-1",
        className
      )}
      {...c}
    />
  );
};

interface CProps extends ComponentProps<typeof DialogContent> {}

const Content = ({ className = "", dialogCloseClass = "", ...c }: CProps) => {
  return (
    <DialogContent
      dialogCloseClass={cn(
        "bg-destructive text-white rounded-full p-2 -translate-y-[10%]",
        dialogCloseClass
      )}
      className={cn("mx-auto wrapper p-4  pt-[10vw] max-w-[95vw]", className)}
      {...c}
    />
  );
};

export const MobileDialog = {
  Wrapper: MobileDialogWrapper,
  Trigger,
  Content,
};
