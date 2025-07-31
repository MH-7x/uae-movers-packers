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
  title: "Movers and Packers Umm Al Quwain | Best Moving Services",
  description:
    "Top movers and packers in Umm Al Quwain. RWahab Movers UAE offers dependable, professional, and affordable moving services. Contact us today!",
  alternates: {
    canonical: `${process.env.PUBLIC_URL}/movers-and-packers-umm-al-quwain`,
  },
  openGraph: {
    type: "website",
    locale: "en-AE",
    countryName: "United Arab Emirates",
    emails: "wk0131839@gamil.com",
    faxNumbers: "+971506638692",
    phoneNumbers: "+971506638692",
    siteName: "RWahab Movers UAE",
    title: "Movers and Packers Umm Al Quwain | Best Moving Services",
    description:
      "Top movers and packers in Umm Al Quwain. RWahab Movers UAE offers dependable, professional, and affordable moving services. Contact us today!",
    url: `${process.env.PUBLIC_URL}/movers-and-packers-umm-al-quwain`,
    images: `${process.env.PUBLIC_URL}/cities/movers-packers-umm.jpg`,
  },
};

export default function MoversUmmAlQuwain() {
  return (
    <>
      <ServiceHeroSection
        title="Best Movers in Packers In Umm Al Quwain"
        subtitle="Professional Movers and Packers In Umm Al Quwain"
        description="Looking for expert movers in Umm Al Quwain? RWahab Movers UAE offers reliable and affordable local and international moving services for both residential and commercial clients."
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
              subText: "Moves Successfully Completed",
            },
            ImgSrc: moves,
          },
          {
            name: {
              heading: "24/7",
              subText: "Customer Assistance",
            },
            ImgSrc: support,
          },
          {
            name: {
              heading: "0%",
              subText: "No Hidden Costs",
            },
            ImgSrc: charges,
          },
        ]}
      />
      <Benifits
        city="Umm Al Quwain"
        title="Benefits of Choosing Our Moving Services in Umm Al Quwain"
      />

      <Serivces city="Umm Al Quwain" />

      <WhyChooseUsTwo
        content={[
          {
            title: "Damage-Free Guarantee",
            desc: "We ensure the safety of your belongings throughout the entire moving process, from packing to transportation, with care and attention to detail.",
            points: [
              "High-Quality Packing Materials",
              "Careful Handling of Fragile Items",
              "Experienced Moving Professionals",
            ],
            image: demage,
          },
          {
            title: "Local Expertise",
            desc: "Our deep knowledge of Umm Al Quwain allows us to offer efficient, hassle-free moving services that are tailored to your specific needs.",
            points: [
              "Understanding of Local Areas",
              "Efficient Route Planning",
              "Familiar with Local Regulations",
            ],
            image: local,
          },
          {
            title: "Fair and Transparent Pricing",
            desc: "We believe in providing clear and competitive pricing with no hidden fees, so you can plan your move with complete peace of mind.",
            points: [
              "Upfront Cost Estimates",
              "Tailored Service Packages",
              "Affordable Moving Rates",
            ],
            image: pricing,
          },
        ]}
      />

      <UsedFurnitures city="Umm Al Quwain" />

      <Content
        sectionOne={{
          heading: "Reliable Movers in Umm Al Quwain",
          p1: "Need dependable movers in Umm Al Quwain? RWahab Movers UAE provides customized moving services to meet all your relocation needs. Contact us today for a free quote tailored to your requirements.",
          p2: "Whether you're moving from a villa or an apartment, require storage before your move, or need expert handling of delicate items, we have you covered.",
          p3: "Trust RWahab Movers UAE, a licensed and certified moving company in Umm Al Quwain, for a smooth and stress-free moving experience. Get in touch now for your personalized quote.",
          imageSrc: "/locations/UAE-Movers-&-Packers.png",
        }}
        sectiontwo={{
          heading: "Experienced Movers and Packers in Umm Al Quwain",
          p1: "Looking to hire movers in Umm Al Quwain? Choose RWahab Movers UAE, a trusted name in the moving industry, known for delivering quality services and affordable pricing.",
          p2: "All moving companies, including ours, offer detailed profiles online, providing transparent cost estimates and services to make your decision easier.",
          p3: "For a worry-free relocation experience, hire certified and experienced movers in Umm Al Quwain. RWahab Movers UAE offers clear pricing, no hidden fees, and expert services.",
          imageSrc: "/locations/Best-Movers-In-Dubai.png",
        }}
      />

      <LocationCards />
      <MovingServicesTable />
    </>
  );
}
