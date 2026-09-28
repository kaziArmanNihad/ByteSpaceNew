import React, { useState } from "react";
import { Search, ShoppingBag, Star } from "lucide-react";
import GridBG from "../shared/GridBG";

function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#1052FE] text-white relative overflow-hidden font-sans select-none">
      {/* Background Grid Pattern */}
      <GridBG opacity={0.15} />

      <main className="relative z-20 max-w-5xl mx-auto px-4 pt-6 md:pt-10 text-center flex flex-col items-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white max-w-4xl">
          Get Access to Hundreds Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-white/90 font-normal max-w-2xl px-2">
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
            <div className="flex-1 min-w-0 bg-white p-3 pl-5 rounded-full shadow-2xl transition-all focus-within:ring-4 flex items-center">
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
              className="bg-[#D4FB20] hover:bg-[#b8e600] text-gray-900 cursor-pointer font-bold px-8 py-3.5 rounded-full text-sm md:text-base transition-all transform active:scale-95 shrink-0 shadow-sm"
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
