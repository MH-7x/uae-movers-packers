import React from "react";
import { Button } from "@/components/ui/button";
import pricingimage from "../../../public/images/pricing-icon.png";
import reliableimage from "../../../public/images/reliable-services-icon.png";
import planingimg from "../../../public/images/detail-planing.png";
import teamimage from "../../../public/images/team.png";
import Image from "next/image";
import { PhoneCall } from "lucide-react";

function Benifits({ title, city }: { title: string; city: string }) {
  return (
    <div className="md:mt-32 mt-28 mb-5  w-full md:w-11/12 mx-auto grid md:grid-cols-2 md:gap-x-5 gap-y-7 grid-cols-1 items-center">
      <div className="px-3 md:px-0 flex flex-wrap md:gap-5 gap-y-5 md:order-1 order-2">
        <div className="bg-white shadow-lg border border-neutral-100 shadow-neutral-100 px-3 py-2 rounded-2xl basis-full md:basis-[48%] flex flex-col items-center justify-center">
          <div className=" w-8 h-8 rounded-full flex items-center justify-center relative">
            <Image
              alt="Affordable Pricing"
              src={pricingimage}
              fill
              className="object-contain"
            />
          </div>
          <p className={`my-2 font-medium text-[18px]`}>Affordable Pricing</p>
          <p className={`gr leading-5 text-center text-[15px]`}>
            Competitive rates to fit any budget without compromising on quality.
          </p>
        </div>
        <div className="bg-white shadow-lg border border-neutral-100 shadow-neutral-100 px-3 py-2 rounded-2xl basis-full md:basis-[48%] flex flex-col items-center justify-center">
          <div className=" w-8 h-8 rounded-full flex items-center justify-center relative">
            <Image
              alt="reliable services"
              src={reliableimage}
              fill
              className="object-contain"
            />
          </div>
          <p
            className={`my-2 font-medium text-[18px]
            `}
          >
            Reliable Service
          </p>
          <p className={`gr leading-5 text-center text-[15px]`}>
            Trust us for dependable, top-notch moving solutions every time.
          </p>
        </div>
        <div className="bg-white shadow-lg border border-neutral-100 shadow-neutral-100 px-3 py-2 rounded-2xl basis-full md:basis-[48%] flex flex-col items-center justify-center">
          <div className=" w-8 h-8 rounded-full flex items-center justify-center relative">
            <Image
              alt="Detailed Planning"
              src={planingimg}
              fill
              className="object-contain"
            />
          </div>
          <p className={`my-2 font-medium text-[18px]`}>Detailed Planning</p>
          <p className={`gr leading-5 text-center text-[15px]`}>
            Every aspect of your move is meticulously organized for efficiency.
          </p>
        </div>
        <div className="bg-white shadow-lg border border-neutral-100 shadow-neutral-100 px-3 py-2 rounded-2xl basis-full md:basis-[48%] flex flex-col items-center justify-center">
          <div className=" w-8 h-8 rounded-full flex items-center justify-center relative">
            <Image
              alt="Trained Team"
              src={teamimage}
              fill
              className="object-contain"
            />
          </div>
          <p className={`my-2 font-medium text-[18px]`}>Trained Team</p>
          <p className={`gr leading-5 text-center text-[15px]`}>
            Our skilled professionals handle your belongings with utmost care.
          </p>
        </div>
      </div>
      <div className="md:p-4 p-0 md:order-2 order-1">
        <h2>{title}</h2>
        <p className={`mt-5 `}>
          We offers comprehensive moving services across the {city}, including
          local and long-distance moves, packing, specialized handling, and
          custom crating. We handle residential, commercial, and emergency
          relocations for a seamless, stress-free experience.
        </p>
        <Button size={"lg"} className="mt-4">
          Contact Us <PhoneCall />
        </Button>
      </div>
    </div>
  );
}

export default Benifits;
