import AboutUsSection from "@/components/base/AboutUs";
import HeroSection from "@/components/base/HeroSection";
import Process from "@/components/base/Process";
import Serivces from "@/components/base/Serivces";
import WhyChooseUs from "@/components/base/WhyChooseUs";
import WhyChooseUsTwo from "@/components/base/WhyChooseUsTwo";
import local from "../../public/images/local-knowlage.png";
import demage from "../../public/images/demage.png";
import pricing from "../../public/images/pricing.png";
import UsedFurnitures from "@/components/base/UsedFurnitures";
import MovingServicesTable from "@/components/base/PricingTable";
import type { Metadata } from "next";
import { generateJSONLD } from "@/lib/GenreateJSONLD";

export const metadata: Metadata = {
  title: "Professional Movers and Packers in Dubai | RWahab Movers UAE",
  description:
    "Affordable and reliable movers and packers in Dubai. RWahab Movers UAE offers professional moving services tailored to your needs. Get a free quote today!",
  alternates: {
    canonical: process.env.PUBLIC_URL,
  },
  openGraph: {
    type: "website",
    locale: "en-AE",
    countryName: "United Arab Emirates",
    emails: "wk0131839@gamil.com",
    faxNumbers: "+971 123456789",
    phoneNumbers: "+971 123456789",
    siteName: "RWahab Movers UAE",
    title: "Professional Movers and Packers in Dubai | RWahab Movers UAE",
    description:
      "Affordable and reliable movers and packers in Dubai. RWahab Movers UAE offers professional moving services tailored to your needs. Get a free quote today!",
    images: `${process.env.PUBLIC_URL}/images/R-Wahab-Movers-UAE.jpg`,
    url: process.env.PUBLIC_URL,
  },
};
const JsonLd = generateJSONLD();
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JsonLd }}
      />
      <div className="mt-24 md:px-0 px-3">
        <HeroSection />
        <AboutUsSection />
        <WhyChooseUs />
        <Serivces />
        <Process />
        <UsedFurnitures />
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
              desc: "As a locally-owned business, we know the ins and outs of moving in Dubai, Sharjah, and Ajman, allowing us to offer the best routes and solutions.",
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
        <MovingServicesTable />
      </div>
    </>
  );
}
