"use client";
import useIsMobile from "@/lib/CheckMobileScreen";
import dynamic from "next/dynamic";

const LazyBackgroundVideo = dynamic(
  () => import("@/components/BackgroundVideo"),
  {
    ssr: false,
    loading: () => (
      <div className="h-screen w-full animate-pulse bg-secondary -z-10 absolute top-0 left-0"></div>
    ),
  }
);

export default function PreviewVideo() {
  const isMobile = useIsMobile();
  return !isMobile ? <LazyBackgroundVideo /> : null;
}
