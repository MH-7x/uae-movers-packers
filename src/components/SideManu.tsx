"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { locations, services, usedFurniture } from "@/constants/services";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function SideMenu() {
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <Image
            src={"/menu.svg"}
            alt="open side menu icon"
            aria-label="open side menu"
            width={38}
            loading="eager"
            height={38}
          />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-white overflow-y-auto">
        <SheetHeader>
          <SheetTitle aria-label="RWahab Movers UAE"></SheetTitle>
        </SheetHeader>
        <ul className=" w-full min-h-96 mt-5 flex items-start justify-start flex-col gap-y-3">
          <li className="border-b  w-full py-3 font-bold text-lg">
            <Link href={"/"}>Home</Link>
          </li>
          <li
            onClick={() => setOpenIndex(openIndex === 0 ? -1 : 0)}
            className="border-b  w-full py-3 font-bold text-lg"
          >
            <div className="flex items-center justify-between">
              <span>Services</span>
              <ArrowDown className="size-5 text-primary" />
            </div>
            {openIndex === 0 && (
              <div className="text-base mt-3 font-normal flex items-start justify-start flex-col gap-y-2">
                {services.map((service, i) => (
                  <SheetClose key={service.name + i} asChild>
                    <Link
                      className="font-medium text-gray-700"
                      href={service.link}
                    >
                      {service.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            )}
          </li>
          <li
            onClick={() => setOpenIndex(openIndex === 1 ? -1 : 1)}
            className="border-b  w-full py-3 font-bold text-lg"
          >
            <div className="flex items-center justify-between">
              <span>Location</span>
              <ArrowDown className="size-5 text-primary" />
            </div>
            {openIndex === 1 && (
              <div className="text-base mt-3 font-normal flex items-start justify-start flex-col gap-y-2">
                {locations.map((location, i) => (
                  <SheetClose key={location.name + i} asChild>
                    <Link
                      className="font-medium text-gray-700"
                      href={location.link}
                    >
                      {location.name.substring(19, location.name.length)}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            )}
          </li>
          <li
            onClick={() => setOpenIndex(openIndex === 2 ? -1 : 2)}
            className="border-b  w-full py-3 font-bold text-lg"
          >
            <div className="flex items-center justify-between">
              <span>Used Furnitures</span>
              <ArrowDown className="size-5 text-primary" />
            </div>
            {openIndex === 2 && (
              <div className="text-base mt-3 font-normal flex items-start justify-start flex-col gap-y-2">
                {usedFurniture.map((furniture, i) => (
                  <SheetClose key={furniture.name + i} asChild>
                    <Link
                      className="font-medium text-gray-700"
                      href={furniture.link}
                    >
                      {furniture.name.substring(14, furniture.name.length)}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            )}
          </li>
          <li className="border-b  w-full py-3 font-bold text-lg">
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <li className="border-b  w-full py-3 font-bold text-lg">
            <Link href={"/contact-us"}>Contact Us</Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
