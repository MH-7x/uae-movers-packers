import React from "react";
import { Button } from "../ui/button";

function HeroSection() {
  return (
    <div className="mx-auto max-w-4xl  md:pt-20 pt-10">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          get your free quote today{" "}
          <a href="#" className="font-semibold text-primary">
            <span aria-hidden="true" className="absolute inset-0"></span>
            Read more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-balance text-4xl  sm:text-7xl">
          UAE MOVERS & PACKERS
        </h1>
        <h2 className="mt-3 text-primary">
          Your Trusted Moving Partner Across the UAE
        </h2>
        <p className=" mt-5 md:text-lg font-medium ">
          We provide seamless relocation services for homes, offices, and
          businesses, ensuring reliability, efficiency, and affordability. With
          expert handling and a commitment to customer satisfaction, we make
          moving stress-free and convenient for our clients.
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-6">
          <Button size={"lg"}>Get a Quote</Button>
          <Button size={"lg"} variant={"outline"}>
            Our Services
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
