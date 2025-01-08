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
  title: "Movers and Packers Abu Dhabi | Best and Professional Company",
  description:
    "Reliable movers and packers in Abu Dhabi. RWahab Movers UAE offers professional and affordable moving services tailored to your needs. Get a free quote today!",
  alternates: {
    canonical: `${process.env.PUBLIC_URL}/movers-and-packers-abu-dhabi`,
  },
  openGraph: {
    type: "website",
    locale: "en-AE",
    countryName: "United Arab Emirates",
    emails: "wk0131839@gamil.com",
    faxNumbers: "+971 123456789",
    phoneNumbers: "+971 123456789",
    siteName: "RWahab Movers UAE",
    title: "Movers and Packers Abu Dhabi | Best and Professional Company",
    description:
      "Reliable movers and packers in Abu Dhabi. RWahab Movers UAE offers professional and affordable moving services tailored to your needs. Get a free quote today!",
    url: `${process.env.PUBLIC_URL}/movers-and-packers-abu-dhabi`,
    images: `${process.env.PUBLIC_URL}/cities/movers-packers-abuDhabi.jpg`,
  },
};

export default function MoversAbuDhabi() {
  return (
    <>
      <ServiceHeroSection
        city="Abu Dhabi"
        title="Top Movers And Packers In"
        subtitle="Choose Best Moving Company Within Abu Dhabi"
        description="Moving within Abu Dhabi or abroad? RWahab Movers UAE provides reliable, hassle-free relocation services for homes and businesses in Abu Dhabi, Dubai, and beyond."
      />
      <ServiceFeatured
        features={[
          {
            name: {
              heading: "30,000+",
              subText: "Smiles Delivered",
            },
            ImgSrc: customers,
          },
          {
            name: {
              heading: "1,540+",
              subText: "Stress-Free Moves",
            },
            ImgSrc: moves,
          },
          {
            name: {
              heading: "24/7",
              subText: "Always Here for You",
            },
            ImgSrc: support,
          },
          {
            name: {
              heading: "100%",
              subText: "Transparent Pricing",
            },
            ImgSrc: charges,
          },
        ]}
      />
      <Benifits
        city="Abu Dhabi"
        title="Benifits Of Our Moving Services in Abu Dhabi"
      />

      <Serivces city="Abu Dhabi" />

      <WhyChooseUsTwo
        content={[
          {
            title: "Zero Damage Guarantee",
            desc: "We prioritize the safety of your belongings. Our professional team ensures careful packing, handling, and transportation to deliver a damage-free experience.",
            points: [
              "High-Quality Packing Materials",
              "Professional Handling",
              "Skilled Moving Experts",
            ],
            image: demage,
          },
          {
            title: "Expert Local Knowledge",
            desc: "As trusted movers in Abu Dhabi, we navigate the city efficiently, providing tailored moving solutions and the most reliable routes.",
            points: [
              "Specialized in Local Routes",
              "Understanding of Client Needs",
              "Adherence to Local Regulations",
            ],
            image: local,
          },
          {
            title: "Upfront Pricing Assurance",
            desc: "Enjoy transparent, competitive pricing with no hidden fees. We provide a detailed cost breakdown, so you know exactly what you're paying for.",
            points: [
              "Transparent Cost Breakdown",
              "Flexible Packages",
              "Affordable Rates",
            ],
            image: pricing,
          },
        ]}
      />

      <UsedFurnitures city="Abu Dhabi" />

      <Content
        sectionOne={{
          heading: "Trusted Relocation Company in Abu Dhabi",
          p1: "Searching for reliable movers in Abu Dhabi? RWahab Movers UAE offers personalized moving solutions tailored to your unique needs. Share your details with us for an accurate, no-obligation quote.",
          p2: "From navigating properties with attics or high floors to handling fragile valuables and providing temporary storage, we ensure a seamless relocation experience.",
          p3: "Choose RWahab Movers UAE—certified movers and packers in Abu Dhabi—for professional relocation services you can trust. Request your free quote today!",
          imageSrc: "/locations/UAE-Movers-&-Packers.png",
        }}
        sectiontwo={{
          heading: "Professional Movers and Packers in Abu Dhabi",
          p1: "Looking for movers in Abu Dhabi? Recommendations from colleagues or friends can be a great start. Many satisfied customers rely on RWahab Movers UAE for professional moving services.",
          p2: "Most moving companies provide detailed online profiles to help you understand costs and services before making a decision.",
          p3: "Avoid surprises by choosing certified movers in Abu Dhabi like RWahab Movers UAE for a hassle-free relocation experience.",
          imageSrc: "/locations/Best-Movers-In-Dubai.png",
        }}
      />

      <LocationCards />
      <MovingServicesTable />
    </>
  );
}
