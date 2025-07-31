import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ServiceSideMenu from "@/components/ServiceSideMenu";
import Link from "next/link";
import FAQs from "@/components/base/FAQs";

export const metadata: Metadata = {
  title: "Apartment Moving Services in Dubai | RWahab Movers UAE",
  description:
    "Stress-free apartment moving services in Dubai UAE. We handle everything from packing to transportation. Get a free quote today!",
  alternates: {
    canonical: `${process.env.PUBLIC_URL}/apartment-moving`,
  },
  openGraph: {
    type: "website",
    locale: "en-AE",
    countryName: "United Arab Emirates",
    emails: "wk0131839@gamil.com",
    faxNumbers: "+971506638692",
    phoneNumbers: "+971506638692",
    siteName: "RWahab Movers UAE",
    title: "Apartment Moving Services in Dubai | RWahab Movers UAE",
    description:
      "Stress-free apartment moving services in Dubai UAE. We handle everything from packing to transportation. Get a free quote today!",
    images: `${process.env.PUBLIC_URL}/service/office-moving.jpg`,
    url: `${process.env.PUBLIC_URL}/apartment-moving`,
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
          <div className="absolute md:py-0 py-20 inset-0 flex items-center justify-center px-2 flex-col z-10 bg-gradient-to-t from-black/90 via-black/80 to-black/60">
            <div className="max-w-5xl flex flex-col items-center justify-center mx-auto">
              <h1 className="text-3xl md:text-5xl text-white text-center ">
                Stress-Free Apartment Moving Services in UAE
              </h1>
              <h3 className="my-4 text-violet-400 text-center">
                Professional Apartment Moving Company
              </h3>
              <p className=" md:text-xl text-center text-white">
                Effortless Apartment relocation with expert packing, secure
                transport, and quick setup. Tailored solutions for seamless
                moves across the UAE.
              </p>

              <Button
                variant={"outline"}
                className="mt-8 mx-auto bg-transparent text-white"
                size={"lg"}
              >
                <Link aria-label="Call To Us" href="tel:+971506638692">
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
            Moving to a new apartment can be exciting, but the process itself
            can be stressful. RWahab Movers UAE is here to make your apartment
            move smooth and hassle-free. We offer comprehensive apartment moving
            services in overall UAE, handling everything from packing and
            loading to transportation and unpacking.
          </p>
          <h2>Why Choose Professional Apartment Movers?</h2>
          <p>
            While DIY moving might seem cheaper, it often leads to hidden costs,
            damages, and unnecessary stress. Here are some benefits of hiring
            professional apartment movers:
          </p>
          <ul>
            <li>
              <h3 className="text-lg">Efficiency:</h3> We have the experience
              and equipment to move your belongings quickly and efficiently.
            </li>
            <li>
              <h3 className="text-lg">Safety:</h3> Our trained movers know how
              to handle your items with care, minimizing the risk of damage.
            </li>
            <li>
              <h3 className="text-lg">Reduced Stress:</h3> Let us handle the
              heavy lifting and logistics, so you can focus on settling into
              your new home.
            </li>
            <li>
              <h3 className="text-lg">Insurance Coverage:</h3> We offer
              insurance options to protect your belongings during the move.
            </li>
          </ul>

          <h2 className="mt-20">Our Apartment Moving Services </h2>
          <p>
            We offer a range of apartment moving services to meet your specific
            needs:
          </p>
          <div className=" grid md:grid-cols-2 md:px-5 grid-cols-1 gap-5 mt-5">
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md p-3">
              <h3>Full-Service Packing</h3>
              <p className="text-sm ">
                We&apos;ll carefully pack all your belongings using high-quality
                packing materials.
              </p>
              <Button variant={"link"}>Contact Us</Button>
            </div>
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md p-3">
              <h3>Loading and Unloading</h3>
              <p className="text-sm ">
                Our experienced movers will load and unload your items safely
                and efficiently.
              </p>
              <Button variant={"link"}>Contact Us</Button>
            </div>
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md p-3">
              <h3>Transportation</h3>
              <p className="text-sm ">
                We have a fleet of well-maintained trucks to transport your
                belongings to your new apartment.
              </p>
              <Button variant={"link"}>Contact Us</Button>
            </div>
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md p-3">
              <h3>Unpacking and Setup</h3>
              <p className="text-sm ">
                We can unpack your belongings and even help with basic furniture
                assembly.
              </p>
              <Button variant={"link"}>Contact Us</Button>
            </div>
            <div className="rounded-xl text-center flex items-center justify-center flex-col gap-y-2 bg-white drop-shadow-md p-3">
              <h3>Customized Moving Plans</h3>
              <p className="text-sm ">
                We can tailor our services to fit your specific needs and
                budget.
              </p>
              <Button variant={"link"}>Contact Us</Button>
            </div>
          </div>

          <h2 className="mt-20">Our Comprehensive Apartment Moving Process </h2>
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
                We assess your Apartment space and create a detailed moving
                plan, including timelines and logistics.
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
                Our team packs and labels your Apartment equipment, documents,
                and furniture to ensure organized unpacking.
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
                Apartment space to your specifications.
              </p>
            </div>
          </div>
          <h2 className="mt-20">Tips for Planning Your Apartment Move </h2>
          <p>
            Planning is key to a successful apartment move. Here are some
            helpful tips:
          </p>
          <div className="mt-10">
            <h3 className="text-xl">Create a Moving Checklist:</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Start by creating a detailed checklist of everything that needs to
              be done.
            </p>
            <h3 className="text-xl mt-5">Declutter:</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Get rid of unwanted items before you move to save time and money.
            </p>
            <h3 className="text-xl mt-5">Pack Early:</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Start packing non-essential items well in advance.
            </p>
            <h3 className="text-xl mt-5">Label Boxes Clearly:</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Label each box with its contents and the room it belongs in.
            </p>
            <h3 className="text-xl mt-5">Notify Important Parties: </h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Inform your landlord, utility companies, and other relevant
              parties about your move.
            </p>
            <h3 className="text-xl mt-5">Book Your Move in Advance:</h3>
            <p className="mt-2 border-b pb-3 border-primary/50 text-base">
              Especially during peak season, booking your movers early is
              crucial.
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

          <h2 className="mt-20"> Benefits of Our Apartment Moving Services</h2>
          <p>
            Simplify your apartment move with our dependable and hassle-free
            apartment moving services. We ensure careful handling of your
            belongings, timely execution, and a stress-free transition to your
            new home.
          </p>
          <ul>
            <li>
              <h3 className="text-lg">Professional Packing and Handling:</h3>
              Our team ensures all your belongings are safely packed and
              transported to avoid damage.
            </li>
            <li>
              <h3 className="text-lg">Affordable and Transparent Pricing:</h3>
              We provide competitive rates with no hidden fees, making your move
              budget-friendly.
            </li>
            <li>
              <h3 className="text-lg">Comprehensive Support:</h3>
              From planning to unpacking, we offer full support to make your
              move smooth and worry-free.
            </li>
            <li>
              <h3 className="text-lg">Efficient and Reliable Services:</h3>
              Save time and energy with our streamlined processes and
              experienced movers.
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
            question: "How much does apartment moving cost?",
            answer:
              "The cost of apartment moving varies depending on several factors, including the size of your move (number of rooms/items), the distance of the move, the services you require (packing, unpacking, etc.), and the time of year. For a personalized and accurate estimate, we recommend contacting us for a free, no-obligation quote. We'll assess your specific needs and provide a transparent breakdown of the costs involved.",
          },
          {
            question: "Are my belongings insured during the move?",
            answer:
              "Yes, we understand the importance of protecting your valuable belongings. We offer various insurance options to provide coverage during the moving process. We can explain the different coverage levels and help you choose the best option for your needs. We also take great care in handling your items to minimize any risk of damage.",
          },
          {
            question: "How far in advance should I book my apartment move?",
            answer:
              "We recommend booking your apartment move at least 2-4 weeks in advance, especially if you're moving during peak season (typically summer months and weekends). Booking early ensures we can secure your preferred moving date and allows ample time for planning and preparation. However, we understand that sometimes moves are last-minute, so we'll always do our best to accommodate your needs.",
          },
          {
            question: "What is included in a typical apartment moving service?",
            answer:
              "A typical apartment moving service usually includes loading and unloading of your belongings, transportation to your new apartment, and basic disassembly/reassembly of furniture. We offer a range of additional services, such as packing and unpacking, storage solutions, and specialty item moving (pianos, artwork, etc.), which can be added to your move based on your requirements.",
          },
          {
            question: "Do I need to pack everything myself?",
            answer:
              "No, you don't have to pack everything yourself. We offer full and partial packing services to suit your needs and budget. Our professional packers use high-quality packing materials to ensure your belongings are safely protected during transit. If you prefer to pack yourself, we can provide packing supplies.",
          },
          {
            question: "What should I do to prepare for moving day?",
            answer:
              "To ensure a smooth moving day, we recommend decluttering before packing, clearly labeling all boxes with their contents and the room they belong in, disassembling furniture if necessary, and keeping valuables and essential items with you. It's also helpful to clear pathways in both your old and new apartments and inform building management of your move.",
          },
          {
            question:
              "What if there is damage to my belongings during the move?",
            answer:
              "While we take every precaution to prevent damage, accidents can happen. If any damage occurs during the move, please notify our team immediately. We will document the damage and work with you to resolve the issue according to our insurance policy. We are committed to handling such situations fairly and efficiently.",
          },
          {
            question: "Do you move items up/down stairs or elevators?",
            answer:
              "Yes, our experienced movers are equipped to handle moves involving stairs and elevators. However, it's important to inform us of any specific access challenges, such as narrow staircases or small elevators, during the initial consultation. This allows us to plan accordingly and bring the necessary equipment to ensure a safe and efficient move. There may be additional charges for moves involving excessive stairs or difficult access.",
          },
        ]}
      />
    </>
  );
}

export default VillaMoving;
