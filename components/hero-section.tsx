"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => {
      if (textRef.current) {
        const y = window.scrollY * 0.35;
        textRef.current.style.transform = `translateY(${y}px)`;
        textRef.current.style.opacity = `${1 - window.scrollY / 600}`;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
      {/* ── HERO VIDEO ── */}
      <video src="https://v3b.fal.media/files/b/0aa0ad85/LXm5ikwiDQIidExIzPg8j_output.mp4" autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30" />

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-background/40" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div ref={textRef} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-xs tracking-ultra text-gold uppercase mb-6 opacity-80">
          Crafted for the obsessed
        </p>
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-cream leading-none tracking-tight text-balance mb-6">
          Squish the&nbsp;
          <em className="gold-shimmer not-italic">Ordinary</em>
        </h1>
        <p className="text-stone text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-10 text-balance">
          Premium collectible squishies — slow-rise, ultra-soft, endlessly satisfying.
          Each piece is a small world you can hold.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#shop"
            className="px-10 py-4 bg-gold text-background text-xs tracking-ultra uppercase font-medium hover:bg-gold/90 transition-all duration-300 hover:scale-[1.02]"
          >
            Shop Collection
          </a>
          <a
            href="#featured"
            className="px-10 py-4 border border-border text-stone text-xs tracking-ultra uppercase hover:text-cream hover:border-stone transition-all duration-300"
          >
            View Lookbook
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] tracking-ultra text-stone uppercase">Scroll</span>
        <div className="w-px h-10 bg-stone/40 animate-pulse" />
      </div>
    </section>
  );
}
