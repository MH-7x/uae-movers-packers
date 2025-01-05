import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Hero({
  title,
  desc,
  sec,
}: {
  title: string;
  desc: string;
  sec?: string;
}) {
  return (
    <section className="items-center md:px-6 px-3 lg:flex">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-lg">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
            {title}
            {sec && <span className="text-primary md:block"> {sec}</span>}
          </h1>

          <p className="mt-3 text-gray-700 text-base">{desc}</p>

          <Link href={"#used-furniture-collections"}>
            <Button className="w-full lg:w-auto mt-3">Explore Now !</Button>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
        <img
          className="w-full h-full lg:max-w-3xl"
          src="/furitures/hero.svg"
          alt="Catalogue-pana.svg"
        />
      </div>
    </section>
  );
}

export default Hero;
