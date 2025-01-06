"use client";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: "/explore1.jpg",
    alt: "Gamepad",
    name: "Breed Dry Dog Food",
    price: 100,
    rating: 88,
  },
  {
    id: 2,
    image: "/explore2.jpg",
    alt: "Keyboard",
    name: "CANON EOS DSLR Camera",
    price: 360,
    rating: 91,
  },
  {
    id: 3,
    image: "/explore3.jpg",
    alt: "laptop",
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    rating: 72,
  },
  {
    id: 4,
    image: "/explore4.jpg",
    alt: "Keyboard",
    name: "Curology Product Pack Set",
    price: 1500,
    discount: 10,
    rating: 69,
  },
  {
    id: 5,
    image: "/explore5.jpg",
    alt: "toy",
    name: "Kids Electic Car",
    price: 960,
    discount: 5,
    rating: 87,
  },
  {
    id: 6,
    image: "/explore6.jpg",
    alt: "shore",
    name: "Jr.Zoom Soccer Cleats",
    price: 1160,
    discount: 15,
    rating: 97,
  },
  {
    id: 7,
    image: "/explore7.jpg",
    alt: "Gamepad",
    name: "GO11 Shooter USB Gamepad",
    price: 600,
    discount: 20,
    rating: 42,
  },
  {
    id: 8,
    image: "/explore8.jpg",
    alt: "jacket",
    name: "Quilted Satin Jacket",
    price: 721,
    discount: 10,
    rating: 71,
  },
];

const Explore = function () {
  return (
    <section className="bg-white py-10 px-6 lg:px-32 shadow-2xl">
      {/* Header Section */}
      <div className="flex items-center space-x-2 mb-6">
        <div className="bg-red-700 w-2 h-8"></div>
        <span className="text-2xl font-bold text-red-700">Our Products</span>
      </div>
      <h2 className="text-center text-3xl font-bold mb-8">Explore Our Products</h2>

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
                <button className="w-full bg-black text-white hover:bg-blue-200 px-4 py-2 rounded-sm">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Details */}
            <h3 className="mt-4 font-bold text-lg">{product.name}</h3>
            <div className="text-red-500 font-bold text-xl">${product.price}</div>
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

export default Explore;
