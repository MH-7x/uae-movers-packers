import AboutUsSection from "@/components/base/AboutUs";
import HeroSection from "@/components/base/HeroSection";
import Process from "@/components/base/Process";
import Serivces from "@/components/base/Serivces";
import WhyChooseUs from "@/components/base/WhyChooseUs";

export default function Home() {
  return (
    <>
      <div className="mt-24 py-20 ">
        <HeroSection />
        <AboutUsSection />
        <WhyChooseUs />
        <Serivces />
        <Process />
      </div>
      <div className="mt-32 min-h-screen">
        <h1>HELLO</h1>
      </div>
      <div className="mt-32 min-h-screen">
        <h1>HELLO</h1>
      </div>
      <div className="mt-32 min-h-screen">
        <h1>HELLO</h1>
      </div>
    </>
  );
}
