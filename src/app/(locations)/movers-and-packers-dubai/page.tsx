import type { Metadata } from "next";
import Benifits from "../Benifits";
import customers from "../../../../public/locations/users.svg";
import moves from "../../../../public/locations/moves.svg";
import support from "../../../../public/locations/customers-support.svg";
import charges from "../../../../public/locations/hidden-charges.png";
import Serivces from "@/components/base/Serivces";
import LocationCards from "@/components/base/LocationsSlider";
import WhyChooseUsTwo from "@/components/base/WhyChooseUsTwo";
import local from "../../../../public/images/local-knowlage.png";
import demage from "../../../../public/images/demage.png";
import pricing from "../../../../public/images/pricing.png";
import UsedFurnitures from "@/components/base/UsedFurnitures";
import Content from "@/components/base/Content";
import MovingServicesTable from "@/components/base/PricingTable";
import ServiceHeroSection from "@/components/base/ServiceHeroSection";
import ServiceFeatured from "@/components/base/ServiceFeatured";

export const metadata: Metadata = {
  title: "Movers and Packers Dubai | Professional Moving Services in UAE",
  description:
    "Need movers and packers in Dubai? We provide professional moving, furniture, and house packing services at affordable rates. Get top relocation services today!",
  alternates: {
    canonical: `${process.env.PUBLIC_URL}/movers-and-packers-dubai`,
  },
  openGraph: {
    type: "website",
    locale: "en-AE",
    countryName: "United Arab Emirates",
    emails: "wk0131839@gamil.com",
    faxNumbers: "+971506638692",
    phoneNumbers: "+971506638692",
    siteName: "RWahab Movers UAE",
    title: "Movers and Packers Dubai | Professional Moving Services in UAE",
    description:
      "Need movers and packers in Dubai? We provide professional moving, furniture, and house packing services at affordable rates. Get top relocation services today!",
    url: `${process.env.PUBLIC_URL}/movers-and-packers-dubai`,
    images: `${process.env.PUBLIC_URL}/cities/movers-packers-dubai.jpg`,
  },
};

export default function MoversDubai() {
  return (
    <>
      <ServiceHeroSection
        title="Trusted Movers and Packers in Dubai – Your Professional Moving Partner"
        subtitle=" Seamless Relocation Solutions Across the Dubai"
        description=" Planning a move within the UAE or abroad? RWahab Movers UAE offers
          reliable, stress-free relocation services for individuals, families,
          and businesses across Dubai, Abu Dhabi, and beyond."
      />
      <ServiceFeatured
        features={[
          {
            name: {
              heading: "30,00+",
              subText: "Happy Customers",
            },
            ImgSrc: customers,
          },

          {
            name: {
              heading: "1540+",
              subText: "Moves Completed",
            },
            ImgSrc: moves,
          },
          {
            name: {
              heading: "27 / 7",
              subText: "Customer Support",
            },
            ImgSrc: support,
          },
          {
            name: {
              heading: "0%",
              subText: "No Hidden Charges",
            },
            ImgSrc: charges,
          },
        ]}
      />
      <Benifits city="Dubai" title="Benifits Of Our Moving Services in Dubai" />

      <Serivces city="Dubai" />

      <WhyChooseUsTwo
        content={[
          {
            title: "Zero Damage Promise",
            desc: "Moving with care is our top priority. Our skilled team handles every item with attention and precision, safeguarding your belongings from start to finish.",
            points: [
              "Quality Packing Materials",
              "Careful Handling",
              "Trained Professionals",
            ],
            image: demage,
          },
          {
            title: "Local Knowledge",
            desc: "As a locally-owned business, we know the ins and outs of moving in Dubai allowing us to offer the best routes and solutions.",
            points: [
              "Expertise in Local Routes",
              "Understanding of Community Needs",
              "Familiar with Local Regulations",
            ],
            image: local,
          },
          {
            title: "Transparent Pricing",
            desc: "Get competitive rates without surprises. With clear pricing and no hidden fees, you’ll know exactly what to expect from the moment you receive your quote.",
            points: [
              "Clear Cost Breakdown",
              "Customizable Plans",
              "Competitive Rates",
            ],
            image: pricing,
          },
        ]}
      />

      <UsedFurnitures city="Dubai" />

      <Content
        sectionOne={{
          heading: "Expert Relocation Company in Dubai",
          p1: " Looking for reliable movers in Dubai? RWahab Movers UAE provides tailored moving solutions for all your relocation needs. Share your project details with us to get an accurate quote based on your requirements.",
          p2: "Whether it’s moving to or from a property with a cellar, attic, or high floors, handling fragile valuables, or needing storage before moving into your new home, we’ve got you covered.",
          p3: " When choosing trusted movers and packers, ensure the company meets consumer trust standards and delivers services that match your expectations. Contact RWahab Movers UAE for professional relocation services and request your free quote today!",
          imageSrc: "/locations/UAE-Movers-&-Packers.png",
        }}
        sectiontwo={{
          heading: "Proficient Movers and Packers in Dubai",
          p1: "To hire movers in Dubai, you can find out from your surroundings, your colleagues or your friends may already have used a professional moving company in Dubai.",
          p2: " Of course, all moving companies have detailed profiles on the Internet to give a precise idea of the cost that will involve your departure.",
          p3: "In order to avoid unpleasant surprises, it is advised to prefer professional movers Dubai who are certified like RWahab Movers UAE.",
          imageSrc: "/locations/Best-Movers-In-Dubai.png",
        }}
      />

      <LocationCards />
      <MovingServicesTable />
    </>
  );
}
