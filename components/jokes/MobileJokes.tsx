"use client";

import React from "react";
import { MobileDialog } from "@/components/MobileDialog";
import Laugh from "@/icons/Laugh";

interface Props {
  children: React.ReactNode;
  contentClass?: React.ComponentProps<"div">["className"];
}

const MobileJokes = ({ children, contentClass = "" }: Props) => {
  return (
    <MobileDialog.Wrapper>
      <MobileDialog.Trigger>
        <Laugh />
        <span className="sr-only text-xs  2xs:not-sr-only">Jokes</span>
      </MobileDialog.Trigger>
      <MobileDialog.Content className={`${contentClass}`}>
        {children}
      </MobileDialog.Content>
    </MobileDialog.Wrapper>
  );
};

export default MobileJokes;
