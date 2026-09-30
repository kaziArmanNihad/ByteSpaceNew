import { useState } from "react";
import { Search } from "lucide-react";
import GridBG from "../../pages/shared/GridBG";
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
import toast from "react-hot-toast";

function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleToast = () => {
    toast.error("Search functionality is not functional yet.");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-[#1052FE] text-white relative overflow-hidden font-sans select-none">
      {/* Background Grid Pattern */}
      <GridBG opacity={0.15} />

      {/* Hero Elements: hidden below lg, original positions on lg and up */}
      <div className="hidden lg:block absolute top-10 left-0 z-10 w-44 h-72 pointer-events-none">
        <img src={HeroElementOne} alt="Hero Element One" />
      </div>

      <div className="hidden lg:block absolute top-50 left-40 z-10 w-32 h-32 lg:left-30 xl:left-50 pointer-events-none">
        <img src={HeroElementTwo} alt="Hero Element Two" />
      </div>

      <div className="hidden lg:block absolute top-100 left-15 z-20 w-60 h-72 pointer-events-none">
        <img src={HeroElementThree} alt="Hero Element Three" />
      </div>

      <div className="hidden lg:block absolute top-12 right-0 z-10 w-32 h-50 pointer-events-none">
        <img src={HeroElementFour} alt="Hero Element Four" />
      </div>

      <div className="hidden lg:block absolute top-60 right-46 z-10 w-20 h-40 pointer-events-none">
        <img src={HeroElementFive} alt="Hero Element Five" />
      </div>

      <div className="hidden lg:block absolute top-90 right-10 z-20 w-60 h-60 pointer-events-none">
        <img src={HeroElementSix} alt="Hero Element Six" />
      </div>

      {/* Background behind the person: shown on every screen */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[110%] sm:w-[100%] md:w-[80%] lg:-bottom-50 lg:left-55 lg:translate-x-0 lg:w-150 lg:h-100 xl:w-300 xl:left-30 xl:-bottom-25 z-10 pointer-events-none">
        <img src={HeroElementSeven} alt="Hero Element Seven" />
      </div>

      {/* hero image: shown on every screen */}
      <div className="absolute bottom-0 left-45 sm:left-1/2 -translate-x-1/2 w-[90%] sm:w-[64%] md:w-[54%] lg:left-90 lg:-bottom-30 lg:translate-x-0 lg:w-100 lg:h-100 xl:left-100 xl:bottom-0 xl:w-150 z-10 pointer-events-none">
        <img src={HeroSectionImage} alt="Hero Section Image" />
      </div>

      {/* Cards: hidden below lg */}
      <div className="hidden lg:block absolute top-90 left-85 z-10 w-42 h-42 lg:w-30 xl:w-40 xl:left-105 pointer-events-none">
        <img src={HeroSectionDesignCard} alt="Hero Section Design Card" />
      </div>

      <div className="hidden lg:block absolute -bottom-20 left-70 z-10 w-60 h-60 lg:w-30 lg:-bottom-30 lg:left-90 xl:w-50 xl:left-90 xl:-bottom-12 pointer-events-none">
        <img
          src={HeroSectionHappyStudentCard}
          alt="Hero Section Happy Student Card"
        />
      </div>

      <div className="hidden lg:block absolute bottom-32 right-100 z-10 w-40 h-40 lg:w-20 lg:bottom-5 lg:right-90 pointer-events-none xl:w-40 xl:right-90 xl:bottom-30">
        <img src={HeroSectionProgressCard} alt="Hero Section Progress Card" />
      </div>

      {/* Main Content */}
      <main className="relative z-20 max-w-6xl mx-auto px-4 pt-6 md:pt-10 text-center flex flex-col items-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.1] text-white max-w-lg">
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
              onClick={handleToast}
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
