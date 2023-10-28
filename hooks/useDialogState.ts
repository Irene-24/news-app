import { usePathname,useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const useDialogState = () => {
  const [isOpen, setIsOpen] = useState(false);

  const path = usePathname();
  const params = useSearchParams()

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
  }, [path, params]);

  return { isOpen, setIsOpen };
};

export default useDialogState;
