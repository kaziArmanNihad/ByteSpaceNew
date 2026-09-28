import { Link } from "react-router";
import { aboutStats, aboutValues } from "../../utils/content";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32">
        {/* Background glows */}
        <div className="absolute left-1/4 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute right-1/4 top-20 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[140px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            About Us
          </span>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            We build things
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              that matter.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/40 sm:text-lg">
            We are a passionate team of designers, developers, and creators
            focused on building modern digital experiences that help businesses
            grow and make an impact.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div>
            <span className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Our Story
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Turning ideas into
              <span className="text-white/40"> digital experiences.</span>
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/40">
              <p>
                What started as a simple idea grew into a team passionate about
                design, technology, and solving real problems.
              </p>

              <p>
                Today, we work with startups, businesses, and ambitious creators
                to transform their ideas into fast, beautiful, and scalable
                digital products.
              </p>

              <p>
                We believe technology should not only work well — it should feel
                great to use.
              </p>
            </div>

            <Link
              to="/contact"
              className="
                mt-8 inline-flex items-center
                rounded-xl
                border border-cyan-300/20
                bg-cyan-400/10
                px-6 py-3
                text-sm font-semibold
                text-cyan-300
                transition-all duration-300
                hover:bg-cyan-400/20
                hover:text-white
              "
            >
              Work with us
              <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div
              className="
                relative overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/[0.04]
                p-8
                backdrop-blur-xl
              "
            >
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative">
                <div className="mb-8 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-cyan-300" />
                  <div className="h-3 w-3 rounded-full bg-blue-400" />
                  <div className="h-3 w-3 rounded-full bg-purple-400" />
                </div>

                <div className="space-y-4">
                  <div className="h-4 w-3/4 rounded-full bg-white/10" />
                  <div className="h-4 w-full rounded-full bg-white/5" />
                  <div className="h-4 w-5/6 rounded-full bg-white/5" />

                  <div className="grid grid-cols-3 gap-3 pt-6">
                    <div className="h-24 rounded-2xl border border-white/10 bg-white/5" />
                    <div className="h-24 rounded-2xl border border-cyan-300/10 bg-cyan-300/5" />
                    <div className="h-24 rounded-2xl border border-white/10 bg-white/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
          {aboutStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white sm:text-4xl">
                {stat.value}
              </div>

              <div className="mt-2 text-sm text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/5 blur-[150px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              What We Believe
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Our values guide
              <span className="text-white/40"> everything we do.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutValues.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="
                    group rounded-3xl
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
                      text-cyan-300
                      transition
                      group-hover:bg-cyan-400/10
                    "
                  >
                    <Icon />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">{value.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div
          className="
            relative mx-auto max-w-6xl
            overflow-hidden
            rounded-3xl
            border border-white/10
            bg-white/[0.04]
            px-6 py-16
            text-center
            backdrop-blur-xl
            sm:px-12
          "
        >
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

          <div className="relative">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Have an idea?
              <span className="text-white/40"> Let's build it.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-white/40">
              Let's create something meaningful, beautiful, and built to last.
            </p>

            <Link
              to="/contact"
              className="
                mt-8 inline-flex
                rounded-xl
                bg-cyan-400
                px-7 py-3
                text-sm font-bold
                text-slate-950
                transition-all duration-300
                hover:bg-cyan-300
                hover:shadow-xl
                hover:shadow-cyan-500/20
              "
            >
              Get Started
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
