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
      <section className="mt-20 md:px-0 px-3">
        <TestimonialSlider />
      </section>
      <section className="mt-20 md:px-0 px-3"></section>
      <Contact
        title="Get a Free Quote for Your Home Move Today"
        desc=" Ready to move? Contact UAE Movers & Packers today for a free consultation and quote. Let us take care of your home relocation needs while you sit back and relax!"
      />
    </>
  );
}
