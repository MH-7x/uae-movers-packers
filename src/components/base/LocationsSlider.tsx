"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { locations } from "@/constants/services";
import Link from "next/link";
import Image from "next/image";

export default function LocationsSlider() {
  const path =
    typeof window !== "undefined" &&
    window.location.pathname.split("/")[1].split("-").join(" ");
  const showWithoutCurrent = locations.filter(
    (location) => location.name.toLocaleLowerCase() !== path
  );

  return (
    <section className="md:w-11/12 mx-auto w-full md:px-4 py-8 mt-28">
      <h2 className="text-4xl max-w-lg mb-10 md:ml-10">
        We Serve Major Cities Across UAE
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {showWithoutCurrent.map((location) => (
          <SwiperSlide key={location.name}>
            <div className="md:h-96 h-80 bg-cover bg-center relative rounded-lg overflow-hidden shadow-md">
              <Image
                src={location.src}
                alt={location.name}
                fill
                loading="lazy"
                className="object-cover object-center absolute"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent h-full flex justify-end flex-col p-4 pb-8 rounded-b-lg">
                <Link href={location.link}>
                  <h3 className="text-xl/5 text-white">{location.name}</h3>
                </Link>
                <p className="text-sm mt-1 text-gray-200">{location.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
