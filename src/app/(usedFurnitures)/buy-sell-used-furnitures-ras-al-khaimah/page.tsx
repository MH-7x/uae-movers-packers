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
  title: "Buy and Sell Used Furniture in Ras Al Khaimah",
  description:
    "Buy or sell used furniture in Ras Al Khaimah with RWahab Movers UAE. Find affordable, high-quality furniture or connect with buyers for pre-owned items.",
  alternates: {
    canonical: `${process.env.PUBLIC_URL}/buy-sell-used-furnitures-ras-al-khaimah`,
  },
  openGraph: {
    type: "website",
    locale: "en-AE",
    countryName: "United Arab Emirates",
    emails: "wk0131839@gamil.com",
    faxNumbers: "+971503806855",
    phoneNumbers: "+971503806855",
    siteName: "RWahab Movers UAE",
    title: "Buy and Sell Used Furniture in Ras Al Khaimah",
    description:
      "Buy or sell used furniture in Ras Al Khaimah with RWahab Movers UAE. Find affordable, high-quality furniture or connect with buyers for pre-owned items.",
    images: `${process.env.PUBLIC_URL}/service/office-moving.jpg`,
    url: `${process.env.PUBLIC_URL}/buy-sell-used-furnitures-ras-al-khaimah`,
  },
};

