import Image from "next/image";
import { Button } from "../ui/button";

const features = [
  {
    name: "Cost-Effective Solution for Quality Living",
    description:
      "Buying used furniture helps you save significantly without compromising on quality. Get premium furniture pieces at a fraction of the cost, making it an excellent choice for budget-conscious buyers.",
  },
  {
    name: "Sustainable and Eco-Friendly Choice",
    description:
      "Choosing pre-loved furniture reduces waste and minimizes the environmental impact. It’s a small step towards sustainable living while still enjoying stylish, functional items.",
  },
  {
    name: "Unique and Timeless Styles",
    description:
      "Used furniture often includes rare and timeless designs that add character to your space. Find unique items that aren’t easily available in today’s mass-produced market.",
  },
  {
    name: "Thoroughly Inspected for Durability",
    description:
      "Every piece is cleaned and inspected to ensure it's in excellent condition. You get the best value without worrying about quality or usability.",
  },
];

export default function UsedFurnitures() {
  return (
    <>
      <div className="mx-auto  grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-semibold mb-10 text-gray-900 md:text-4xl">
            Used Furniture & Appliances Store
          </h2>
          <h3 className="mt-3">
            Discover Affordable Used Furniture & Appliances
          </h3>
          <p className="mt-4 text-gray-600">
            Looking for high-quality, budget-friendly furniture or appliances?
            At UAE Movers & Packers, we offer a wide selection of pre-loved
            furniture and home appliances to fit your style and needs.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-primary pt-4">
                <dt className="font-medium text-lg text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className=" gap-4 flex flex-wrap items-center justify-evenly sm:gap-6 lg:gap-8">
          <div className="rounded-lg overflow-hidden md:w-60 w-36 md:h-60 h-36 relative">
            <Image
              src={"/images/usedDiningTable.jpg"}
              alt="used Dining Table image"
              fill
              className="rounded-md object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden md:w-60 w-36 md:h-60 h-36 relative">
            <Image
              src={"/images/usedSofa.jpg"}
              alt="used Sofa image"
              fill
              className="rounded-md object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden md:w-60 w-36 md:h-60 h-36 relative">
            <Image
              src={"/images/usedBeds.jpg"}
              alt="used Beds image"
              fill
              className="rounded-md object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden md:w-60 w-36 md:h-60 h-36 relative">
            <Image
              src={"/images/usedWashingMachine.jpg"}
              alt="used Washing Machine image"
              fill
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-5  max-w-3xl mx-auto w-full">
        <h2 className="text-center">
          Explore Our Used Furniture Collection Today!
        </h2>
        <p className="text-center text-lg mt-3">
          Discover affordable, eco-friendly, and high-quality furniture pieces
          that bring style and value to your space. Shop our curated collection
          now!
        </p>
        <div className="flex justify-center flex-wrap gap-5  mt-3">
          <Button size={"lg"}>Contact Now</Button>
          <Button size={"lg"} variant={"outline"}>
            View All..
          </Button>
        </div>
      </div>
    </>
  );
}
