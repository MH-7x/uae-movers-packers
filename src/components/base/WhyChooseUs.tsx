import React from "react";
import imgSrc from "../../../public/images/whyChooseUs.svg";

import Image from "next/image";
import { Button } from "../ui/button";
function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="md:py-12 mt-28 ">
      <p className="mx-auto md:px-4 py-2 text-primary bg-primary/10 rounded-2xl font-semibold w-max">
        Why Choose Us
      </p>
      <h2 className="text-center md:text-4xl text-[25px] mt-3">
        Why Choose RWahab <br /> Movers UAE Company?
      </h2>
      <div className="mt-24 md:w-11/12 mx-auto w-full grid md:grid-cols-3 gap-x-8 gap-y-4 grid-cols-1">
        <div className="col-span-1 grid grid-rows-2 min-h-96  gap-y-4">
          <div className=" border-b border-primary/50">
            <Button className="w-16 h-16" variant={"ghost"} size={"icon"}>
              <Image
                src={"/images/team.svg"}
                width={40}
                height={40}
                alt="expert team"
              />
            </Button>
            <h3 className="">Expert Team</h3>
            <p className="mt-2 text-muted-foreground text-lg">
              Skilled professionals ensuring safe handling of your belongings.
            </p>
          </div>
          <div className=" border-b border-primary/50">
            <Button className="w-16 h-16" variant={"ghost"} size={"icon"}>
              <Image
                src={"/images/serive.svg"}
                width={40}
                height={40}
                alt="expert team"
              />
            </Button>
            <h3 className="">Affordable Services</h3>
            <p className="mt-2 text-muted-foreground text-lg">
              Competitive pricing tailored to your needs.
            </p>
          </div>
        </div>
        <div className="col-span-1  md:h-96 h-80 relative overflow-hidden rounded-2xl">
          <Image
            src={imgSrc}
            alt="Choose UAE Movers and Packers"
            fill
            className="absolute object-cover"
          />
        </div>
        <div className="col-span-1 grid grid-rows-2 min-h-96 gap-y-4">
          <div className=" border-b border-primary/50">
            <Button className="w-16 h-16" variant={"ghost"} size={"icon"}>
              <Image
                src={"/images/transportation.svg"}
                width={40}
                height={40}
                alt="expert team"
              />
            </Button>
            <h3 className="">Reliable Transportation</h3>
            <p className="mt-2 text-muted-foreground text-lg">
              Modern vehicles equipped for all types of moves.
            </p>
          </div>
          <div className=" border-b border-primary/50">
            <Button className="w-16 h-16" variant={"ghost"} size={"icon"}>
              <Image
                src={"/images/support.svg"}
                width={40}
                height={40}
                alt="expert team"
              />
            </Button>
            <h3 className="">24/7 Support</h3>
            <p className="mt-2 text-muted-foreground text-lg">
              24/7 assistance for a hassle-free experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
