import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ServicesBox } from "@/constants/services";
import Link from "next/link";
function Serivces() {
  return (
    <section className="py-12 mt-24  min-h-screen ">
      <p className="mx-auto px-4 py-2 text-primary bg-primary/10 rounded-2xl font-semibold w-max">
        Our Services
      </p>
      <h2 className="text-center md:text-5xl mt-3">
        Professional Moving Services <br /> With UAE Movers & Packers
      </h2>
      <div className="mt-16 bg-white md:w-11/12 w-full mx-auto grid md:grid-cols-3 gap-8 md:px-5 grid-cols-1">
        {ServicesBox.map((service, i) => (
          <div
            key={service.name + i}
            className="bg-white shadow-lg shadow-neutral-100 min-h-80 rounded-xl flex items-center justify-start gap-y-3 flex-col p-5"
          >
            <div className="w-16 shadow-2xl shadow-neutral-100 h-16 rotate-45 overflow-hidden flex items-center justify-center rounded-lg bg-white drop-shadow-lg ">
              <Image
                width={45}
                height={45}
                className="-rotate-45 "
                src={service.imgSrc}
                alt={service.name}
              />
            </div>
            <Link aria-label={service.name} href={service.link}>
              <h2 className="text-2xl mt-4">{service.name}</h2>
            </Link>
            <p className="text-base text-center text-gray-600">
              {service.desc}
            </p>
            <Link aria-label={service.name} href={service.link}>
              <Button variant={"link"}>See More..</Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Serivces;
