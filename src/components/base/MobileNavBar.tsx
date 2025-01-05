"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SideMenu } from "../SideManu";
import InfoCard from "../InfoCard";
import Link from "next/link";
function MobileNavBar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
    return;
  }, [lastScrollY]);
  return (
    <header
      className={`fixed transition-transform drop-shadow-lg bg-gradient-to-br from-white via-violet-50 to-violet-50 duration-200 top-0 ${
        !showNavbar ? "-translate-y-full" : "-translate-y-0"
      } left-0 w-full z-50 py-3 px-1`}
    >
      <nav className={`relative w-full flex items-center justify-between`}>
        <div className="relative w-36 h-10 ">
          <Link aria-label="RWahab Movers UAE" href="/">
            <Image
              src={"/images/logo.png"}
              alt="RWahab Movers UAE"
              fill
              id="logo"
              className="object-contain "
            />
          </Link>
        </div>

        <div className="flex items-center gap-x-3 justify-end">
          <InfoCard />
          <div className="border-muted-foreground border rounded-full w-[34px] h-[34px] flex items-center justify-center">
            <Image
              src={"/search.svg"}
              aria-label="search icon"
              alt="search icon"
              width={19}
              height={19}
            />
          </div>
          <SideMenu />
        </div>
      </nav>
    </header>
  );
}

export default MobileNavBar;
