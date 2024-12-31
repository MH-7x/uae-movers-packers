import { BadgeCheckIcon } from "lucide-react";
import React from "react";

interface ThreeContentProps {
  content: {
    heading: string;
    lis: string[];
  }[];
}
const ThreeContent = ({ content }: ThreeContentProps) => {
  return (
    <section className="md:mt-24 md:px-6 px-3 mt-16 g grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-3">
      {content.map((cont) => (
        <div key={cont.heading} className=" px-4 py-8 bg-white">
          <h2 className="text-xl ">{cont.heading}</h2>
          <ul className="mt-5">
            {cont.lis.map((li, i) => (
              <div key={i} className="block">
                <BadgeCheckIcon className="text-primary inline " />
                <li className="inline ">{li}</li>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ThreeContent;
