import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function ServiceHeroSection({
  title,
  desc,
  sub,
}: {
  title: string;
  desc: string;
  sub: string;
}) {
  return (
    <div className="relative md:rounded-none rounded-xl overflow-hidden w-full md:h-[500px] min-h-[450px] md:py-0 ">
      <Image
        src="/service/villa-moving.jpg"
        alt="Home Movers & Packers"
        layout="fill"
        objectFit="cover"
        loading="eager"
        priority // Optional: Loads the image on priority
        className="z-0"
      />

      {/* Overlay Text */}
      <div className="absolute  inset-0 flex items-center justify-center px-2 flex-col z-10 bg-gradient-to-t from-black/90 via-black/80 to-black/60">
        <div className="max-w-5xl flex flex-col items-center justify-center mx-auto">
          <h1 className="text-3xl md:text-5xl text-white text-center ">
            {title}
          </h1>
          <h3 className="my-4 text-violet-400 text-center">{sub}</h3>
          <p className=" md:text-xl text-center text-white">{desc}</p>

          <Button
            variant={"outline"}
            className="mt-8 mx-auto bg-transparent text-white"
            size={"lg"}
          >
            Call Now : +971 50 500 500
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ServiceHeroSection;
