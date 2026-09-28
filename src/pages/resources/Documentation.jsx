import toast from "react-hot-toast";
import { Link } from "react-router";

const sections = [
  {
    icon: "🚀",
    title: "Getting Started",
    description: "Everything you need to get up and running quickly.",
    links: ["Introduction", "Installation", "Quick Start", "Project Structure"],
  },
  {
    icon: "⚡",
    title: "Core Concepts",
    description: "Learn the fundamentals and build with confidence.",
    links: ["Components", "Authentication", "API Reference", "Configuration"],
  },
  {
    icon: "🔧",
    title: "Guides",
    description: "Practical guides for common development tasks.",
    links: ["Deployment", "Custom Domains", "Integrations", "Best Practices"],
  },
];

export default function Documentation() {
  const handleClick = () => {
    toast.success("This feature is coming soon!");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <Link to="/" className="text-xl font-bold">
            My<span className="text-cyan-300">Logo</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Documentation
          </span>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            Learn how to build
            <br />
            <span className="text-white/40">amazing things.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-white/40">
            Explore our documentation and learn everything you need to build,
            deploy, and scale your next project.
          </p>

          {/* Search */}
          <div className="mx-auto mt-10 max-w-xl">
            <div
              className="
                flex items-center gap-3
                rounded-2xl
                border border-white/10
                bg-white/5
                px-5 py-4
                backdrop-blur-xl
              "
            >
              <span className="text-white/30">⌕</span>

              <input
                type="text"
                placeholder="Search documentation..."
                className="
                  w-full bg-transparent
                  text-sm text-white
                  outline-none
                  placeholder:text-white/30
                "
              />

              <kbd className="hidden rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/30 sm:block">
                /
              </kbd>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation cards */}
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {sections.map((section) => (
            <div
              key={section.title}
              className="
                rounded-2xl
                border border-white/10
                bg-white/[0.04]
                p-7
                backdrop-blur-xl
                transition
                hover:-translate-y-1
                hover:bg-white/[0.06]
              "
            >
              <div className="text-3xl">{section.icon}</div>

              <h2 className="mt-6 text-xl font-semibold">{section.title}</h2>

              <p className="mt-2 text-sm leading-6 text-white/40">
                {section.description}
              </p>

              <ul className="mt-6 space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <button
                      key={link}
                      onClick={() => handleClick(link)}
                      className="flex w-full items-center justify-between cursor-pointer rounded-lg py-2 text-sm text-white/50 transition hover:text-cyan-300"
                    >
                      {link}
                      <span>→</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
