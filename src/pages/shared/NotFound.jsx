import React from "react";
import { Link } from "react-router";
import { ShoppingBag } from "lucide-react";
import GridBG from "./GridBG";

function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#1052FE] text-white flex flex-col justify-between font-sans overflow-hidden select-none">
      {/* Grid Background Overlay */}
      <GridBG gridSize={60} opacity={0.15} />

      {/* Main 404 Content */}
      <main className="relative z-20 max-w-4xl mx-auto px-4 py-12 text-center flex flex-col items-center justify-center my-auto">
        {/* Giant 404 Text with Lime/Green Gradient */}
        <h1 className="text-[120px] sm:text-[180px] md:text-[240px] font-black leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#D2FF00] via-[#A6E000] to-[#1052FE]/30 drop-shadow-lg">
          404
        </h1>

        {/* Main Error Message */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white -mt-4 sm:-mt-8 md:-mt-12">
          The page you are looking <br className="hidden sm:inline" />
          for doesn’t exist
        </h2>

        {/* Subtitle Hint */}
        <p className="mt-6 text-xs sm:text-sm text-white/80 font-normal max-w-md">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* Back to Home Button */}
        <Link
          to="/"
          className="mt-8 bg-[#D2FF00] hover:bg-[#bce600] text-gray-900 font-bold px-8 py-3.5 rounded-full text-sm transition-all transform active:scale-95 shadow-lg"
        >
          Back to Home
        </Link>
      </main>

      {/* Spacer for vertical balance */}
      <div className="h-12 pointer-events-none" />
    </div>
  );
}

export default NotFound;
