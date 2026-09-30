import { CheckCircle2 } from "lucide-react";

function AboutTab() {
  return (
    <div className="mt-8 space-y-8">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Description</h3>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed space-y-4">
          Embark on an enlightening exploration into the world of digital
          creation with our comprehensive course, "Build Digital Asset: A
          Comprehensive Guide." This transformative learning experience invites
          you to delve deep into the intricacies of crafting impactful digital
          content. From laying the groundwork with foundational concepts to
          mastering advanced techniques, this guide is meticulously curated to
          empower you with the skills essential for navigating the dynamic
          landscape of digital asset creation.
          <br />
          <br />
          In the initial modules, you'll establish a solid foundation by
          immersing yourself in the foundational concepts that form the backbone
          of digital asset creation. Understand the fundamental elements that
          constitute compelling digital content and gain proficiency in
          leveraging these elements to communicate effectively in the digital
          realm.
          <br />
          <br />
          As you progress through the course, you'll ascend to higher levels of
          expertise, delving into the nuances of design principles that drive
          impactful creations. Uncover the secrets behind effective visual
          communication, exploring color theory, typography, and layout
          strategies that elevate your digital assets to new heights.
        </p>
      </div>

      {/* Sneak Peak Section */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Sneak Peak</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <img
            className="w-full h-24 object-cover rounded-2xl shadow-sm border border-gray-100"
            src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=300&q=80"
            alt="Sneak Peak 1"
          />
          <img
            className="w-full h-24 object-cover rounded-2xl shadow-sm border border-gray-100"
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80"
            alt="Sneak Peak 2"
          />
          <img
            className="w-full h-24 object-cover rounded-2xl shadow-sm border border-gray-100"
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80"
            alt="Sneak Peak 3"
          />
          <img
            className="w-full h-24 object-cover rounded-2xl shadow-sm border border-gray-100"
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=300&q=80"
            alt="Sneak Peak 4"
          />
        </div>
      </div>

      {/* Key Points Checklist */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Key Points</h3>
        <div className="space-y-3">
          {[
            "Foundational Concepts",
            "Design Principles Mastery",
            "Advanced Techniques in Digital Creation",
            "Project Showcase and Critique",
            "Optimizing for Various Platforms",
            "Digital Asset Management Best Practices",
            "Monetization Strategies",
            "Capstone Project: Building Your Portfolio",
          ].map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-gray-800"
            >
              <CheckCircle2 className="w-5 h-5 text-white fill-[#1052FE] shrink-0" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutTab;
