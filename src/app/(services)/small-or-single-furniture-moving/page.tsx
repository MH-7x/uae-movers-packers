import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ServiceSideMenu from "@/components/ServiceSideMenu";
import Link from "next/link";
import FAQs from "@/components/base/FAQs";

export const metadata: Metadata = {
  title:
    "Affordable Small Furniture Movers in UAE | Single Item Moving Services",
  description:
    "Need small furniture movers in the UAE? Get affordable, reliable single-item moving services with expert packing, handling, and fast delivery in Dubai, Sharjah, and Abu Dhabi.",
  alternates: {
    canonical: `${process.env.PUBLIC_URL}/small-or-single-furniture-moving`,
  },
  openGraph: {
    title:
      "Affordable Small Furniture Movers in UAE | Single Item Moving Services",
    description:
      "Need small furniture movers in the UAE? Get affordable, reliable single-item moving services with expert packing, handling, and fast delivery in Dubai, Sharjah, and Abu Dhabi.",
    images: `${process.env.PUBLIC_URL}/service/small-furniture-moving.jpg`,
    url: `${process.env.PUBLIC_URL}/small-or-single-furniture-moving`,
  },
};
function VillaMoving() {
  return (
    <>
      <section className="md:mt-32 mt-16 border">
        <div className="relative overflow-hidden w-full min-h-[500px]  md:py-0 ">
          <Image
            src="/service/small-furniture-moving.jpg"
            alt="Small / Single Furniture Moving Services in UAE"
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
                Professional Small Furniture Moving in UAE
              </h1>
              <h3 className="my-4 text-violet-400 text-center">
                Reliable Small Furniture Moving Services Across UAE
              </h3>
              <p className=" md:text-xl text-center text-white">
                Simplify your move with our professional small furniture moving
                services. We ensure safe, affordable, and hassle-free relocation
                for single items across Dubai, Sharjah, and Abu Dhabi.
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
            Moving a single piece of furniture? Whether it&apos;s a small sofa,
            a wardrobe, or an antique chair, we&apos;ve got you covered. At UAE
            Movers & Packers, we specialize in moving small and single furniture
            items with precision and care, ensuring hassle-free relocation
            across the UAE.
          </p>
          <h2>Why Choose Our Small Furniture Movers?</h2>
          <p>
            Discover why our small furniture movers are the best choice. Enjoy
            affordable rates, expert handling, and fast service tailored for
            single-item relocations across the UAE.
          </p>
          <ul>
            <li>
              <h3 className="text-lg">Affordable Rates:</h3> We understand that
              moving one piece of furniture shouldn&apos;t break the bank. Our
              pricing is transparent and budget-friendly.
            </li>
            <li>
              <h3 className="text-lg">Professional Handling: </h3> From packing
              to transportation, our experts handle your items with the utmost
              care to prevent damage.
            </li>
            <li>
              <h3 className="text-lg">Services Available Across UAE:</h3>{" "}
              Whether you&apos;re in Dubai, Sharjah, Abu Dhabi, or Ajman, our
              small furniture moving services are just a call away.
            </li>
          </ul>

          <h2 className="mt-20">
            Our Comprehensive Small Furniture Moving Services
          </h2>
          <p>
            From small apartments to large villas, our professional movers are
            equipped to handle any home move efficiently. Here’s a detailed look
            at our services:
          </p>
          <div className=" grid md:grid-cols-2 md:px-5 grid-cols-1 gap-5 mt-5">
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md p-3">
              <h3>Single Item Moving</h3>
              <p className="text-sm ">
                Need to move a single item? Whether it’s a bed, a table, or an
                armchair, our dedicated service ensures safe transport to your
                desired location.
              </p>
              <Button variant={"link"}>Contact Us</Button>
            </div>
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md p-3">
              <h3>Packing and Unpacking</h3>
              <p className="text-sm ">
                We provide high-quality packing materials and professional
                packing services to ensure your furniture is secure during
                transit.
              </p>
              <Button variant={"link"}>Contact Us</Button>
            </div>
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md p-3">
              <h3>Furniture Assembly and Dismantling</h3>
              <p className="text-sm ">
                Our skilled team can dismantle large items and reassemble them
                at the new location.
              </p>
              <Button variant={"link"}>Contact Us</Button>
            </div>
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md p-3">
              <h3>Customized Solutions</h3>
              <p className="text-sm ">
                We offer tailored services for unique furniture pieces,
                including antiques and delicate items, ensuring they receive
                special care.
              </p>
              <Button variant={"link"}>Contact Us</Button>
            </div>
          </div>

          <h2 className="mt-20">Our Single Furniture Moving Process</h2>
          <p>
            We follow a systematic approach to ensure safe and efficient single
            furniture relocation:
          </p>
          <div className="grid md:grid-cols-2 md:px-5 grid-cols-1 gap-5 mt-5">
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md p-3">
              <Image
                src={"/service/consultation.png"}
                alt="consultation"
                width={64}
                height={64}
                className="mb-3"
              />
              <p className="h3">Initial Consultation and Planning</p>
              <p className="text-sm">
                We assess your furniture moving requirements and develop a
                detailed plan tailored to your needs.
              </p>
            </div>
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md p-3">
              <Image
                src={"/service/packing.png"}
                alt="packing"
                width={64}
                height={64}
                className="mb-3"
              />
              <p className="h3">Careful Packing and Labeling</p>
              <p className="text-sm">
                Our team carefully packs and labels your furniture to ensure its
                safety during the move.
              </p>
            </div>
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md p-3">
              <Image
                src={"/service/transportation.png"}
                alt="transportation"
                width={64}
                height={64}
                className="mb-3"
              />
              <p className="h3">Secure Transportation</p>
              <p className="text-sm">
                Your furniture is transported in our secure, well-maintained
                vehicles to its new destination.
              </p>
            </div>
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md p-3">
              <Image
                src={"/service/unpacking.png"}
                alt="unpacking"
                width={64}
                height={64}
                className="mb-3"
              />
              <p className="h3">Setup and Placement</p>
              <p className="text-sm">
                We unpack and position your furniture exactly where you want it
                in your new space.
              </p>
            </div>
          </div>

          <h2 className="mt-20 text-center">
            Benefits of Choosing Us for Small Furniture Moving{" "}
          </h2>
          <p>
            From small office to large coporates, our professional movers are
            equipped to handle any home move efficiently. Here’s a detailed look
            at our services:
          </p>
          <div className="mt-10">
            <h3 className="text-xl">
              Specialized Equipment for Furniture Transport
            </h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Our trucks are equipped with the latest tools and safety features
              to handle even the most delicate items.
            </p>
            <h3 className="text-xl mt-5">Eco-Friendly Packing Solutions</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              We use sustainable packing materials to reduce waste and protect
              the environment.
            </p>
            <h3 className="text-xl mt-5">Same-Day Services</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              In a hurry? We offer same-day pickup and delivery services for
              single furniture items.
            </p>
          </div>
          <h2 className="mt-10">
            How much do we charge for small furniture moving?
          </h2>
          <p className="text-base ">
            Normally we charge a fixed amount according to the distance and
            weight of the item. Like estimated charges for moving a Sofa within
            Dubai are 400 AED. But this varies on distance because if you move
            from Dubai to Abu Dhabi then the price will be different.
          </p>
          <h2>Service Areas for Small Furniture Movers</h2>
          <ul>
            <li>
              <h3 className="text-lg">
                Small / Single Furniture Moving Dubai, UAE
              </h3>
            </li>
            <li>
              <h3 className="text-lg">
                Small / Single Furniture Moving Sharjah, UAE
              </h3>
            </li>
            <li>
              <h3 className="text-lg">
                Small / Single Furniture Moving Ajman, UAE
              </h3>
            </li>
            <li>
              <h3 className="text-lg">
                Small / Single Furniture Moving Umm Al Quwain, UAE
              </h3>
            </li>
            <li>
              <h3 className="text-lg">
                Small / Single Furniture Moving Abu Dhabi, UAE
              </h3>
            </li>
            <li>
              <h3 className="text-lg">
                Small / Single Furniture Moving Ras Al Khaimah, UAE
              </h3>
            </li>
            <li>
              <h3 className="text-lg">
                Small / Single Furniture Moving Al Ain, UAE
              </h3>
            </li>
            <li>
              <h3 className="text-lg">
                Small / Single Furniture Moving Fujairah, UAE
              </h3>
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
            question:
              "How much does it cost to move a single piece of furniture?",
            answer:
              "The cost depends on the size, weight, and distance of the move. Contact us for a personalized quote.",
          },
          {
            question: "Do you provide packing materials?",
            answer:
              "Yes, we offer premium packing materials to ensure your furniture is well-protected during the move.",
          },
          {
            question: "Can you handle delicate or antique furniture?",
            answer:
              "Absolutely. We specialize in moving delicate, valuable, or antique furniture with extra care.",
          },
          {
            question: "What is included in your moving services?",
            answer:
              "Our moving services include packing, loading, transportation, unloading, and unpacking, all with expert handling.",
          },
          {
            question: "Do you offer storage solutions during the move?",
            answer:
              "Yes, we offer secure storage solutions for your furniture if you need to store items temporarily during the move.",
          },
          {
            question: "How do I prepare for my furniture move?",
            answer:
              "We recommend clearing pathways, packing small items separately, and ensuring all furniture is ready for transportation.",
          },
          {
            question: "Are your moving services insured?",
            answer:
              "Yes, we offer insurance for your furniture during the move to provide peace of mind.",
          },
          {
            question: "How far in advance should I book my furniture move?",
            answer:
              "We recommend booking at least one week in advance, especially during peak seasons, to secure your preferred time slot.",
          },
        ]}
      />
    </>
  );
}

export default VillaMoving;
