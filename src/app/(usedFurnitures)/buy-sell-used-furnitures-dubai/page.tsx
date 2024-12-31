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
  title: "Buy & Sell Used Furniture in Dubai - Quick & Easy Deals",
  description:
    "Find the best deals on used furniture in Dubai! Buy and sell pre-owned items quickly and easily with UAE Movers & Packers.",
};
const FurnituresDubai = () => {
  return (
    <section className="container pt-7 mx-auto">
      <Hero
        title="Buy and Sell Used Furniture in Dubai With"
        sec="UAE Movers & Packers"
        desc=" Are you looking for the best place to buy or sell used furniture in Dubai? UAE Movers & Packers offers a comprehensive platform to help you find high-quality, affordable furniture or connect with potential buyers for your pre-owned items."
      />

      <section className="mt-32 md:px-6 px-3">
        <h2 className="text-center md:max-w-xl mx-auto">
          Your Trusted Partner for Used Furniture in Dubai
        </h2>
        <p className="max-w-4xl text-center mt-3 mx-auto text-gray-700">
          We Are Dubai’s favorite Dealers For Buying And Selling Second-Hand
          Furniture As We Offer The Best Prices, Call Us Now To Sell Your Used
          Furniture In Dubai Or Visit Our Store To Buy Second-Hand furniture And
          Used Appliances For The Most Affordable Price
        </p>
      </section>

      <ThreeContent
        content={[
          {
            heading: "Wide Selection of Used Furniture",
            lis: [
              "Explore a diverse collection of home and office furniture.",
              "Find everything from sofas, beds, and dining tables to office desks and chairs.",
              "Our experts evaluate the condition and market value of your used items to ensure you get the best price.",
            ],
          },
          {
            heading: "Affordable Prices",
            lis: [
              " We connect you with buyers and sellers offering competitive rates.",
              "Access high-quality furniture at a fraction of the cost.",
              " Once we finalize the deal, payment is made immediately.",
            ],
          },
          {
            heading: "Trusted Buyers and Sellers",
            lis: [
              " Work with verified buyers and sellers to ensure a secure transaction.",
              "Benefit from our years of experience in the moving and packing industry.",
              "Our team of experienced professionals will handle your furniture with care and ensure a smooth and hassle-free experience.",
            ],
          },
        ]}
      />
      <section className="mt-32 md:px-6 px-3">
        <h2>Get Started Today!</h2>
        <p className="text-lg mt-2 text-gray-700">
          Are you looking to sell your used furniture? We make the process
          quick, easy, and hassle-free.
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
              Step 1: Call Us Now
            </h3>
            <p className="text-gray-100 mt-2 text-sm">
              Reach out to us today! Just give us a call, and we’ll arrange for
              our experts to visit you at your convenience.
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
              Step 2: Expert Evaluation
            </h3>
            <p className="text-gray-100 mt-2 text-sm">
              Our team will come to your location to evaluate the condition of
              your furniture. We ensure a fair and transparent assessment to
              provide you with the best value.
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
              Once the deal is finalized, we hand over the cash to you
              immediately. Only after payment do we proceed with collecting the
              furniture.
            </p>
          </div>
        </div>
      </section>

      <ServiceFurnitures city="Dubai" />
      <section className="mt-32 md:px-6 px-3">
        <h2 className="text-center">
          Our Used Furniture Products{" "}
          <span className="md:block text-primary">In Dubai</span>
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
          Used Home Appliaces Buyers & Sellers In Dubai
        </h2>
        <p className="max-w-3xl mt-3">
          We are leading buyers of second-hand home appliances in Dubai with 20
          years of industry experience. We understand customer needs and deliver
          tailored solutions. Trust us for premium service through Dubai.
        </p>
        <div className="mt-8 w-full md:grid-cols-4 grid-cols-2 grid md:gap-5 gap-2">
          <div className="md:min-h-36 min-h-20 flex flex-col items-center justify-center">
            <TimerIcon className="size-8 text-primary" strokeWidth={1.2} />
            <p className="mt-2 font-medium md:text-base text-sm text-center">
              20+ Years of Experience
            </p>
          </div>
          <div className="md:min-h-36 min-h-20 flex flex-col items-center justify-center">
            <BedDouble className="size-8 text-primary" strokeWidth={1.2} />
            <p className="mt-2 font-medium md:text-base text-sm text-center">
              13,40+ Valuable Furnitures
            </p>
          </div>
          <div className="md:min-h-36 min-h-20 flex flex-col items-center justify-center">
            <Users2Icon className="size-8 text-primary" strokeWidth={1.2} />
            <p className="mt-2 font-medium md:text-base text-sm text-center">
              1000+ Satisfice Clients
            </p>
          </div>
          <div className="md:min-h-36 min-h-20 flex flex-col items-center justify-center">
            <Headphones className="size-8 text-primary" strokeWidth={1.2} />
            <p className="mt-2 font-medium md:text-base text-sm text-center">
              24 / 7 Service
            </p>
          </div>
        </div>
      </section>
      <Content
        used={true}
        sectionOne={{
          heading: "Furniture and Appliance Buyers in Dubai",
          p1: "Whether you’re downsizing your office, relocating, or simply upgrading your furniture, UAE Movers & Packers is your trusted partner for hassle-free buyer of your used office furniture.",
          p2: "We offer a seamless and convenient process for selling your used house furniture in Dubai. Simply contact us, and we’ll handle the rest, from pick-up to payment.",
          p3: "We understand the value of your used villa furniture in Dubai and will provide you with a fair and competitive price based on its condition, brand, and market value.",
          imageSrc: "/locations/UAE-Movers-&-Packers.png",
        }}
        sectiontwo={{
          heading: "Second Hand Furniture Buyers & Sellers in Dubai",
          p1: "Sell your home and furniture from office chairs, to office desks, to office cabinets and everythin in between. UAE Movers & Packers is your trusted partner for hassle-free buyer of your used office furniture.",
          p2: "We offer a seamless and convenient process for selling your used house furniture in Dubai. Simply contact us, and we’ll handle the rest, from pick-up to payment.",
          p3: "We understand the value of your used villa furniture in Dubai and will provide you with a fair and competitive price based on its condition, brand, and market value.",
          imageSrc: "/locations/Best-Movers-In-Dubai.png",
        }}
      />
      <FAQs
        Faqs={[
          {
            question: "Where can I buy used furniture in Dubai?",
            answer:
              "You can find a wide range of used furniture for sale on UAE Movers & Packers’ platform, including affordable options for homes and offices.",
          },
          {
            question: "How do I sell used furniture in Dubai?",
            answer:
              "List your furniture on our platform or contact us for professional assistance in finding reliable buyers.",
          },
          {
            question: "What are the types of wood used in furniture?",
            answer:
              "Common types include teak, oak, mahogany, and pine, each offering unique durability and aesthetics.",
          },
          {
            question: "How much does used furniture cost in Dubai?",
            answer:
              "Prices vary depending on the condition, material, and type of furniture. Browse our listings for the best deals.",
          },
          {
            question: "Do used furniture stores in Dubai buy furniture?",
            answer:
              "Yes, many stores, including UAE Movers & Packers, facilitate buying and selling of pre-owned furniture.",
          },
          {
            question: "What is the best place to sell used furniture in Dubai?",
            answer:
              "UAE Movers & Packers is the best platform to sell used furniture with free listings and access to a large audience of buyers.",
          },
          {
            question: "Can I find cheap used furniture near me in Dubai?",
            answer:
              "Yes, UAE Movers & Packers offers affordable options for used furniture, including living room, bedroom, and office furniture.",
          },
          {
            question: "What is the best way to sell used furniture online?",
            answer:
              "The best way to sell furniture online is by listing it on UAE Movers & Packers’ platform, where buyers are actively searching.",
          },
          {
            question: "Where can I find used office furniture in Dubai?",
            answer:
              "UAE Movers & Packers provides a wide range of used office furniture, including desks, chairs, and storage solutions.",
          },
          {
            question:
              "How do I ensure a secure transaction when buying used furniture?",
            answer:
              "UAE Movers & Packers works with verified buyers and sellers to provide a safe and seamless buying experience.",
          },
        ]}
      />
    </section>
  );
};

export default FurnituresDubai;
