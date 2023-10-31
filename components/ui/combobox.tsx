"use client";
import { cn } from "@/lib/utils";

import React, {
  createContext,
  useState,
  ReactNode,
  ComponentProps,
} from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ContextDef {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ComboboxContext = createContext<ContextDef | null>(null);

interface Props {
  children: ReactNode | ((props: ContextDef) => ReactNode);
}

const Layout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ComboboxContext.Provider value={{ isOpen, setIsOpen }}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        {typeof children === "function"
          ? children({ isOpen, setIsOpen })
          : children}
      </Popover>
    </ComboboxContext.Provider>
  );
};

export const useCombobox = () => {
  const context = React.useContext(ComboboxContext);

  if (context === undefined) {
    throw new Error("useCombobox must be used within a ComboboxProvider");
  }
  return context;
};

interface ContentProps extends ComponentProps<typeof PopoverContent> {}

const Content = ({ className = "", children, ...c }: ContentProps) => {
  return (
    <PopoverContent
      className={cn("p-0 max-w-[90vw] mx-auto ", className)}
      {...c}
    >
      <Command>{children}</Command>
    </PopoverContent>
  );
};

interface CommandProps extends ComponentProps<typeof Command> {}

const ContentCommand = (props: CommandProps) => {
  return <Command {...props} />;
};

const Group = ({
  className = "",
  ...c
}: ComponentProps<typeof CommandGroup>) => {
  return (
    <CommandGroup
      className={cn("tiny:h-[100px]  h-[200px]", className)}
      {...c}
    />
  );
};

interface CB {
  Trigger: typeof PopoverTrigger;
  Content: typeof Content;
  Group: typeof Group;
  Input: typeof CommandInput;
  Empty: typeof CommandEmpty;
  Item: typeof CommandItem;
  Command: typeof ContentCommand;
  Layout: typeof Layout;
}

export const Combobox: CB = {
  Trigger: PopoverTrigger,
  Content: Content,
  Group,
  Input: CommandInput,
  Empty: CommandEmpty,
  Item: CommandItem,
  Command: ContentCommand,
  Layout,
};
