import React from "react";
import boxes from "../../../public/locations/boxes.svg";
import Image from "next/image";
const QuoteSection: React.FC = () => {
  return (
    <section className="bg-primary text-white md:px-8 px-3 py-12 rounded-lg w-full md:w-11/12 mx-auto mt-32">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3">
          <h2 className="text-sm font-semibold tracking-wide uppercase mb-2">
            Get a Quote
          </h2>
          <h2 className="md:text-4xl/tight drop-shadow-md mb-4">
            We can help you to move. <br />
            <span className="underline decoration-yellow-400">
              Get a quote today
            </span>
          </h2>
          <p className="text-gray-100 my-6">
            Effortless moving made easy. Get a quick quote today for reliable
            and professional moving services tailored to your needs.
          </p>
          <div className="flex  gap-4">
            <button className="bg-blue-500 text-white md:px-6 px-3 py-3 rounded-lg hover:bg-blue-600 transition">
              Get a quote →
            </button>
            <button className="border border-white text-white md:px-6 px-3 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition">
              Learn more
            </button>
          </div>
        </div>
        <div className="mt-0 md:w-1/3 w-full">
          <Image
            alt="Get Your Free Quote -image"
            src={boxes}
            width={400}
            height={400}
            className="w-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
