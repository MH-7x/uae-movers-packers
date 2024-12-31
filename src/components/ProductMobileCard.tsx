import Image from "next/image";
import React from "react";

function ProductMobileCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="w-full bg-white rounded-xl overflow-hidden grid grid-cols-4 items-center">
      <div className="col-span-1 relative h-24 bg-gray-300">
        <Image
          alt={name}
          src={"/products/Fauteuil.jpg"}
          fill
          loading="lazy"
          className="object-cover object-center absolute"
        />
      </div>
      <div className="col-span-3 pl-2">
        <h4 className="font-medium">{name}</h4>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default ProductMobileCard;
