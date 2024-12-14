import { PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import aboutimage from "../../../public/images/aboutImg.jpg";
const AboutUsSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-12 mt-28 max-w-6xl mx-auto rounded-3xl bg-white md:drop-shadow-2xl md:pl-14">
      {/* Left Content */}
      <div className="flex-1">
        <h3 className="text-primary font-semibold text-lg mb-2 uppercase">
          About Us
        </h3>
        <h2 className="text-3xl md:text-4xl mb-4 leading-tight text-gray-900">
          Most trusted and reliable moving company in UAE
        </h2>
        <p className="text-gray-700 mb-6 mt-4 leading-relaxed">
          UAE Movers & Packers, established in 2015, is a trusted moving company
          in the UAE, specializing in secure and efficient villa and house
          relocations. With insured services, modern equipment, and covered box
          trucks, they prioritize safety, reliability, and customer satisfaction
          across all Emirates.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-6 text-gray-800">
          <div className="flex items-center space-x-2">
            <span className="text-primary text-xl">✔</span>
            <span className="text-xl font-medium">Best Moving Service</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-primary text-xl">✔</span>
            <span className="text-xl font-medium">24/7 Support</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-primary text-xl">✔</span>
            <span className="text-xl font-medium">Professional Staff</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-primary text-xl">✔</span>
            <span className="text-xl font-medium">Fair Prices</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex gap-3 item-center">
            <div className="bg-primary flex items-center justify-center text-white rounded-lg w-14 h-14">
              <PhoneCall />
            </div>
            <div>
              <p className="text-lg">Call To Ask Any Question</p>
              <Link
                className="text-primary text-xl font-semibold"
                href="tel:+971503806855"
              >
                +971 503806855
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 flex justify-center ">
        <div className="h-[450px] relative rounded-xl overflow-hidden w-96 bg-secondary">
          <Image
            src={aboutimage}
            fill
            className="absolute object-cover object-top"
            alt="About Us"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
