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
    discount: 1,
    rating: 69,
  },
  {
    id: 5,
    image: "/explore5.jpg",
    alt: "toy",
    name: "Kids Electic Car",
    price: 960,
    discount: 1,
    rating: 87,
  },
  {
    id: 6,
    image: "/explore6.jpg",
    alt: "shore",
    name: "Jr.Zoom Soccer Cleats",
    price: 1160,
    discount: 1,
    rating: 97,
  },
  {
    id: 7,
    image: "/explore7.jpg",
    alt: "Gamepad",
    name: "GO11 Shooter USB Gamepad",
    price: 600,
    discount: 1,
    rating: 42,
  },
  {
    id: 8,
    image: "/explore8.jpg",
    alt: "jacket",
    name: "Quilted Satin Jacket",
    price: 721 ,
    discount: 1,
    rating: 71,
  },
];

const Explore = function () {
  return (
    <section className="bg-white py-5 px-32  shadow-2xl ">
      {/* Header Section */}
      <div className="flex items-center px-32 space-x-2">
        <div className="bg-red-700 px-2 py-5"></div>
        <span className="text-2xl font-bold text-red-700">Our Products</span>
      </div>
      <div className="text-center mb-8 px-32 gap-20 flex items-center justify-between ">
        <h2 className="text-3xl font-bold ">Explore Our Products
        </h2>
        
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
          <button className="w-full bg-black text-white hover:bg-blue-200 px-4 py-2 rounded-sm  ">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Details */}
      <h3 className="mt-4 font-bold text-lg">{product.name}</h3>
      <div className="text-red-500 font-bold text-xl">${product.price}</div>
      <div className="line-through text-gray-500">
        {/* ${product.price + (product.price * product.discount) / 100} */}
      </div>
      <div className="text-yellow-400 mt-2">
        ⭐⭐⭐⭐⭐ ({product.rating}) 
      </div>
    </div>
  ))}
</div>
  {/* <NavigationButtons /> */}
  <div className="text-center mt-10">
        <button className=" bg-red-500 text-white px-4 py-2 rounded-md text-lg font-bold hover:text-red-800">
          View All Products
        </button>
        
      </div>


 

      {/* View All Products Button */}
      
    </section>
  );
};

export default Explore;