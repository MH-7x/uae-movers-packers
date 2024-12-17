import FAQs from "@/components/base/FAQs";
import TestimonialSlider from "@/components/base/Testimonials";
import Contact from "@/components/Contact";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import { getFAQs } from "@/lib/getFAQs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className="md:mt-32 mt-20 border ">
        <ServiceHeroSection
          sub={"Your Trusted Partner for Stress-Free Home Relocation"}
          title="Professional Home Moving Services in UAE"
          desc="Experience stress-free relocation with our Professional Home Moving Services in UAE. We ensure safe packing, reliable transport, and hassle-free unpacking for a smooth move to your new home."
        />
      </section>
      <article className="grid md:grid-cols-6 grid-cols-1 gap-x-4 md:px-10 md:mt-20 mt-16">
        <div className="md:col-span-4 col-span-1 min-h-screen border-red-500">
          {children}
        </div>
        <div className="md:col-span-2 col-span-1 min-h-screen bg-secondary "></div>
      </article>
      <section className="mt-20 ">
        <TestimonialSlider />
      </section>
      <section className="mt-20 ">
        <FAQs faqs={getFAQs("Home")} />
      </section>
      <Contact
        title="Get a Free Quote for Your Home Move Today"
        desc=" Ready to move? Contact UAE Movers & Packers today for a free consultation and quote. Let us take care of your home relocation needs while you sit back and relax!"
      />
    </>
  );
}
