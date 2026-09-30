import { ShoppingBag } from "lucide-react";
import { Link } from "react-router";
import GridBG from "./GridBG";
import logo from "../../assets/logo.png";
import toast from "react-hot-toast";

function Navbar() {
  return (
    <header className="relative z-30 w-full bg-[#1052FE] overflow-hidden border-b border-white/10">
      {/* Full-width Grid Pattern Background */}
      <GridBG gridSizeX={60} gridSizeY={90} opacity={0.15} />

      {/* Centered Navbar Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-white">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="ByteSpace Logo" />
          <span className="text-2xl font-extrabold tracking-tight text-white px-2 py-0.5 rounded-lg bg-[#8B31FF]/20">
            ByteSpace
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-semibold text-white/90">
          <Link to="/" className="hover:text-white/50 transition-colors">
            Home
          </Link>
          <Link to="/courses" className="hover:text-white/50 transition-colors">
            Courses
          </Link>
          <Link
            to="/creatorProfile"
            className="hover:text-white/50 transition-colors"
          >
            Creators
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-6 text-sm font-semibold">
          <Link
            to="/login"
            className="hover:text-white/50 transition-colors hidden sm:block"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="hover:text-white/50 transition-colors"
          >
            Join Us
          </Link>
          <Link
            to="/"
            onClick={() => toast.error("Not Available!")}
            className="p-2 hover:bg-white/10 rounded-full transition-colors relative"
            aria-label="Shopping Bag"
          >
            <ShoppingBag className="w-5 h-5 text-white hover:text-white" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
