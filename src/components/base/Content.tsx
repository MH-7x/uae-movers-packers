import Image from "next/image";
import React from "react";

interface ContentProps {
  sectionOne: {
    heading: string;
    imageSrc: string;
    p1: string;
    p2: string;
    p3: string;
  };
  sectiontwo: {
    heading: string;
    imageSrc: string;
    p1: string;
    p2: string;
    p3: string;
  };
}

function Content({ sectionOne, sectiontwo }: ContentProps) {
  return (
    <>
      <section className="md:w-11/12 w-full mx-auto mt-32  grid md:grid-cols-2 grid-cols-1 items-center md:gap-0">
        <div className="md:ml-5">
          <h2 className="mb-5">{sectionOne.heading}</h2>
          <p>{sectionOne.p1}</p>
          <br />
          <p className=" border-l-2 border-primary pl-3 italic">
            {sectionOne.p2}
          </p>
          <p className="mt-4"> {sectionOne.p3}</p>
        </div>
        <div className="flex justify-center  md:ml-10">
          <div className="w-[400px]  h-[450px] relative">
            <Image
              src={sectionOne.imageSrc}
              alt={sectionOne.heading}
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
              src={sectiontwo.imageSrc}
              alt={sectiontwo.heading}
              fill
              className="absolute object-contain md:-mt-5 drop-shadow-2xl"
            />
          </div>
        </div>
        <div className="md:mr-5 md:order-2 order-1">
          <h2 className="mb-5">{sectiontwo.heading}</h2>
          <p>{sectiontwo.p1}</p>
          <br />
          <p className=" border-l-2 border-primary pl-3 italic">
            {sectiontwo.p2}
          </p>
          <p className="mt-4"> {sectiontwo.p3}</p>
        </div>
      </section>
    </>
  );
}

export default Content;
