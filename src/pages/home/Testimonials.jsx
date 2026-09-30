import TestimonialImageOne from "../../assets/HomePageImages/TestimonialSectionImages/TestimonialImageOne.png";
import TestimonialImageTwo from "../../assets/HomePageImages/TestimonialSectionImages/TestimonialImageTwo.png";
import TestimonialImageThree from "../../assets/HomePageImages/TestimonialSectionImages/TestimonialImageThree.png";

const testimonialsData = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: TestimonialImageOne,
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    avatar: TestimonialImageTwo,
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: TestimonialImageThree,
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

function Testimonials() {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-20 px-6 md:px-12 lg:px-20 font-sans overflow-hidden">
      {/* Background Soft Glow Gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-70 w-[500px] h-[500px] bg-[#E2FF66]/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-[#E2FF66]/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Title */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Discover What Our <br className="hidden sm:inline" />
              Community Is Saying
            </h2>
          </div>

          {/* Right Description Subtitle */}
          <div className="lg:col-span-6">
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* User Avatar */}
                <div className="w-14 h-14 rounded-full overflow-hidden mb-5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {item.name}
                </h3>
                <p className="text-xs font-semibold text-[#1052FE] mt-0.5 mb-5">
                  {item.role}
                </p>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
