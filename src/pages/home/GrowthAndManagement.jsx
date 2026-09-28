import React from "react";
import { CheckCircle2, Star } from "lucide-react";
import growthAndManagementImageOne from "../../assets/growthAndManagementImageOne.png";
import growthAndManagementImageTwo from "../../assets/growthAndManagementImageTwo.png";
import growthAndManagementCourseImageOne from "../../assets/growthAndManagementCourseImageOne.png";
import growthAndManagementTotalRevenue from "../../assets/growthAndManagementTotalRevenue.png";
import growthAndManagementTotalRevenueTwo from "../../assets/growthAndManagementTotalRevenueTwo.png";
import growthAndManagementHappyStudents from "../../assets/growthAndManagementHappyStudents.png";

function GrowthAndManagement() {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      {/* Background Soft Glow Gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-60 w-96 h-96 bg-lime-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-96 h-96 bg-lime-200/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-28">
        {/* SECTION 1: Your Path to Professional Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div className="space-y-6 max-w-lg">
            <h2 className="text-3xl sm:text-4xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Metrics Counter */}
            <div className="pt-4 grid grid-cols-3 gap-6 border-t border-gray-200/60">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#1052FE]">
                  12K
                </p>
                <p className="text-xs text-gray-500 font-medium mt-0.5">
                  Students
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#1052FE]">
                  70+
                </p>
                <p className="text-xs text-gray-500 font-medium mt-0.5">
                  Courses
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#1052FE]">
                  16
                </p>
                <p className="text-xs text-gray-500 font-medium mt-0.5">
                  Creators
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Main Student Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden">
                <img
                  src={growthAndManagementImageOne}
                  alt="Student with laptop and headphones"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="absolute top-0 left-0 z-0 bg-white/95 backdrop-blur-md text-gray-900 rounded-2xl p-4 w-60">
                <img src={growthAndManagementCourseImageOne} alt="" />
              </div>

              {/* Floating Card: Learning Progress */}
              <div className="absolute top-28 right-0 z-20 bg-white/95 backdrop-blur-md text-gray-900 rounded-2xl p-4 shadow-xl border border-gray-100 w-44">
                <p className="text-[11px] font-medium text-gray-500 mb-1">
                  Learning Progress
                </p>
                <p className="text-2xl font-extrabold text-gray-900 mb-2">
                  55%
                </p>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#CBFF00] h-full w-[55%] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Create & Manage Courses Easily */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image & Stats Cards Composition */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              {/* Creator Main Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden">
                <img
                  src={growthAndManagementImageTwo}
                  alt="Instructor smiling with tablet"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Top Floating Card: Total Revenue */}
              <div className="absolute top-6 left-2 z-0 text-white rounded-2xl p-4 w-44">
                <img src={growthAndManagementTotalRevenue} alt="" />
              </div>

              {/* Middle Floating Card: Year to Date */}
              <div className="absolute top-32 left-6 z-0 text-white rounded-2xl p-4 w-28">
                <img src={growthAndManagementTotalRevenueTwo} alt="" />
              </div>

              {/* Floating Lime 3D Squiggle Accent */}
              <div className="absolute top-20 -right-6 z-20 w-24 h-32 pointer-events-none filter drop-shadow-lg transform -rotate-12"></div>

              {/* Bottom Floating Card: Happy Students */}
              <div className="absolute bottom-36 -right-9 z-20  text-gray-900 rounded-2xl p-3.5 w-72">
                <img src={growthAndManagementHappyStudents} alt="" />
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="space-y-6 max-w-lg order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Create & Manage Courses Easily.
            </h2>

            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            {/* Checklist items */}
            <ul className="space-y-3.5 pt-2">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-sm sm:text-base font-semibold text-gray-800"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#1052FE] shrink-0 fill-blue-50" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrowthAndManagement;
