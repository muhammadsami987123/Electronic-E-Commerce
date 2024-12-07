import React from "react";
import Image from "next/image";

const categories = [
  "Women's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const SidebarHero = function () {
  return (
    <section className="flex bg-white py-8 px-4">
      {/* Sidebar */}
      <aside className="w-1/4 pr-4">
        <ul className="space-y-4 text-gray-700 px-4">
          {categories.map((category, index) => (
            <li
              key={index}
              className="hover:text-black cursor-pointer flex justify-between items-center"
            >
              {category}
              <span>{">"}</span>
            </li>
          ))}
        </ul>
      </aside>

    {/* Hero Banner */}
<div className="w-3/4 relative mx-auto">
  <div className="relative bg-black text-white rounded-lg overflow-hidden flex flex-col md:flex-row items-center">
    {/* Banner Content */}
    <div className="absolute top-1/4 left-8 z-10 space-y-4">
      <h4 className="text-xl font-semibold">iPhone 14 Series</h4>
      <h2 className="text-4xl font-bold my-5 sm:text-muted md:text-4xl leading-tight">Up to 10%<br />Off Voucher</h2>
      <button className="underline underline-offset-8 mt-4 px-6 py-3  hover:font-bold ">
        Shop Now <span className="ml-2">→</span>
      </button>
    </div>
    {/* Banner Image */}
    <div className="ml-auto">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHHA0eHMpQOwbb_6ze8EOzBWKV--doASQdgQnSSpn99TWEFLjRsFiyr_HIa6Dl57fc-k&usqp=CAU" // Replace with your image path
        alt="iPhone 14"
        className="w-[496px] h-[352px] mx-auto md:mr-0"
      />
    </div>
  </div>
</div>


        {/* Dots for Slider (Static Example) */}
        {/* <div className="flex justify-items-center mt-4 space-x-2">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === 2 ? "bg-red-500" : "bg-gray-300"
                }`}
              ></span>
            ))}
        </div> */}
      </section>
  );
};

export default SidebarHero;