import { BsTwitterX } from "react-icons/bs";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import toast from "react-hot-toast";

const communities = [
  {
    icon: FaDiscord,
    title: "Discord",
    description:
      "Chat with developers, designers, and other members in real time.",
    button: "Join Discord",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    description: "Explore our projects, contribute code, and report issues.",
    button: "View GitHub",
  },
  {
    icon: BsTwitterX,
    title: "X",
    description: "Follow us for product updates, tips, and announcements.",
    button: "Follow us",
  },
];

export default function Community() {
  const handleCommunityClick = (title) => {
    toast.success(`${title} coming soon!`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <Link
            to="/"
            className="text-xl font-bold transition hover:opacity-80"
          >
            My<span className="text-cyan-300">Logo</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[130px]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Community
          </span>

          <h1 className="mt-5 text-5xl font-bold sm:text-6xl">
            Build together.
            <br />
            <span className="text-white/40">Grow together.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-white/40">
            Connect with people building amazing things. Ask questions, share
            your work, and learn from the community.
          </p>
        </div>
      </section>

      {/* Community Cards */}
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {communities.map((community) => {
            const Icon = community.icon;

            return (
              <div
                key={community.title}
                className="
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.04]
                  p-8
                  text-center
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-cyan-300/20
                  hover:bg-white/[0.07]
                  hover:shadow-2xl
                  hover:shadow-cyan-500/5
                "
              >
                {/* Icon */}
                <div
                  className="
                    mx-auto flex h-16 w-16
                    items-center justify-center
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    text-2xl text-cyan-300
                  "
                >
                  <Icon />
                </div>

                {/* Title */}
                <h2 className="mt-6 text-xl font-semibold">
                  {community.title}
                </h2>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-white/40">
                  {community.description}
                </p>

                {/* Button */}
                <button
                  onClick={() => handleCommunityClick(community.title)}
                  className="
                    mt-7 rounded-xl
                    border border-white/10
                    bg-white/5 cursor-pointer
                    px-5 py-3
                    text-sm font-medium
                    text-white
                    transition-all duration-300
                    hover:border-cyan-300/20
                    hover:bg-cyan-400/10
                    hover:text-cyan-300
                  "
                >
                  {community.button}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
