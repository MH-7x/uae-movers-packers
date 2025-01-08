import Image from "next/image";
import React from "react";

const MovingServicesTable = () => {
  return (
    <>
      <section className="md:mr-20   md:w-11/12 w-full mx-auto grid md:grid-cols-2 items-center grid-cols-1 mt-16 md:py-20 ga-y-10 py-16 ">
        <div className=" flex justify-center">
          <Image
            src={"/images/pricing.svg"}
            alt="search in brighthome"
            width={500}
            height={500}
            className="rounded-2xl"
          />
        </div>
        <div className=" md:mt-0 md:bg-transparent bg-white -mt-5 md:p-0 p-5 md:shadow-none shadow-xl rounded-2xl">
          <h2 className="md:text-start md:text-4xl text-center">
            RWahab Movers UAE Prices
          </h2>
          <p className="mt-4">
            Price for moving is calculated on different factors such as
            “quantity of items, required packing materials, transportation
            distance and quality of service”. We send a supervisor for a survey
            to inspect these factors and give you an exact figure of the amount.
          </p>
          <div className="mt-3">
            <p className="text-base md:text-start text-center mt-3">
              But some people are mostly looking for an estimated figure to
              prepare their budget. Read this table below to understand and get
              the estimated amount.
            </p>
          </div>
        </div>
      </section>
      <div className="overflow-x-auto md:bg-white md:p-8 md:rounded-2xl max-w-6xl mx-auto">
        <table className="min-w-full">
          <thead className="bg-primary/10">
            <tr>
              <th className="px-4 py-2 text-left font-bold text-primary border-b">
                Type of Move
              </th>
              <th className="px-4 py-2 text-left font-bold text-primary border-b">
                Service Description
              </th>
              <th className="px-4 py-2 text-left font-bold text-primary border-b">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="md:px-4 px-1 py-3 border-b">
                1 Bedroom + Hall + Kitchen (with packing)
              </td>
              <td className="md:px-4 px-1 py-3 border-b">
                Packing materials, carpenters and helpers, packing, dismantling
                and installation
              </td>
              <td className="md:px-4 px-1 py-3 border-b">800 AED</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="md:px-4 px-1 py-3 border-b">
                1 Bedroom (without packing)
              </td>
              <td className="md:px-4 px-1 py-3 border-b">
                Carpenters and helpers, dismantling and installation
              </td>
              <td className="md:px-4 px-1 py-3 border-b">600 AED</td>
            </tr>
            <tr>
              <td className="md:px-4 px-1 py-3 border-b">
                Studio Apartment (with packing)
              </td>
              <td className="md:px-4 px-1 py-3 border-b">
                Packing materials, carpenters and helpers, packing, dismantling
                and installation
              </td>
              <td className="md:px-4 px-1 py-3 border-b">550 AED</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="md:px-4 px-1 py-3 border-b">Single Story Villa</td>
              <td className="md:px-4 px-1 py-3 border-b">
                Packing materials, carpenters and helpers, packing, dismantling
                and installation
              </td>
              <td className="md:px-4 px-1 py-3 border-b">1200 - 2000 AED</td>
            </tr>
            <tr>
              <td className="md:px-4 px-1 py-3 border-b">Double Story Villa</td>
              <td className="md:px-4 px-1 py-3 border-b">
                Packing materials, carpenters and helpers, packing, dismantling
                and installation
              </td>
              <td className="md:px-4 px-1 py-3 border-b">2000 - 3000 AED</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="md:px-4 px-1 py-3">3 Story Villa</td>
              <td className="md:px-4 px-1 py-3">
                Packing materials, carpenters and helpers, packing, dismantling
                and installation
              </td>
              <td className="md:px-4 px-1 py-3">3000 - 4500 AED</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MovingServicesTable;
