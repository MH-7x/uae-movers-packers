import LocationsSlider from "@/components/base/LocationsSlider";
import TestimonialSlider from "@/components/base/Testimonials";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";
import Link from "next/link";
const testimonials = [
  {
    Name: "Sarah Johnson",
    Review:
      "The service was exceptional! They handled my move with utmost care and professionalism. Highly recommended for stress-free moving.",
    Date: "2020-03-15",
  },
  {
    Name: "Mohammed Ali",
    Review:
      "Amazing experience! They were efficient and ensured all my furniture arrived in perfect condition. Best moving service in the area!",
    Date: "2022-07-08",
  },
  {
    Name: "Emily Carter",
    Review:
      "I was impressed with their attention to detail and punctuality. If you need reliable movers, these are the people to call.",
    Date: "2019-11-22",
  },
  {
    Name: "Ahmed Khan",
    Review:
      "Their team made my international move smooth and hassle-free. Great communication and top-notch packing skills.",
    Date: "2021-05-17",
  },
  {
    Name: "Jessica Brown",
    Review:
      "Fantastic service! They handled everything from packing to unloading seamlessly. I couldn’t have asked for better movers.",
    Date: "2023-01-10",
  },
  {
    Name: "John Smith",
    Review:
      "Professional, polite, and quick! Their team exceeded my expectations and made my relocation worry-free. Highly recommend them.",
    Date: "2020-09-04",
  },
  {
    Name: "Aisha Malik",
    Review:
      "I’m very satisfied with their service. They provided excellent packing materials and delivered everything on time.",
    Date: "2021-12-19",
  },
  {
    Name: "David Wilson",
    Review:
      "Superb service at a very reasonable price! They took great care of my fragile items. Thank you for the amazing experience!",
    Date: "2022-03-05",
  },
  {
    Name: "Sophia Green",
    Review:
      "From start to finish, everything was handled professionally. I will definitely use their services again in the future.",
    Date: "2019-06-28",
  },
  {
    Name: "Omar Abdul",
    Review:
      "Best movers I’ve ever hired! They made my house shifting experience stress-free and efficient. Highly recommended.",
    Date: "2023-09-14",
  },
];

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <section className="md:mt-32 mt-24">{children}</section>;
      <div className="mt-28">
        <TestimonialSlider cus={testimonials} />
      </div>
      <LocationsSlider furitures={true} />
      <section className="md:mt-28 mt-20 bg-primary max-w-5xl rounded-2xl mx-auto md:p-10 p-5">
        <h2 className="text-center text-white drop-shadow">
          Contact Us Call & Whatsapp
        </h2>
        <p className="text-white text-center mt-3">
          Best Used Furniture Buyers in Dubai! Whether you’re looking to sell
          second-hand furniture from your home or office, you’ve come to the
          right place. Give us a call anytime to buy or sell used furniture and
          home appliances—quick, easy, and hassle-free!
        </p>

        <div className="w-full justify-center flex mt-7 flex-wrap gap-3">
          <Link
            aria-label="Contact For Used Furnitures"
            href={
              "https://wa.me/+971503806855?text=Hi%20I%20am%20looking%20for%used%20furnitures"
            }
          >
            <Button size={"lg"} variant={"outline"}>
              <PhoneCall /> Call / Whatsapp
            </Button>
          </Link>
          <Link href={"/contact-us"}>
            <Button size={"lg"} variant={"ghost"} className="text-white">
              Get A Free Quote <ArrowRight />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default RootLayout;
