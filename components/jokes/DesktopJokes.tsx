import React from "react";
import JokesWrapper from "./JokesWrapper";

//hidden

const DesktopJokes = () => {
  return (
    <div className="hidden overflow-hidden rounded-xl p-2  [&_.font-shan]:bg-popover lg:block">
      <JokesWrapper />
    </div>
  );
};

export default DesktopJokes;
