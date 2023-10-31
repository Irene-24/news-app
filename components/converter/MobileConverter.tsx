"use client";

import React from "react";
import { MobileDialog } from "@/components/MobileDialog";
import Swap from "@/icons/Swap";
import ConverterWidget from "@/components/converter/ConverterWidget";

const MobileConverter = () => {
  return (
    <MobileDialog.Wrapper>
      <MobileDialog.Trigger>
        <Swap />
        <span className="sr-only text-xs  2xs:not-sr-only">Rates</span>
      </MobileDialog.Trigger>
      <MobileDialog.Content
        className={`tiny:pt-[20vw] pt-[10vw] sm:max-w-[500px]`}
      >
        <ConverterWidget />
      </MobileDialog.Content>
    </MobileDialog.Wrapper>
  );
};

export default MobileConverter;
