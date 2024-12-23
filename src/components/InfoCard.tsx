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
        <div className="mt-5 bg-white flex items-center flex-col shadow-md border px-3 py-4 rounded-lg w-full">
          <span className="font-semibold text-center mx-auto text-xl">
            +971 123456789
          </span>
          <div className="grid w-full grid-cols-2 gap-x-3 mt-3">
            <Button className="bg-green-600 hover:bg-green-700" size={"sm"}>
              <Link
                className="flex items-center gap-x-2"
                href={
                  "https://wa.me/971501087566?text=Hi%20I%20am%20looking%20for%20movers%20and%20packers"
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
                href={"tel:971501087566"}
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
            Building No. 12, Street No. 4, Al Yarmook, Sharjah, UAE
          </p>
        </div>
        <div className="mt-5 border-b pb-1 flex items-center gap-x-3">
          <MailIcon className="stroke-primary size-5" />
          <p className="text-sm text-muted-foreground">wk0131839@gamil.com</p>
        </div>
        <div className="mt-5 border-b pb-1 flex items-center gap-x-3">
          <CalendarRange className="stroke-primary size-5" />
          <p className="text-sm text-muted-foreground">
            Open : <span className="text-black">24 Hours</span>
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default InfoCard;
