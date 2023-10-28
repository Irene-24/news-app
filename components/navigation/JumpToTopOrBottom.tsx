"use client";

import React, { useState, useEffect, useRef } from "react";

const JumpToTopOrBottom = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const debouncedOnScroll = useRef<null | Function>(null);

  useEffect(() => {
    const onScroll = () => {
      debouncedOnScroll.current = () => {
        setIsAtTop(window.scrollY <= 200);
      };

      setTimeout(debouncedOnScroll.current, 250);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleClick = () => {
    const maxAvailableScroll =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const options = isAtTop
      ? { top: maxAvailableScroll, left: 0 }
      : { top: 0, left: 0 };
    window.scrollTo(options);
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="bg-secondary text-secondary-foreground"
    >
      Jump to {isAtTop ? "Bottom" : "Top"}
    </button>
  );
};

export default JumpToTopOrBottom;
