import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ServiceSideMenu from "@/components/ServiceSideMenu";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Appliance Moving UAE - AC, TV, Refrigerator etc",
  description:
    "Need professional home appliance movers in UAE? RWahab Movers UAE specializes in safe moving of ACs, TVs, refrigerators, washing machines, and more. Affordable and reliable service tailored to your needs. Get a free quote today!",
  alternates: {
    canonical: `${process.env.PUBLIC_URL}/appliances-moving`,
  },
  openGraph: {
    title: "Home Appliance Moving UAE - AC, TV, Refrigerator etc",
    description:
      "Need professional home appliance movers in UAE? RWahab Movers UAE specializes in safe moving of ACs, TVs, refrigerators, washing machines, and more. Affordable and reliable service tailored to your needs. Get a free quote today!",
    images: `${process.env.PUBLIC_URL}/service/appliances-moving.jpg`,
    url: `${process.env.PUBLIC_URL}/appliances-moving`,
  },
};
function AppliancesMoving() {
  return (
    <>
      <section className="md:mt-32 mt-16 border">
        <div className="relative overflow-hidden w-full min-h-[500px]  md:py-0 ">
          <Image
            src="/service/appliances-moving.jpg"
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
                Expert Appliances Moving Services in the UAE
              </h1>
              <h3 className="my-4 text-violet-400 text-center">
                Relocate Your Home Appliances with Ease
              </h3>
              <p className=" md:text-xl text-center text-white">
                we are here to make your move seamless, no matter the distance.
                Trust us to handle your appliances with care and
                professionalism.
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
            At UAE Movers & Packers, we specialize in the safe and efficient
            moving of appliances across all major cities in the UAE. Whether
            you&lsquo;re relocating a refrigerator, washing machine, or any
            other large home appliance, our dedicated team is here to ensure a
            seamless experience.
          </p>
          <h2>Why Choose Our Appliances Moving Services?</h2>
          <p>
            Moving appliances can be a complex task, requiring specialized
            skills and equipment. Here&apos;s why you should choose us for your
            appliances moving needs:
          </p>
          <ul>
            <li>
              <h3 className="text-lg">Experienced Professionals:</h3> Our team
              is trained to handle heavy and fragile appliances with care.
            </li>
            <li>
              <h3 className="text-lg">Tailored Solutions:</h3> We understand
              that every move is unique, so we offer customized moving solutions
              based on your specific requirements.
            </li>
            <li>
              <h3 className="text-lg">Quality Packing Materials:</h3> We use
              high-quality packing materials to protect your appliances during
              transit.
            </li>
            <li>
              <h3 className="text-lg">Insurance Coverage:</h3> We offer
              insurance options to protect your belongings during the move.
            </li>
          </ul>

          <h2 className="mt-10">Heavy Refrigerators Moving in Dubai</h2>
          <p>
            Our expert team handles the moving of all kinds of residential and
            commercial refrigerators, freezers, and chillers. Heavy
            refrigerating unit moving can be challenging, especially in Dubai,
            but with our careful planning and precautions, we ensure a safe and
            efficient relocation. We use specialized equipment to protect your
            refrigeration unit as well as your floors, doors, and walls during
            the move. If your fridge is full, don’t worry—our team will provide
            carton boxes to empty it first, ensuring no damage occurs during the
            process.
          </p>

          <h2 className="mt-10">
            Hire a Professional to Move Your Appliances Safely
          </h2>
          <p>
            Moving appliances requires expertise, and that&apos;s why we employ
            a skilled HVAC technician to lead the relocation of your appliances.
            Our professional team strictly follows all safety guidelines and
            ensures proper disconnection of power. We take extra care to prevent
            shaking that can cause minor damages to refrigerators and air
            conditioners. If you need to move commercial appliances for your
            restaurant, cafe, chillers, laundry, or medical equipment, we offer
            affordable quotes. Our comprehensive services include unplugging,
            dismantling, packing, transportation, and installation— all handled
            by our dedicated team.
          </p>
          <h2 className="mt-10">
            Expert TV Screen Dismantling, Packing, and Installation Services
          </h2>
          <p>
            At Najmat Suhail, we specialize in professional TV screen
            dismantling, packing, shifting, and installation services for all
            types of screens, ensuring a seamless relocation within your home or
            to a new house. Our experienced team utilizes high-quality packing
            materials and specialized equipment to protect your valuable
            television during the entire moving process, minimizing the risk of
            damage. Whether you have an LCD, LED, or OLED screen, we ensure that
            your TV is set up correctly in your new location, providing you with
            peace of mind and a hassle-free experience.
          </p>
          <h2 className="mt-10">
            Comprehensive Appliance Repair Services in Abu Dhabi
          </h2>
          <p>
            In addition to our moving services, Najmat Suhail offers reliable
            appliance repair and maintenance in Abu Dhabi. Our skilled
            technicians are experts in a variety of services, including:
          </p>
          <ul>
            <li>
              <strong>washing machine repair and maintenance</strong>,{" "}
            </li>
            <li>
              <strong>refrigerator repair service</strong>,{" "}
            </li>
            <li>
              <strong>AC repair and maintenance</strong>
            </li>
            <li>
              <strong>electric and gas cooker repair</strong>
            </li>
          </ul>
          <p>
            We understand how essential your appliances are to your daily life,
            which is why we strive for prompt and efficient service, ensuring
            your appliances are running smoothly again in no time. Trust us to
            restore the functionality and lifespan of your appliances with our
            top-notch repair solutions.
          </p>
          <h2 className="mt-20">Our Appliances Moving Process </h2>
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
              <p className="h3">Free Consultation and Estimation</p>
              <p className="text-sm ">
                We begin with a free consultation to assess your appliances and
                needs. We&apos;ll provide a transparent and competitive quote
                based on the complexity of your move.
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
              <p className="h3"> Expert Packing</p>
              <p className="text-sm ">
                Our team will carefully pack your appliances using specialized
                packing techniques and materials to prevent damage during
                transport.
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
              <p className="h3">Safe Transportation</p>
              <p className="text-sm ">
                Using our modern fleet of vehicles equipped with safety
                features, we ensure your appliances arrive safely at their new
                location.
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
              <p className="h3">Unpacking and Setup</p>
              <p className="text-sm ">
                Once we arrive at your destination, we’ll unpack your appliances
                and set them up, helping you get settled in quickly.
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 col-span-1 md:px-3 py-5 ">
          <ServiceSideMenu />
        </div>
      </article>
    </>
  );
}

export default AppliancesMoving;
