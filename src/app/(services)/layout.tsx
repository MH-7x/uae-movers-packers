import FAQs from "@/components/base/FAQs";
import TestimonialSlider from "@/components/base/Testimonials";
import Contact from "@/components/Contact";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <section className="mt-20 ">
        <TestimonialSlider />
      </section>
      <section className="mt-20 ">
        <FAQs />
      </section>
      <Contact
        title="Get a Free Quote for Your Home Move Today"
        desc=" Ready to move? Contact UAE Movers & Packers today for a free consultation and quote. Let us take care of your home relocation needs while you sit back and relax!"
      />
    </>
  );
}
