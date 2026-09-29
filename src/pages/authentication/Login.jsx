import { useState } from "react";
import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import GridBG from "../shared/GridBG";
import logo from "../../assets/logo.png";
import registerElementOne from "../../assets/HomePageImages/RegisterSectionImage/registerElementOne.png";
import registerElementTwo from "../../assets/HomePageImages/RegisterSectionImage/registerElementTwo.png";
import registerElementThree from "../../assets/HomePageImages/RegisterSectionImage/registerElementThree.png";
import registerCardOne from "../../assets/HomePageImages/RegisterSectionImage/registerCardOne.png";
import registerCardTwo from "../../assets/HomePageImages/RegisterSectionImage/registerCardTwo.png";
import registerHappyStudents from "../../assets/HomePageImages/RegisterSectionImage/registerHappyStudents.png";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="relative min-h-screen bg-[#1052FE] text-white flex items-center justify-center font-sans overflow-hidden py-12 px-4 sm:px-6 lg:px-8 select-none">
      {/* Background Grid Pattern */}
      <GridBG gridSize={60} opacity={0.15} />

      {/* Main Container */}
      <div className="relative z-20 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT SECTION: Branding & Visual Stack */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 w-fit">
            <img src={logo} alt="ByteSpace Logo" />
          </Link>

          {/* Heading & Subtitle */}
          <div>
            <h1 className="text-3xl sm:text-xl font-extrabold tracking-tight text-white">
              Sign in with ease
            </h1>
            <p className="mt-3 text-sm text-white/80 leading-relaxed max-w-md">
              Experience a seamless and efficient sign-in process that grants
              you instant access to a world of knowledge.
            </p>
          </div>

          {/* Visual Showcase Stack with 3D Shapes & Floating Cards */}
          <div className="relative w-full max-w-md h-[340px] pt-4">
            <div className="absolute top-0 left-10 z-20 w-28 h-20 pointer-events-none filter drop-shadow-xl transform">
              <img src={registerElementOne} alt="Lime Ring" />
            </div>

            <div className="absolute bottom-0 left-4 z-20 w-32 h-32 pointer-events-none">
              <img src={registerElementTwo} alt="Lime Pyramid" />
            </div>

            <div className="absolute -bottom-10 right-20 z-30 w-24 h-36 pointer-events-none">
              <img src={registerElementThree} alt="White Coil" />
            </div>

            {/* Background Layer Card */}
            <div className="absolute top-5 left-0 w-72 rounded-3xl p-3">
              <img
                src={registerCardTwo}
                alt="Course preview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Foreground Main Course Card */}
            <div className="absolute top-0 left-20 z-10 w-72 p-3.5">
              <img
                src={registerCardOne}
                alt="Course preview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Card: Happy Students */}
            <div className="absolute -bottom-6 right-20 z-20 w-40">
              <img src={registerHappyStudents} alt="Happy Students" />
            </div>
          </div>
        </div>

        {/* RIGHT SECTION: Login Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="bg-white text-gray-900 rounded-[32px] p-8 sm:p-12 shadow-2xl w-full max-w-md">
            {/* Header */}
            <div className="mb-8">
              <p className="text-xs font-semibold text-[#1052FE] mb-1">
                Sign In
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Welcome Back
              </h2>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="designer@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#1052FE] focus:bg-white"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="********"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#1052FE] focus:bg-white"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-[#CBFF00] hover:bg-[#b8e600] text-gray-900 font-bold px-8 py-3.5 rounded-full text-sm transition-all transform active:scale-95 shadow-md cursor-pointer"
                >
                  Sign In
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="relative my-8 flex items-center justify-center">
              <div className="w-full border-t border-gray-200"></div>
              <span className="absolute bg-white px-3 text-xs text-gray-400 font-medium">
                or
              </span>
            </div>

            {/* Social Login Buttons */}
            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-800 hover:bg-gray-50 transition cursor-pointer"
                aria-label="Sign in with Facebook"
              >
                <FaFacebookF className="w-5 h-5 text-gray-900" />
              </button>
              <button
                type="button"
                className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition cursor-pointer"
                aria-label="Sign in with Google"
              >
                <FcGoogle className="w-6 h-6" />
              </button>
            </div>

            {/* Register Redirect Footer */}
            <p className="text-center text-xs text-gray-500 mt-10 font-normal">
              New user?{" "}
              <Link
                to="/register"
                className="text-[#1052FE] font-semibold hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
