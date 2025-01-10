import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function HeroSection() {
  return (
    <>
      <section className="mx-auto max-w-4xl  md:pt-20 pt-10">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            get your free quote today{" "}
            <a
              href="#"
              aria-hidden="true"
              className="font-semibold text-primary"
            >
              <span aria-hidden="true" className="absolute inset-0"></span>
              Read more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="md:text-center text-start">
          <h1 className=" sm:text-6xl text-4xl uppercase">
            <span className="text-primary">RWahab</span> Movers In UAE
          </h1>
          <h2 className="mt-3 text-primary font-medium">
            Trusted Moving Company In UAE
          </h2>
          {/* <p className=" mt-5 md:text-lg p-1">
            Trusted movers for homes, offices, and businesses, offering
            reliable, efficient, and affordable relocation services. Experience
            stress-free moving with expert handling and unmatched customer care.
          </p> */}
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <Link href="/contact-us">
              <Button size={"lg"}>Get a Quote</Button>
            </Link>
            <Link href={"#services"}>
              <Button size={"lg"} variant={"outline"}>
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
