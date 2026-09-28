import React from "react";
import BrandIconOne from "../../assets/BrandOne.png";
import BrandIconThree from "../../assets/BrandThree.png";
import BrandIconFour from "../../assets/BrandFour.png";
import BrandIconFive from "../../assets/BrandFive.png";

function Brands() {
  const logos = [
    {
      id: 1,
      name: "Logoipsum",
      // Wavy circle icon
      icon: BrandIconOne,
    },
    {
      id: 2,
      name: "Logoipsum",
      // Sunburst icon
      icon: BrandIconFour,
    },
    {
      id: 3,
      name: "Logoipsum",
      // Lightning bolt circle icon
      icon: BrandIconThree,
    },
    {
      id: 4,
      name: "Logoipsum",
      // 4-leaf clover / petals circle icon
      icon: BrandIconFour,
    },
    {
      id: 5,
      name: "Logoipsum",
      // Concentric circles sphere icon
      icon: BrandIconFive,
    },
  ];

  return (
    <div className="w-full bg-[#F8F9FA] py-8 border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between gap-6 md:gap-8">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-80 cursor-pointer"
          >
            <img
              src={logo.icon}
              alt={logo.name}
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold tracking-tight text-[#4B5563]">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
