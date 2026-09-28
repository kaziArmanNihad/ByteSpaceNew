import { stats } from "../../utils/content";

function Stats() {
  return (
    <section id="status" className="bg-slate-950 px-6 py-16">
      <div
        className="
          mx-auto grid max-w-6xl
          grid-cols-2 overflow-hidden
          rounded-3xl
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          md:grid-cols-4
        "
      >
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`
              p-8 text-center
              ${index !== 0 ? "border-white/10 md:border-l" : ""}
              ${index > 1 ? "border-t md:border-t-0" : ""}
            `}
          >
            <div className="text-3xl font-bold text-white sm:text-4xl">
              {stat.value}
            </div>

            <p className="mt-2 text-sm text-white/40">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
