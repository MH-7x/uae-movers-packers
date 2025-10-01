import Image from "next/image";
import React from "react";
import icon from "../../../public/images/logo.png";
import { locations, services, usedFurniture } from "@/constants/services";
import Link from "next/link";

const icons = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M22 12C22 6.47714 17.5229 1.99999 12 1.99999C6.47715 1.99999 2 6.47714 2 12C2 16.9913 5.65686 21.1283 10.4375 21.8785V14.8906H7.89844V12H10.4375V9.79687C10.4375 7.29062 11.9304 5.90624 14.2146 5.90624C15.3087 5.90624 16.4531 6.10155 16.4531 6.10155V8.56249H15.1921C13.9499 8.56249 13.5625 9.33333 13.5625 10.1242V12H16.3359L15.8926 14.8906H13.5625V21.8785C18.3431 21.1283 22 16.9913 22 12Z"
          fill="#2e2e2e"
        />
      </svg>
    ),
    link: "https://web.facebook.com/profile.php?id=61571587026129",
    name: "Our Facebook Page",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="#2e2e2e"
        height="24px"
        width="24px"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 310 310"
        xmlSpace="preserve"
      >
        <g id="XMLID_801_">
          <path
            id="XMLID_802_"
            d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73   C77.16,101.969,74.922,99.73,72.16,99.73z"
          />
          <path
            id="XMLID_803_"
            d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4   c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
          />
          <path
            id="XMLID_804_"
            d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599   c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319   c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995   C310,145.43,300.549,94.761,230.454,94.761z"
          />
        </g>
      </svg>
    ),
    link: "https://www.linkedin.com",
    name: "Our Linkedin Company Profile",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M2 12C2 16.2692 4.67583 19.9142 8.44167 21.3483C8.35 20.5675 8.2525 19.28 8.4625 18.3767C8.64333 17.6 9.63 13.4283 9.63 13.4283C9.63 13.4283 9.3325 12.8325 9.3325 11.95C9.3325 10.5667 10.1342 9.53333 11.1333 9.53333C11.9833 9.53333 12.3933 10.1708 12.3933 10.935C12.3933 11.7892 11.8492 13.0658 11.5683 14.25C11.3342 15.2408 12.0658 16.0492 13.0425 16.0492C14.8117 16.0492 16.1725 14.1833 16.1725 11.49C16.1725 9.10583 14.4592 7.44 12.0133 7.44C9.18167 7.44 7.51917 9.56417 7.51917 11.76C7.51917 12.6158 7.84833 13.5325 8.26 14.0317C8.2951 14.0694 8.3199 14.1155 8.33201 14.1655C8.34412 14.2156 8.34314 14.2679 8.32917 14.3175C8.25333 14.6325 8.085 15.3083 8.0525 15.4467C8.00833 15.6283 7.90833 15.6675 7.71917 15.5792C6.47583 15.0008 5.69917 13.1833 5.69917 11.7233C5.69917 8.5825 7.98 5.69917 12.2758 5.69917C15.7292 5.69917 18.4133 8.16 18.4133 11.4483C18.4133 14.8792 16.2508 17.6408 13.2475 17.6408C12.2383 17.6408 11.2908 17.1158 10.9658 16.4967C10.9658 16.4967 10.4667 18.3983 10.3458 18.8633C10.1108 19.7667 9.45917 20.91 9.055 21.5592C9.98667 21.8458 10.975 22 12 22C17.5225 22 22 17.5225 22 12C22 6.4775 17.5225 2 12 2C6.4775 2 2 6.4775 2 12Z"
          fill="#2e2e2e"
        />
      </svg>
    ),
    link: "https://www.pinterest.com/rwahabmoversuae/",
    name: "Our pinterest Company Profile",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C9.284 2 8.944 2.01133 7.87733 2.06C6.81267 2.10867 6.08533 2.278 5.44933 2.52533C4.78267 2.776 4.178 3.16933 3.678 3.67867C3.16948 4.17809 2.77591 4.78233 2.52467 5.44933C2.27867 6.08533 2.10867 6.81333 2.06 7.878C2.012 8.944 2 9.28333 2 12C2 14.7167 2.01133 15.056 2.06 16.1227C2.10867 17.1873 2.278 17.9147 2.52533 18.5507C2.776 19.2173 3.16933 19.822 3.67867 20.322C4.1781 20.8305 4.78234 21.2241 5.44933 21.4753C6.08533 21.722 6.81267 21.8913 7.87733 21.94C8.944 21.9887 9.284 22 12 22C14.716 22 15.056 21.9887 16.1227 21.94C17.1873 21.8913 17.9147 21.722 18.5507 21.4747C19.2173 21.224 19.822 20.8307 20.322 20.3213C20.8305 19.8219 21.2241 19.2177 21.4753 18.5507C21.722 17.9147 21.8913 17.1873 21.94 16.1227C21.9887 15.056 22 14.716 22 12C22 9.284 21.9887 8.944 21.94 7.87733C21.8913 6.81267 21.722 6.08533 21.4747 5.44933C21.2236 4.78204 20.83 4.17755 20.3213 3.678C19.8219 3.16948 19.2177 2.77591 18.5507 2.52467C17.9147 2.27867 17.1867 2.10867 16.122 2.06C15.056 2.012 14.7167 2 12 2ZM12 3.802C14.67 3.802 14.9867 3.812 16.0413 3.86C17.016 3.90467 17.5453 4.06667 17.898 4.20467C18.3647 4.38533 18.698 4.60267 19.048 4.952C19.398 5.302 19.6147 5.63533 19.7953 6.102C19.9327 6.45467 20.0953 6.984 20.14 7.95867C20.188 9.01333 20.198 9.33 20.198 12C20.198 14.67 20.188 14.9867 20.14 16.0413C20.0953 17.016 19.9333 17.5453 19.7953 17.898C19.6353 18.3324 19.3799 18.7253 19.048 19.048C18.7254 19.38 18.3324 19.6354 17.898 19.7953C17.5453 19.9327 17.016 20.0953 16.0413 20.14C14.9867 20.188 14.6707 20.198 12 20.198C9.32933 20.198 9.01333 20.188 7.95867 20.14C6.984 20.0953 6.45467 19.9333 6.102 19.7953C5.66764 19.6353 5.27467 19.3799 4.952 19.048C4.62012 18.7253 4.36475 18.3323 4.20467 17.898C4.06733 17.5453 3.90467 17.016 3.86 16.0413C3.812 14.9867 3.802 14.67 3.802 12C3.802 9.33 3.812 9.01333 3.86 7.95867C3.90467 6.984 4.06667 6.45467 4.20467 6.102C4.38533 5.63533 4.60267 5.302 4.952 4.952C5.27463 4.62003 5.66761 4.36465 6.102 4.20467C6.45467 4.06733 6.984 3.90467 7.95867 3.86C9.01333 3.812 9.33 3.802 12 3.802Z"
          fill="#2e2e2e"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 15.3367C11.5618 15.3367 11.128 15.2504 10.7231 15.0827C10.3183 14.915 9.95047 14.6692 9.64064 14.3594C9.3308 14.0495 9.08502 13.6817 8.91734 13.2769C8.74965 12.8721 8.66335 12.4382 8.66335 12C8.66335 11.5618 8.74965 11.1279 8.91734 10.7231C9.08502 10.3183 9.3308 9.95046 9.64064 9.64062C9.95047 9.33078 10.3183 9.08501 10.7231 8.91732C11.128 8.74964 11.5618 8.66333 12 8.66333C12.885 8.66333 13.7336 9.01487 14.3594 9.64062C14.9851 10.2664 15.3367 11.1151 15.3367 12C15.3367 12.8849 14.9851 13.7336 14.3594 14.3594C13.7336 14.9851 12.885 15.3367 12 15.3367ZM12 6.86C10.6368 6.86 9.32942 7.40153 8.36549 8.36547C7.40155 9.32941 6.86002 10.6368 6.86002 12C6.86002 13.3632 7.40155 14.6706 8.36549 15.6345C9.32942 16.5985 10.6368 17.14 12 17.14C13.3632 17.14 14.6706 16.5985 15.6345 15.6345C16.5985 14.6706 17.14 13.3632 17.14 12C17.14 10.6368 16.5985 9.32941 15.6345 8.36547C14.6706 7.40153 13.3632 6.86 12 6.86ZM18.6353 6.76667C18.6353 7.0889 18.5073 7.39794 18.2795 7.6258C18.0516 7.85366 17.7426 7.98167 17.4204 7.98167C17.0981 7.98167 16.7891 7.85366 16.5612 7.6258C16.3334 7.39794 16.2053 7.0889 16.2053 6.76667C16.2053 6.44443 16.3334 6.13539 16.5612 5.90753C16.7891 5.67968 17.0981 5.55167 17.4204 5.55167C17.7426 5.55167 18.0516 5.67968 18.2795 5.90753C18.5073 6.13539 18.6353 6.44443 18.6353 6.76667Z"
          fill="#2e2e2e"
        />
      </svg>
    ),
    link: "https://www.instagram.com/rwahab2374/",
    name: "Our pinterest instagram Profile",
  },
  {
    icon: (
      <svg
        fill="#2e2e2e"
        width="30px"
        height="30px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title />

        <g id="Location">
          <path d="M26.49,30H5.5A3.35,3.35,0,0,1,3,29a3.35,3.35,0,0,1-1-2.48V5.5A3.35,3.35,0,0,1,3,3,3.35,3.35,0,0,1,5.5,2h21A3.35,3.35,0,0,1,29,3,3.35,3.35,0,0,1,30,5.5v21A3.52,3.52,0,0,1,26.49,30ZM16,21.47a.46.46,0,0,0,.38-.23h.06q.12-.3,4.26-6.44a5.19,5.19,0,0,0,.67-2.63,5.19,5.19,0,0,0-1.57-3.82A5.12,5.12,0,0,0,16,6.76a5.18,5.18,0,0,0-3.83,1.58,5.17,5.17,0,0,0-1.59,3.82A5.11,5.11,0,0,0,11.41,15c.55.85,1.13,1.69,1.72,2.54l2.43,3.67A.51.51,0,0,0,16,21.47Zm0,3.83a5.25,5.25,0,0,0,1.64-.22c.46-.15.69-.32.69-.52s-.23-.39-.69-.54A5.25,5.25,0,0,0,16,23.8a5.29,5.29,0,0,0-1.64.22q-.69.23-.69.54c0,.2.23.37.69.52A5.29,5.29,0,0,0,16,25.3Zm.1-10.4a2.24,2.24,0,0,1-1.53-.56,2.15,2.15,0,0,1-.18-3,2,2,0,0,1,1.55-.76,2.16,2.16,0,0,1,1.5.56,2,2,0,0,1,.72,1.56,2.19,2.19,0,0,1-.55,1.5A2.11,2.11,0,0,1,16.07,14.9Z" />
        </g>
      </svg>
    ),
    link: "https://maps.app.goo.gl/gk1mQ8Wdqth2nud17",
    name: "Our Google Bussiness Profile",
  },
];

