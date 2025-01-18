import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ServiceSideMenu from "@/components/ServiceSideMenu";
import Link from "next/link";
import FAQs from "@/components/base/FAQs";

export const metadata: Metadata = {
  title: "Office Moving Services in UAE | Professional & Reliable Movers",
  description:
    "Efficient office moving services in UAE. Trust RWahab Movers UAE for packing, relocation, furniture setup, and tailored office shifting solutions. Request a quote now!",
  alternates: {
    canonical: `${process.env.PUBLIC_URL}/office-moving`,
  },
  openGraph: {
    type: "website",
    locale: "en-AE",
    countryName: "United Arab Emirates",
    emails: "wk0131839@gamil.com",
    faxNumbers: "+971503806855",
    phoneNumbers: "+971503806855",
    siteName: "RWahab Movers UAE",
    title: "Office Moving Services in UAE | Professional & Reliable Movers",
    description:
      "Efficient office moving services in UAE. Trust RWahab Movers UAE for packing, relocation, furniture setup, and tailored office shifting solutions. Request a quote now!",
    images: `${process.env.PUBLIC_URL}/service/office-moving.jpg`,
    url: `${process.env.PUBLIC_URL}/office-moving`,
  },
};
function VillaMoving() {
  return (
    <>
      <section className="md:mt-32 mt-16 border">
        <div className="relative overflow-hidden w-full min-h-[500px]  md:py-0 ">
          <Image
            src="/service/office-moving.jpg"
            alt="Professional Office Moving Services in UAE"
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
                Professional Office Moving Services in UAE
              </h1>
              <h3 className="my-4 text-violet-400 text-center">
                Best Coporate and Office Moving Company
              </h3>
              <p className=" md:text-xl text-center text-white">
                Effortless office relocation with expert packing, secure
                transport, and quick setup. Tailored solutions for seamless
                moves across the UAE.
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
            Relocating your office is a significant task that requires careful
            planning and expert handling. At RWahab Movers UAE, we specialize in
            providing seamless office moving services tailored to meet your
            unique business needs.
          </p>
          <h2>Why Choose Our Office Moving Services?</h2>
          <p>
            We understand that minimizing downtime and ensuring the safety of
            your office assets are crucial. Here&apos;s why businesses across
            UAE trust us:
          </p>
          <ul>
            <li>
              <h3 className="text-lg">Experienced Team of Office Movers:</h3>{" "}
              Our team is trained to handle all aspects of office relocation,
              including packing, disassembly, transportation, and reassembly.
            </li>
            <li>
              <h3 className="text-lg">Customized Moving Solutions:</h3> We offer
              tailored solutions for small offices, corporate headquarters, and
              everything in between, ensuring your move is efficient and
              stress-free.
            </li>
            <li>
              <h3 className="text-lg">State-of-the-Art Equipment:</h3> From
              specialized packing materials to advanced moving tools, we use the
              latest technology to protect your office equipment and furniture.
            </li>
          </ul>
          <h2 className="mt-20">Our Comprehensive Office Moving Process </h2>
          <p>We follow a systematic approach to ensure a smooth transition:</p>
          <div className=" grid md:grid-cols-2 md:px-5 grid-cols-1 gap-5 mt-5">
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md p-3">
              <Image
                src={"/service/consultation.png"}
                alt="cons"
                width={64}
                height={64}
                className="mb-3"
              />
              <p className="h3">Initial Consultation and Planning</p>
              <p className="text-sm ">
                We assess your office space and create a detailed moving plan,
                including timelines and logistics.
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
              <p className="h3"> Packing and Labeling</p>
              <p className="text-sm ">
                Our team packs and labels your office equipment, documents, and
                furniture to ensure organized unpacking.
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
              <p className="text-sm ">
                Your items are transported in our secure, well-maintained
                vehicles to your new location.
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
              <p className="h3">Setup and Reassembly</p>
              <p className="text-sm ">
                We reassemble furniture, connect equipment, and set up your
                office space to your specifications.
              </p>
            </div>
          </div>
          <h2 className="mt-20 text-center">What We Offer </h2>
          <p>
            From small office to large coporates, our professional movers are
            equipped to handle any home move efficiently. Here’s a detailed look
            at our services:
          </p>
          <div className="mt-10">
            <h3 className="text-xl">End-to-End Project Management</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Benefit from a dedicated manager serving as your single point of
              contact throughout the entire relocation process.
            </p>
            <h3 className="text-xl mt-5">Specialist Move Services</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Offering specialized move services for your business, as part of
              larger relocations or standalone projects.
            </p>
            <h3 className="text-xl mt-5">Bespoke Solutions</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              RWahab Movers UAE offers bespoke office move services, relocating
              hospitals, labs, libraries, and more.
            </p>
            <h3 className="text-xl mt-5">
              Office Maintenance or Refurbishment
            </h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Optimize your workspace for productivity and comfort post-move
              with our office maintenance and refurbishment services.
            </p>
            <h3 className="text-xl mt-5">Storage Solutions</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Explore our secure storage options for items requiring a temporary
              home or those not immediately needed post-relocation.
            </p>
            <h3 className="text-xl mt-5">IT Relocation Services</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Benefit from our expertise in comprehensive IT services and
              precision-focused core infrastructure relocation.
            </p>
            <h3 className="text-xl mt-5">Post move support</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              After-move care offers support with unpacking, helpdesk,
              porterage, and furniture management for smooth setup.
            </p>
            <h3 className="text-xl mt-5"> Commercial Reinstatement</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Efficient commercial reinstatement meets lease terms, restoring
              spaces affordably for a seamless transition.
            </p>
          </div>

          <h2 className="mt-20"> Benefits of Our Office Relocation Services</h2>
          <p>
            Streamline your office move with our reliable and efficient office
            relocation services. We ensure minimal downtime, secure handling of
            assets, and a smooth transition to your new workspace.
          </p>
          <ul>
            <li>
              <h3 className="text-lg"> Minimized Downtime:</h3> Our efficient
              processes help you get back to business as quickly as possible.
            </li>
            <li>
              <h3 className="text-lg">Affordable and Transparent Pricing:</h3>{" "}
              We offer competitive rates with no hidden costs, providing
              exceptional value for money.
            </li>
            <li>
              <h3 className="text-lg">Comprehensive Support:</h3>From start to
              finish, we provide support to address any questions or concerns
              you may have during the move.
            </li>
            <li>
              <h3 className="text-lg">Cost-Effective:</h3> Avoid multiple trips
              and unexpected expenses.
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
            question: "How long does an office move take?",
            answer:
              "The time required depends on the size of your office and the scope of the move. We provide a detailed timeline during the planning phase.",
          },
          {
            question: "Do you offer weekend office moving services?",
            answer:
              "Yes, we offer flexible scheduling, including weekends, to minimize disruption to your business.",
          },
          {
            question: "Can you handle sensitive documents and IT equipment?",
            answer:
              "Absolutely. Our team ensures the safe handling and secure transportation of all sensitive materials and IT systems.",
          },
          {
            question: "What areas do you serve for office moving?",
            answer:
              "We provide office moving services across major cities, including Dubai, Sharjah, and Ajman.",
          },
          {
            question:
              "Do you offer packing and unpacking services for office moves?",
            answer:
              "Yes, we provide comprehensive packing and unpacking services to ensure your office items are transported securely and efficiently.",
          },
          {
            question: "Can you disassemble and reassemble office furniture?",
            answer:
              "Yes, our team is experienced in disassembling and reassembling office furniture as part of the moving process.",
          },
          {
            question: "Are your office moving services insured?",
            answer:
              "Yes, we provide insurance options to give you peace of mind during the moving process.",
          },
          {
            question: "How much does an office move cost?",
            answer:
              "The cost of an office move depends on factors such as the size of your office, distance, and services required. We provide a detailed quote after an initial consultation.",
          },
        ]}
      />
    </>
  );
}

export default VillaMoving;
