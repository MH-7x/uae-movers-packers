import Image from "next/image";
import React from "react";
import contactImg from "../../public/service/contacts.png";
import { Button } from "./ui/button";
function Contact({ title, desc }: { title: string; desc: string }) {
  return (
    <section className="mt-20 md:rounded-3xl bg-gradient-to-t from-primary to-violet-700 md:w-11/12 w-full mx-auto md:p-10 py-10 items-center md:pl-32 grid md:grid-cols-2 grid-cols-1 px-2">
      <div className="text-white">
        <h2>{title}</h2>
        <p className="mt-5 md:text-lg">{desc}</p>
        <div className="flex gap-3 mt-3">
          <Button variant={"secondary"}>Get a Quote</Button>
          <Button variant={"ghost"}>Call : +91 123456789</Button>
        </div>
      </div>
      <div className="flex  justify-center">
        <div className="w-96 md:h-96 h-80 relative">
          <Image
            src={contactImg}
            alt="Contact With UAE Movers & Packers"
            fill
            className="object-contain "
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
