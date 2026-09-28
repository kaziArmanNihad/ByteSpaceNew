import React, { useState } from "react";
import footerLogo from "../../assets/logo.png";
import { Link } from "react-router";

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
        {/* Logo */}
        <div className="flex items-center gap-2 mb-2">
          <img src={footerLogo} alt="ByteSpace Logo" />
          <span className="text-2xl font-black tracking-tight text-black">
            ByteSpace
          </span>
        </div>
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-6 flex flex-col justify-between pr-0 lg:pr-12">
            <div>
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
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2 lg:pt-0">
            {linkColumns.map((col, idx) => (
              <div key={idx} className="flex flex-col space-y-4">
                {col.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-sm font-normal text-gray-700 transition hover:text-black"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Border Line & Copyright */}
        <div className="mt-20 border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>@ 2026 ByteSpace. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-black transition">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-black transition">
              Terms of Service
            </Link>
            <Link to="/" className="hover:text-black transition">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
