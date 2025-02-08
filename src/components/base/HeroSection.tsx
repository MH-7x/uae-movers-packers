import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import PreviewVideo from "../previewVideo";

function HeroSection() {
  return (
    <>
      <PreviewVideo />
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
        <div id="hero" className="md:text-center text-start">
          <h1 className=" sm:text-7xl text-4xl uppercase">
            <span className="text-primary">RWahab</span> Movers UAE
          </h1>
          <h2 className="mt-3 text-primary font-medium">
            Best Movers and Packers Company in Dubai UAE
          </h2>
          <p>
            We&apos're expert movers and packers for homes, offices, and businesses,
            providing reliable and affordable relocation services in Dubai, UAE. With detail
            care, we make your move simple and easy.
          </p>
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
