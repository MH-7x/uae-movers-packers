import { ArrowUpRightFromSquareIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function ProductDesktopCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div
      key={name}
      className="h-60 w-72 bg-secondary rounded-xl overflow-hidden"
    >
      <div className="w-full h-40 bg-gray-300 relative">
        <Image
          alt={name}
          src={"/products/Fauteuil.jpg"}
          fill
          loading="lazy"
          className="object-cover object-center absolute"
        />
      </div>
      <div className="px-2 mt-3 relative">
        <ArrowUpRightFromSquareIcon className="text-primary absolute top-0 right-2 size-4 cursor-pointer" />
        <h4 className="font-medium">{name}</h4>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default ProductDesktopCard;
