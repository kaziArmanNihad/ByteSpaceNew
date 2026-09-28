import { useState } from "react";
import { plans } from "../../utils/content";

function Pricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-slate-950 px-6 py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            Pricing
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Simple pricing.
            <br />
            <span className="text-white/40">No hidden surprises.</span>
          </h2>

          <p className="mt-5 text-white/40">
            Choose the plan that works best for you. Upgrade or cancel anytime.
          </p>

          {/* Billing toggle */}
          <div
            className="
              mx-auto mt-8
              inline-flex
              rounded-xl
              border border-white/10
              bg-white/5
              p-1
              backdrop-blur-xl
            "
          >
            <button
              onClick={() => setBilling("monthly")}
              className={`
                rounded-lg px-5 py-2.5 text-sm font-medium
                transition-all duration-300 cursor-pointer
                ${
                  billing === "monthly"
                    ? "bg-white text-slate-950 shadow-lg"
                    : "text-white/50 hover:text-white"
                }
              `}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`
                rounded-lg px-5 py-2.5 text-sm font-medium
                transition-all duration-300 cursor-pointer
                ${
                  billing === "yearly"
                    ? "bg-white text-slate-950 shadow-lg"
                    : "text-white/50 hover:text-white"
                }
              `}
            >
              Yearly
              <span className="ml-2 text-xs text-cyan-400">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = billing === "monthly" ? plan.monthly : plan.yearly;

            return (
              <div
                key={plan.name}
                className={`
                  relative flex flex-col rounded-3xl p-8
                  transition-all duration-300
                  ${
                    plan.popular
                      ? `
                        border border-cyan-300/30
                        bg-gradient-to-b
                        from-cyan-400/[0.12]
                        to-white/[0.04]
                        shadow-2xl
                        shadow-cyan-500/10
                        lg:-translate-y-3
                      `
                      : `
                        border border-white/10
                        bg-white/[0.04]
                        hover:-translate-y-2
                        hover:bg-white/[0.06]
                      `
                  }
                  backdrop-blur-xl
                `}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div
                    className="
                      absolute -top-3 left-1/2
                      -translate-x-1/2
                      rounded-full
                      border border-cyan-300/20
                      bg-cyan-400/10
                      px-4 py-1.5
                      text-xs font-semibold
                      text-cyan-300
                      backdrop-blur-xl
                    "
                  >
                    Most Popular
                  </div>
                )}

                {/* Plan */}
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {plan.name}
                  </h3>

                  <p className="mt-2 min-h-12 text-sm leading-6 text-white/40">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-8 flex items-end gap-2">
                  <span className="text-5xl font-bold tracking-tight text-white">
                    ${price}
                  </span>

                  <span className="mb-2 text-sm text-white/30">/month</span>
                </div>

                {/* CTA */}
                <button
                  className={`
                    mt-8 w-full rounded-xl
                    px-5 py-3.5
                    cursor-pointer
                    text-sm font-semibold
                    transition-all duration-300
                    ${
                      plan.popular
                        ? `
                          bg-white
                          text-slate-950
                          shadow-xl shadow-white/10
                          hover:-translate-y-0.5
                          hover:shadow-2xl
                        `
                        : `
                          border border-white/10
                          bg-white/5
                          text-white
                          hover:bg-white/10
                          hover:border-white/20
                        `
                    }
                  `}
                >
                  Get started
                </button>

                {/* Divider */}
                <div className="my-8 h-px bg-white/10" />

                {/* Features */}
                <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-white/30">
                  What's included
                </p>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-white/60"
                    >
                      <span
                        className="
                          flex h-5 w-5 shrink-0
                          items-center justify-center
                          rounded-full
                          bg-cyan-400/10
                          text-xs text-cyan-300
                        "
                      >
                        ✓
                      </span>

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="mt-10 text-center text-xs text-white/30">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}

export default Pricing;
