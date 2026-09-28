import { Link } from "react-router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Replace this with your API request
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form Data:", data);

      toast.success("Message sent successfully!");

      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32">
        <div className="absolute left-1/4 top-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute right-1/4 top-20 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[140px]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Contact
          </span>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            Let's build
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              something great.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-white/40">
            Have a project in mind, a question, or just want to say hello? We'd
            love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Info */}
          <div className="space-y-5">
            <div>
              <span className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                Get in touch
              </span>

              <h2 className="mt-4 text-3xl font-bold">
                We'd love to{" "}
                <span className="text-white/40">hear from you.</span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/40">
                Tell us about your idea and we'll get back to you as soon as
                possible.
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:border-cyan-300/20 hover:bg-white/[0.07]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-300">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-xs text-white/30">Email</p>
                <p className="mt-1 text-sm">hello@example.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:border-cyan-300/20 hover:bg-white/[0.07]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-300">
                <FaPhone />
              </div>

              <div>
                <p className="text-xs text-white/30">Phone</p>
                <p className="mt-1 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:border-cyan-300/20 hover:bg-white/[0.07]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-300">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-xs text-white/30">Location</p>
                <p className="mt-1 text-sm">New York, United States</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
            <div className="mb-7">
              <h2 className="text-2xl font-semibold">Send us a message</h2>

              <p className="mt-2 text-sm text-white/40">
                Fill out the form and we'll get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-white/60">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-cyan-300/40 focus:bg-white/[0.07]"
                  />

                  {errors.name && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/60">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Please enter a valid email",
                      },
                    })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-cyan-300/40 focus:bg-white/[0.07]"
                  />

                  {errors.email && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="How can we help?"
                  {...register("subject", {
                    required: "Subject is required",
                  })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-cyan-300/40 focus:bg-white/[0.07]"
                />

                {errors.subject && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Tell us about your project..."
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-cyan-300/40 focus:bg-white/[0.07]"
                />

                {errors.message && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="text-xs" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-14 text-center backdrop-blur-xl">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-500/10 blur-[100px]" />

          <div className="relative">
            <h2 className="text-2xl font-bold sm:text-3xl">Prefer email?</h2>

            <p className="mt-3 text-sm text-white/40">
              You can always reach us directly at
            </p>

            <a
              href="mailto:hello@example.com"
              className="mt-3 inline-block text-cyan-300 transition hover:text-white"
            >
              hello@example.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
