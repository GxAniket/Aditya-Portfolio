
"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
};

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    let particles: Particle[] = [];
    let animationId = 0;
    let width = 0;
    let height = 0;

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 130,
    };

    const colors = [
      "34, 211, 238",
      "168, 85, 247",
      "99, 102, 241",
    ];

    const createParticles = () => {
      const count = Math.min(
        110,
        Math.floor((width * height) / 11000)
      );

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.5 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1;
        }

        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1;
        }

        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius && distance > 0) {
          particle.x -= (dx / distance) * 0.35;
          particle.y -= (dy / distance) * 0.35;
        }

        // Glowing particles
        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(${particle.color}, 0.9)`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${particle.color}, 0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connecting lines
        for (let j = index + 1; j < particles.length; j++) {
          const other = particles[j];

          const dx = particle.x - other.x;
          const dy = particle.y - other.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 115) {
            const opacity = 1 - distance / 115;

            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);

            ctx.strokeStyle = `rgba(34, 211, 238, ${opacity * 0.22})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
