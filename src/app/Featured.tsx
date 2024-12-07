import React from "react";
import Image from "next/image";

const featuredItems = [
  {
    name: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    image: "featured1.jpg", // Replace with the actual path to the image
    link: "#",
    isWide: true, // Makes it span two columns
  },
  {
    name: "Women's Collections",
    description: "/Featured women collections that give you another vibe.",
    image: "featured2.jpg", // Replace with the actual path to the image
    link: "#",
    
  },
  {
    name: "Speakers",
    description: "Amazon wireless speakers.",
    image: "featured3.jpg", // Replace with the actual path to the image
    link: "#",
  },
  {
    name: "Perfume",
    description: "GUCCI INTENSE OUD EDP.",
    image: "featured4.jpg", // Replace with the actual path to the image
    link: "#",
  },
];

const FeaturedSection = () => {
  return (
    <div className="px-6 py-10 bg-white">
      <div className="mb-4">
        <h3 className="text-red-500 font-semibold text-lg">Featured</h3>
        <h1 className="text-3xl font-bold text-gray-800">New Arrival</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {featuredItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={`relative overflow-hidden rounded-lg transition transform hover:scale-105 ${
              item.isWide ? "col-span-2 row-span-2" : "col-span-1"
            }`}
          >
            <Image
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
              <h2 className="text-white text-lg px-4 font-bold">{item.name}</h2>
              <p className="text-gray-200 px-4 text-sm">{item.description}</p>
              <button  className='flex  text-md text-white px-4 font-sans underline underline-offset-8 hover:font-bold'>Shop Now</button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
