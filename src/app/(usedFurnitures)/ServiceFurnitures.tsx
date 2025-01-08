import React from "react";

function ServiceFurnitures({ city }: { city: string }) {
  return (
    <section className="mt-32 md:px-6 px-3">
      <h2 className="text-center">Our Services</h2>
      <div className="mt-16  grid md:grid-cols-2 grid-cols-1 md:gap-x-5 gap-y-5">
        <div className="min-h-96 bg-gradient-to-t from-violet-100 to-white rounded-2xl  md:p-10 p-3">
          <h2 className="md:text-2xl font-medium text-center">
            Buy Used Furniture in {city}
          </h2>
          <p className="mt-7">
            Looking for cheap used furniture near you? RWahab Movers UAE
            provides an extensive selection of second-hand furniture, including:
          </p>
          <ul className="list-disc ml-4 mt-5">
            <li className="my-2">
              <h3 className="text-lg">
                Living Room Furniture:{" "}
                <span className="text-gray-600">
                  Sofas, coffee tables, TV stands.
                </span>
              </h3>
            </li>
            <li className="my-2">
              <h3 className="text-lg">
                Bedroom Furniture:{" "}
                <span className="text-gray-700">
                  Beds, wardrobes, dressers.
                </span>
              </h3>
            </li>
            <li className="my-2">
              <h3 className="text-lg">
                Office Furniture:{" "}
                <span className="text-gray-700">
                  Office desks, chairs, filing cabinets.
                </span>
              </h3>
            </li>
          </ul>
        </div>
        <div className="min-h-96 bg-gradient-to-t from-violet-100 to-white rounded-2xl  md:p-10 p-3">
          <h2 className="md:text-2xl font-medium text-center">
            Sell Used Furniture in {city}
          </h2>
          <p className="mt-7">
            If you’re wondering where to sell used furniture, we make the
            process hassle-free. Here’s why RWahab Movers UAE is the best place
            to sell:
          </p>
          <ul className="list-disc ml-4 mt-5">
            <li className="my-2">
              <p className="text-lg">Free listings for your items.</p>
            </li>
            <li className="my-2">
              <p className="text-lg">
                Access to a large audience of interested buyers.
              </p>
            </li>
            <li className="my-2">
              <p className="text-lg">
                Professional assistance to ensure smooth transactions.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ServiceFurnitures;
