import { useState } from "react";
import { Share2, Star, Users, Signal } from "lucide-react";
import toast from "react-hot-toast";
import GridBG from "../shared/GridBG";
import courseDetailImage from "../../assets/HomePageImages/CourseDetailSectionImages/courseDetailImage.png";
import courseDetailImageTwo from "../../assets/HomePageImages/CourseDetailSectionImages/courseDetailImageTwo.png";
import iconOne from "../../assets/HomePageImages/CourseDetailSectionImages/iconOne.png";
import iconTwo from "../../assets/HomePageImages/CourseDetailSectionImages/iconTwo.png";
import iconThree from "../../assets/HomePageImages/CourseDetailSectionImages/iconThree.png";
import iconFour from "../../assets/HomePageImages/CourseDetailSectionImages/iconFour.png";

// importing components
import AboutTab from "../../components/courseDetailPageComponents/AboutTab";
import LessonTab from "../../components/courseDetailPageComponents/LessonTab";
import ReviewTab from "../../components/courseDetailPageComponents/ReviewTab";

function CourseDetails() {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="w-full bg-white font-sans text-gray-900 pb-20 select-none">
      {/* HERO SECTION WITH NAVBAR */}
      <section className="relative w-full bg-[#1052FE] text-white overflow-hidden pb-12">
        <GridBG gridSize={60} opacity={0.15} />

        {/* Course Header Row */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 pt-6">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="mt-2 text-sm sm:text-base text-white/80 font-medium">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="mt-1 text-xs text-white/60">
                by{" "}
                <span className="font-semibold text-[#D2FF00]">
                  purepearl studio
                </span>
              </p>

              {/* Stats Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="bg-white/90 backdrop-blur-md text-gray-900 px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                  <Signal className="w-3.5 h-3.5 text-blue-600" />
                  <span>Intermediate</span>
                </div>
                <div className="bg-white/90 backdrop-blur-md text-gray-900 px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-blue-400 text-blue-400" />
                  <span>4.8 (172 reviews)</span>
                </div>
                <div className="bg-white/90 backdrop-blur-md text-gray-900 px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-600" />
                  <span>199 Students</span>
                </div>
              </div>
            </div>

            {/* Share Button */}
            <button
              onClick={() => toast.success("Feateur is Comming soon!")}
              className="bg-[#D2FF00] hover:bg-[#bce600] text-gray-900 font-bold px-5 py-2.5 rounded-full text-xs flex items-center gap-2 transition cursor-pointer shrink-0"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>

          {/* Video Preview Container */}
          <div className="mt-10 relative w-full lg:w-[62%] h-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-gray-900">
            <img
              src={courseDetailImage}
              alt="Course Video Preview"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT & SIDEBAR */}
      <main className="max-w-6xl mx-auto px-6 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT MAIN CONTENT (8 Cols) */}
          <div className="lg:col-span-8">
            {/* Tabs Header */}
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              {["About", "Lesson", "Reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === tab
                      ? "bg-[#D2FF00] text-gray-900 shadow-sm"
                      : "bg-gray-100/80 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* TAB 1: ABOUT VIEW */}
            {activeTab === "About" && <AboutTab />}

            {/* TAB 2: LESSON VIEW */}
            {activeTab === "Lesson" && <LessonTab />}

            {/* TAB 3: REVIEWS VIEW */}
            {activeTab === "Reviews" && <ReviewTab />}
          </div>

          {/* RIGHT SIDEBAR CARD (4 Cols) */}
          <div className="lg:col-span-4 lg:-mt-48 relative z-30">
            <div className="bg-white border border-gray-200 rounded-[32px] p-6 shadow-xl space-y-6">
              {/* Lessons Outline */}
              <div>
                <h4 className="text-base font-extrabold text-gray-900">
                  112 Lessons (24 hours)
                </h4>
                <div className="mt-3 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between text-gray-700">
                    <span>01 Introduction to Digital Assets</span>
                    <span className="text-[#1052FE] font-medium">12 mins</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-700">
                    <span>02 Design Principles for Impact</span>
                    <span className="text-[#1052FE] font-medium">21 mins</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-700">
                    <span>03 Advanced Techniques in Digital Creation</span>
                    <span className="text-[#1052FE] font-medium">16 mins</span>
                  </div>
                  <p className="text-[11px] text-gray-400 pt-1">
                    99 more videos
                  </p>
                </div>
              </div>

              {/* Price & Enroll */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400">
                  Ready to Dive In? Enroll Now and Start Building Your Digital
                  Future!
                </p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-2xl font-black text-[#1052FE]">
                    $25
                  </span>
                  <span className="text-xs text-gray-400">/lifetime</span>
                </div>

                <button
                  onClick={() => toast.success("Feature is coming soon!")}
                  className="mt-4 w-full bg-[#D2FF00] hover:bg-[#bce600] text-gray-900 font-bold py-3 rounded-full text-xs transition active:scale-95 shadow-md cursor-pointer"
                >
                  Enroll Now
                </button>
              </div>

              {/* Included Items */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <p className="text-xs font-bold text-gray-900">
                  This course include
                </p>
                <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={iconOne}
                      alt="icon one"
                      className="w-4 h-4 text-[#1052FE]"
                    />
                    <span>Learning Resources</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <img
                      src={iconTwo}
                      alt="icon two"
                      className="w-4 h-4 text-[#1052FE]"
                    />
                    <span>Quality Lesson Videos</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <img
                      src={iconThree}
                      alt="icon three"
                      className="w-4 h-4 text-[#1052FE]"
                    />
                    <span>Certificate of Completion</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <img
                      src={iconFour}
                      alt="icon four"
                      className="w-4 h-4 text-[#1052FE]"
                    />
                    <span>Private Consultation</span>
                  </div>
                </div>
              </div>

              {/* Author Card */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <img
                  src={courseDetailImageTwo}
                  alt="Author"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs font-bold text-gray-900">
                    PurePearl Studio
                  </p>
                  <p className="text-[10px] text-gray-400">
                    Professional Creator
                  </p>
                </div>
              </div>

              <div className="pt-1">
                <p className="text-[11px] text-gray-400 mb-3">
                  Ready to Dive In? Enroll Now and Start Building Your Digital
                  Future!
                </p>
                <button
                  onClick={() => toast.error("Feature is not available")}
                  className="block text-center w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 rounded-full text-xs transition"
                >
                  See Full Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CourseDetails;
