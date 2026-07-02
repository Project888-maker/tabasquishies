"use client";

import { useState } from "react";
import { PRODUCTS, CATEGORIES } from "@/lib/products";
import ProductCard from "./product-card";

export default function ShopSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.tag === activeCategory);

  return (
    <section id="shop" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div>
          <p className="text-[10px] tracking-ultra text-gold uppercase mb-3">The Collection</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-cream leading-none">
            Choose Your<br />
            <em className="text-stone italic">Obsession</em>
          </h2>
        </div>
        <p className="text-stone text-sm max-w-xs leading-relaxed text-balance">
          Each squishy is slow-tested, texture-graded, and drop-approved. No bad squishes.
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-[10px] tracking-ultra uppercase px-4 py-2 border transition-all duration-200 ${
              activeCategory === cat
                ? "border-gold text-gold bg-gold/10"
                : "border-border text-stone hover:border-stone hover:text-cream"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {filtered.map((product) => (
          <div key={product.id} className="bg-background">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="flex justify-center mt-14">
        <button className="text-xs tracking-ultra text-stone uppercase border border-border px-10 py-4 hover:border-gold hover:text-gold transition-all duration-300">
          Load More
        </button>
      </div>
    </section>
  );
}
