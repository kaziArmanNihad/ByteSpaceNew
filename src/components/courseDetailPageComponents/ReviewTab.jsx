import { Star } from "lucide-react";
import { ReviewData } from "../../utils/Datas";

function ReviewTab() {
  return (
    <div className="mt-8 space-y-8">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          What Learners Are Saying
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
          Discover what our learners have to say about their experience with
          "Build Digital Asset: A Comprehensive Guide." Read reviews and ratings
          from individuals who have embarked on the transformative journey of
          mastering digital asset creation.
        </p>
      </div>

      {/* Ratings Breakdown Card */}
      <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
        <div className="bg-[#D2FF00] rounded-2xl p-6 text-center w-32 shrink-0">
          <p className="text-xs font-semibold text-gray-700">Ratings</p>
          <p className="text-3xl font-black text-gray-900 mt-1">4.7</p>
        </div>

        <div className="w-full space-y-2">
          {[
            { stars: 5, count: 720, width: "w-[85%]" },
            { stars: 4, count: 120, width: "w-[40%]" },
            { stars: 3, count: 21, width: "w-[15%]" },
            { stars: 2, count: 12, width: "w-[8%]" },
            { stars: 1, count: 16, width: "w-[10%]" },
          ].map((row) => (
            <div
              key={row.stars}
              className="flex items-center gap-3 text-xs text-gray-500"
            >
              <div className="flex items-center gap-0.5 w-16">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`w-3 h-3 ${
                      idx < row.stars
                        ? "fill-gray-800 text-gray-800"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className={`bg-[#1052FE] h-full ${row.width}`} />
              </div>
              <span className="w-8 text-right font-medium">{row.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-4">
        <h4 className="text-base font-bold text-gray-900">
          Individual Reviews:
        </h4>

        {ReviewData.map((rev, idx) => (
          <div
            key={idx}
            className="bg-gray-50/70 border border-gray-100 rounded-2xl p-5 space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs font-bold text-gray-900">{rev.name}</p>
                  <p className="text-[10px] text-gray-400">{rev.role}</p>
                </div>
              </div>
              <span className="text-[10px] text-gray-400">{rev.time}</span>
            </div>

            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-gray-800 text-gray-800" />
              ))}
            </div>

            <p className="text-xs text-gray-600 leading-relaxed">{rev.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewTab;
