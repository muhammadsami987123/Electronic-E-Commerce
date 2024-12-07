"use client";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: "/product1.jpg",
    alt: "Gamepad",
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    discount: 40,
    rating: 88,
  },
  {
    id: 2,
    image: "/product2.jpg",
    alt: "Keyboard",
    name: "AK-900 Wired Keyboard",
    price: 960,
    discount: 35,
    rating: 75,
  },
  {
    id: 3,
    image: "/product3.jpg",
    alt: "Keyboard",
    name: "IPS LCD Gaming Monitor",
    price: 370,
    discount: 35,
    rating: 95,
  },
  // {
  //   id: 4,
  //   image: "/product4.jpg",
  //   alt: "Keyboard",
  //   name: "S-Series Comfort Chair",
  //   price: 375,
  //   discount: 35,
  //   rating: 65,
  // },
  {
    id: 5,
    image: "/product5.jpg",
    alt: "Keyboard",
    name: "Pink DLS Girls Casual Sneakers",
    price: 146,
    discount: 35,
    rating: 75,
  },
];

const FlashSales = function () {
  return (
    <section className="bg-white py-10 px-32">
      {/* Header Section */}
      <div className="flex items-center px-32 space-x-2">
        <div className="bg-red-700 px-2 py-5"></div>
        <span className="text-2xl font-bold text-red-700">Todays</span>
      </div>
      <div className="text-center mb-8 px-32 gap-20 flex items-center">
        <h2 className="text-3xl font-bold">Flash Sales</h2>
        <div className="flex justify-center text-black items-center gap-4 text-lg font-semibold mt-4">
          <div className="text-3xl">
            <span className="block gap-5 font-semibold">Days</span>03
          </div>
          <div className="text-3xl">
            <span className="block gap-5 font-semibold">Hours</span>23
          </div>
          <div className="text-3xl">
            <span className="block gap-5 font-semibold">Minutes</span>19
          </div>
          <div className="text-3xl">
            <span className="block gap-5 font-semibold">Seconds</span>56
          </div>
          {/* <NavigationButtons /> */}
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
          className="w-full rounded-md"
        />

        {/* Wishlist and View Icons */}
        <CiHeart className="text-3xl absolute top-2 right-2  " />
        <IoEyeOutline className="text-3xl absolute top-10 right-2 " />

        {/* Discount Badge */}
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          -{product.discount}%
        </span>

        {/* Hover Overlay with Add to Cart Button */}
        <div className="absolute inset-0 bg-gray-200 bg-opacity-20 flex place-items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full bg-black text-white px-4 py-2 rounded-sm hover:bg-blue-200 ">
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


 {/*      Product Cards
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition hover:scale-105"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.alt}
                className="w-full rounded-md"
              />
              <CiHeart className="text-3xl absolute top-2 right-2" />
              <IoEyeOutline className="text-3xl absolute top-10 right-2" />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                -{product.discount}%
              </span>
            </div>
            <h3 className="mt-4 font-bold text-lg">{product.name}</h3>
            <div className="text-red-500 font-bold text-xl">${product.price}</div>
            <div className="line-through text-gray-500">
              ${product.price + (product.price * product.discount) / 100}
            </div>
            {/* < button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-800">
              Add To Cart
            </button> */}
            {/* <button className="w-full bg-black text-white px-4 py2 rounded-sm group-hover:opacity-100 transition-opacity duration-300 " >Add to Cart</button>
            <div className="text-yellow-400 mt-2">
              ⭐⭐⭐⭐⭐ ({product.rating})
            </div>
          </div>
        ))}
      </div> */} */

      {/* View All Products Button */}
      <div className="text-center mt-10">
        <button className="bg-red-500 text-white px-6 py-3 rounded-md text-lg font-bold hover:text-red-800">
          View All Products
        </button>
        
      </div>
    </section>
  );
};

export default FlashSales;