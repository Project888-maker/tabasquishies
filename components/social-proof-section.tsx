"use client";

const TESTIMONIALS = [
  {
    quote: "I bought three and I still can't stop thinking about the fourth one.",
    author: "Maya K.",
    handle: "@mayasquishes",
  },
  {
    quote: "The Obsidian Bear has lived on my desk for six months. It has never failed me.",
    author: "Theo R.",
    handle: "@squishtherapy",
  },
  {
    quote: "Finally, a squishy brand that understands that we are not children. We are adults with needs.",
    author: "Selene D.",
    handle: "@softobsessions",
  },
];

const MARQUEE_ITEMS = [
  "Slow Rise", "Velvet Touch", "Limited Drops", "Collector Quality",
  "Obsessively Soft", "Dark Aesthetics", "Premium Foam", "Handcrafted",
];

export default function SocialProofSection() {
  return (
    <section className="py-24 border-t border-border">
      {/* Marquee */}
      <div className="overflow-hidden border-y border-border py-4 mb-24">
        <div
          className="flex gap-8 whitespace-nowrap"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="text-[10px] tracking-ultra text-stone uppercase flex items-center gap-8">
              {item}
              <span className="text-gold/40 text-base">·</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
      `}</style>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-ultra text-gold uppercase mb-3">From the Community</p>
          <h2 className="font-serif text-4xl text-cream">They get it.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-card p-8 flex flex-col gap-4">
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="font-serif text-xl text-cream italic leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm text-foreground font-medium">{t.author}</p>
                <p className="text-xs text-stone">{t.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
