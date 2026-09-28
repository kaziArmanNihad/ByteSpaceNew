import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className="
          mx-auto max-w-6xl
          rounded-2xl
          border border-white/20
          bg-white/10
          px-5 py-3
          shadow-2xl shadow-black/20
          backdrop-blur-xl
          backdrop-saturate-150
        "
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="
              text-xl font-bold tracking-tight
              text-white
              transition duration-300
              hover:scale-105
            "
          >
            My<span className="text-cyan-300">Logo</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="
                    relative rounded-xl
                    px-4 py-2
                    text-sm font-medium
                    text-white/70
                    transition-all duration-300
                    hover:bg-white/10
                    hover:text-white
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            to="/login"
            className="
              hidden rounded-xl
              border border-cyan-300/30
              bg-cyan-400/10
              px-5 py-2.5
              text-sm font-semibold
              text-cyan-200
              shadow-lg shadow-cyan-500/10
              transition-all duration-300
              hover:bg-cyan-400/20
              hover:text-white
              md:block
            "
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              rounded-xl border border-white/10
              bg-white/5 p-2
              text-white
              transition hover:bg-white/10
              md:hidden
            "
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <div className="relative h-5 w-5">
              <span
                className={`
                  absolute left-0 top-1
                  h-0.5 w-5 rounded-full bg-white
                  transition-all duration-300
                  ${menuOpen ? "translate-y-2 rotate-45" : ""}
                `}
              />

              <span
                className={`
                  absolute left-0 top-2.5
                  h-0.5 w-5 rounded-full bg-white
                  transition-all duration-300
                  ${menuOpen ? "opacity-0" : ""}
                `}
              />

              <span
                className={`
                  absolute left-0 top-4
                  h-0.5 w-5 rounded-full bg-white
                  transition-all duration-300
                  ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}
                `}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            grid transition-all duration-300 ease-in-out md:hidden
            ${menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
          `}
        >
          <div className="overflow-hidden">
            <ul className="mt-4 space-y-1 border-t border-white/10 pt-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                      block rounded-xl
                      px-4 py-3
                      text-sm font-medium
                      text-white/70
                      transition
                      hover:bg-white/10
                      hover:text-white
                    "
                  >
                    {item.name}
                  </a>
                </li>
              ))}

              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="
                    block rounded-xl
                    border border-cyan-300/20
                    bg-cyan-400/10
                    px-4 py-3
                    text-center text-sm font-semibold
                    text-cyan-200
                    transition
                    hover:bg-cyan-400/20
                    hover:text-white
                  "
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
