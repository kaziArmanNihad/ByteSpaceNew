import { Link } from "react-router";

const services = [
  {
    name: "Website",
    status: "Operational",
    uptime: "99.99%",
  },
  {
    name: "API",
    status: "Operational",
    uptime: "99.98%",
  },
  {
    name: "Dashboard",
    status: "Operational",
    uptime: "99.99%",
  },
  {
    name: "Authentication",
    status: "Operational",
    uptime: "99.97%",
  },
];

export default function Status() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <Link to="/" className="text-xl font-bold">
            My<span className="text-cyan-300">Logo</span>
          </Link>
        </div>
      </header>

      <main className="relative overflow-hidden px-6 py-24">
        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center">
            <span className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              System Status
            </span>

            <h1 className="mt-5 text-5xl font-bold sm:text-6xl">
              Everything is
              <br />
              <span className="text-emerald-400">operational.</span>
            </h1>

            <p className="mt-6 text-white/40">
              Current status of all our services and infrastructure.
            </p>
          </div>

          {/* Overall status */}
          <div
            className="
              mt-14 flex items-center gap-4
              rounded-2xl
              border border-emerald-400/20
              bg-emerald-400/5
              p-6
              backdrop-blur-xl
            "
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10">
              <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
            </div>

            <div>
              <h2 className="font-semibold">All systems operational</h2>

              <p className="mt-1 text-sm text-white/40">
                No known issues at this time.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">
            {services.map((service) => (
              <div
                key={service.name}
                className="
                  flex flex-col gap-3
                  border-b border-white/10
                  p-6 last:border-b-0
                  sm:flex-row sm:items-center
                  sm:justify-between
                "
              >
                <div className="flex items-center gap-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/30" />

                  <span className="text-sm font-medium">{service.name}</span>
                </div>

                <div className="flex items-center gap-6 text-sm">
                  <span className="text-white/30">{service.uptime} uptime</span>

                  <span className="text-emerald-400">{service.status}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Incident history */}
          <div className="mt-16">
            <h2 className="text-xl font-semibold">Incident history</h2>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
                ✓
              </div>

              <h3 className="mt-4 font-medium">No incidents reported</h3>

              <p className="mt-2 text-sm text-white/30">
                Everything has been running smoothly.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