const FurnituresDubai = () => {
  return (
    <section className="container pt-7 mx-auto">
      <Hero
        title="Buy and Sell Used Furniture in Ras Al Khaimah With"
        sec="RWahab Movers UAE"
        desc="Are you looking for the best place to buy or sell used furniture in Ras Al Khaimah? RWahab Movers UAE provides a trusted platform to help you find high-quality, affordable furniture or connect with buyers for your pre-owned items."
      />

      <section className="mt-32 md:px-6 px-3">
        <h2 className="text-center md:max-w-xl mx-auto">
          Your Trusted Partner for Used Furniture in Ras Al Khaimah
        </h2>
        <p className="max-w-4xl text-center mt-3 mx-auto text-gray-700">
          We Are Ras Al Khaimah’s go-to Experts For Buying And Selling Pre-Owned
          Furniture. Offering Competitive Prices, Call Us Now To Sell Your Used
          Furniture In Ras Al Khaimah Or Visit Our Store To Explore Affordable
          Second-Hand Furniture And Appliances.
        </p>
      </section>

      <ThreeContent
        content={[
          {
            heading: "Extensive Range of Used Furniture",
            lis: [
              "Browse a diverse selection of home and office furniture.",
              "Find sofas, beds, dining tables, desks, and chairs.",
              "Our team ensures fair valuations for your items to guarantee the best deal.",
            ],
          },
          {
            heading: "Affordable Prices",
            lis: [
              "Connect with verified buyers and sellers for competitive deals.",
              "Access durable furniture at unbeatable prices.",
              "Enjoy instant payments once the deal is finalized.",
            ],
          },
          {
            heading: "Trusted Transactions",
            lis: [
              "Collaborate with reliable buyers and sellers for peace of mind.",
              "Leverage our experience in the moving and packing industry.",
              "Our professional team handles your furniture with utmost care.",
            ],
          },
        ]}
      />
      <section className="mt-32 md:px-6 px-3">
        <h2>Start Today!</h2>
        <p className="text-lg mt-2 text-gray-700">
          Want to sell your used furniture? We make the process simple, fast,
          and hassle-free.
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
              Step 1: Contact Us
            </h3>
            <p className="text-gray-100 mt-2 text-sm">
              Reach out today! We’ll schedule a visit at your convenience to
              evaluate your furniture.
            </p>
          </div>
          <div className="md:col-span-1 flex items-center justify-center md:py-0 py-4">
            <ArrowRightIcon className="text-primary h-10 w-10 mx-auto md:rotate-0 rotate-90" />
          </div>
          <div className="md:col-span-3 bg-gradient-to-br from-primary to-violet-700 rounded-2xl p-3">
            <Image
              src={"/team.svg"}
              className=" mx-auto mt-3"
              width={50}
              height={50}
              alt="Evaluation"
            />
            <h3 className="text-xl text-white drop-shadow-md mt-8">
              Step 2: Detailed Evaluation
            </h3>
            <p className="text-gray-100 mt-2 text-sm">
              Our experts inspect your furniture to provide an accurate market
              value.
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
              Step 3: Immediate Payment
            </h3>
            <p className="text-gray-100 mt-2 text-sm">
              Once agreed, we provide immediate cash payment before collection.
            </p>
          </div>
        </div>
      </section>

      <ServiceFurnitures city="Ras Al Khaimah" />
      <section id="used-furniture-collections" className="mt-32 md:px-6 px-3">
        <h2 className="text-center">
          Our Used Furniture Products{" "}
          <span className="md:block text-primary">In Ras Al Khaimah</span>
        </h2>
        <ShowProducts />
      </section>
      <section className="mt-32 min-h-[500px] md:p-10 p-3 flex flex-col items-start justify-center relative bg-gradient-to-r from-white via-white/80 to-white/30">
        <Image
          src="/images/useFurnitures.jpg"
          alt="Used Furniture Services in Ras Al Khaimah"
          layout="fill"
          objectFit="cover"
          loading="lazy"
          className="-z-10"
        />
        <h2 className="max-w-xl">
          Used Home Appliances Buyers & Sellers In Ras Al Khaimah
        </h2>
        <p className="max-w-3xl mt-3">
          As experienced buyers of second-hand home appliances in Ras Al
          Khaimah, we ensure tailored solutions to meet your needs. Trust us for
          exceptional service.
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
          heading: "Furniture and Appliance Buyers in Ras Al Khaimah",
          p1: "If you’re relocating, upgrading, or decluttering, RWahab Movers UAE is your trusted partner for selling used furniture in Ras Al Khaimah.",
          p2: "We offer a simple process for selling your pre-owned furniture. Contact us, and we’ll take care of everything.",
          p3: "Our team ensures a competitive valuation based on market trends and condition.",
          imageSrc: "/locations/UAE-Movers-&-Packers.png",
        }}
        sectiontwo={{
          heading: "Second Hand Furniture Buyers & Sellers in Ras Al Khaimah",
          p1: "Sell everything from home furniture to office desks and cabinets. RWahab Movers UAE ensures seamless transactions.",
          p2: "We handle everything from pickup to payment for your convenience.",
          p3: "Our experts evaluate your items for competitive pricing based on their brand and condition.",
          imageSrc: "/locations/Best-Movers-In-Dubai.png",
        }}
      />

      <FAQs
        Faqs={[
          {
            question: "Where can I buy used furniture in Ras Al Khaimah?",
            answer:
              "You can find a variety of high-quality used furniture for sale on RWahab Movers UAE’ platform in Ras Al Khaimah, offering budget-friendly options for homes and offices.",
          },
          {
            question: "How do I sell used furniture in Ras Al Khaimah?",
            answer:
              "Simply list your furniture on our platform or get in touch with us for professional help in connecting with reliable buyers in Ras Al Khaimah.",
          },
          {
            question: "What types of wood are used in furniture?",
            answer:
              "Popular woods for furniture include teak, oak, mahogany, and pine, each known for its unique strength, appearance, and durability.",
          },
          {
            question: "How much does used furniture cost in Ras Al Khaimah?",
            answer:
              "The price of used furniture in Ras Al Khaimah depends on its condition, material, and type. Browse our listings to find the best deals tailored to your budget.",
          },
          {
            question:
              "Do used furniture stores in Ras Al Khaimah buy furniture?",
            answer:
              "Yes, several stores, including RWahab Movers UAE, facilitate the buying and selling of second-hand furniture in Ras Al Khaimah.",
          },
          {
            question:
              "What is the best place to sell used furniture in Ras Al Khaimah?",
            answer:
              "RWahab Movers UAE offers an excellent platform to sell used furniture in Ras Al Khaimah, providing free listings and a wide audience of potential buyers.",
          },
          {
            question:
              "Can I find affordable used furniture near me in Ras Al Khaimah?",
            answer:
              "Yes, RWahab Movers UAE offers a range of budget-friendly used furniture options in Ras Al Khaimah, including living room, bedroom, and office furniture.",
          },
          {
            question:
              "What is the best way to sell used furniture online in Ras Al Khaimah?",
            answer:
              "The best way to sell your furniture online in Ras Al Khaimah is by listing it on RWahab Movers UAE’ platform, where buyers actively search for quality pre-owned items.",
          },
          {
            question:
              "Where can I find used office furniture in Ras Al Khaimah?",
            answer:
              "RWahab Movers UAE offers a variety of used office furniture in Ras Al Khaimah, including desks, chairs, and other office essentials.",
          },
          {
            question:
              "How can I ensure a secure transaction when buying used furniture in Ras Al Khaimah?",
            answer:
              "RWahab Movers UAE ensures a safe and secure buying experience by working with verified buyers and sellers, providing a seamless and trustworthy transaction process.",
          },
        ]}
      />
    </section>
  );
};

export default FurnituresDubai;
