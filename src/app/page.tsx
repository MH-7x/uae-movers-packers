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
import LocationsSlider from "@/components/base/LocationsSlider";
import PreviewVideo from "@/components/previewVideo";
import Content from "@/components/base/Content";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top-Rated Movers in Dubai, UAE | Movers and Packers",
  description:
    "With 10 years of experience, RWahab Movers UAE has become UAE’s most trusted name in relocation services. We take pride in offering premium moving and packing solutions tailored to your needs, ensuring every move is a success",
  alternates: {
    canonical: process.env.PUBLIC_URL,
  },
  openGraph: {
    type: "website",
    locale: "en-AE",
    countryName: "United Arab Emirates",
    emails: ["wk0131839@gamil.com", "rwahabmoversuae@gmail.com"],
    faxNumbers: "+971506638692",
    phoneNumbers: "+971506638692",
    siteName: "RWahab Movers UAE",
    title: "Top-Rated Movers in Dubai, UAE | Movers and Packers",
    description:
      "With 10 years of experience, RWahab Movers UAE has become UAE’s most trusted name in relocation services. We take pride in offering premium moving and packing solutions tailored to your needs, ensuring every move is a success",
    images: `${process.env.PUBLIC_URL}/images/R-Wahab-Movers-UAE.jpg`,
    url: process.env.PUBLIC_URL,
  },
};
const JsonLd = generateJSONLD();
export default function Home() {
  return (
    <>
      <Script
        id="schema"
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JsonLd }}
      />
      <div className="mt-24 md:px-0 px-3">
        <HeroSection />
        <PreviewVideo />
        <AboutUsSection />
        <WhyChooseUs />
        <Serivces />
        <Content
          sectionOne={{
            heading: "Best Moving Company in Dubai",
            p1: "Need reliable movers in Dubai? RWahab Movers UAE offers customized moving solutions for all your relocation needs. Share your project details with us for a free, accurate quote tailored to your specific requirements.",
            p2: "Moving to or from a property with unique challenges? Whether it's navigating cellars, attics, or high floors, handling fragile valuables, or requiring secure storage, RWahab Movers UAE has the expertise to handle it all.",
            p3: " When choosing trusted movers and packers, prioritize companies that meet consumer trust standards and deliver exceptional service. Contact RWahab Movers UAE for professional relocation services and request your free quote today!",
            imageSrc: "/locations/UAE-Movers-&-Packers.png",
          }}
          sectiontwo={{
            heading: "Proficient Movers and Packers in Dubai",
            p1: "Finding reliable movers in Dubai can be easier than you think. Ask your friends, family, and colleagues for recommendations – they may have already used a professional moving company in Dubai.",
            p2: "Most moving companies in Dubai have detailed online profiles that provide an initial estimate of the costs involved in your move.",
            p3: "To avoid unexpected issues, choose certified and experienced movers in Dubai like RWahab Movers UAE",
            imageSrc: "/locations/Best-Movers-In-Dubai.png",
          }}
        />

        <UsedFurnitures />
        <LocationsSlider />
        <Process />
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
