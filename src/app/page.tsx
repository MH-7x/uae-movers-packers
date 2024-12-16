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
export default function Home() {
  return (
    <>
      <div className="mt-24">
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
