import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ServiceSideMenu from "@/components/ServiceSideMenu";
import Link from "next/link";
import FAQs from "@/components/base/FAQs";

export const metadata: Metadata = {
  title: "Home Moving Services in UAE | Professional & Affordable",
  description:
    "Reliable home moving services in the UAE. Expert movers, packing solutions, and seamless relocation for apartments, villas, and studios. Get a free quote today!",
  alternates: {
    canonical: `${process.env.PUBLIC_URL}/home-moving`,
  },
  openGraph: {
    type: "website",
    locale: "en-AE",
    countryName: "United Arab Emirates",
    emails: "wk0131839@gamil.com",
    faxNumbers: "+971503806855",
    phoneNumbers: "+971503806855",
    siteName: "RWahab Movers UAE",
    title: "Home Moving Services in UAE | Professional & Affordable",
    description:
      "Reliable home moving services in the UAE. Expert movers, packing solutions, and seamless relocation for apartments, villas, and studios. Get a free quote today!",
    images: `${process.env.PUBLIC_URL}/service/villa-moving.jpg`,
    url: `${process.env.PUBLIC_URL}/home-moving`,
  },
};
function VillaMoving() {
  return (
    <>
      <section className="md:mt-32 mt-16 border">
        <div className="relative overflow-hidden w-full min-h-[500px]  md:py-0 ">
          <Image
            src="/service/villa-moving.jpg"
            alt="Professional Home Moving Services in UAE"
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
                Professional Home Moving Services in UAE
              </h1>
              <h3 className="my-4 text-violet-400 text-center">
                Your Trusted Partner for Stress-Free Home Relocation Experience
              </h3>
              <p className=" md:text-xl text-center text-white">
                stress-free relocation with our Professional Home Moving
                Services in UAE. We ensure safe packing, reliable transport, and
                hassle-free unpacking for a smooth move to your new home.
              </p>

              <Button
                variant={"outline"}
                className="mt-8 mx-auto bg-transparent text-white"
                size={"lg"}
              >
                <Link aria-label="Call To Us" href={"tel:+971503806855"}>
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
            Moving your home can be a challenging task, but with UAE Movers &
            Packers, you get a stress-free, efficient, and reliable moving
            experience. We specialize in offering tailored home moving services
            for apartments, villas, and studios across the UAE. Whether you’re
            relocating locally or to another emirate, our team of expert movers
            ensures a seamless transition for you and your belongings.
          </p>
          <h2>Why Choose Our Home Moving Services?</h2>
          <p>
            At RWahab Movers UAE, we go the extra mile to provide top-quality
            services for all types of home moves. Here&apos;s why we stand out:
          </p>
          <ul>
            <li>
              <strong>Expert Movers:</strong> Skilled professionals trained in
              safe packing, handling, and transport.
            </li>
            <li>
              <strong>Affordable Rates:</strong> Transparent pricing with no
              hidden charges.
            </li>
            <li>
              <strong>Quality Packing Materials:</strong> Premium packing
              supplies to protect your belongings.
            </li>
            <li>
              <strong>Timely Services:</strong> Punctual moves with minimal
              disruptions.
            </li>
            <li>
              <strong>Complete Solutions:</strong> Dismantling, packing, moving,
              and reassembly at your new location.
            </li>
          </ul>
          <h2 className="mt-20">Our Home Moving Services </h2>
          <p>
            From small apartments to large villas, our professional movers are
            equipped to handle any home move efficiently. Here’s a detailed look
            at our services:
          </p>
          <div className=" grid md:grid-cols-2 md:px-5 grid-cols-1 gap-5 mt-5">
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md p-3">
              <h3>Apartment Moving</h3>
              <p className="text-sm ">
                Moving from or to an apartment? Our team ensures safe and
                organized relocation, whether you live on the ground floor or in
                a high-rise building. We manage everything, including packing,
                transporting, and reassembling your furniture.
              </p>
              <Button variant={"link"}>Contact Us</Button>
            </div>
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md p-3">
              <h3>Villa Moving</h3>
              <p className="text-sm ">
                Relocating a villa requires expertise and attention to detail.
                Our team carefully handles your belongings, from fragile items
                to bulky furniture, ensuring a smooth transition to your new
                villa.
              </p>
              <Button variant={"link"}>Contact Us</Button>
            </div>
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md p-3">
              <h3>Studio Moving</h3>
              <p className="text-sm ">
                For smaller spaces like studio apartments, we offer efficient
                and affordable solutions to make your move quick and
                hassle-free. No job is too small for us!
              </p>
              <Button variant={"link"}>Contact Us</Button>
            </div>
          </div>
          <h2 className="mt-20">How Our Home Moving Process Works </h2>
          <p>
            We follow a step-by-step process to make your home move smooth and
            organized:
          </p>
          <div className=" grid md:grid-cols-2 md:px-5 grid-cols-1 gap-5 mt-5">
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md p-3">
              <Image
                src={"/service/consultation.png"}
                alt="cons"
                width={64}
                height={64}
                className="mb-3"
              />
              <p className="h3">Free Consultation</p>
              <p className="text-sm ">
                Contact us to get a free assessment and moving quote.
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
              <p className="h3">Packing</p>
              <p className="text-sm ">
                Our team carefully packs all your belongings using high-quality
                materials.
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
              <p className="h3">Transportation</p>
              <p className="text-sm ">
                Secure transport of items using well-maintained vehicles.
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
              <p className="h3">Unpacking & Assembly</p>
              <p className="text-sm ">
                We unpack and reassemble your furniture at your new home.
              </p>
            </div>
          </div>
          <h2 className="mt-20">Benefits of Hiring Professional Home Movers</h2>
          <p>
            Moving on your own can be stressful and time-consuming. Here’s why
            hiring professionals like RWahab Movers UAE is a smarter choice:
          </p>
          <ul>
            <li>
              <strong>Time-Saving:</strong> Fast and efficient services save you
              valuable time.
            </li>
            <li>
              <strong>Safety:</strong> Expert handling minimizes the risk of
              damage to your belongings.
            </li>
            <li>
              <strong>Stress-Free:</strong> Leave the hard work to us and enjoy
              a smooth moving experience.
            </li>
            <li>
              <strong>Cost-Effective:</strong> Avoid multiple trips and
              unexpected expenses.
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
            question: "What is included in your home moving services?",
            answer:
              "Our home moving services include packing, dismantling, transportation, unpacking, and reassembly of your furniture and belongings. We use high-quality packing materials to ensure safe transport.",
          },
          {
            question: "How much does home moving cost in the UAE?",
            answer:
              "The cost of home moving depends on the size of your home, the services required, and the distance. Prices typically range from 600 AED for apartments to 4500 AED for large villas.",
          },
          {
            question: "Do you provide packing materials for home moving?",
            answer:
              "Yes, we provide high-quality packing materials, including boxes, bubble wrap, and protective covers, to ensure the safety of your belongings during the move.",
          },
          {
            question: "How long does a home move typically take?",
            answer:
              "The duration of a home move depends on the size of the property and the distance. Typically, moving a 1-bedroom apartment takes 4-6 hours, while larger villas may take a full day.",
          },
          {
            question: "Do you offer home moving services in all UAE cities?",
            answer:
              "Yes, we provide home moving services across all major UAE cities, including Dubai, Sharjah, Abu Dhabi, Ajman, and Ras Al Khaimah.",
          },
          {
            question: "How do I book your home moving services?",
            answer:
              "You can book our home moving services by contacting us through our website, calling our hotline, or sending us an email. We offer free consultations and quotes.",
          },
          {
            question: "Are my belongings insured during the move?",
            answer:
              "Yes, we ensure the safety of your belongings and provide insurance options to cover any unforeseen damage during the move.",
          },
        ]}
      />
    </>
  );
}

export default VillaMoving;
