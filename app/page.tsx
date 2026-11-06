
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

const roles = [
  "3rd Year B.Tech CSE Student",
  "Aspiring AI Engineer",
  "Python Developer",
  "Learning Machine Learning",
  "Exploring DSA in Java",
];

function Icon({
  name,
  size = 22,
}: {
  name: string;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "github") {
    return (
      <svg {...common} fill="currentColor" stroke="none">
        <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.51-.29-5.15-1.26-5.15-5.6-0-1.24.44-2.25 1.16-3.05-.12-.29-.5-1.45.11-3.02 0 0 .95-.3 3.08 1.16a10.7 10.7 0 0 1 5.6 0c2.14-1.46 3.08-1.16 3.08-1.16.61 1.57.23 2.73.11 3.02.72.8 1.16 1.81 1.16 3.05 0 4.35-2.64 5.3-5.16 5.59.4.35.76 1.04.76 2.1v3.1c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg {...common}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }

  if (name === "code") {
    return (
      <svg {...common}>
        <path d="m8 17-5-5 5-5M16 7l5 5-5 5M14 4l-4 16" />
      </svg>
    );
  }

  if (name === "brain") {
    return (
      <svg {...common}>
        <path d="M12 18V5a3 3 0 0 0-5.8-1.1A4 4 0 0 0 4 11a4 4 0 0 0 2 7.5A3 3 0 0 0 12 18ZM12 18V5a3 3 0 0 1 5.8-1.1A4 4 0 0 1 20 11a4 4 0 0 1-2 7.5A3 3 0 0 1 12 18Z" />
      </svg>
    );
  }

  if (name === "download") {
    return (
      <svg {...common}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="m7 10 5 5 5-5M12 15V3" />
      </svg>
    );
  }

  if (name === "send") {
    return (
      <svg {...common} fill="currentColor" stroke="none">
        <path d="M22 2 2 10l8 4 4 8 8-20Z" />
      </svg>
    );
  }

  return null;
}

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((previous) => (previous + 1) % roles.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-black text-white lg:flex lg:h-[100svh] lg:min-h-0 lg:flex-col lg:overflow-hidden">

      {/* ANIMATED PARTICLE BACKGROUND */}
      <ParticleBackground />

      {/* NAVBAR */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">

          <Link href="/" className="group text-lg font-bold sm:text-2xl">
            PRIYANSHU <span className="text-cyan-400">RIYAL</span>
            <span className="mt-1 block h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
          </Link>

          <div className="flex items-center gap-4 sm:gap-7">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-medium text-gray-300 transition hover:text-cyan-400 sm:text-base"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* HOME HERO */}
      <section className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl items-center gap-8 px-5 pb-12 pt-28 sm:gap-10 sm:px-8 sm:pt-32 md:grid-cols-2 md:gap-10 lg:min-h-0 lg:flex-1 lg:gap-12 lg:px-10 lg:pb-5 lg:pt-[110px]">

        {/* PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative h-[230px] w-[205px] overflow-hidden rounded-[45%_55%_60%_40%/40%_45%_55%_60%] border-2 border-cyan-400 bg-gray-900 shadow-[0_0_30px_rgba(34,211,238,0.3)] sm:h-[300px] sm:w-[265px] lg:h-[385px] lg:w-[340px]">
              <img
                src="/profile.jpeg"
                alt="Priyanshu Riyal"
                className="h-full w-full object-cover"
              />
            </div>

            {/* FLOATING CODE ICON */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-3 top-8 rounded-xl border border-cyan-400/30 bg-gray-950 p-3 text-cyan-400 sm:-right-5 sm:top-10 sm:p-4"
            >
              <Icon name="code" size={26} />
            </motion.div>

            {/* FLOATING BRAIN ICON */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-3 -left-3 rounded-xl border border-purple-400/30 bg-gray-950 p-3 text-purple-400 sm:-bottom-4 sm:-left-5 sm:p-4"
            >
              <Icon name="brain" size={26} />
            </motion.div>

          </div>
        </motion.div>

        {/* INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="min-w-0 text-center md:text-left"
        >

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-[48px]">
            Hi, I'm Priyanshu
            <br />
            <span className="text-cyan-400">Riyal</span>
          </h1>

          <div className="mt-3 min-h-9 text-xl font-bold text-purple-400 sm:mt-5 sm:min-h-12 sm:text-2xl lg:text-[30px]">
            {roles[roleIndex]}
            <span className="animate-pulse"> |</span>
          </div>

          <p className="mt-3 max-w-xl text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base sm:leading-8 lg:text-[17px] lg:leading-7">
            I am a third-year B.Tech Computer Science student and aspiring AI
            Engineer passionate about Artificial Intelligence, Python, and
            Machine Learning. I enjoy exploring new technologies, improving
            my problem-solving skills through Java and Data Structures and
            Algorithms, and building practical projects using AI and modern
            development tools.
          </p>

          {/* SOCIAL LINKS */}
          <div className="mt-5 flex justify-center gap-3 sm:mt-8 sm:gap-4 md:justify-start">

            <a
              href="https://github.com/GxPriyanshu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 sm:h-12 sm:w-12"
            >
              <Icon name="github" />
            </a>

            <a
              href="https://www.linkedin.com/in/priyanshu-riyal/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 sm:h-12 sm:w-12"
            >
              <Icon name="linkedin" />
            </a>

            <a
              href="https://leetcode.com/u/priyanshuriyal961/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 sm:h-12 sm:w-12"
            >
              <Icon name="code" />
            </a>

          </div>

          {/* HERO BUTTONS */}
          <div className="mt-5 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4 md:justify-start">

            <a
              href="/priyanshu.pdf"
              download
              className="flex items-center gap-2 rounded-full border border-gray-500 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 sm:px-6 sm:py-3 sm:text-base"
            >
              Download Resume
              <Icon name="download" size={18} />
            </a>

            <a
              href="mailto:priyanshuriyal961@gmail.com"
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] sm:px-6 sm:py-3 sm:text-base"
            >
              Contact Me
              <Icon name="send" size={18} />
            </a>

          </div>

        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 shrink-0 border-t border-gray-800 px-5 py-4 text-center text-xs text-gray-500 sm:px-6 sm:py-5 sm:text-sm">
        © 2026 Priyanshu Riyal. All rights reserved.
      </footer>

    </main>
  );
}
