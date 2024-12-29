import Image from "next/image";
import React from "react";

function Content() {
  return (
    <>
      <section className="md:w-11/12 w-full mx-auto mt-32  grid md:grid-cols-2 grid-cols-1 items-center md:gap-0">
        <div className="  md:ml-5">
          <h2 className="mb-5">Expert Relocation Company in Dubai</h2>
          <p>
            Looking for reliable movers in Dubai? UAE Movers & Packers provides
            tailored moving solutions for all your relocation needs. Share your
            project details with us to get an accurate quote based on your
            requirements.
          </p>
          <br />
          <p className=" border-l-2 border-primary pl-3 italic">
            Whether it’s moving to or from a property with a cellar, attic, or
            high floors, handling fragile valuables, or needing storage before
            moving into your new home, we’ve got you covered.
          </p>
          <p className="mt-4">
            When choosing trusted movers and packers, ensure the company meets
            consumer trust standards and delivers services that match your
            expectations. Contact UAE Movers & Packers for professional
            relocation services and request your free quote today!
          </p>
        </div>
        <div className="flex justify-center  md:ml-10">
          <div className="w-[400px]  h-[450px] relative">
            <Image
              src={"/locations/UAE-Movers-&-Packers.png"}
              alt="Expert Relocation Company in Dubai"
              fill
              className="absolute object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>
      <section className="md:w-11/12 w-full mx-auto mt-10 mb-10   grid md:grid-cols-2 grid-cols-1 items-center md:gap-0">
        <div className="flex justify-center md:order-1 order-2 md:mr-10">
          <div className="w-[400px] h-[450px] relative">
            <Image
              src={"/locations/Best-Movers-In-Dubai.png"}
              alt="Expert Relocation Company in Dubai"
              fill
              className="absolute object-contain md:-mt-5 drop-shadow-2xl"
            />
          </div>
        </div>
        <div className="md:mr-5 md:order-2 order-1">
          <h2 className="mb-5">Proficient Movers and Packers in Dubai</h2>
          <p>
            To hire movers in Dubai, you can find out from your surroundings,
            your colleagues or your friends may already have used a professional
            moving company in Dubai.
          </p>
          <br />
          <p className=" border-l-2 border-primary pl-3 italic">
            Of course, all moving companies have detailed profiles on the
            Internet to give a precise idea of the cost that will involve your
            departure.
          </p>
          <p className="mt-4">
            In order to avoid unpleasant surprises, it is advised to prefer
            professional movers Dubai who are certified like UAE Movers &
            Packers.
          </p>
        </div>
      </section>
    </>
  );
}

export default Content;
