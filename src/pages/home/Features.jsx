import { features } from "../../utils/content";

function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-950 px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            Why choose us
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Everything you need to
            <span className="text-white/40"> stand out.</span>
          </h2>

          <p className="mt-5 text-white/40">
            We combine thoughtful design, modern technology, and strategy to
            create digital products people love to use.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                group rounded-2xl
                border border-white/10
                bg-white/[0.04]
                p-7
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-2
                hover:border-cyan-300/20
                hover:bg-white/[0.07]
              "
            >
              <div
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-xl
                  border border-white/10
                  bg-white/5
                  text-xl text-cyan-300
                  transition
                  group-hover:bg-cyan-400/10
                "
              >
                {feature.icon}
              </div>

              <h3 className="mt-6 text-lg font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/40">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
