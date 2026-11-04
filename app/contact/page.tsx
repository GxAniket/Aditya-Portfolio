
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Hyperspeed from "@/components/Hyperspeed";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.23-1.65-1.23-1.65-1.01-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.75 2.17 3.04 1.54.1-.73.39-1.23.7-1.52-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.77 1.14 2.99 0 4.29-2.62 5.24-5.11 5.51.4.35.75 1.02.75 2.06v3.04c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.5H4.96V9h2.97v9.5ZM6.45 7.7a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.05 10.8h-2.96v-4.62c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.7H9.26V9h2.84v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.97 3.56 4.53v5.21Z" />
    </svg>
  );
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !email.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      setStatus("error");
      return;
    }

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const mailto =
      `mailto:Habibigamerz9@gmail.com?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("success");
  };

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400/60 focus:bg-white/[0.06]";

  return (
    <main className="relative min-h-[100svh] overflow-x-hidden bg-black px-4 pb-4 pt-28 text-white sm:px-6 sm:pt-28 lg:flex lg:min-h-[100svh] lg:flex-col lg:justify-center lg:px-8 lg:pb-5 lg:pt-[105px]">

      {/* Hyperspeed Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <Hyperspeed
          curve="winding"
          curvature={1}
          speed={1}
          boost={3}
          fov={90}
          boostFov={130}
          lanes={3}
          roadWidth={10}
          medianWidth={2}
          density={40}
          trailLength={1}
          lightSize={1}
          poles={20}
          dust={100}
          glow={0.6}
          reflections={0.5}
          roadOpacity={0.1}
          steer={0.35}
          tailColors={["#d856bf", "#6750a2", "#c247ac"]}
          headColors={["#03b3c3", "#0e5ea5", "#324555"]}
          poleColors={["#03b3c3"]}
          interactive
          roadColor="#08080a"
          lineColor="#25252d"
        />
      </div>

      {/* Main Content */}
      <section className="relative z-10 mx-auto w-full max-w-[740px]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center"
        >
          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Get In Touch
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[32px]">
            Let&apos;s Work{" "}
            <span className="text-cyan-400">Together</span>
          </h1>

          <p className="mx-auto mt-2 max-w-lg text-sm text-gray-400">
            Have a project in mind or just want to connect? Feel free to send
            me a message.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid gap-5 rounded-2xl border border-white/10 bg-black/80 p-4 shadow-[0_0_45px_rgba(0,200,220,0.08)] backdrop-blur-xl sm:p-5 md:grid-cols-2 lg:gap-6 lg:p-5"
        >

          {/* Contact Form */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-2">

              <div>
                <label className="mb-1 block text-xs text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-xs text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-xs text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="What is this about?"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-xs text-gray-300">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  rows={2}
                  className={`${inputClass} min-h-[75px] resize-none`}
                  required
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-xs text-red-400">
                  <AlertCircle size={14} />
                  Please fill in all fields correctly.
                </div>
              )}

              {status === "success" && (
                <div className="flex items-center gap-2 text-xs text-green-400">
                  <CheckCircle2 size={14} />
                  Your email application should open now.
                </div>
              )}

              <div className="flex justify-center pt-1">
                <button
                  type="submit"
                  className="group flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]"
                >
                  Send Message
                  <Send
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>

            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col">

            <h2 className="mb-3 text-lg font-semibold">
              Contact Information
            </h2>

            <p className="mb-4 text-sm leading-6 text-gray-400">
              I&apos;m always open to discussing new projects, creative ideas,
              and opportunities.
            </p>

            <div className="space-y-2.5">

              {/* Email */}
              <a
                href="mailto:Habibigamerz9@gmail.com"
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
              >
                <div className="rounded-lg bg-cyan-400/10 p-2.5 text-cyan-400">
                  <Mail size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="break-all text-sm text-gray-200">
                    Habibigamerz9@gmail.com
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="text-gray-500 transition group-hover:text-cyan-400"
                />
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <div className="rounded-lg bg-purple-400/10 p-2.5 text-purple-400">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-sm text-gray-200">
                    Kolkata, India
                  </p>
                </div>
              </div>

              {/* GitHub */}
              <a
                href="https://github.com/Adi8420"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
              >
                <div className="rounded-lg bg-white/10 p-2.5 text-white">
                  <GithubIcon />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-500">GitHub</p>
                  <p className="text-sm text-gray-200">
                    github.com/Adi8420
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="text-gray-500 transition group-hover:text-cyan-400"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aditya-sharma-a11581326/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
              >
                <div className="rounded-lg bg-blue-400/10 p-2.5 text-blue-400">
                  <LinkedinIcon />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-500">LinkedIn</p>
                  <p className="text-sm text-gray-200">
                    View LinkedIn Profile
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="text-gray-500 transition group-hover:text-cyan-400"
                />
              </a>

            </div>

            <div className="mt-auto pt-3">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
              <p className="pt-3 text-center text-xs text-gray-500">
                Looking forward to hearing from you.
              </p>
            </div>

          </div>
        </motion.div>

        {/* Footer */}
        <p className="mt-3 text-center text-[11px] text-gray-500">
          © 2026 Aditya Mullick. All rights reserved.
        </p>

      </section>
    </main>
  );
}
