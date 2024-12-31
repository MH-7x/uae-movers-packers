"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categoryList, furnitureData } from "@/constants/products";
import Image from "next/image";
import { useState } from "react";
import ProductDesktopCard from "./productDesktopCard";
import useIsMobile from "@/lib/CheckMobileScreen";
import ProductMobileCard from "./ProductMobileCard";

function ShowProducts() {
  const [Products, setProducts] = useState(furnitureData[0]);
  const [Index, SetIndex] = useState(0);
  const isMobileScreen = useIsMobile();
  return (
    <Tabs
      defaultValue="Seating Furniture"
      className="mt-10 grid md:grid-cols-4 grid-cols-1 md:gap-x-4"
    >
      <TabsList className="bg-white md:col-span-1 rounded-lg p-3 flex flex-col gap-y-4">
        {categoryList.map((categoy, i) => (
          <TabsTrigger
            key={categoy.name}
            value={categoy.name}
            onClick={() => {
              setProducts(furnitureData[categoryList.indexOf(categoy)]);
              SetIndex(categoryList.indexOf(categoy));
            }}
          >
            <div
              className={`bg-secondary  rounded-lg w-full flex items-center gap-x-3 p-4 cursor-pointer border transition-colors ${
                Index === i
                  ? "border-primary bg-white"
                  : "hover:border-primary hover:bg-white"
              } `}
            >
              <Image
                src={categoy.src}
                alt={categoy.name}
                width={25}
                height={25}
                loading="lazy"
              />
              <h3 className="text-base">{categoy.name}</h3>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent
        className="md:bg-white min-h-screen md:col-span-3 md:p-3 md:mt-0 mt-5 gap-3 flex md:flex-row flex-col flex-wrap items-start justify-start"
        value={Products.category}
      >
        {Products.items.map((product) =>
          isMobileScreen ? (
            <ProductMobileCard
              name={product.name}
              description={product.description}
              key={product.name}
            />
          ) : (
            <ProductDesktopCard
              name={product.name}
              description={product.description}
              key={product.name}
            />
          )
        )}
      </TabsContent>
    </Tabs>
  );
}

export default ShowProducts;
