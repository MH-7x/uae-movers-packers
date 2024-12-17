import { headers } from "next/headers";
import React from "react";
import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";

async function Navbar() {
  const ReqHeaders = headers();
  const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(
    (await ReqHeaders).get("user-agent") || ""
  );
  if (isMobile) {
    return <MobileNavBar />;
  }
  return <DesktopNavBar />;
}

export default Navbar;
