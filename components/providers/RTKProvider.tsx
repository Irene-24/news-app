"use client";

import { Provider } from "react-redux";
import React from "react";
import { reduxStore } from "@/redux/store";

const RTKProvider = (props: React.PropsWithChildren) => {
  return <Provider store={reduxStore}>{props.children}</Provider>;
};

export default RTKProvider;