function Footer() {
  return (
    <footer className="relative w-full mt-20 bg-gray-100 py-10">
      <div className="w-full md:px-8 px-3 mx-auto max-w-7xl">
        <div className="grid justify-between grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Image src={icon} alt="logo" width={180} height={180} />
            <p className="text-muted-foreground text-sm mt-3">
              RWahab Movers UAE, established in 2015, specializes in safe and
              efficient villa and house relocations across the UAE. With insured
              services, modern equipment, and a focus on customer satisfaction,
              we’re the trusted choice for stress-free moves.
            </p>
            <div className="mt-2 max-w-lg flex gap-x-1 text-sm text-gray-700 md:flex-row flex-col">
              <p>Address:</p>
              <address style={{ fontStyle: "normal" }}>
                building no.12 Attiyah Bin Nawayrah St, Al Yarmook, Sharjah UAE
              </address>
            </div>
            <div className="mt-2 max-lg flex gap-x-1 text-sm text-gray-700 md:flex-row flex-col">
              <p>Phone No. :</p>
              <p>+971 50 6638692</p>
            </div>
            <div className="mt-2 max-w-lg flex gap-x-1 text-sm text-gray-700 md:flex-row flex-col">
              <p>Open Hours:</p>
              <p>Monday to Sunday: 6:00 AM - 11:00 PM, Friday: Closed</p>
            </div>
            <div className="mt-2 max-w-md flex gap-x-1 text-sm text-gray-700 md:flex-row flex-col">
              <p>Email. :</p>
              <p>rwahabmoversuae@gmail.com</p>
            </div>
          </div>
          <div className="grid justify-between md:grid-cols-3 grid-cols-1 gap-5">
            <ul>
              <p className="block mb-1 text-base font-semibold  text-slate-800">
                Services
              </p>
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    aria-label={service.name}
                    href={service.link}
                    className="md:block text-slate-700 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              <p className="block mb-1 text-base font-semibold  text-slate-800">
                Locations Areas
              </p>
              {locations.map((location) => (
                <li key={location.name}>
                  <Link
                    aria-label={location.name}
                    href={location.link}
                    className="md:block text-slate-700 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    Movers in{" "}
                    {
                      location.name.split(" ")[
                        location.name.split(" ").length - 1
                      ]
                    }
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              <p className="block mb-1 text-base font-semibold  text-slate-800">
                Used Furniture
              </p>
              {usedFurniture.map((location) => (
                <li key={location.name}>
                  <Link
                    aria-label={location.name}
                    href={location.link}
                    className="md:block text-slate-700 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    Used Furniture in{" "}
                    {
                      location.name.split(" ")[
                        location.name.split(" ").length - 1
                      ]
                    }
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  aria-label={"used furniture buyers in dubai"}
                  href={
                    "https://rukunalaroobausedfurniture.ae/used-furniture-buyers-in-dubai"
                  }
                  className="md:block text-slate-700 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                >
                  used furniture buyers in dubai
                </Link>
              </li>
              <li>
                <Link
                  aria-label={"used furniture buyers in sharjah"}
                  href={
                    "https://rukunalaroobausedfurniture.ae/used-furniture-buyers-in-sharjah"
                  }
                  className="md:block text-slate-700 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                >
                  used furniture buyers in sharjah
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center w-full py-4 mt-12 border-t border-slate-200 md:flex-row md:justify-between">
          <div className="flex gap-4 text-slate-600 justify-center">
            {icons.map((icon) => (
              <Link
                key={icon.name}
                aria-label={icon.name}
                href={icon.link}
                title={icon.name}
                target="_blank"
              >
                {icon.icon}
              </Link>
            ))}
          </div>
          <ul className="flex flex-wrap gap-2 text-sm md:justify-start justify-center">
            <li className="text-muted-foreground hover:text-black">
              <Link href={"/about-us"}>About Us</Link>
            </li>
            <li className="text-muted-foreground hover:text-black">
              <Link href={"/contact-us"}>Contact Us</Link>
            </li>
            <li className="text-muted-foreground hover:text-black">
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
            </li>
            <li className="text-muted-foreground hover:text-black">
              <Link href={"/terms-and-conditions"}>Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <p className="text-sm text-muted-foreground text-center mt-3">
          Design & Developed by{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
            href={
              "https://wa.me/923471309916?text=Hi%20Mashal%20Are%20You%20Available%20For%20Work"
            }
          >
            Mashal Huraira
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
