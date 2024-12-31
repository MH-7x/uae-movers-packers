import Content from "@/components/base/Content";
import FAQs from "@/components/base/FAQs";
import ShowProducts from "@/components/ShowProducts";

import {
  ArrowRightIcon,
  BedDouble,
  Headphones,
  TimerIcon,
  Users2Icon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import Hero from "../Hero";
import ThreeContent from "../ThreeContent";
import ServiceFurnitures from "../ServiceFurnitures";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Buy & Sell Used Furniture Abu Dhabi | Home Appliances Buyers in Abu Dhabi",
  description:
    "Looking to buy or sell used furniture in Abu Dhabi? Contact us, Abu Dhabi’s professional home appliance buyers, offering advanced services for buying used TVs, washing machines, water dispensers, and LED TVs.",
};

const FurnituresDubai = () => {
  return (
    <section className="container pt-7 mx-auto">
      <Hero
        title="Buy and Sell Used Furniture in Abu Dhabi With"
        sec="UAE Movers & Packers"
        desc="Are you looking for the best place to buy or sell used furniture in Abu Dhabi? UAE Movers & Packers offers a trusted platform to help you find premium-quality, affordable furniture or connect with buyers for your pre-owned items."
      />

      <section className="mt-32 md:px-6 px-3">
        <h2 className="text-center md:max-w-xl mx-auto">
          Your Trusted Partner for Used Furniture in Abu Dhabi
        </h2>
        <p className="max-w-4xl text-center mt-3 mx-auto text-gray-700">
          We Are Abu Dhabi’s go-to Dealers For Buying And Selling Pre-Owned
          Furniture. Offering Unbeatable Prices, Call Us Now To Sell Your Used
          Furniture In Abu Dhabi Or Visit Our Store To Buy Affordable
          Second-Hand Furniture And Appliances.
        </p>
      </section>

      <ThreeContent
        content={[
          {
            heading: "Extensive Range of Used Furniture",
            lis: [
              "Browse a wide variety of home and office furniture options.",
              "Discover sofas, beds, dining sets, office desks, and chairs.",
              "Our team evaluates the quality and market worth of your items to secure the best deal for you.",
            ],
          },
          {
            heading: "Budget-Friendly Prices",
            lis: [
              "We connect you with reliable buyers and sellers offering competitive rates.",
              "Get access to durable furniture at a fraction of retail prices.",
              "Upon deal confirmation, immediate payment is provided for your convenience.",
            ],
          },
          {
            heading: "Reliable Buyers and Sellers",
            lis: [
              "Collaborate with trusted buyers and sellers for secure transactions.",
              "Leverage our expertise in the moving and packing sector for smooth operations.",
              "Our professional team ensures careful handling of your furniture for a hassle-free experience.",
            ],
          },
        ]}
      />
      <section className="mt-32 md:px-6 px-3">
        <h2>Get Started Today!</h2>
        <p className="text-lg mt-2 text-gray-700">
          Looking to sell your used furniture? We make the process quick,
          straightforward, and stress-free.
        </p>
        <div className="mt-10 grid md:grid-cols-12 min-h-64 md:ml-20 grid-cols-1">
          <div className="md:col-span-3 bg-gradient-to-br from-primary to-violet-700 rounded-2xl p-3">
            <Image
              src={"/call.svg"}
              className=" mx-auto mt-3"
              width={50}
              height={50}
              alt="Call To Us"
            />
            <h3 className="text-xl text-white drop-shadow-md mt-8">
              Step 1: Contact Us
            </h3>
            <p className="text-gray-100 mt-2 text-sm">
              Call us today! Our team will schedule a visit at your convenience
              to assess your furniture.
            </p>
          </div>
          <div className="md:col-span-1  flex items-center justify-center md:py-0 py-4">
            <ArrowRightIcon className="text-primary h-10 w-10 mx-auto md:rotate-0 rotate-90 " />
          </div>
          <div className="md:col-span-3 bg-gradient-to-br from-primary to-violet-700 rounded-2xl p-3">
            <Image
              src={"/team.svg"}
              className=" mx-auto mt-3"
              width={50}
              height={50}
              alt="Call To Us"
            />
            <h3 className="text-xl text-white drop-shadow-md mt-8">
              Step 2: Detailed Evaluation
            </h3>
            <p className="text-gray-100 mt-2 text-sm">
              Our experts will inspect the condition of your furniture to
              provide an accurate valuation.
            </p>
          </div>
          <div className="md:col-span-1  flex items-center justify-center md:py-0 py-4">
            <ArrowRightIcon className="text-primary h-10 w-10 mx-auto md:rotate-0 rotate-90" />
          </div>
          <div className="md:col-span-3 bg-gradient-to-br from-primary to-violet-700 rounded-2xl p-3">
            <Image
              src={"/payment.svg"}
              className=" mx-auto mt-3"
              width={50}
              height={50}
              alt="Call To Us"
            />
            <h3 className="text-xl text-white drop-shadow-md mt-8">
              Step 3: Instant Payment
            </h3>
            <p className="text-gray-100 mt-2 text-sm">
              Once the deal is finalized, immediate cash payment is made before
              collection of the furniture.
            </p>
          </div>
        </div>
      </section>

      <ServiceFurnitures city="Abu Dhabi" />
      <section className="mt-32 md:px-6 px-3">
        <h2 className="text-center">
          Our Used Furniture Products{" "}
          <span className="md:block text-primary">In Abu Dhabi</span>
        </h2>
        <ShowProducts />
      </section>
      <section className="mt-32 min-h-[500px] md:p-10 p-3 flex flex-col items-start justify-center relative bg-gradient-to-r from-white via-white/80 to-white/30">
        <Image
          src="/images/useFurnitures.jpg"
          alt="Professional Office Moving Services in UAE"
          layout="fill"
          objectFit="cover"
          loading="lazy"
          className="-z-10"
        />
        <h2 className="max-w-xl">
          Used Home Appliances Buyers & Sellers In Abu Dhabi
        </h2>
        <p className="max-w-3xl mt-3">
          As leading buyers of second-hand home appliances in Abu Dhabi with
          over 20 years of experience, we understand your needs and provide
          personalized solutions. Trust us for exceptional service across the
          city.
        </p>
        <div className="mt-8 w-full md:grid-cols-4 grid-cols-2 grid md:gap-5 gap-2">
          <div className="md:min-h-36 min-h-20 flex flex-col items-center justify-center">
            <TimerIcon className="size-8 text-primary" strokeWidth={1.2} />
            <p className="mt-2 font-medium md:text-base text-sm text-center">
              20+ Years of Expertise
            </p>
          </div>
          <div className="md:min-h-36 min-h-20 flex flex-col items-center justify-center">
            <BedDouble className="size-8 text-primary" strokeWidth={1.2} />
            <p className="mt-2 font-medium md:text-base text-sm text-center">
              13,40+ Premium Furnitures
            </p>
          </div>
          <div className="md:min-h-36 min-h-20 flex flex-col items-center justify-center">
            <Users2Icon className="size-8 text-primary" strokeWidth={1.2} />
            <p className="mt-2 font-medium md:text-base text-sm text-center">
              1000+ Happy Clients
            </p>
          </div>
          <div className="md:min-h-36 min-h-20 flex flex-col items-center justify-center">
            <Headphones className="size-8 text-primary" strokeWidth={1.2} />
            <p className="mt-2 font-medium md:text-base text-sm text-center">
              24/7 Support
            </p>
          </div>
        </div>
      </section>
      <Content
        used={true}
        sectionOne={{
          heading: "Furniture and Appliance Buyers in Abu Dhabi",
          p1: "Whether you’re relocating, upgrading, or decluttering, UAE Movers & Packers is your trusted partner for selling used office furniture in Abu Dhabi.",
          p2: "We offer a simple and efficient process for selling your pre-owned furniture in Abu Dhabi. Just contact us, and we'll take care of everything.",
          p3: "Our experts provide a fair and competitive price based on the condition and market demand for your used items.",
          imageSrc: "/locations/UAE-Movers-&-Packers.png",
        }}
        sectiontwo={{
          heading: "Second Hand Furniture Buyers & Sellers in Abu Dhabi",
          p1: "Sell everything from home furniture to office chairs, desks, and cabinets. UAE Movers & Packers offers seamless transactions for your used items.",
          p2: "We ensure a smooth and convenient process for selling your used furniture in Abu Dhabi. Contact us, and we’ll handle everything from pickup to payment.",
          p3: "Our team evaluates your used furniture to provide a competitive price based on its brand, condition, and market value.",
          imageSrc: "/locations/Best-Movers-In-Dubai.png",
        }}
      />

      <FAQs
        Faqs={[
          {
            question: "Where can I buy used furniture in Abu Dhabi?",
            answer:
              "You can explore a vast collection of second-hand furniture for homes and offices on UAE Movers & Packers’ platform, offering great deals in Abu Dhabi.",
          },
          {
            question: "How do I sell used furniture in Abu Dhabi?",
            answer:
              "Contact us or list your furniture on our platform to connect with trusted buyers in Abu Dhabi for a seamless selling experience.",
          },
          {
            question: "What are the types of wood used in furniture?",
            answer:
              "Popular wood types include teak, oak, mahogany, and pine, known for their durability, strength, and aesthetic appeal.",
          },
          {
            question: "How much does used furniture cost in Abu Dhabi?",
            answer:
              "Prices vary based on the furniture's condition, material, and style. Check our listings for the best value options in Abu Dhabi.",
          },
          {
            question: "Do used furniture stores in Abu Dhabi buy furniture?",
            answer:
              "Yes, many stores, including UAE Movers & Packers, specialize in buying and selling pre-owned furniture in Abu Dhabi.",
          },
          {
            question:
              "What is the best place to sell used furniture in Abu Dhabi?",
            answer:
              "UAE Movers & Packers is your top choice for selling pre-owned furniture, offering free listings and access to a large network of buyers in Abu Dhabi.",
          },
          {
            question: "Can I find cheap used furniture near me in Abu Dhabi?",
            answer:
              "Absolutely, UAE Movers & Packers features affordable second-hand furniture, including options for bedrooms, living rooms, and offices in Abu Dhabi.",
          },
          {
            question: "What is the best way to sell used furniture online?",
            answer:
              "The ideal way is to list your items on UAE Movers & Packers’ platform, where buyers in Abu Dhabi actively look for second-hand furniture.",
          },
          {
            question: "Where can I find used office furniture in Abu Dhabi?",
            answer:
              "UAE Movers & Packers offers an extensive collection of second-hand office furniture, such as desks, chairs, and cabinets in Abu Dhabi.",
          },
          {
            question:
              "How do I ensure a secure transaction when buying used furniture?",
            answer:
              "UAE Movers & Packers verifies all buyers and sellers, ensuring a safe and reliable furniture buying experience in Abu Dhabi.",
          },
        ]}
      />
    </section>
  );
};

export default FurnituresDubai;
