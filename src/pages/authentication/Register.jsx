import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import GridBG from "../shared/GridBG";
import logo from "../../assets/logo.png";
import registerElementOne from "../../assets/HomePageImages/RegisterSectionImage/registerElementOne.png";
import registerElementTwo from "../../assets/HomePageImages/RegisterSectionImage/registerElementTwo.png";
import registerElementThree from "../../assets/HomePageImages/RegisterSectionImage/registerElementThree.png";
import registerCardOne from "../../assets/HomePageImages/RegisterSectionImage/registerCardOne.png";
import registerCardTwo from "../../assets/HomePageImages/RegisterSectionImage/registerCardTwo.png";
import registerHappyStudents from "../../assets/HomePageImages/RegisterSectionImage/registerHappyStudents.png";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

const getFirebaseErrorMessage = (code) => {
  switch (code) {
    case "auth/email-already-in-use":
      return "An account with this email already exists.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/weak-password":
      return "Password is too weak. Use at least 6 characters.";
    case "auth/operation-not-allowed":
      return "Email/password sign-up is not enabled.";
    case "auth/network-request-failed":
      return "Network error. Check your connection and try again.";
    default:
      return "Something went wrong. Please try again.";
  }
};

export default function Register() {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async ({ fullName, email, password }) => {
    setAuthError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(userCredential.user, { displayName: fullName });
      toast.success("Registerd Successfull.");
      console.log("Registered user:", userCredential.user);
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Registerd Failed.");
      setAuthError(getFirebaseErrorMessage(error.code));
    }
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
              Sign up and come in
            </h1>
            <p className="mt-3 text-sm text-white/80 leading-relaxed max-w-md">
              The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost
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

        {/* RIGHT SECTION: Registration Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="bg-white text-gray-900 rounded-[32px] p-8 sm:p-12 shadow-2xl w-full max-w-md">
            {/* Header */}
            <div className="mb-8">
              <p className="text-xs font-semibold text-[#1052FE] mb-1">
                Create an Account
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Welcome to <br />
                ByteSpace
              </h2>
            </div>

            {/* Registration Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-5"
            >
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Jamie Davis"
                  {...register("fullName", {
                    required: "Full name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#1052FE] focus:bg-white"
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="designer@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#1052FE] focus:bg-white"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                        message:
                          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                      },
                    })}
                    className="w-full bg-gray-50/50 border border-gray-200 rounded-xl pl-4 pr-12 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-[#1052FE] focus:bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-400 hover:text-gray-700 transition cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Firebase error */}
              {authError && (
                <p className="text-xs text-red-500" role="alert">
                  {authError}
                </p>
              )}

              {/* Submit Button */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#CBFF00] hover:bg-[#b8e600] text-gray-900 font-bold px-8 py-3.5 rounded-full text-sm transition-all transform active:scale-95 shadow-md cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Creating..." : "Continue"}
                </button>
              </div>
            </form>

            {/* Login Redirect Footer */}
            <p className="text-center text-xs text-gray-500 mt-12 font-normal">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#1052FE] font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
