import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import WhatsappIcon from "../../../public/whatsapp.svg";
import Image from "next/image";
import Link from "next/link";
export function WhatsappDialogButton() {
  return (
    <Dialog>
      <DialogTrigger className="fixed bottom-7 right-7 drop-shadow-xl" asChild>
        <Image
          alt="Whatsapp Dialog Icon"
          src={WhatsappIcon}
          width={45}
          height={45}
          loading="eager"
          className="cursor-help"
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white/90 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            For any inquiries, please feel free to contact us.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-3 rounded-3xl bg-secondary min-h-16 w-full p-5">
          <p className="text-lg text-center">+971 506638692</p>
          <div className="grid grid-cols-2 mt-3 gap-x-3">
            <Link
              className="col-span-1"
              href={
                "https://wa.me/+971506638692?text=Hi%20I%20am%20looking%20for%20movers%20and%20packers"
              }
            >
              <Button
                size={"sm"}
                className="bg-green-500 hover:bg-green-600 w-full"
              >
                Whatsapp
              </Button>
            </Link>
            <Link className="col-span-1" href={"tel:+971506638692"}>
              <Button size={"sm"} className="w-full" variant={"outline"}>
                Call Now
              </Button>
            </Link>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
