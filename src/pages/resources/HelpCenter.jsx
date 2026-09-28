import { Link, Links } from "react-router";

const faqs = [
  {
    question: "How do I create an account?",
    answer: "Click the Get Started button and follow the registration process.",
  },
  {
    question: "How can I change my plan?",
    answer:
      "You can upgrade or downgrade your plan from your account settings.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. You can cancel your subscription whenever you want.",
  },
  {
    question: "How do I contact support?",
    answer: "You can reach our support team through the contact page.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Refund policies depend on your plan and purchase date.",
  },
  {
    question: "Where can I find my invoices?",
    answer: "Invoices are available in your account billing section.",
  },
];

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <Link to="/" className="text-xl font-bold">
            My<span className="text-cyan-300">Logo</span>
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Help Center
          </span>

          <h1 className="mt-5 text-5xl font-bold sm:text-6xl">
            How can we
            <br />
            <span className="text-white/40">help you?</span>
          </h1>

          <p className="mt-6 text-white/40">
            Find answers, guides, and helpful resources.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-xl font-semibold">
            Frequently asked questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="
                  group rounded-2xl
                  border border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                "
              >
                <summary
                  className="
                    flex cursor-pointer
                    list-none items-center justify-between
                    p-6 text-sm font-medium
                  "
                >
                  {faq.question}

                  <span className="text-white/30 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="px-6 pb-6 text-sm leading-6 text-white/40">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div
            className="
              mt-10 rounded-2xl
              border border-cyan-300/10
              bg-cyan-400/5
              p-8 text-center
            "
          >
            <h3 className="font-semibold">Still need help?</h3>

            <p className="mt-2 text-sm text-white/40">
              Our support team is ready to help.
            </p>

            <Link to="/contact">
              <button
                className="
                  mt-5 rounded-xl
                  bg-white px-5 py-3
                  text-sm font-semibold text-slate-950
                transition hover:bg-cyan-100
              "
              >
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
