export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-28">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div
        className="
          relative mx-auto max-w-5xl
          overflow-hidden rounded-3xl
          border border-white/10
          bg-white/[0.04]
          px-6 py-20
          text-center
          backdrop-blur-xl
          sm:px-12
        "
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-500/10" />

        <div className="relative">
          <span className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Let's build something great
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Have an idea?
            <br />
            <span className="text-white/40">Let's make it real.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-white/40 sm:text-base">
            Tell us about your project and let's create something exceptional
            together.
          </p>

          <a
            href="#contact"
            className="
              group mt-10 inline-flex items-center gap-3
              rounded-xl bg-white
              px-7 py-4
              text-sm font-semibold text-slate-950
              shadow-xl shadow-white/10
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >
            Start a project
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
