import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { CalendarRange, MailIcon, MapPin } from "lucide-react";

function InfoCard() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="border-muted-foreground border rounded-md w-max px-2 h-[34px] flex items-center justify-center">
          <Image src={"/phone.svg"} alt="menu" width={19} height={19} />
          <small className="pl-2">Contact</small>
        </div>
      </SheetTrigger>
      <SheetContent side={"top"} className="w-full">
        <SheetHeader>
          <SheetTitle>Contact Us Now</SheetTitle>
          <SheetDescription>
            Reach out to us now for professional moving, packing services, and
            quality used furniture solutions tailored to your needs!
          </SheetDescription>
        </SheetHeader>
        <div className="mt-5 bg-secondary/50 flex items-center flex-col px-3 py-4 rounded-lg w-full">
          <span className="font-semibold text-center mx-auto text-xl">
            +971503806855
          </span>
          <div className="grid w-full grid-cols-2 gap-x-3 mt-3 px-4">
            <Button className="bg-green-600 hover:bg-green-700" size={"sm"}>
              <Link
                className="flex items-center gap-x-2"
                href={
                  "https://wa.me/+971503806855?text=Hi%20I%20am%20looking%20for%20movers%20and%20packers"
                }
              >
                <Image
                  src={"/whatsapp.svg"}
                  alt="whatsapp"
                  width={19}
                  height={19}
                />{" "}
                WhatsApp
              </Link>
            </Button>

            <Button size={"sm"} variant={"outline"}>
              <Link
                className="flex items-center gap-x-2"
                href={"tel:+971503806855"}
              >
                <Image
                  src={"/phone.svg"}
                  alt="whatsapp"
                  width={19}
                  height={19}
                />{" "}
                Call Now
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-10 border-b pb-1 flex items-center gap-x-3">
          <MapPin className="stroke-primary" />
          <p className="text-sm text-muted-foreground">
            building no.12 Attiyah Bin Nawayrah St, Al Yarmook, Sharjah UAE
          </p>
        </div>
        <div className="mt-5 border-b pb-1 flex items-center gap-x-3">
          <MailIcon className="stroke-primary size-5" />
          <Link
            href={"mailto:rwahabmoversuae@gmail.com"}
            className="text-sm text-muted-foreground"
          >
            rwahabmoversuae@gmail.com
          </Link>
        </div>
        <div className="mt-5 border-b pb-1 flex items-center gap-x-3">
          <CalendarRange className="stroke-primary size-5" />
          <p className="text-sm text-muted-foreground">
            Open :{" "}
            <span className="text-black">
              Monday to Sunday: 6:00 AM - 11:00 PM, Friday: Closed
            </span>
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default InfoCard;
