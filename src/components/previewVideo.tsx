"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const LazyBackgroundVideo = dynamic(
  () => import("@/components/BackgroundVideo"),
  { ssr: false }
);

export default function PreviewVideo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) return null;
  return <LazyBackgroundVideo />;
}
