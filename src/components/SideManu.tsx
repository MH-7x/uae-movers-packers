"use client";
import {
  Sheet,
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
        <div>
          <Image src={"/menu.svg"} alt="menu" width={38} height={38} />
        </div>
      </SheetTrigger>
      <SheetContent className=" overflow-y-auto">
        <SheetHeader>
          <SheetTitle aria-label="UAE Movers & Packers">
            <div className="w-full relative h-12 ">
              <Image
                src={"/images/logo.png"}
                alt="uae movers and packers"
                fill
                className="object-contain"
              />
            </div>
          </SheetTitle>
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
                  <Link key={service.name + i} href={service.link}>
                    {service.name}
                  </Link>
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
                  <Link key={location.name + i} href={location.link}>
                    {location.name.substring(19, location.name.length)}
                  </Link>
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
                  <Link key={furniture.name + i} href={furniture.link}>
                    {furniture.name.substring(14, furniture.name.length)}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li className="border-b  w-full py-3 font-bold text-lg">
            <Link href={"/"}>About Us</Link>
          </li>
          <li className="border-b  w-full py-3 font-bold text-lg">
            <Link href={"/"}>Contact Us</Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}