import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ServiceSideMenu from "@/components/ServiceSideMenu";

export const metadata: Metadata = {
  title: "Apartment Moving Services in Dubai | UAE Movers & Packers",
  description:
    "Stress-free apartment moving services in Dubai UAE. We handle everything from packing to transportation. Get a free quote today!",
};
function VillaMoving() {
  return (
    <>
      <section className="md:mt-32 mt-20 border">
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
                Call Now : +971 50 500 500
              </Button>
            </div>
          </div>
        </div>
      </section>

      <article className="grid md:grid-cols-6 grid-cols-1 gap-x-4 md:px-10 md:mt-20 mt-16 items-start">
        <div className="md:col-span-4 col-span-1 md:pr-10">
          <p>
            Moving to a new apartment can be exciting, but the process itself
            can be stressful. UAE Movers & Packers is here to make your
            apartment move smooth and hassle-free. We offer comprehensive
            apartment moving services in overall UAE, handling everything from
            packing and loading to transportation and unpacking.
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
    </>
  );
}

export default VillaMoving;
