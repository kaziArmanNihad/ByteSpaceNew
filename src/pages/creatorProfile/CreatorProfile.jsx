import { useState } from "react";
import { Link } from "react-router";
import {
  SlidersHorizontal,
  BarChart2,
  Grid,
  ChevronDown,
  Star,
  Signal,
} from "lucide-react";
import GridBG from "../shared/GridBG";
import { CreatorCourses } from "../../utils/Datas";
import CreatorProfileImage from "../../assets/HomePageImages/CreatorProfileSectionImages/CreatorProfileImage.png";
import toast from "react-hot-toast";

function CreatorProfile() {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleToast = () => {
    toast.success("This Feature is not Available!");
  };
  return (
    <div className="w-full bg-white font-sans text-gray-900 pb-20 select-none">
      {/* HERO SECTION WITH HEADER */}
      <section className="relative w-full bg-[#1052FE] text-white overflow-hidden pb-12 sm:pb-16">
        {/* Grid Background Overlay */}
        <GridBG gridSize={60} opacity={0.15} />

        {/* Creator Info Container */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
          {/* Creator Header Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* Avatar */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden shadow-xl shrink-0">
              <img
                src={CreatorProfileImage}
                alt="PurePearl Studio"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name, Role & Creator Badge */}
            <div className="space-y-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  PurePearl Studio
                </h1>
                <span className="bg-[#D2FF00] text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                  Creator
                </span>
              </div>
              <p className="text-sm sm:text-base text-white/80 font-normal">
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>

          {/* Bio Text */}
          <p className="mt-6 text-xs sm:text-sm text-white/90 leading-relaxed font-normal max-w-3xl">
            Welcome to the creative world of PurePearl Studio. Here, you'll
            discover the passion, expertise, and inspiration that drive my
            creative journey. Let's explore and learn together!
            <br />
            Dive into my creative portfolio, showcasing a glimpse of my artistic
            endeavors. From digital designs to multimedia projects, each piece
            tells a unique story. Explore the world of creativity with me.
          </p>

          {/* Stats Bar & Follow Button */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-between gap-3 sm:gap-4 pt-2">
            {/* Left Stat Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="bg-white text-gray-900 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm">
                3{" "}
                <span className="font-normal text-gray-600 ml-1">Products</span>
              </div>
              <div className="bg-white text-gray-900 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm">
                12{" "}
                <span className="font-normal text-gray-600 ml-1">
                  Followers
                </span>
              </div>
            </div>

            {/* Follow Button */}
            <button
              onClick={() => setIsFollowing(!isFollowing)}
              className="bg-[#D2FF00] hover:bg-[#bce600] text-gray-900 font-bold px-8 py-2.5 rounded-full text-xs sm:text-sm transition-all transform active:scale-95 shadow-md cursor-pointer"
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID SECTION */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Filter Controls Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6">
          {/* Left Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={handleToast}
              className="flex items-center gap-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-700 px-3 sm:px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filter</span>
            </button>

            <button
              onClick={handleToast}
              className="flex items-center gap-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-700 px-3 sm:px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer"
            >
              <BarChart2 className="w-3.5 h-3.5" />
              <span>Level</span>
            </button>

            <button
              onClick={handleToast}
              className="flex items-center gap-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-700 px-3 sm:px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer"
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Category</span>
            </button>
          </div>

          {/* Right Sort Dropdown */}
          <div>
            <button
              onClick={handleToast}
              className="flex items-center gap-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-700 px-3 sm:px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer"
            >
              <span>Most relevant</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {CreatorCourses.map((course) => (
            <Link key={course.id} to="/courseDetails" className="block h-full">
              <div className="bg-white rounded-3xl border border-gray-100 p-3 sm:p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                {/* Image Container with Floating Overlays */}
                <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden group">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Bottom Overlay Info Pill Bar */}
                  <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between text-xs text-gray-700 font-medium gap-1">
                    <span className="flex items-center gap-1 bg-white/80 backdrop-blur-md rounded-full px-2 sm:px-3 py-1.5 whitespace-nowrap">
                      {course.lessons}
                    </span>
                    <span className="flex items-center gap-1 bg-white/80 backdrop-blur-md rounded-full px-2 sm:px-3 py-1.5 whitespace-nowrap">
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1 bg-white/80 backdrop-blur-md rounded-full px-2 sm:px-3 py-1.5 whitespace-nowrap">
                      {course.comments}
                    </span>
                  </div>
                </div>

                {/* Course Title & Rating */}
                <div className="mt-4 px-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="min-w-0 break-words text-base font-bold text-gray-900 leading-snug">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs font-semibold text-gray-500 shrink-0 mt-0.5">
                      <span>{course.rating}</span>
                      <Star className="w-3.5 h-3.5 fill-gray-300 text-gray-300" />
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mt-0.5">
                    by {course.author}
                  </p>
                </div>

                {/* Level & Student Avatars */}
                <div className="mt-4 flex items-center justify-between gap-2 px-1">
                  <div className="flex items-center gap-1.5 bg-gray-100/80 px-2.5 py-1 rounded-md text-xs text-gray-600 font-medium">
                    <Signal className="w-3 h-3 text-gray-500" />
                    <span>{course.level}</span>
                  </div>

                  {/* Avatar Stack */}
                  <div className="flex items-center -space-x-2">
                    <img
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                      alt="Student"
                    />
                    <img
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                      alt="Student"
                    />
                    <img
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                      alt="Student"
                    />
                    <div className="w-6 h-6 rounded-full border-2 border-white bg-[#D2FF00] text-gray-900 font-bold text-[10px] flex items-center justify-center">
                      {course.studentsCount}
                    </div>
                  </div>
                </div>

                {/* Price Row */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-baseline px-1">
                  <span className="text-lg font-black text-[#1052FE]">
                    {course.price}
                  </span>
                  <span className="text-xs text-gray-400 font-normal ml-0.5">
                    {course.priceType}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default CreatorProfile;
