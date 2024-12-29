import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Benifits from "../Benifits";
import customers from "../../../../public/locations/users.svg";
import moves from "../../../../public/locations/moves.svg";
import support from "../../../../public/locations/customers-support.svg";
import charges from "../../../../public/locations/hidden-charges.png";
import Image from "next/image";
import Serivces from "@/components/base/Serivces";
import QuoteSection from "@/components/base/RequestQuote";
import LocationCards from "@/components/base/LocationsSlider";
import WhyChooseUsTwo from "@/components/base/WhyChooseUsTwo";
import local from "../../../../public/images/local-knowlage.png";
import demage from "../../../../public/images/demage.png";
import pricing from "../../../../public/images/pricing.png";
import UsedFurnitures from "@/components/base/UsedFurnitures";
import Content from "@/components/base/Content";
export const metadata: Metadata = {
  title: "Top Movers and Packers in UAE | Professional Relocation Services",
};
export default function MoversDubai() {
  return (
    <>
      <section className="py-5 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className=" mb-10 md:mx-auto sm:text-center lg:max-w-3xl md:mb-12">
          <h1 className="max-w-2xl mb-6 md:text-5xl/[3.2rem] text-3xl md:mx-auto">
            Professional Moving & Packing Company in{" "}
            <span className="text-primary">Dubai</span>
          </h1>
          <h2 className="mt-5 font-medium md:text-2xl">
            Seamless Relocation Solutions Across the Dubai
          </h2>
          <p className="text-base text-gray-700 md:text-lg mt-3">
            Planning a move within the UAE or abroad? UAE Movers & Packers
            offers reliable, stress-free relocation services for individuals,
            families, and businesses across Dubai, Abu Dhabi, and beyond.
          </p>
        </div>
        <div className="flex items-center sm:justify-center md:gap-x-6 gap-x-3">
          <Button size={"lg"}>Get a Quote</Button>
          <Button size={"lg"} variant={"outline"}>
            Call To Us
          </Button>
        </div>
      </section>

      <section className="relative md:mt-0 mt-10 md:px-4 px-2 sm:px-0">
        <div className="absolute inset-0  h-1/2" />
        <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-4 lg:max-w-screen-lg">
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              <Image
                src={customers}
                width={40}
                height={40}
                alt="3000+ happay customers -icon"
              />
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              <span className="block text-primary">30,00+</span> Happy Customers
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              <Image
                src={moves}
                width={40}
                height={40}
                alt="1540+ moves completed -icon"
              />
            </div>

            <p className="font-bold tracking-wide text-gray-800">
              <span className="block text-primary">1540+</span> Moves Completed
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              <Image
                src={support}
                width={40}
                height={40}
                alt="24/7 customer support -icon"
              />
            </div>

            <p className="font-bold tracking-wide text-gray-800">
              <span className="block text-primary">27 / 7</span> Customer
              Support
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              <Image
                src={charges}
                width={40}
                height={40}
                alt="0% No Hidden Charges"
              />
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              <span className="block text-primary">0%</span> No Hidden Charges
            </p>
          </div>
        </div>
      </section>
      <Benifits title="Benifits Of Our Moving Services" />
      <Serivces city="Dubai" />
      <WhyChooseUsTwo
        content={[
          {
            title: "Zero Damage Promise",
            desc: "Moving with care is our top priority. Our skilled team handles every item with attention and precision, safeguarding your belongings from start to finish.",
            points: [
              "Quality Packing Materials",
              "Careful Handling",
              "Trained Professionals",
            ],
            image: demage,
          },
          {
            title: "Local Knowledge",
            desc: "As a locally-owned business, we know the ins and outs of moving in Dubai allowing us to offer the best routes and solutions.",
            points: [
              "Expertise in Local Routes",
              "Understanding of Community Needs",
              "Familiar with Local Regulations",
            ],
            image: local,
          },
          {
            title: "Transparent Pricing",
            desc: "Get competitive rates without surprises. With clear pricing and no hidden fees, you’ll know exactly what to expect from the moment you receive your quote.",
            points: [
              "Clear Cost Breakdown",
              "Customizable Plans",
              "Competitive Rates",
            ],
            image: pricing,
          },
        ]}
      />
      <UsedFurnitures city="Dubai" />
      <Content />
      <LocationCards />

      <QuoteSection />
    </>
  );
}
