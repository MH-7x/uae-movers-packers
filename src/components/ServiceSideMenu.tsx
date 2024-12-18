import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ServicesBox } from "@/constants/services";

export const locations = [
  {
    name: "Movers In Dubai",
    link: "/movers-and-packers-dubai",
    desc: "Reliable movers in Dubai.",
    img: "/service/dubai.jpg",
  },
  {
    name: "Movers In Abu Dhabi",
    link: "/movers-and-packers-abu-dhabi",
    desc: "Trusted movers in Abu Dhabi.",
    img: "/service/Abu-Dhabi.jpg",
  },
  {
    name: "Movers In Sharjah",
    link: "/movers-and-packers-sharjah",
    desc: "Affordable movers in Sharjah.",
    img: "/service/Sharjah.jpg",
  },
  {
    name: "Movers In Ajman",
    link: "/movers-and-packers-ajman",
    desc: "Efficient movers in Ajman.",
    img: "/service/Ajman.jpg",
  },
  {
    name: "Movers In Ras Al Khaimah",
    link: "/movers-and-packers-ras-al-khaimah",
    desc: "Experienced movers in RAK.",
    img: "/service/Ras-Al-Khaimah.jpg",
  },
  {
    name: "Movers In Umm Al Quwain",
    link: "/movers-and-packers-umm-al-quwain",
    desc: "Reliable movers in UAQ.",
    img: "/service/Umm-Al-Quwain.jpg",
  },
];
function ServiceSideMenu() {
  return (
    <>
      <h3 className="text-center">Our Moving Locations</h3>
      <ul className="mt-5">
        {locations.map((location) => (
          <li
            key={location.name}
            className="bg-white flex items-center rounded-lg shadow-none hover:shadow-lg hover:shadow-black/5 transition-shadow gap-x-3 p-2"
          >
            <div className="w-20 h-20 rounded-lg overflow-hidden relative bg-secondary">
              <Image
                src={location.img}
                alt={location.name}
                fill
                className="object-cover object-center"
              />
            </div>
            <div>
              <Link href={location.link}>
                <h3 className="font-[--font-roboto]/bold text-lg">
                  {location.name}
                </h3>
              </Link>
              <p className="text-muted-foreground text-sm">{location.desc}</p>
              <Link aria-label={location.name} href={location.link}>
                <Button
                  aria-label={location.name}
                  size={"sm"}
                  className="-mt-2"
                  variant={"link"}
                >
                  View More...
                </Button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <h3 className="mt-14 text-center">Our Other Services</h3>
      <ul className="mt-5">
        {ServicesBox.map((service) => (
          <li
            key={service.name}
            className="bg-white flex items-center rounded-lg shadow-none hover:shadow-lg hover:shadow-black/5 transition-shadow gap-x-3 p-2"
          >
            <Image
              src={service.imgSrc}
              alt={service.name}
              width={50}
              height={50}
            />

            <div>
              <Link href={service.link}>
                <h3 className="font-[--font-roboto]/bold text-lg">
                  {service.name}
                </h3>
              </Link>
              <p className="text-muted-foreground line-clamp-1 text-sm">
                {service.desc}
              </p>
              <Link aria-label={service.name} href={service.link}>
                <Button
                  aria-label={service.name}
                  size={"sm"}
                  className="-mt-2"
                  variant={"link"}
                >
                  View More...
                </Button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ServiceSideMenu;
