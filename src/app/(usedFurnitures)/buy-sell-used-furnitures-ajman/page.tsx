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
  title: "Buy & Sell Used Furniture Ajman | Affordable Second Hand Furniture",
  description:
    "Looking to buy or sell used furniture in Ajman? Discover a wide selection of affordable second-hand furniture options. Contact us today!",
  alternates: {
    canonical: `${process.env.PUBLIC_URL}/buy-sell-used-furnitures-ajman`,
  },
  openGraph: {
    type: "website",
    locale: "en-AE",
    countryName: "United Arab Emirates",
    emails: "wk0131839@gamil.com",
    faxNumbers: "+971503806855",
    phoneNumbers: "+971503806855",
    siteName: "RWahab Movers UAE",
    title: "Buy & Sell Used Furniture Ajman | Affordable Second Hand Furniture",
    description:
      "Looking to buy or sell used furniture in Ajman? Discover a wide selection of affordable second-hand furniture options. Contact us today!",
    images: `${process.env.PUBLIC_URL}/service/office-moving.jpg`,
    url: `${process.env.PUBLIC_URL}/buy-sell-used-furnitures-ajman`,
  },
};
const FurnituresDubai = () => {
  return (
    <section className="container pt-7 mx-auto">
      <Hero
        title="Buy and Sell Used Furniture in Ajman With"
        sec="RWahab Movers UAE"
        desc="Searching for the best platform to buy or sell pre-owned furniture in Ajman? RWahab Movers UAE provides a trusted marketplace to find quality furniture at affordable prices or connect with reliable buyers for your used items."
      />

      <section className="mt-32 md:px-6 px-3">
        <h2 className="text-center md:max-w-xl mx-auto">
          Your Reliable Choice for Used Furniture in Ajman
        </h2>
        <p className="max-w-4xl text-center mt-3 mx-auto text-gray-700">
          RWahab Movers UAE is Ajman&apos;s preferred destination for buying and
          selling second-hand furniture. With competitive prices and a
          hassle-free process, we&apos;re here to help you upgrade or declutter
          your space with ease.
        </p>
      </section>

      <ThreeContent
        content={[
          {
            heading: "Diverse Collection of Used Furniture",
            lis: [
              "Explore a broad range of furniture for homes and offices.",
              "Find everything from living room sets to office desks and chairs.",
              "Our experts assess the condition of your items to ensure you get the best value.",
            ],
          },
          {
            heading: "Affordable Options for Every Budget",
            lis: [
              "Connect with trusted buyers and sellers offering the best rates.",
              "Access durable furniture at prices well below retail.",
              "Get instant payment upon finalizing the deal for your convenience.",
            ],
          },
          {
            heading: "Trusted Buyers and Sellers",
            lis: [
              "Work with verified buyers and sellers for secure transactions.",
              "Benefit from our experience in the moving and packing industry.",
              "Our team ensures smooth handling and transport of your furniture.",
            ],
          },
        ]}
      />
      <section className="mt-32 md:px-6 px-3">
        <h2>Start Your Journey Today!</h2>
        <p className="text-lg mt-2 text-gray-700">
          Ready to sell your used furniture in Ajman? We make the process easy
          and stress-free.
        </p>
        <div className="mt-10 grid md:grid-cols-12 min-h-64 md:ml-20 grid-cols-1">
          <div className="md:col-span-3 bg-gradient-to-br from-primary to-violet-700 rounded-2xl p-3">
            <Image
              src={"/call.svg"}
              className=" mx-auto mt-3"
              width={50}
              height={50}
              alt="Contact Us"
            />
            <h3 className="text-xl text-white drop-shadow-md mt-8">
              Step 1: Reach Out
            </h3>
            <p className="text-gray-100 mt-2 text-sm">
              Contact us today! Our team will schedule a convenient time to
              assess your furniture.
            </p>
          </div>
          <div className="md:col-span-1 flex items-center justify-center md:py-0 py-4">
            <ArrowRightIcon className="text-primary h-10 w-10 mx-auto md:rotate-0 rotate-90 " />
          </div>
          <div className="md:col-span-3 bg-gradient-to-br from-primary to-violet-700 rounded-2xl p-3">
            <Image
              src={"/team.svg"}
              className=" mx-auto mt-3"
              width={50}
              height={50}
              alt="Furniture Evaluation"
            />
            <h3 className="text-xl text-white drop-shadow-md mt-8">
              Step 2: Evaluation
            </h3>
            <p className="text-gray-100 mt-2 text-sm">
              Our professionals inspect your furniture to determine its value
              based on condition and market demand.
            </p>
          </div>
          <div className="md:col-span-1 flex items-center justify-center md:py-0 py-4">
            <ArrowRightIcon className="text-primary h-10 w-10 mx-auto md:rotate-0 rotate-90" />
          </div>
          <div className="md:col-span-3 bg-gradient-to-br from-primary to-violet-700 rounded-2xl p-3">
            <Image
              src={"/payment.svg"}
              className=" mx-auto mt-3"
              width={50}
              height={50}
              alt="Instant Payment"
            />
            <h3 className="text-xl text-white drop-shadow-md mt-8">
              Step 3: Fast Payment
            </h3>
            <p className="text-gray-100 mt-2 text-sm">
              Once the deal is agreed upon, we provide instant cash payment
              before collecting the furniture.
            </p>
          </div>
        </div>
      </section>

      <ServiceFurnitures city="Ajman" />
      <section id="used-furniture-collections" className="mt-32 md:px-6 px-3">
        <h2 className="text-center">
          Our Used Furniture Products{" "}
          <span className="md:block text-primary">In Ajman</span>
        </h2>
        <ShowProducts />
      </section>
      <section className="mt-32 min-h-[500px] md:p-10 p-3 flex flex-col items-start justify-center relative bg-gradient-to-r from-white via-white/80 to-white/30">
        <Image
          src="/images/useFurnitures.jpg"
          alt="Professional Used Furniture Services in Ajman"
          layout="fill"
          objectFit="cover"
          loading="lazy"
          className="-z-10"
        />
        <h2 className="max-w-xl">
          Buyers & Sellers of Home Appliances in Ajman
        </h2>
        <p className="max-w-3xl mt-3">
          With over 20 years of expertise in Ajman, we provide personalized
          solutions for buying and selling second-hand furniture and appliances.
          Trust RWahab Movers UAE for reliable and professional service.
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
              14,500+ Quality Furnitures
            </p>
          </div>
          <div className="md:min-h-36 min-h-20 flex flex-col items-center justify-center">
            <Users2Icon className="size-8 text-primary" strokeWidth={1.2} />
            <p className="mt-2 font-medium md:text-base text-sm text-center">
              1,200+ Satisfied Clients
            </p>
          </div>
          <div className="md:min-h-36 min-h-20 flex flex-col items-center justify-center">
            <Headphones className="size-8 text-primary" strokeWidth={1.2} />
            <p className="mt-2 font-medium md:text-base text-sm text-center">
              24/7 Customer Support
            </p>
          </div>
        </div>
      </section>
      <Content
        used={true}
        sectionOne={{
          heading: "Furniture and Appliance Buyers in Ajman",
          p1: "Whether you're moving, upgrading, or clearing out space, RWahab Movers UAE is your go-to partner for selling second-hand furniture in Ajman.",
          p2: "We streamline the selling process, from assessment to payment, making it hassle-free for you.",
          p3: "Our specialists provide a fair price based on the quality and market demand of your items.",
          imageSrc: "/locations/UAE-Movers-&-Packers.png",
        }}
        sectiontwo={{
          heading: "Second-Hand Furniture Buyers & Sellers in Ajman",
          p1: "Sell all types of furniture, from home essentials to office desks and cabinets. RWahab Movers UAE ensures smooth transactions for your pre-owned items.",
          p2: "We manage the entire process, from pickup to instant payment, ensuring your convenience.",
          p3: "Our team carefully evaluates your furniture to provide a fair and competitive offer.",
          imageSrc: "/locations/Best-Movers-In-Dubai.png",
        }}
      />

      <FAQs
        Faqs={[
          {
            question: "Where can I buy used furniture in Ajman?",
            answer:
              "You can explore a wide range of high-quality and affordable used furniture for homes and offices through RWahab Movers UAE’ platform in Ajman.",
          },
          {
            question: "How do I sell used furniture in Ajman?",
            answer:
              "Contact RWahab Movers UAE for a seamless process of listing your furniture and connecting with reliable buyers in Ajman.",
          },
          {
            question:
              "What types of wood are common in furniture available in Ajman?",
            answer:
              "Furniture in Ajman often features wood types like teak, oak, mahogany, and pine, known for their durability and style.",
          },
          {
            question: "How much does used furniture cost in Ajman?",
            answer:
              "The cost varies based on the condition, material, and design. RWahab Movers UAE offers competitive pricing for used furniture in Ajman.",
          },
          {
            question: "Do used furniture stores in Ajman buy furniture?",
            answer:
              "Yes, RWahab Movers UAE specializes in buying and selling pre-owned furniture, ensuring fair pricing and secure transactions in Ajman.",
          },
          {
            question:
              "What is the best platform to sell used furniture in Ajman?",
            answer:
              "RWahab Movers UAE is the top platform for selling your used furniture, offering free listings and a large network of potential buyers in Ajman.",
          },
          {
            question: "Can I find cheap used furniture near me in Ajman?",
            answer:
              "Yes, RWahab Movers UAE provides affordable used furniture options for living rooms, bedrooms, and offices in Ajman.",
          },
          {
            question:
              "What is the easiest way to sell used furniture in Ajman?",
            answer:
              "The easiest way is by contacting RWahab Movers UAE. We handle everything from evaluation to connecting with buyers in Ajman.",
          },
          {
            question: "Where can I find used office furniture in Ajman?",
            answer:
              "RWahab Movers UAE offers a diverse selection of office furniture, including desks, chairs, and storage solutions in Ajman.",
          },
          {
            question:
              "How do I ensure safe transactions when buying used furniture in Ajman?",
            answer:
              "RWahab Movers UAE ensures secure and verified transactions, providing a hassle-free experience for buyers and sellers in Ajman.",
          },
        ]}
      />
    </section>
  );
};

export default FurnituresDubai;
