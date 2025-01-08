import FAQs from "@/components/base/FAQs";
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import TestimonialSlider from "@/components/base/Testimonials";
import Contact from "@/components/Contact";
const team = [
  {
    name: "Wahab Raza",
    post: "Founder & CEO",
    desc: "As the visionary behind RWahab Movers UAE, I am dedicated to providing seamless, professional, and customer-centric moving services across the UAE.",
  },
  {
    name: "Aisha Khan",
    post: "Chief Marketing Officer",
    desc: "I lead the marketing strategies at RWahab Movers, ensuring our brand reaches clients in need of efficient and reliable moving solutions.",
  },
  {
    name: "Ahmed Ali",
    post: "Head of Operations",
    desc: "I oversee logistics and operations, ensuring every move is executed with precision, punctuality, and professionalism.",
  },
  {
    name: "Sara Iqbal",
    post: "Customer Experience Manager",
    desc: "My focus is on delivering exceptional customer experiences, ensuring satisfaction at every step of the moving process.",
  },
];

export const metadata: Metadata = {
  title: "About Us | RWahab Movers UAE",
  description:
    "Reliable moving company in the UAE offering professional residential and commercial relocation services. Enjoy 24/7 support and hassle-free moves.",
  alternates: {
    canonical: `${process.env.PUBLIC_URL}/about-us`,
  },
  openGraph: {
    title: "About Us | RWahab Movers UAE",
    description:
      "Reliable moving company in the UAE offering professional residential and commercial relocation services. Enjoy 24/7 support and hassle-free moves.",
    url: `${process.env.PUBLIC_URL}/about-us`,
    images: [
      {
        url: '"https://cdn.rareblocks.xyz/collection/celebration/images/content/1/team-work.jpg",',
        width: 500,
        height: 500,
        alt: "About The Company, RWahab Movers UAE",
      },
    ],
  },
};

