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
  title: "Movers and Packers Ras Al Khaimah | Reliable and Affordable Services",
  description:
    "Need reliable movers and packers in Ras Al Khaimah? RWahab Movers UAE offers affordable and professional moving services for stress-free relocation. Call us today!",
  alternates: {
    canonical: `${process.env.PUBLIC_URL}/movers-and-packers-ras-al-khaimah`,
  },
  openGraph: {
    type: "website",
    locale: "en-AE",
    countryName: "United Arab Emirates",
    emails: "wk0131839@gamil.com",
    faxNumbers: "+971 123456789",
    phoneNumbers: "+971 123456789",
    siteName: "RWahab Movers UAE",
    title:
      "Movers and Packers Ras Al Khaimah | Reliable and Affordable Services",
    description:
      "Need reliable movers and packers in Ras Al Khaimah? RWahab Movers UAE offers affordable and professional moving services for stress-free relocation. Call us today!",
    url: `${process.env.PUBLIC_URL}/movers-and-packers-ras-al-khaimah`,
    images: `${process.env.PUBLIC_URL}/cities/movers-packers-rasAlKhaimah.jpg`,
  },
};

export default function MoversRasAlKhaimah() {
  return (
    <>
      <ServiceHeroSection
        title="Reliable Moving Company In"
        subtitle="Professional Movers and Packers In Ras Al Khaimah"
        description="Searching for expert movers in Ras Al Khaimah? RWahab Movers UAE offers seamless local and international relocation services for homes and businesses."
      />
      <ServiceFeatured
        features={[
          {
            name: {
              heading: "25,000+",
              subText: "Satisfied Customers",
            },
            ImgSrc: customers,
          },
          {
            name: {
              heading: "1,800+",
              subText: "Moves Successfully Completed",
            },
            ImgSrc: moves,
          },
          {
            name: {
              heading: "24/7",
              subText: "Support at Your Service",
            },
            ImgSrc: support,
          },
          {
            name: {
              heading: "100%",
              subText: "No Hidden Costs",
            },
            ImgSrc: charges,
          },
        ]}
      />
      <Benifits
        city="Ras Al Khaimah"
        title="Benefits Of Choosing Our Moving Services in Ras Al Khaimah"
      />

      <Serivces city="Ras Al Khaimah" />

      <WhyChooseUsTwo
        content={[
          {
            title: "Safety First",
            desc: "We prioritize the security of your belongings. From packing to transportation, every step is handled with care by our trained professionals.",
            points: [
              "Premium Packing Supplies",
              "Careful Loading and Unloading",
              "Highly Skilled Team",
            ],
            image: demage,
          },
          {
            title: "Local Insights",
            desc: "Being well-acquainted with Ras Al Khaimah, we provide tailored moving solutions, ensuring timely and efficient relocation services.",
            points: [
              "Extensive Knowledge of Local Routes",
              "Understanding of Area-Specific Needs",
              "Compliance with Local Guidelines",
            ],
            image: local,
          },
          {
            title: "Honest Pricing",
            desc: "We offer competitive rates with full transparency. No hidden charges—just straightforward pricing you can trust.",
            points: [
              "Detailed Price Estimates",
              "Flexible Service Packages",
              "Affordable and Fair Rates",
            ],
            image: pricing,
          },
        ]}
      />

      <UsedFurnitures city="Ras Al Khaimah" />

      <Content
        sectionOne={{
          heading: "Trusted Movers in Ras Al Khaimah",
          p1: "Searching for reliable movers in Ras Al Khaimah? RWahab Movers UAE delivers customized moving solutions designed to make your relocation hassle-free. Get a personalized quote today.",
          p2: "From apartments and villas to office spaces, we manage every aspect of your move, including packing, dismantling, and storage, for a seamless experience.",
          p3: "RWahab Movers UAE is your go-to certified moving company in Ras Al Khaimah. Contact us for a free quote and let us handle your move with expertise and care.",
          imageSrc: "/locations/UAE-Movers-&-Packers.png",
        }}
        sectiontwo={{
          heading: "Experienced Movers and Packers in Ras Al Khaimah",
          p1: "Looking for movers in Ras Al Khaimah? Ask for referrals or choose RWahab Movers UAE, trusted for delivering top-quality relocation services in the region.",
          p2: "We provide comprehensive online profiles and cost estimates to help you plan your move with clarity and confidence.",
          p3: "Avoid the stress of moving with certified and experienced movers in Ras Al Khaimah. RWahab Movers UAE ensures a hassle-free relocation with transparent pricing and professional services.",
          imageSrc: "/locations/Best-Movers-In-Dubai.png",
        }}
      />

      <LocationCards />
      <MovingServicesTable />
    </>
  );
}
