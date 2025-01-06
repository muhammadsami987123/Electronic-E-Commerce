"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
  const [selectedCategory, setSelectedCategory] = useState(""); // Stores the selected category
  const [showCategories, setShowCategories] = useState(false); // Toggles category sidebar visibility

  const toggleCategories = () => {
    setShowCategories((prev) => !prev);
  };

  const handleCategoryClick = (categoryName: React.SetStateAction<string>) => {
    setSelectedCategory(categoryName);
  };

  const goBack = () => {
    setSelectedCategory(""); // Clear the selected category
  };

  return (
    <section className="flex flex-col md:flex-row bg-gray-100 py-6 px-4 md:px-8 lg:px-16">
      {/* Toggle Button for Mobile */}
      <div className="flex items-center mb-4 md:hidden">
        <button
          onClick={toggleCategories}
          className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
          aria-expanded={showCategories}
          aria-label="Toggle Categories"
        >
          {showCategories ? <AiOutlineClose className="text-xl" /> : <AiOutlineMenu className="text-xl" />}
          <span>{showCategories ? "Hide Categories" : "Show Categories"}</span>
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`w-full md:w-1/4 mb-6 md:mb-0 pr-4 ${
          showCategories ? "block" : "hidden"
        } md:block`}
      >
        {/* Display Full List of Categories */}
        {!selectedCategory && (
          <ul
            className="space-y-4 text-gray-700 px-4"
            role="menu"
            aria-label="Product Categories"
          >
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="cursor-pointer flex justify-between items-center hover:text-red-600"
                aria-label={`View products in ${category}`}
                role="menuitem"
              >
                {category}
              </li>
            ))}
          </ul>
        )}

        {/* Display Selected Category */}
        {selectedCategory && (
          <div className="text-gray-700 px-4">
            <button
              onClick={goBack}
              className="mb-4 text-red-500 hover:text-red-600 underline"
            >
              ← Go Back
            </button>
            <h2 className="text-xl font-bold mb-4">{selectedCategory}</h2>
            <p className="text-gray-600">
              You are currently viewing details for{" "}
              <span className="font-bold">{selectedCategory}</span>.
            </p>
            <p className="mt-4 text-gray-600">
              Explore the best products and deals under the{" "}
              <span className="font-bold">{selectedCategory}</span> category.
            </p>
          </div>
        )}
      </aside>

      {/* Hero Banner */}
      <div className="w-full md:w-3/4 relative">
        <div className="relative bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white rounded-lg overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row items-center px-8 py-12 md:px-16 md:py-20">
            {/* Banner Content */}
            <div className="text-center md:text-left space-y-6 md:w-1/2">
              <h4 className="text-lg md:text-xl font-medium tracking-wide">
                Introducing the New
              </h4>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                iPhone 14 Series
              </h1>
              <p className="text-base md:text-lg font-light">
                Experience the ultimate performance and design. Get up to{" "}
                <span className="font-bold">10% Off</span> with our exclusive
                voucher!
              </p>
              <button className="mt-6 bg-white text-red-600 font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition duration-300">
                Shop Now
              </button>
            </div>

            {/* Banner Image */}
            <div className="mt-8 md:mt-0 md:w-1/2">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHHA0eHMpQOwbb_6ze8EOzBWKV--doASQdgQnSSpn99TWEFLjRsFiyr_HIa6Dl57fc-k&usqp=CAU"
                alt="iPhone 14"
                layout="responsive"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SidebarHero;
