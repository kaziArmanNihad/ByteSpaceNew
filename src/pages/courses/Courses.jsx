import { useState } from "react";
import {
  Search,
  ChevronDown,
  SlidersHorizontal,
  BarChart2,
  Grid,
  Star,
  Signal,
  BookOpen,
  Clock,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import GridBG from "../shared/GridBG";
import { ALL_COURSES } from "../../utils/Datas";
import toast from "react-hot-toast";

// Categories list
const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  // Filter logic
  const filteredCourses = ALL_COURSES.filter((course) => {
    const matchesCategory =
      activeCategory === "Featured" || course.category === activeCategory;
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination calculation
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCourses = filteredCourses.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleToast = () => {
    toast.success("This Feature is Coming Soon!");
  };

  return (
    <div className="w-full bg-white font-sans text-gray-900 pb-20 select-none">
      {/* HERO SEARCH BANNER */}
      <section className="relative w-full bg-[#1052FE] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Grid Pattern */}
        <GridBG gridSize={60} opacity={0.15} />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Find Your Next Course
          </h1>

          {/* Search Bar Container */}
          <div className="mt-8 w-full max-w-2xl flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            {/* Input pill */}
            <div className="flex-1 w-full bg-white rounded-full px-5 py-3 flex items-center shadow-lg">
              <Search className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-transparent text-gray-800 placeholder-gray-400 text-sm md:text-base outline-none font-medium"
              />
            </div>

            {/* Dropdown Button */}
            <button
              onClick={handleToast}
              className="bg-[#D2FF00] hover:bg-[#bce600] text-gray-900 font-bold px-6 py-3 rounded-full text-sm transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer w-full sm:w-auto shadow-md"
            >
              <span>Courses</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT & FILTERS */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Filter Controls Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
          {/* Left Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleToast}
              className="flex items-center gap-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filter</span>
            </button>

            <button
              onClick={handleToast}
              className="flex items-center gap-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer"
            >
              <BarChart2 className="w-3.5 h-3.5" />
              <span>Level</span>
            </button>

            <button
              onClick={handleToast}
              className="flex items-center gap-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer"
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Category</span>
            </button>
          </div>

          {/* Right Sort Dropdown */}
          <div>
            <button
              onClick={handleToast}
              className="flex items-center gap-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer"
            >
              <span>Most relevant</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2.5 my-4">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#D2FF00] text-gray-900 font-bold shadow-sm"
                    : "bg-gray-100/80 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* COURSE GRID */}
        {currentCourses.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-3xl border border-gray-100 p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Floating Overlays */}
                <div className="relative w-full h-52 rounded-2xl overflow-hidden group">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Bottom Overlay Info Pill Bar */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-gray-700 font-medium">
                    <span className="flex items-center gap-1 bg-white/80 backdrop-blur-md rounded-full px-2 py-1.5">
                      <BookOpen className="w-3 h-3 text-gray-500" />
                      {course.lessons}
                    </span>
                    <span className="flex items-center gap-1 bg-white/80 backdrop-blur-md rounded-full px-2 py-1.5">
                      <Clock className="w-3 h-3 text-gray-500" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1 bg-white/80 backdrop-blur-md rounded-full px-2 py-1.5">
                      <MessageSquare className="w-3 h-3 text-gray-500" />
                      {course.comments}
                    </span>
                  </div>
                </div>

                {/* Course Title & Rating */}
                <div className="mt-4 px-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-gray-900 leading-snug">
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
                <div className="mt-4 flex items-center justify-between px-1">
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
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="mt-16 text-center py-12 bg-gray-50 rounded-3xl">
            <p className="text-gray-500 text-sm font-medium">
              No courses found matching your criteria.
            </p>
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-9 h-9 rounded-full text-xs font-bold transition cursor-pointer ${
                  currentPage === page
                    ? "bg-[#1052FE] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
              aria-label="Next Page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default Courses;
