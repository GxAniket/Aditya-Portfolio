
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { url: "/", title: "Home", gradient: "from-cyan-400 to-blue-500" },
  { url: "/about", title: "About", gradient: "from-purple-400 to-pink-500" },
  { url: "/projects", title: "Projects", gradient: "from-pink-400 to-orange-400" },
  { url: "/contact", title: "Contact", gradient: "from-blue-400 to-violet-500" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/65 backdrop-blur-2xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-purple-500" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">

        {/* LOGO */}
        <Link href="/" className="group relative text-xl font-bold sm:text-2xl">
          <span className="text-white">PRIYANSHU</span>{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            RIYAL
          </span>
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1.5 shadow-[0_0_25px_rgba(34,211,238,0.08)] md:flex">
          {links.map((link) => {
            const active = pathname === link.url;

            return (
              <Link
                key={link.url}
                href={link.url}
                className="group relative rounded-full px-5 py-2.5 text-sm font-medium lg:px-6 lg:text-base"
              >
                {active && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.09]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <span
                  className={`relative z-10 transition-all duration-300 ${
                    active
                      ? `bg-gradient-to-r ${link.gradient} bg-clip-text font-semibold text-transparent`
                      : "text-gray-300 group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent"
                  }`}
                >
                  {link.title}
                </span>

                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute bottom-1 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-gradient-to-r ${link.gradient}`}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-[7px] md:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
            className="h-[3px] w-8 rounded-full bg-cyan-400"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="h-[3px] w-8 rounded-full bg-purple-400"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -11 } : { rotate: 0, y: 0 }}
            className="h-[3px] w-8 rounded-full bg-pink-400"
          />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex min-h-[100dvh] flex-col items-center justify-center gap-5 overflow-hidden bg-black px-6 md:hidden"
          >
            <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/15 blur-[100px]" />
            <div className="pointer-events-none absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-purple-500/15 blur-[100px]" />

            {links.map((link, index) => {
              const active = pathname === link.url;

              return (
                <motion.div
                  key={link.url}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="relative z-10 w-full max-w-xs"
                >
                  <Link
                    href={link.url}
                    onClick={() => setOpen(false)}
                    className={`block rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-center text-2xl font-semibold transition-all ${
                      active
                        ? "border-white/30 bg-white/[0.08]"
                        : "hover:bg-white/[0.08]"
                    }`}
                  >
                    <span className={`bg-gradient-to-r ${link.gradient} bg-clip-text text-transparent`}>
                      {link.title}
                    </span>
                  </Link>
                </motion.div>
              );
            })}

            <p className="absolute bottom-8 text-xs uppercase tracking-[0.3em] text-gray-500">
              Priyanshu Riyal
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
