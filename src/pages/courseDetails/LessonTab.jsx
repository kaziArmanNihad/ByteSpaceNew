import { Video } from "lucide-react";

function LessonTab() {
  return (
    <div className="mt-8 space-y-8">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Explore the Modules
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
          Immerse yourself in the course content as we break down each module
          into comprehensive lessons, providing practical insights and hands-on
          experiences.
        </p>
      </div>

      {/* Module Lessons List */}
      <div className="space-y-4">
        <h4 className="text-base font-bold text-gray-900">Lesson List</h4>

        {[
          {
            title: "Module 1: Introduction to Digital Assets",
            desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
          },
          {
            title: "Module 2: Design Principles for Impact",
            desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
          },
          {
            title: "Module 4: User-Centric Design Strategies",
            desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
          },
          {
            title: "Module 5: Interactive Media and Engagement",
            desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
          },
          {
            title: "Module 6: Project Showcase and Critique",
            desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
          },
          {
            title: "Module 7: Optimizing Digital Assets for Various Platforms",
            desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
          },
        ].map((mod, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-gray-100/60 transition"
          >
            <div className="w-10 h-10 rounded-xl bg-[#D2FF00] flex items-center justify-center shrink-0 mt-0.5">
              <Video className="w-5 h-5 text-gray-900" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-gray-900">{mod.title}</h5>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                {mod.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Tracking */}
      <div className="pt-4 border-t border-gray-100">
        <h4 className="text-base font-bold text-gray-900 mb-2">
          Lesson Progress Tracking
        </h4>
        <p className="text-xs text-gray-500 mb-4">
          Witness your growth as you complete lessons, with an intuitive
          progress tracking feature guiding you through your learning journey.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 max-w-lg">
          <p className="text-[11px] font-medium text-gray-500">
            Learning Progress
          </p>
          <p className="text-2xl font-black text-gray-900 my-1">55%</p>
          <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
            <div className="bg-[#D2FF00] h-full w-[55%]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonTab;
