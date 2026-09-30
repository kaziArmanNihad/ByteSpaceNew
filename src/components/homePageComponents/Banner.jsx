import GridBG from "../../pages/shared/GridBG.jsx";
import BannerElementOne from "../../assets/HomePageImages/BannerSectionImages/BannerElementOne.png";
import BannerElementTwo from "../../assets/HomePageImages/BannerSectionImages/BannerElementTwo.png";
import BannerElementThree from "../../assets/HomePageImages/BannerSectionImages/BannerElementThree.png";
import BannerElementFour from "../../assets/HomePageImages/BannerSectionImages/BannerElementFour.png";
import BannerElementFive from "../../assets/HomePageImages/BannerSectionImages/BannerElementFive.png";
import BannerElementSix from "../../assets/HomePageImages/BannerSectionImages/BannerElementSix.png";
import BannerElementSeven from "../../assets/HomePageImages/BannerSectionImages/BannerElementSeven.png";
import { Link } from "react-router";

function Banner() {
  return (
    <section className="relative w-full bg-[#1052FE] text-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden font-sans select-none">
      {/* Background Grid Pattern */}
      <GridBG gridSizeX={60} gridSizeY={60} opacity={0.15} />

      {/* 1. Top-Left Lime Squiggle */}
      <div className="absolute hidden md:block sm:top-4 sm:-left-6 md:-top-4 md:left-0 z-10 w-28 h-44 md:w-44 md:h-72 pointer-events-none transform -rotate-12 filter drop-shadow-xl">
        <img src={BannerElementOne} alt="Banner Element One" />
      </div>

      {/* 2. Upper-Left White Coil Spring */}
      <div className="absolute hidden sm:top-6 sm:left-28 md:top-10 md:left-28 z-10 w-20 h-28 md:w-28 md:h-52 pointer-events-none">
        <img src={BannerElementTwo} alt="Banner Element Two" />
      </div>

      {/* 3. Bottom-Left White 3D Cone */}
      <div className="absolute -bottom-8 -left-6 md:top-60 md:left-0 z-10 w-28 h-32 md:w-28 md:h-28 pointer-events-none">
        <img src={BannerElementThree} alt="Banner Element Three" />
      </div>

      {/* 4. Bottom-Left Lime 3D Donut / Torus */}
      <div className="absolute -bottom-16 left-12 md:top-80 md:left-32 z-10 w-36 h-36 md:w-72 md:h-72 pointer-events-none filter drop-shadow-2xl">
        <img src={BannerElementFour} alt="Banner Element Four" />
      </div>

      {/* 5. Top-Right Yellow 3D Pyramid */}
      <div className="absolute top-2 right-24 md:top-6 md:right-48 z-10 w-24 h-28 md:w-20 md:h-30 pointer-events-non">
        <img src={BannerElementFive} alt="Banner Element Five" />
      </div>

      {/* 6. Far Right White 3D Cylinder Pill */}
      <div className="absolute top-12 -right-12 md:top-12 md:right-0 z-10 w-36 h-60 md:w-30 md:h-30 pointer-events-none">
        <img src={BannerElementSix} alt="Banner Element Six" />
      </div>

      {/* 7. Bottom-Right Lime Squiggle */}
      <div className="absolute hidden md:block sm:-bottom-10 sm:right-4 md:top-88 md:right-28 z-10 w-28 h-44 md:w-50 md:h-50 pointer-events-none">
        <img src={BannerElementSeven} alt="Banner Element Seven" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-3xl max-w-lg font-bold tracking-tight leading-[1.15] text-white">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        {/* Paragraph Text */}
        <p className="mt-6 text-xs sm:text-sm text-white/90 leading-relaxed font-normal max-w-2xl px-2">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        {/* CTA Button */}
        <Link to="/register" className="hover:text-white/50 transition-colors">
          <button
            type="button"
            className="mt-8 bg-[#CBFF00] hover:bg-[#b8e600] text-gray-900 px-8 py-3.5 rounded-full text-sm sm:text-base transition-all transform active:scale-95 shadow-lg cursor-pointer"
          >
            Join as Creator
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Banner;