function AboutUs() {
  return (
    <>
      <section className="py-10 mt-20 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div className="relative mb-12">
              <img
                className="w-full drop-shadow-2xl rounded-md"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/1/team-work.jpg"
                alt="Professional moving team"
              />
              <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div className="overflow-hidden bg-white rounded">
                  <div className="md:px-10 px-5 py-6">
                    <div className="flex items-center">
                      <p className="flex-shrink-0 text-3xl font-bold text-primary sm:text-4xl">
                        10+
                      </p>
                      <p className="pl-6 text-sm font-medium text-black">
                        years of moving excellence
                        <span className="md:block">
                          {" "}
                          in the UAE and beyond.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 drop-shadow-md -mt-10 rounded-full">
                <svg
                  className="w-8 h-8 text-orange-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                Your <span className="text-primary">Reliable Partner</span> in
                Moving Services
              </h1>
              <p className="md:mt-3 mt-6 text-lg leading-relaxed text-gray-600">
                RWahab Movers UAE specializes in providing expert moving and
                packing solutions tailored to your needs. From residential to
                commercial relocations, we guarantee efficiency, reliability,
                and customer satisfaction in every move.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 mt-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Why Choose <span className="text-primary">RWahab Movers?</span>
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Trusted by thousands of satisfied clients, we stand out with our
              commitment to excellence, affordability, and stress-free moving
              experiences.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                alt=""
              />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">1</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Local Expertise
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  With a strong presence across{" "}
                  <Link
                    className="text-black"
                    aria-label="Movers and Packers in Dubai"
                    href="/movers-and-packers-dubai"
                  >
                    Dubai
                  </Link>
                  ,{" "}
                  <Link
                    className="text-black"
                    aria-label="Movers and Packers in Abu Dhabi"
                    href="/movers-and-packers-abu-dhabi"
                  >
                    Abu Dhabi
                  </Link>
                  , and{" "}
                  <Link
                    className="text-black"
                    aria-label="Movers and Packers in Abu Dhabi"
                    href={"/movers-and-packers-sharjah"}
                  >
                    {" "}
                    Sharjah
                  </Link>
                  , we know the UAE inside out, ensuring smooth relocations
                  anywhere in the region.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">2</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Tailored Services
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  From packing fragile items to disassembling furniture, we
                  customize our services to fit your specific moving
                  requirements.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">3</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Affordable Solutions
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Enjoy top-notch moving services without breaking the bank. Our
                  competitive pricing ensures value for money every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-20 bg-primary py-10 max-w-5xl mx-auto md:gap-0 gap-y-5 md:px-5 px-3 grid md:grid-cols-4 grid-cols-1 items-center ">
        <div className="col-span-1 md:border-r border-b border-white">
          <h3 className="md:text-center text-white pb-3">Our Mission</h3>
        </div>
        <div className="col-span-3 md:pl-10">
          <p className="text-gray-200">
            To provide very reliable and budget friendly moving services all
            over UAE. To help UAE nationals by organizing and leading their
            moves. Our aim is to provide service with honesty and transparency.
          </p>
        </div>
      </section>
      <section className="my-20 bg-primary py-10 max-w-5xl mx-auto md:gap-0 gap-y-5 md:px-5 px-3 grid md:grid-cols-4 grid-cols-1 items-center ">
        <div className="col-span-1 md:border-r border-b border-white">
          <h3 className="md:text-center text-white pb-3">Our Vision</h3>
        </div>
        <div className="col-span-3 md:pl-10">
          <p className="text-gray-200">
            We lead all kinds of moves in the UAE and provide services at
            possible cheaper prices. We are trying to make our prices more
            reliable and affordable. We do high-quality packing to ensure the
            protection.
          </p>
        </div>
      </section>
      <section className="py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-24">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl text-center pb-5">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-500 text-center">
              Dedicated professionals making your move hassle-free and
              enjoyable.
            </p>
          </div>
          <div className="flex items-center justify-start flex-wrap">
            {team.map((person) => (
              <div
                key={person.name}
                className="group md:w-max w-full flex-wrap flex items-center gap-8 transition-all duration-500 p-8 lg:flex-nowrap"
              >
                <div className="w-full lg:w-48 h-64">
                  <img
                    src="https://treyondworld.com/wp-content/uploads/2023/12/Tri3dImage_1706377413175.jpeg"
                    alt="Team member"
                    className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full"
                  />
                </div>
                <div className="text-center lg:text-left lg:max-w-xs flex-1">
                  <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                    <h6 className="text-lg text-gray-900 font-semibold mb-1">
                      {person.name}
                    </h6>
                    <span className="text-sm text-gray-500 group-hover:text-primary">
                      {person.post}
                    </span>
                  </div>
                  <p className="text-gray-500 leading-6 mb-7">{person.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialSlider />
      <div className="mb-20" />
      <FAQs
        Faqs={[
          {
            question:
              "What are the payment options available with RWahab Movers UAE?",
            answer: `RWahab Movers UAE offers multiple secure payment methods, including cash, card swipes, and bank transfers. Payments are processed only after the job is completed. For 
              commercial moving services
           , we also accept bank cheques.`,
          },
          {
            question:
              "Do you provide packing services for clothes, shoes, and cupboard items?",
            answer:
              "Yes, we handle packing for all your items, including clothes, shoes, and cupboard belongings. We also offer free carton boxes in advance so you can pack your personal items before moving day.",
          },
          {
            question:
              "Does RWahab Movers UAE provide insurance for moving services?",
            answer:
              "Yes, RWahab Movers UAE is a fully insured moving company. We offer direct repair or replacement for damaged furniture and appliances. Additionally, we provide insurance plans to ensure the recovery of your belongings during transit.",
          },
          {
            question: "How is the moving cost calculated by RWahab Movers UAE?",
            answer:
              "The cost of moving depends on various factors like the distance, volume of items, and specific services required. To get an accurate estimate, please visit the dedicated pages for each Emirate, where detailed pricing information is provided.",
          },
          {
            question: "Is RWahab Movers UAE a licensed moving company?",
            answer:
              "Yes, RWahab Movers UAE is a fully licensed and registered moving company. We hold individual trade licenses for each Emirate, including Abu Dhabi, Dubai, and Sharjah, all under the umbrella of our official company.",
          },
        ]}
      />
      <Contact
        title="Get a Free Quote for Any Kind Of Move Today"
        desc=" Ready to move? Contact RWahab Movers UAE today for a free consultation and quote. Let us take care of your home relocation needs while you sit back and relax!"
      />
    </>
  );
}

export default AboutUs;
