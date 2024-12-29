import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

function ServiceFeatured({
  features,
}: {
  features: {
    ImgSrc: StaticImport;
    name: {
      heading: string;
      subText: string;
    };
  }[];
}) {
  return (
    <section className="relative md:mt-0 mt-10 md:px-4 px-2 sm:px-0">
      <div className="absolute inset-0  h-1/2" />
      <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-4 lg:max-w-screen-lg">
        {features.map((feature) => (
          <div
            key={feature.name.subText}
            className="inline-block p-8 text-center"
          >
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              <Image
                src={feature.ImgSrc}
                width={40}
                height={40}
                alt={`${feature.name.heading} ${feature.name.subText} -icon`}
              />
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              <span className="block text-primary">{feature.name.heading}</span>{" "}
              {feature.name.subText}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceFeatured;
