"use client";
import React, { useEffect, useState } from "react";
import { services, locations, usedFurniture } from "@/constants/services";
import {
  BedDouble,
  HandCoins,
  Headset,
  Home,
  Mail,
  MapPin,
  MapPinCheck,
  Phone,
  Users,
} from "lucide-react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
function DesktopNavBar() {
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
    <header className="w-full">
      <div
        className={`flex ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } items-center fixed  z-50 top-0 left-0 transition-transform duration-300 justify-between w-full px-4 border-b border-gray-200 bg-white py-1`}
      >
        <div className="w-44 h-12 relative">
          <Image src={logo} alt="logo" fill className="object-contain" />
        </div>
        <div className="flex items-center justify-center md:gap-5">
          <div className="flex items-center gap-1">
            <MapPin className="size-4 text-primary" />
            <span className="text-sm font-medium">
              Building No. 12, Street No. 4, Al Yarmook, Sharjah, UAE
            </span>
          </div>
          <Link aria-label="Call To Us" href={"tel:+971503806855"}>
            <div className="flex items-center gap-1">
              <Phone className="size-4 text-primary" />
              <span className="text-sm font-medium">+971 123456789</span>
            </div>
          </Link>
          <Link aria-label="Mail To Us" href={"mailto:wk0131839@gamil.com"}>
            <div className="flex items-center gap-1">
              <Mail className="size-4 text-primary" />
              <span className="text-sm font-medium">wk0131839@gamil.com</span>
            </div>
          </Link>
        </div>
      </div>

      <nav
        className={`fixed bg-white ${
          showNavbar
            ? "top-[57px] py-2"
            : "top-0 px-4 shadow-lg shadow-neutral-200/50"
        } px-5 z-50 w-full   transition-all duration-200`}
      >
        <NavigationMenu>
          <NavigationMenuList>
            {!showNavbar && (
              <NavigationMenuItem
                className={`${
                  showNavbar ? "-translate-x-full" : "translate-x--full mt-3"
                } transition-transform duration-200`}
              >
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <div className="w-44 h-14 relative">
                      <Image
                        src={logo}
                        alt="logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )}

            <div
              className={`${showNavbar ? "" : "pl-16"} flex items-center gap-2`}
            >
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Home className="mr-1 size-4 text-primary" /> Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {" "}
                  <HandCoins className="mr-1 size-4 text-primary" /> Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {services.map((service) => (
                      <ListItem
                        key={service.name}
                        title={service.name}
                        href={service.link}
                      >
                        {service.desc}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {" "}
                  <MapPinCheck className="mr-1 size-4 text-primary" /> Locations
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {locations.map((location) => (
                      <ListItem
                        key={location.name}
                        title={location.name}
                        href={location.link}
                      >
                        {location.desc}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {" "}
                  <BedDouble className="mr-1 size-4 text-primary" /> Used
                  Furnitures
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {usedFurniture.map((furniture) => (
                      <ListItem
                        key={furniture.name}
                        title={furniture.name}
                        href={furniture.link}
                      >
                        {furniture.desc}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Users className="mr-1 size-4 text-primary" /> About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Headset className="mr-1 size-4 text-primary" /> Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}

export default DesktopNavBar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { href: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
          href={href}
          passHref
        >
          <div className="text-sm font-semibold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
