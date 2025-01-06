"use client";
import React, { useState, useEffect } from "react";
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
  {
    id: 5,
    image: "/product5.jpg",
    alt: "Shoes",
    name: "Pink DLS Girls Casual Sneakers",
    price: 146,
    discount: 35,
    rating: 75,
  },
];

const FlashSales = function () {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prev, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
        } else if (days > 0) {
          return { ...prev, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer); // Stop the timer when it reaches 0
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  return (
    <section className="bg-white py-10 px-6 lg:px-32">
      {/* Header Section */}
      <div className="flex items-center space-x-2 mb-6">
        <div className="bg-red-700 w-2 h-8"></div>
        <span className="text-2xl font-bold text-red-700">Today's</span>
      </div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Flash Sales</h2>

        {/* Countdown Timer */}
        <div className="flex justify-center items-center gap-6 text-lg font-semibold mt-6">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div key={index} className="text-center">
              <span className="block text-3xl font-bold">
                {value.toString().padStart(2, "0")}
              </span>
              <span className="block text-sm font-medium">{unit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                width={300}
                height={200}
                className="rounded-md"
              />

              {/* Wishlist and View Icons */}
              <CiHeart
                className="text-3xl absolute top-2 right-2 cursor-pointer"
                aria-label="Add to wishlist"
              />
              <IoEyeOutline
                className="text-3xl absolute top-10 right-2 cursor-pointer"
                aria-label="View product details"
              />

              {/* Discount Badge */}
              {product.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -{product.discount}%
                </span>
              )}

              {/* Hover Overlay with Add to Cart Button */}
              <div className="absolute inset-0 bg-gray-200 bg-opacity-20 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className="w-full bg-black text-white px-4 py-2 rounded-sm hover:bg-blue-500"
                  aria-label={`Add ${product.name} to cart`}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Details */}
            <h3 className="mt-4 font-bold text-lg">{product.name}</h3>
            <div className="text-red-500 font-bold text-xl">${product.price}</div>
            <div className="line-through text-gray-500 text-sm">
              ${product.price + (product.price * product.discount) / 100}
            </div>
            <div className="text-yellow-400 mt-2">⭐⭐⭐⭐⭐ ({product.rating})</div>
          </div>
        ))}
      </div>

      {/* View All Products Button */}
      <div className="text-center mt-10">
        <button className="bg-red-500 text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-red-600">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default FlashSales;
