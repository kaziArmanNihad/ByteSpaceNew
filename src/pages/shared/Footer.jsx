import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed:", email);
  };

  const linkColumns = [
    [
      { name: "Featured Courses", href: "#" },
      { name: "Featured Categories", href: "#" },
      { name: "Business", href: "#" },
      { name: "IT", href: "#" },
      { name: "Design", href: "#" },
    ],
    [
      { name: "Development", href: "#" },
      { name: "Marketing", href: "#" },
      { name: "Photography", href: "#" },
      { name: "Finance", href: "#" },
      { name: "Sport", href: "#" },
    ],
    [
      { name: "Become a Creator", href: "#" },
      { name: "Affiliate Program", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Help", href: "#" },
      { name: "About", href: "#" },
    ],
  ];

  return (
    <footer className="w-full bg-white font-sans text-[#2D2D2D] py-16 px-6 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-6 flex flex-col justify-between pr-0 lg:pr-12">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-2 mb-6">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 8L28 16V24L12 32V8Z" fill="#C6FF00" />
                  <path
                    d="M8 12L24 20V28L8 36V12Z"
                    fill="#C6FF00"
                    fillOpacity="0.8"
                  />
                </svg>
                <span className="text-2xl font-black tracking-tight text-black">
                  ByteSpace
                </span>
              </div>

              {/* Description */}
              <p className="text-sm font-medium text-gray-700 mb-8 max-w-md leading-relaxed">
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>

              {/* Newsletter Form */}
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-3 mb-6"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full max-w-xs rounded-full border border-gray-300 px-6 py-3.5 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-black"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#D2FF00] px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-[#bce600] active:scale-95 shrink-0"
                >
                  Search
                </button>
              </form>

              {/* Terms Note */}
              <p className="text-[11px] leading-relaxed text-gray-500 max-w-md">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right Column: Links Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2">
            {linkColumns.map((col, idx) => (
              <div key={idx} className="flex flex-col space-y-4">
                {col.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-normal text-gray-700 transition hover:text-black"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Border Line & Copyright */}
        <div className="mt-20 border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>@ 2026 ByteSpace. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-black transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-black transition">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
