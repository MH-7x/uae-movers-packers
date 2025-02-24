import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ServiceSideMenu from "@/components/ServiceSideMenu";
import { ThumbsUp } from "lucide-react";
import Link from "next/link";
import FAQs from "@/components/base/FAQs";

export const metadata: Metadata = {
  title: "Heavy Goods & Large Items Moving in UAE | Professional & Affordable",
  description:
    "Expert heavy goods moving services in the UAE. RWahab Movers UAE ensures safe, efficient transportation of bulky items with professional handling and care.",
  alternates: {
    canonical: `${process.env.PUBLIC_URL}/heavy-goods-moving`,
  },
  openGraph: {
    type: "website",
    locale: "en-AE",
    countryName: "United Arab Emirates",
    emails: "wk0131839@gamil.com",
    faxNumbers: "+971503806855",
    phoneNumbers: "+971503806855",
    siteName: "RWahab Movers UAE",
    title:
      "Heavy Goods & Large Items Moving in UAE | Professional & Affordable",
    description:
      "Expert heavy goods moving services in the UAE. RWahab Movers UAE ensures safe, efficient transportation of bulky items with professional handling and care.",
    images: `${process.env.PUBLIC_URL}/service/heavy-goods.jpg`,
    url: `${process.env.PUBLIC_URL}/heavy-goods-moving`,
  },
};
function HeavyGoodsMoving() {
  return (
    <>
      <section className="md:mt-32 mt-16 border">
        <div className="relative overflow-hidden w-full min-h-[500px]  md:py-0 ">
          <Image
            src="/service/heavy-goods.jpg"
            alt="Heavy Goods Moving UAE"
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
                Heavy Goods Moving Services in UAE
              </h1>
              <h3 className="my-4 text-violet-400 text-center ">
                Comprehensive Heavy Item Relocation Solutions
              </h3>
              <p className=" md:text-xl text-center text-white">
                Expert solutions for relocating heavy items, ensuring safe
                handling, precision, and hassle-free transport.
              </p>

              <Button
                variant={"outline"}
                className="mt-8 mx-auto bg-transparent text-white"
                size={"lg"}
              >
                <Link aria-label="Call To Us" href="tel:+971503806855">
                  {" "}
                  Call Now : +971 50 38068 55
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <article className="grid md:grid-cols-6 grid-cols-1 gap-x-4 md:px-10 md:mt-20 mt-16 items-start">
        <div className="md:col-span-4 col-span-1 md:pr-10">
          <p>
            Moving heavy goods requires specialized equipment and expertise to
            ensure safety and efficiency. Our professional team is equipped to
            handle the relocation of bulky items, including:
          </p>
          <div className="mt-10">
            <h3 className="text-xl mt-4">Industrial machinery</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Safe and efficient relocation of industrial-grade machinery.
            </p>
            <h3 className="text-xl mt-4">Large furniture pieces</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Expert handling and transport of oversized furniture.
            </p>
            <h3 className="text-xl mt-4">Heavy appliances</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Secure moving solutions for bulky home and office appliances.
            </p>
            <h3 className="text-xl mt-4">Safe lockers</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Trusted services for transporting secure and heavy safes.
            </p>
            <h3 className="text-xl mt-4">Construction equipment</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Reliable relocation of large construction tools and machinery.
            </p>
          </div>
          <h2 className="mt-20">Why Choose Our Heavy Goods Moving Services?</h2>
          <p>
            From small apartments to large villas, our professional movers are
            equipped to handle any home move efficiently. Here’s a detailed look
            at our services:
          </p>
          <div className=" grid md:grid-cols-2 md:px-5 grid-cols-1 gap-5 mt-5">
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md px-3 py-4">
              <h3>Expertise and Experience</h3>
              <p className="text-sm ">
                Our team comprises skilled professionals with extensive
                experience in handling and transporting heavy items safely.
              </p>
            </div>
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md px-3 py-4">
              <h3>Specialized Equipment</h3>
              <p className="text-sm ">
                We utilize advanced tools such as dollies, cranes, and harnesses
                to manage the relocation of heavy goods efficiently.
              </p>
            </div>
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md px-3 py-4">
              <h3>Comprehensive Insurance</h3>
              <p className="text-sm ">
                We offer insurance coverage to protect your valuable items
                during the moving process, providing peace of mind.
              </p>
            </div>
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md px-3 py-4">
              <h3>Customized Solutions</h3>
              <p className="text-sm ">
                We tailor our services to meet your specific needs, ensuring a
                seamless and stress-free moving experience.
              </p>
            </div>
          </div>
          <h2 className="mt-20">Our Heavy Goods Moving Process</h2>
          <p>
            We follow a step-by-step process to make your home move smooth and
            organized:
          </p>
          <div className=" grid md:grid-cols-2 md:px-5 grid-cols-1 gap-5 mt-5">
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md px-3 py-4">
              <Image
                src={"/service/consultation.png"}
                alt="cons"
                width={64}
                height={64}
                className="mb-3"
              />
              <p className="h3">1. Initial Consultation</p>
              <p className="text-sm ">
                We assess your moving requirements and provide a detailed plan
                and quotation.
              </p>
            </div>
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md px-3 py-4">
              <Image
                src={"/service/packing.png"}
                alt="packing"
                width={64}
                height={64}
                className="mb-3"
              />
              <p className="h3">2. Preparation and Packing</p>
              <p className="text-sm ">
                Our team carefully packs and prepares your heavy items for safe
                transportation.
              </p>
            </div>
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md px-3 py-4">
              <Image
                src={"/service/transportation.png"}
                alt="transportation"
                width={64}
                height={64}
                className="mb-3"
              />
              <p className="h3">3. Transportation</p>
              <p className="text-sm ">
                We transport your items using specialized vehicles designed for
                heavy goods.
              </p>
            </div>
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md px-3 py-4">
              <Image
                src={"/service/unpacking.png"}
                alt="unpacking"
                width={64}
                height={64}
                className="mb-3"
              />
              <p className="h3">4. Unloading and Setup</p>
              <p className="text-sm ">
                Upon arrival, we unload and, if required, assist in setting up
                your heavy items at the new location.
              </p>
            </div>
          </div>
          <h2 className="mt-20">Safety Measures and Equipment</h2>

          <p>
            Ensuring the safety of your belongings and our team is our top
            priority. We employ:
          </p>

          <ul>
            <li>
              {" "}
              <ThumbsUp className="inline size-5 mr-4" /> Proper protective gear
              for all team members
            </li>
            <li>
              {" "}
              <ThumbsUp className="inline size-5 mr-4" /> Use of dollies, carts,
              and furniture sliders for efficient movement
            </li>
            <li>
              {" "}
              <ThumbsUp className="inline size-5 mr-4" /> Adherence to safety
              protocols during loading and unloading
            </li>
          </ul>
        </div>
        <div className="md:col-span-2 col-span-1 md:px-3 py-5 ">
          <ServiceSideMenu />
        </div>
      </article>
      <FAQs
        Faqs={[
          {
            question: "What are heavy goods moving services?",
            answer:
              "Heavy goods moving services specialize in the transportation of large and bulky items, such as furniture, machinery, and equipment, using specialized tools and vehicles.",
          },
          {
            question:
              "Do you provide heavy goods moving services across the UAE?",
            answer:
              "Yes, we offer heavy goods moving services across all major cities in the UAE, including Dubai, Sharjah, Abu Dhabi, and Ajman.",
          },
          {
            question: "What items are considered heavy goods?",
            answer:
              "Heavy goods typically include large furniture, industrial equipment, heavy appliances, safes, and construction machinery.",
          },
          {
            question:
              "How do you ensure the safety of heavy goods during transportation?",
            answer:
              "We use specialized equipment like dollies, cranes, and harnesses, along with proper packing techniques and trained professionals to ensure the safety of your heavy goods.",
          },
          {
            question: "Do you offer insurance for heavy goods during moving?",
            answer:
              "Yes, we provide comprehensive insurance coverage to protect your heavy goods against potential damage during the moving process.",
          },
          {
            question:
              "What factors determine the cost of heavy goods moving services?",
            answer:
              "The cost depends on factors such as the size and weight of the items, the distance of the move, required equipment, and any additional services like packing and unpacking.",
          },
          {
            question:
              "How far in advance should I book heavy goods moving services?",
            answer:
              "It’s recommended to book at least 1-2 weeks in advance to ensure availability and proper planning for your move.",
          },
          {
            question:
              "Can you handle moving heavy goods from high-rise buildings in the UAE?",
            answer:
              "Yes, we are equipped to handle moves from high-rise buildings, using specialized equipment and adhering to building regulations in the UAE.",
          },
        ]}
      />
    </>
  );
}

export default HeavyGoodsMoving;
