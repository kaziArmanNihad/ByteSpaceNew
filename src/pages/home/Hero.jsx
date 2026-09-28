function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-24 lg:px-16">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute -left-20 top-1/3 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[120px]" />
      </div>

      {/* Grid background */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:60px_60px]
          [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]
        "
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        {/* Left column */}
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 shadow-lg shadow-black/10 backdrop-blur-xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            <span>Building the future of digital experiences</span>
          </div>

          <h1 className="max-w-md text-5xl font-bold leading-[1.1] tracking-tight text-white">
            Create something{" "}
            <span className="text-cyan-200">extraordinary.</span>
          </h1>

          <p className="mt-6 max-w-sm text-base leading-7 text-white/50">
            We design and build beautiful digital experiences that help
            ambitious brands stand out, connect with their audience, and grow
            faster.
          </p>

          <div className="mt-9 flex items-center gap-4">
            <a
              href="/about"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-purple-500/20 to-fuchsia-600/10 text-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1"
            >
              Explore our work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              Let's talk
            </a>
          </div>

          {/* fix this part alignment */}
          <div className="mt-10">
            <p
              className="
                mb-6
                text-xs font-semibold
                uppercase
                tracking-[0.22em]
                text-slate-400
              "
            >
              Trusted by innovative teams
            </p>
            <div
              className="
                flex flex-wrap
                items-center
                justify-start
                gap-x-10 gap-y-5
                text-sm font-semibold
                text-slate-400
              "
            >
              <span className="transition-colors hover:text-slate-700">
                Acme
              </span>

              <span className="transition-colors hover:text-slate-700">
                Vertex
              </span>

              <span className="transition-colors hover:text-slate-700">
                Orbit
              </span>

              <span className="transition-colors hover:text-slate-700">
                Northstar
              </span>

              <span className="transition-colors hover:text-slate-700">
                Vercel
              </span>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="relative mx-auto grid h-[280px] w-full max-w-md grid-cols-2 grid-rows-2 gap-4">
          {/* Large box: spans both rows in column 1 */}
          <div className="row-span-2 flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-600/10 p-6 backdrop-blur-xl">
            <span className="text-sm font-medium uppercase tracking-wide text-cyan-300/70">
              Strategy
            </span>
            <p className="text-lg font-medium leading-snug text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              magni soluta dolorum, modi ratione quia iste ipsum eveniet ullam.
            </p>
          </div>

          {/* Purple box: column 2, row 1 */}
          <div className="flex h-full flex-col gap-2 justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-fuchsia-600/10 p-6 backdrop-blur-xl">
            <span className="text-sm font-medium uppercase tracking-wide text-purple-300/70">
              Design
            </span>
            <p className="text-base font-medium leading-snug text-white">
              Interfaces crafted with obsessive attention to detail.
            </p>
          </div>

          {/* Blue box: column 2, row 2 */}
          <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-slate-600/10 p-6 backdrop-blur-xl">
            <span className="text-sm font-medium uppercase tracking-wide text-blue-300/70">
              Engineering
            </span>
            <p className="text-base font-medium leading-snug text-white">
              Fast, resilient builds that scale with you.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}

export default Hero;
