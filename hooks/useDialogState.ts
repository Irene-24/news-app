import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const useDialogState = () => {
  const [isOpen, setIsOpen] = useState(false);

  const path = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsOpen(false);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  return { isOpen, setIsOpen };
};

export default useDialogState;
