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
  title: "Movers and Packers Ajman | Affordable and Professional Services",
  description:
    "Searching for affordable movers and packers in Ajman? RWahab Movers UAE provides professional relocation services for homes, offices, and more. Contact us now!",
  alternates: {
    canonical: `${process.env.PUBLIC_URL}/movers-and-packers-ajman`,
  },
  openGraph: {
    title: "Movers and Packers Ajman | Affordable and Professional Services",
    description:
      "Searching for affordable movers and packers in Ajman? RWahab Movers UAE provides professional relocation services for homes, offices, and more. Contact us now!",
    url: `${process.env.PUBLIC_URL}/movers-and-packers-ajman`,
    images: `${process.env.PUBLIC_URL}/cities/movers-packers-ajman.jpg`,
  },
};

export default function MoversAjman() {
  return (
    <>
      <ServiceHeroSection
        city="Ajman"
        title="Affordable Moving Company And Packing In"
        subtitle="Top Movers and Packers In Ajman"
        description="Looking for reliable movers in Ajman? UAE Movers & Packers provides hassle-free local and international moving services for homes and businesses."
      />
      <ServiceFeatured
        features={[
          {
            name: {
              heading: "20,000+",
              subText: "Happy Clients",
            },
            ImgSrc: customers,
          },
          {
            name: {
              heading: "1,200+",
              subText: "Moves Completed Successfully",
            },
            ImgSrc: moves,
          },
          {
            name: {
              heading: "24/7",
              subText: "Round-the-Clock Support",
            },
            ImgSrc: support,
          },
          {
            name: {
              heading: "100%",
              subText: "Transparent Pricing Policy",
            },
            ImgSrc: charges,
          },
        ]}
      />
      <Benifits
        city="Ajman"
        title="Benefits Of Choosing Our Moving Services in Ajman"
      />

      <Serivces city="Ajman" />

      <WhyChooseUsTwo
        content={[
          {
            title: "Guaranteed Care",
            desc: "Ensuring the safety of your belongings is our priority. Our expert team takes every precaution to securely pack and transport your items.",
            points: [
              "High-Quality Packing Supplies",
              "Safe Handling Procedures",
              "Skilled Moving Professionals",
            ],
            image: demage,
          },
          {
            title: "Local Expertise",
            desc: "Being a locally-operated business, we understand the best practices for moving in Ajman, delivering efficient and tailored solutions.",
            points: [
              "Knowledge of Ajman’s Roads",
              "Awareness of Local Regulations",
              "Solutions for Community-Specific Needs",
            ],
            image: local,
          },
          {
            title: "Competitive Pricing",
            desc: "Enjoy affordable rates without hidden fees. We provide upfront pricing to ensure there are no surprises, letting you plan your move confidently.",
            points: [
              "Detailed Cost Estimates",
              "Customizable Moving Plans",
              "Affordable Rates",
            ],
            image: pricing,
          },
        ]}
      />

      <UsedFurnitures city="Ajman" />

      <Content
        sectionOne={{
          heading: "Your Trusted Movers in Ajman",
          p1: "Looking for professional movers in Ajman? UAE Movers & Packers delivers customized relocation solutions to meet your unique requirements. Contact us for a personalized quote.",
          p2: "Whether relocating from a villa, apartment, or commercial space, we handle every aspect of your move, from packing to storage solutions, ensuring peace of mind.",
          p3: "Choose UAE Movers & Packers as your certified moving company in Ajman for a seamless and stress-free moving experience. Request a free quote today!",
          imageSrc: "/locations/UAE-Movers-&-Packers.png",
        }}
        sectiontwo={{
          heading: "Reliable Packers and Movers in Ajman",
          p1: "Searching for dependable movers in Ajman? Many customers recommend UAE Movers & Packers for their expertise and reliability in relocation services.",
          p2: "Our detailed online profiles provide clear information about costs and services, making it easier to choose the right moving company for your needs.",
          p3: "For a hassle-free relocation, trust UAE Movers & Packers—certified and experienced movers in Ajman. Enjoy transparent pricing and top-notch services with no hidden surprises.",
          imageSrc: "/locations/Best-Movers-In-Dubai.png",
        }}
      />

      <LocationCards />
      <MovingServicesTable />
    </>
  );
}
