
"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth outer ring movement
  const ringX = useSpring(mouseX, {
    stiffness: 150,
    damping: 18,
    mass: 0.5,
  });

  const ringY = useSpring(mouseY, {
    stiffness: 150,
    damping: 18,
    mass: 0.5,
  });

  useEffect(() => {
    // Disable custom cursor on touch devices
    const pointerQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    if (!pointerQuery.matches) return;

    let clickTimer: ReturnType<typeof setTimeout>;

    // Track mouse movement
    const updateMouse = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setVisible(true);
    };

    // Hide cursor outside browser window
    const handleMouseLeave = () => {
      setVisible(false);
      setHovering(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    // Detect interactive elements
    const handleHover = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select"
      );

      setHovering(Boolean(interactive));
    };

    // Click animation
    const handleClick = () => {
      setClicking(true);

      clearTimeout(clickTimer);

      clickTimer = setTimeout(() => {
        setClicking(false);
      }, 250);
    };

    window.addEventListener("mousemove", updateMouse);
    window.addEventListener("mouseover", handleHover);
    window.addEventListener("mousedown", handleClick);

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      clearTimeout(clickTimer);

      window.removeEventListener("mousemove", updateMouse);
      window.removeEventListener("mouseover", handleHover);
      window.removeEventListener("mousedown", handleClick);

      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* OUTER CYBER RING */}
      <motion.div
        aria-hidden="true"
        className="fixed left-0 top-0 z-[9999] pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 52 : 34,
          height: hovering ? 52 : 34,
          opacity: visible ? 1 : 0,
          scale: clicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
      >
        <div className="relative h-full w-full rounded-full border border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]">
          <div className="absolute inset-1 rounded-full border border-purple-400/50" />

          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_10px_rgba(34,211,238,0.15)]" />
        </div>
      </motion.div>

      {/* INNER GLOWING DOT */}
      <motion.div
        aria-hidden="true"
        className="fixed left-0 top-0 z-[10000] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee] pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicking ? 2 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* CLICK PULSE */}
      <motion.div
        aria-hidden="true"
        className="fixed left-0 top-0 z-[9998] h-8 w-8 rounded-full border border-purple-400 pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: clicking ? 2 : 0,
          opacity: clicking ? 0.8 : 0,
        }}
        transition={{ duration: 0.25 }}
      />
    </>
  );
}
