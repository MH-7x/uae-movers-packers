import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ServiceSideMenu from "@/components/ServiceSideMenu";
import Link from "next/link";
import FAQs from "@/components/base/FAQs";

export const metadata: Metadata = {
  title: "Moving and Cargo Packing Service | RWahab Movers UAE",
  description:
    "Professional Moving and Cargo Packing Services for Safe and Efficient Relocation. Serveice in Dubai, Sharjah, Abu Dhabi in UAE.",
  alternates: {
    canonical: `${process.env.PUBLIC_URL}/moving-and-cargo-packing`,
  },
  openGraph: {
    title: "Moving and Cargo Packing Service | RWahab Movers UAE",
    description:
      "Professional Moving and Cargo Packing Services for Safe and Efficient Relocation. Serveice in Dubai, Sharjah, Abu Dhabi in UAE.",
    images: `${process.env.PUBLIC_URL}/service/moving-and-cargo-packing.jpg`,
    url: `${process.env.PUBLIC_URL}/moving-and-cargo-packing`,
  },
};
function VillaMoving() {
  return (
    <>
      <section className="md:mt-32 mt-16 border">
        <div className="relative overflow-hidden w-full min-h-[500px]  md:py-0 ">
          <Image
            src="/service/moving-and-cargo-packing.jpg"
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
                Professional Moving and Cargo Packing Services in UAE
              </h1>
              <h3 className="my-4 text-violet-400 text-center">
                Quality Packing For Your Moving Experience
              </h3>
              <p className=" md:text-xl text-center text-white">
                Simplify your move with our professional home and cargo packing
                services. We ensure safe, affordable, and hassle-free relocation
                for Cargo and Furnitures across Dubai, Sharjah, and Abu Dhabi.
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
            Moving to a new home or office can be a daunting task, but UAE
            Movers & Packers is here to make your relocation experience smooth
            and hassle-free. With a commitment to excellence and years of
            experience in the logistics industry, we provide professional moving
            and cargo packing services tailored to your needs across all cities
            in the UAE.
          </p>
          <h2>
            Why Choose UAE Movers & Packers for Your Moving and Cargo Packing
            Needs?
          </h2>
          <p>
            Selecting a trusted partner is crucial for a successful move. Here’s
            why UAE Movers & Packers is the right choice for you:
          </p>
          <ul>
            <li>
              <h3 className="text-lg">Expert Team:</h3> Our trained
              professionals understand the nuances of packing and moving,
              ensuring your belongings are safe and secured.
            </li>
            <li>
              <h3 className="text-lg">Quality Materials: </h3> We utilize only
              the highest quality packing materials such as durable boxes,
              bubble wrap, and specialty packing for fragile items.
            </li>
            <li>
              <h3 className="text-lg">SComprehensive Solutions:</h3> From local
              to international moves, we offer personalized packing plans to fit
              your specific needs.
            </li>
          </ul>

          <h2 className="mt-20">
            Comprehensive Packing Solutions Across the UAE
          </h2>
          <p>
            From small apartments to large villas, our professional movers are
            equipped to handle any home move efficiently. Here’s a detailed look
            at our services:
          </p>
          <div className=" grid md:grid-cols-2 md:px-5 grid-cols-1 gap-5 mt-5">
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md p-3">
              <h3>Residential Packing Services</h3>
              <p className="text-sm ">
                Our residential packing services cater to families and
                individuals throughout the UAE. We provide all-inclusive
                solutions that encompass packing, loading, and unloading, so you
                can focus on settling into your new home.
              </p>
              <Button variant={"link"}>Contact Us</Button>
            </div>
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md p-3">
              <h3>Commercial Packing Services</h3>
              <p className="text-sm ">
                UAE Movers & Packers specializes in commercial packing services
                for businesses of all sizes. Our efficient approach protects
                your assets while minimizing downtime and disruption to your
                operations, allowing for a seamless transition to your new
                office.
              </p>
              <Button variant={"link"}>Contact Us</Button>
            </div>
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md p-3">
              <h3>Specialized Cargo Packing</h3>
              <p className="text-sm ">
                For unique shipping needs, our specialized cargo packing
                services guarantee that oversized or delicate items are securely
                packed. Whether it’s artwork, electronics, or other valuable
                goods, we use professional-grade materials and techniques to
                ensure safe transport.
              </p>
              <Button variant={"link"}>Contact Us</Button>
            </div>
          </div>

          <h2 className="mt-20 text-center">
            Essential Packing Materials & Techniques
          </h2>
          <p>
            Using the right packing materials is essential for protecting your
            items during the move. At UAE Movers & Packers, we provide:
          </p>
          <div className="mt-10">
            <h3 className="text-xl">Heavy-Duty Boxes:</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Available in various sizes for all types of items.
            </p>
            <h3 className="text-xl mt-5">Bubble Wrap and Foam Packing:</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Perfect for protecting fragile items from damage.
            </p>
            <h3 className="text-xl mt-5">Packing Paper and Tape:</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Ensures secure packing and cushioning.
            </p>
          </div>

          <h2 className="mt-20">Our Moving & Cargo Packing Process</h2>
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
            Benefits of Choosing Us Moving or Cargo Packing Services
          </h2>
          <p>
            Opt for UAE Movers & Packers to enjoy expert handling, top-quality
            materials, tailored solutions, and hassle-free relocation across the
            UAE. Our reliable team ensures your belongings are secure and your
            moving experience is seamless.
          </p>
          <div className="mt-10">
            <h3 className="text-xl">
              Advanced Equipment for Furniture Transport
            </h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Our fleet is equipped with cutting-edge tools and safety features,
              ensuring safe handling of even your most fragile items.
            </p>
            <h3 className="text-xl mt-5">Sustainable Packing Solutions</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              We prioritize the planet by utilizing eco-friendly packing
              materials that minimize waste and support environmental
              conservation.
            </p>
            <h3 className="text-xl mt-5">Swift Same-Day Services</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Need a quick turnaround? We provide same-day pickup and delivery
              options for individual furniture pieces to meet your urgent needs.
            </p>
          </div>
        </div>
        <div className="md:col-span-2 col-span-1 md:px-3 py-5 ">
          <ServiceSideMenu />
        </div>
      </article>
      <FAQs
        Faqs={[
          {
            question: "What areas in the UAE do you serve?",
            answer:
              "UAE Movers & Packers proudly serves customers throughout the UAE, including all major cities. No matter where you are located, we have you covered!",
          },
          {
            question: "How much notice do you need for a packing service?",
            answer:
              "To ensure the best service, we recommend booking at least one week in advance. However, we can accommodate urgent requests whenever possible.",
          },
          {
            question: "What are your rates for moving and packing services?",
            answer:
              "Our pricing is designed to fit a variety of budgets, depending on your specific needs and the complexity of the job. Contact us for a personalized, free quote.",
          },
          {
            question: "Do you offer insurance for my belongings?",
            answer:
              "Yes, we provide insurance options for your belongings during the move to ensure peace of mind.",
          },
          {
            question: "Can you handle piano or antique furniture moving?",
            answer:
              "Absolutely! Our specialized team is trained to safely move pianos and delicate antique furniture.",
          },
          {
            question: "What packing materials do you use?",
            answer:
              "We use high-quality, eco-friendly packing materials, including boxes, bubble wrap, and packing peanuts to ensure your items are secure.",
          },
          {
            question: "Are your workers trained and insured?",
            answer:
              "Yes, all our team members are fully trained and insured for your safety and satisfaction.",
          },
          {
            question: "What should I do to prepare for the moving day?",
            answer:
              "We recommend decluttering your home, labeling boxes, and making a checklist of items to be moved for a smooth transition.",
          },
        ]}
      />
    </>
  );
}

export default VillaMoving;
