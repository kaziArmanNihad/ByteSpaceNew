import { useState } from "react";
import { Search } from "lucide-react";
import GridBG from "../shared/GridBG";
import HeroElementOne from "../../assets/HomePageImages/HeroSectionImages/HeroElementOne.png";
import HeroElementTwo from "../../assets/HomePageImages/HeroSectionImages/HeroElementTwo.png";
import HeroElementThree from "../../assets/HomePageImages/HeroSectionImages/HeroElementThree.png";
import HeroElementFour from "../../assets/HomePageImages/HeroSectionImages/HeroElementFour.png";
import HeroElementFive from "../../assets/HomePageImages/HeroSectionImages/HeroElementFive.png";
import HeroElementSix from "../../assets/HomePageImages/HeroSectionImages/HeroElementSix.png";
import HeroElementSeven from "../../assets/HomePageImages/HeroSectionImages/HeroElementSeven.png";
import HeroSectionImage from "../../assets/HomePageImages/HeroSectionImages/HeroSectionImage.png";
import HeroSectionDesignCard from "../../assets/HomePageImages/HeroSectionImages/HeroSectionDesignCard.png";
import HeroSectionHappyStudentCard from "../../assets/HomePageImages/HeroSectionImages/HeroSectionHappyStudentCard.png";
import HeroSectionProgressCard from "../../assets/HomePageImages/HeroSectionImages/HeroSectionProgressCard.png";

function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#1052FE] text-white relative overflow-hidden font-sans select-none">
      {/* Background Grid Pattern */}
      <GridBG opacity={0.15} />

      {/* Hero Elements */}
      <div className="absolute top-4 -left-6 md:top-10 md:left-0 z-10 w-28 h-44 md:w-44 md:h-72 pointer-events-none">
        <img src={HeroElementOne} alt="Hero Element One" />
      </div>

      <div className="absolute top-4 -left-6 md:top-50 md:left-40 z-10 w-28 h-44 md:w-32 md:h-32 pointer-events-none">
        <img src={HeroElementTwo} alt="Hero Element Two" />
      </div>

      <div className="absolute top-4 -left-6 md:top-100 md:left-15 z-20 w-28 h-44 md:w-60 md:h-72 pointer-events-none">
        <img src={HeroElementThree} alt="Hero Element Three" />
      </div>

      <div className="absolute top-4 -right-6 md:top-12 md:right-0 z-10 w-28 h-44 md:w-32 md:h-50 pointer-events-none">
        <img src={HeroElementFour} alt="Hero Element Four" />
      </div>

      <div className="absolute top-4 -right-6 md:top-60 md:right-46 z-10 w-28 h-44 md:w-20 md:h-40 pointer-events-none">
        <img src={HeroElementFive} alt="Hero Element Five" />
      </div>

      <div className="absolute top-4 -right-6 md:top-90 md:right-10 z-20 w-28 h-44 md:w-60 md:h-60 pointer-events-none">
        <img src={HeroElementSix} alt="Hero Element Six" />
      </div>

      <div className="absolute bottom-0 left-50 md:-bottom-22 md:left-10 z-10 w-28 h-44 md:w-300 md:h-100 pointer-events-none">
        <img src={HeroElementSeven} alt="Hero Element Seven" />
      </div>

      {/* hero image */}
      <div className="absolute bottom-0 left-50 md:bottom-0 md:left-90 z-10 w-28 h-44 md:w-150 md:h-100  pointer-events-none">
        <img src={HeroSectionImage} alt="Hero Section Image" />
      </div>

      <div className="absolute top-0 left-50 md:top-90 md:left-85 z-10 w-28 h-44 md:w-42 md:h-42 pointer-events-none">
        <img src={HeroSectionDesignCard} alt="Hero Section Design Card" />
      </div>

      <div className="absolute bottom-0 left-50 md:-bottom-20 md:left-70 z-10 w-28 h-44 md:w-60 md:h-60 pointer-events-none">
        <img
          src={HeroSectionHappyStudentCard}
          alt="Hero Section Happy Student Card"
        />
      </div>

      <div className="absolute bottom-0 right-50 md:bottom-32 md:right-100 z-10 w-28 h-44 md:w-40 md:h-40 pointer-events-none">
        <img src={HeroSectionProgressCard} alt="Hero Section Progress Card" />
      </div>

      {/* Main Content */}
      <main className="relative z-20 max-w-5xl mx-auto px-4 pt-6 md:pt-10 text-center flex flex-col items-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl font-bold tracking-tight leading-[1.1] text-white max-w-lg">
          Get Access to Hundreds Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-xs text-white/90 font-normal max-w-3xl px-2">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses
        </p>

        {/* Search Input Box */}
        <div className="mt-8 w-full max-w-xl px-2">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center justify-center gap-3 w-full max-w-xl mx-auto"
          >
            {/* Input Container */}
            <div className="flex-1 min-w-0 bg-white p-2 pl-5 rounded-full shadow-2xl transition-all focus-within:ring-4 flex items-center">
              <Search className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Course, topic, creator"
                className="w-full bg-transparent text-gray-800 placeholder-gray-400 text-sm md:text-base outline-none pr-2 font-medium"
              />
            </div>

            {/* Button alongside */}
            <button
              type="submit"
              className="bg-[#D4FB20] hover:bg-[#b8e600] text-gray-900 cursor-pointer font-bold px-8 py-2 rounded-full text-sm md:text-base transition-all transform active:scale-95 shrink-0 shadow-sm"
            >
              Search
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Hero;
