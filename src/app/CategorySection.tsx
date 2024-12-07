import React from "react";

const categories = [
  { name: "Phones", icon: "📱" },
  { name: "Computers", icon: "💻" },
  { name: "SmartWatch", icon: "⌚" },
  { name: "Camera", icon: "📸" },
  { name: "HeadPhones", icon: "🎧" },
  { name: "Gaming", icon: "🎮" },
];

const CategorySection = function () {
  return (
    <div className="px-32 py-6 bg-white ">
      <div className="flex items-center px-32 space-x-2">
      <div className="bg-red-700 px-2 py-5"></div>
      <h2 className="text-lg font-semibold text-red-500 mb-1">Categories</h2></div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6 px-32">Browse By Category</h1>
      <div className="grid grid-cols-6 gap-4 px-32  cursor-pointer relative broder-solid brorder-2 rounded-md   ">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`flex flex-col items-center justify-center border rounded-lg py-4 px-2 transition 
              $ hover:bg-red-600 hover:text-white`}
          >
            <span className="text-2xl">{category.icon}</span>
            <span className="mt-2 text-sm">{category.name}</span>
          </button>
        ))}
        
      </div>
    </div>
    
    
  );
};

const CategorySectionWithNavigation = () => {
  return (
    <>
      <CategorySection />
      {/* <NavigationButtons /> */}
    </>
  );
};

export default CategorySectionWithNavigation;
