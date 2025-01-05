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
  title: "Movers and Packers Sharjah | Best and Professional Company",
  description:
    "Looking for the best movers and packers in Sharjah? RWahab Movers UAE provides expert relocation services with unmatched professionalism. Get a free estimate now!",
  alternates: {
    canonical: `${process.env.PUBLIC_URL}/movers-and-packers-sharjah`,
  },
  openGraph: {
    title: "Movers and Packers Sharjah | Best and Professional Company",
    description:
      "Looking for the best movers and packers in Sharjah? RWahab Movers UAE provides expert relocation services with unmatched professionalism. Get a free estimate now!",
    url: `${process.env.PUBLIC_URL}/movers-and-packers-sharjah`,
    images: `${process.env.PUBLIC_URL}/cities/movers-packers-sharjah.jpg`,
  },
};

export default function MoversAbuDhabi() {
  return (
    <>
      <ServiceHeroSection
        city="Sharjah"
        title="Cheap Moving Company In"
        subtitle="Top Rated Movers and Packers In Sharjah"
        description="Need reliable movers in Sharjah or Dubai? UAE Movers & Packers offers stress-free local and international relocation services for homes and businesses."
      />
      <ServiceFeatured
        features={[
          {
            name: {
              heading: "30,000+",
              subText: "Satisfied Clients",
            },
            ImgSrc: customers,
          },
          {
            name: {
              heading: "1,540+",
              subText: "Successful Relocations",
            },
            ImgSrc: moves,
          },
          {
            name: {
              heading: "24/7",
              subText: "Dedicated Support",
            },
            ImgSrc: support,
          },
          {
            name: {
              heading: "0%",
              subText: "Hidden Fees Guaranteed",
            },
            ImgSrc: charges,
          },
        ]}
      />
      <Benifits
        city="Sharjah"
        title="Benifits Of Our Moving Services in Sharjah"
      />

      <Serivces city="Sharjah" />

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
            desc: "As a locally-owned business, we know the ins and outs of moving in Sharjah allowing us to offer the best routes and solutions.",
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

      <UsedFurnitures city="Sharjah" />

      <Content
        sectionOne={{
          heading: "Trusted Moving Company in Sharjah",
          p1: "Searching for reliable movers in Sharjah? UAE Movers & Packers offers customized moving and packing services designed to meet all your relocation needs. Get in touch with us to receive an accurate quote tailored to your requirements.",
          p2: "Whether you’re moving from a high-rise apartment, handling delicate valuables, or need storage solutions before settling into your new home, our expert movers in Sharjah have you covered.",
          p3: "Choose UAE Movers & Packers, a certified and trusted moving company in Sharjah, to ensure a stress-free experience. Contact us today to request your free quote and enjoy seamless relocation services.",
          imageSrc: "/locations/UAE-Movers-&-Packers.png",
        }}
        sectiontwo={{
          heading: "Professional Movers and Packers in Sharjah",
          p1: "Looking to hire movers in Sharjah? Ask for recommendations from friends, colleagues, or family who may have used a reliable moving company in Sharjah, like UAE Movers & Packers.",
          p2: "Many moving companies provide detailed online profiles to help you estimate the costs and services, ensuring transparency and peace of mind.",
          p3: "For a smooth moving experience, trust professional movers in Sharjah who are certified and experienced, such as UAE Movers & Packers. Avoid hidden surprises and enjoy hassle-free relocation services.",
          imageSrc: "/locations/Best-Movers-In-Dubai.png",
        }}
      />

      <LocationCards />
      <MovingServicesTable />
    </>
  );
}
