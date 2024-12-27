import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Movers and Packers in UAE | Professional Relocation Services",
};
export default function MoversDubai() {
  return (
    <>
      <div className="mb-16">
        <div className="">
          <div className="py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className=" mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
              <h1 className="max-w-xl mb-6 md:text-5xl md:mx-auto">
                Professional Moving & Packing Company in{" "}
                <span className="text-primary">Dubai</span>
              </h1>
              <h2 className="mt-5 md:text-2xl">
                Seamless Relocation Solutions Across the Dubai
              </h2>
              <p className="text-base text-gray-700 md:text-lg mt-3">
                Planning a move within the UAE or abroad? UAE Movers & Packers
                offers reliable, stress-free relocation services for
                individuals, families, and businesses across Dubai, Abu Dhabi,
                and beyond.
              </p>
            </div>
            <div className="flex items-center sm:justify-center md:gap-x-6 gap-x-3">
              <Button size={"lg"}>Get a Quote</Button>
              <Button size={"lg"} variant={"outline"}>
                Call To Us
              </Button>
            </div>
          </div>
        </div>
        <div className="relative px-4 sm:px-0">
          <div className="absolute inset-0  h-1/2" />
          <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-4 lg:max-w-screen-lg">
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                <span className="block text-primary">30,000+</span> Happy
                Customers
              </p>
            </div>
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                Do it faster
              </p>
            </div>
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                Working harder
              </p>
            </div>
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                Working harder
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
