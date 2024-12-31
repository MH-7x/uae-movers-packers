"use client";
import { useState, useEffect } from "react";

const useIsMobile = (breakpoint = 768) => {
  let innerWidth = 0;
  if (typeof window !== "undefined") {
    innerWidth = window.innerWidth;
  }
  const [isMobile, setIsMobile] = useState(innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Initial check on mount
    handleResize();

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
