"use client";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Image from 'next/image';

const products = [
  {
    id: 1,
    image: "/bestproduct1.jpg",
    alt: "Gamepad",
    name: "The north coat",
    price: 260,
    discount: 20,
    rating: 88,
  },
  {
    id: 2,
    image: "/bestproduct2.jpg",
    alt: "Keyboard",
    name: "Gucci duffle bag",
    price: 960, 
    discount: 12,
    rating: 75,
  },
  {
    id: 3,
    image: "/bestproduct3.jpg",
    alt: "Keyboard",
    name: "RGB liquid CPU Cooler",
    price: 232,
    discount: 10 ,
    rating: 95,
  },
  {
    id: 4,
    image: "/bestproduct4.jpg",
    alt: "Keyboard",
    name: "Small BookSelf",
    price: 472,
    discount: 1,
    rating: 99,
  },
];

const Bestsell = function () {
  return (
    <section className="bg-white py-10 px-32">
      {/* Header Section */}
      <div className="flex items-center px-32 space-x-2">
        <div className="bg-red-700 px-2 py-5"></div>
        <span className="text-2xl font-bold text-red-700">This Month</span>
      </div>
      <div className="text-center mb-8 px-32 gap-20 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Best Selling Products</h2>
        {/* <NavigationButtons /> */}
        <div className="text-center mt-10">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md text-lg font-bold hover:text-red-800">
            View All Products
          </button>
        </div>
      </div>
      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition hover:scale-105 group relative"
          >
            <div className="relative">
              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.alt}
                width={300} // Set the desired width
                height={200} // Set the desired height
                className="w-full rounded-md"
              />

              {/* Wishlist and View Icons */}
              <CiHeart className="text-3xl absolute top-2 right-2" />
              <IoEyeOutline className="text-3xl absolute top-10 right-2" />

              {/* Discount Badge */}
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                -{product.discount}%
              </span>

              {/* Hover Overlay with Add to Cart Button */}
              <div className="absolute inset-0 bg-gray-200 bg-opacity-20 flex place-items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-full bg-black text-white hover:bg-blue-200 px-4 py-2 rounded-sm">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Details */}
            <h3 className="mt-4 font-bold text-lg">{product.name}</h3>
            <div className="text-red-500 font-bold text-xl">${product.price}</div>
            <div className="line-through text-gray-500">
              ${product.price + (product.price * product.discount) / 100}
            </div>
            <div className="text-yellow-400 mt-2">
              ⭐⭐⭐⭐⭐ ({product.rating})
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bestsell;
