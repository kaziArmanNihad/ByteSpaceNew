import { services } from "../../utils/content";

function Services() {
  return (
    <section id="services" className="relative bg-slate-950 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              What we do
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              Services that move
              <br />
              <span className="text-white/40">your business forward.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/40">
            From strategy to launch, we help ambitious companies create digital
            experiences that actually make an impact.
          </p>
        </div>

        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {services.map((service) => (
            <div
              key={service.number}
              className="
                group grid gap-6 py-10
                transition
                md:grid-cols-[100px_1fr_1fr]
                md:items-center
              "
            >
              <span className="text-sm text-cyan-300/60">{service.number}</span>

              <h3 className="text-2xl font-semibold text-white transition group-hover:text-cyan-300">
                {service.title}
              </h3>

              <p className="max-w-md text-sm leading-6 text-white/40">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
