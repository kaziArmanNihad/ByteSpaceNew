import iconOne from "../../assets/HomePageImages/LearningSectionImages/LearningPathOne.png";
import iconTwo from "../../assets/HomePageImages/LearningSectionImages/LearningPathTwo.png";
import iconThree from "../../assets/HomePageImages/LearningSectionImages/LearningPathThree.png";
import iconFour from "../../assets/HomePageImages/LearningSectionImages/LearningPathFour.png";
import iconFive from "../../assets/HomePageImages/LearningSectionImages/LearningPathFive.png";
import iconSix from "../../assets/HomePageImages/LearningSectionImages/LearningPathSix.png";

const categories = [
  {
    id: 1,
    title: "Design",
    icon: iconOne,
  },
  {
    id: 2,
    title: "Development",
    icon: iconTwo,
  },
  {
    id: 3,
    title: "IT & Software",
    icon: iconThree,
  },
  {
    id: 4,
    title: "Business",
    icon: iconFour,
  },
  {
    id: 5,
    title: "Marketing",
    icon: iconFive,
  },
  {
    id: 6,
    title: "Photography",
    icon: iconSix,
  },
];

function LearningPaths() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Explore Diverse Learning Paths at Bytespace
        </h2>

        {/* Description Subtitle */}
        <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-3xl mx-auto leading-relaxed">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring there's
          something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>

        {/* Category Cards Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-gray-300 hover:shadow-lg cursor-pointer group"
            >
              {/* Lime Green Circle Icon Wrapper */}
              <div className="w-14 h-14 rounded-full bg-[#CBFF00] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {/* image */}
                <img src={cat.icon} alt={cat.title} />
              </div>

              {/* Title */}
              <span className="text-base font-semibold text-gray-800">
                {cat.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearningPaths;
