import React, { useState } from "react";
import { Star, Signal, BookOpen, Clock, MessageSquare } from "lucide-react";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "+ More",
];

const courseData = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    priceType: "/lifetime",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    studentsCount: "26+",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    priceType: "/lifetime",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    studentsCount: "26+",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    priceType: "/lifetime",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    studentsCount: "26+",
  },
  {
    id: 4,
    title: "Learn Python Programming",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$27",
    priceType: "/lifetime",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
    studentsCount: "26+",
  },
  {
    id: 5,
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$15",
    priceType: "/lifetime",
    image:
      "https://images.unsplash.com/photo-1619410283995-43d9134e7656?auto=format&fit=crop&w=800&q=80",
    studentsCount: "26+",
  },
  {
    id: 6,
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$23",
    priceType: "/lifetime",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    studentsCount: "26+",
  },
];

function Feature() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Discover Your Passion, <br className="hidden sm:inline" />
          Build Your Skills
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>

        {/* Category Pills Filter */}
        <div className="mt-8 flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#D2FF00] text-gray-900 shadow-sm font-semibold"
                    : "bg-gray-100/80 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {courseData.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl border border-gray-100 p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Floating Overlays */}
              <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden group">
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
                  <h3 className="text-lg font-bold text-gray-900 leading-snug">
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
                <span className="text-xl font-black text-[#1052FE]">
                  {course.price}
                </span>
                <span className="text-xs text-gray-400 font-normal ml-0.5">
                  {course.priceType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;
