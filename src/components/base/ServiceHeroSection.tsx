import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

function ServiceHeroSection({
  description,
  subtitle,
  title,
}: HeroSectionProps) {
  return (
    <section className="py-5 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className=" mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
        <h1 className="max-w-4xl mb-6 md:text-4xl  text-3xl md:mx-auto">
          {title}
        </h1>
        <h2 className="mt-5 font-medium md:text-2xl text-primary">
          {subtitle}
        </h2>
        <p className="text-base text-gray-700 md:text-lg mt-3">{description}</p>
      </div>
      <div className="flex items-center sm:justify-center md:gap-x-6 gap-x-3">
        <Link href={"/contact-us"}>
          <Button size={"lg"}>Get a Quote</Button>
        </Link>
        <Link aria-label="Call To Us" href={"tel:+971506638692"}>
          <Button size={"lg"} variant={"outline"}>
            Call To Us
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default ServiceHeroSection;
