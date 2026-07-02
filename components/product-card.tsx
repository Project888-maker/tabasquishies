"use client";

import { useState } from "react";
import { useCart } from "./cart-context";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const isSoldOut = product.badge === "Sold Out";

  const handleAdd = () => {
    if (isSoldOut) return;
    add(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <article className="product-card group relative flex flex-col bg-card border border-border hover:border-gold/30 transition-all duration-500">
      {/* Badge */}
      {product.badge && (
        <span
          className={`absolute top-3 left-3 z-10 text-[9px] tracking-ultra uppercase px-2.5 py-1 ${
            product.badge === "Limited"
              ? "bg-gold text-background"
              : product.badge === "New"
              ? "bg-surface-elevated text-gold border border-gold/40"
              : product.badge === "Sold Out"
              ? "bg-stone/20 text-stone border border-stone/20"
              : "bg-surface-elevated text-cream border border-border"
          }`}
        >
          {product.badge}
        </span>
      )}

      {/* Image */}
      <div className="relative w-full aspect-square overflow-hidden bg-surface">
        <img src="https://v3b.fal.media/files/b/0aa0ad72/OEaOLrjELEmtL04gsnozQ_image.png" alt="product" className="w-full h-full object-cover" />
        {/* Quick-add overlay */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <button
            onClick={handleAdd}
            disabled={isSoldOut}
            className={`text-[10px] tracking-ultra uppercase px-8 py-3 transition-all duration-200 ${
              isSoldOut
                ? "bg-surface text-stone cursor-not-allowed"
                : added
                ? "bg-gold/80 text-background"
                : "bg-gold text-background hover:bg-gold/90"
            }`}
          >
            {isSoldOut ? "Sold Out" : added ? "Added!" : "Add to Bag"}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <p className="text-[10px] tracking-ultra text-stone uppercase">{product.tag}</p>
        <h3 className="font-serif text-lg text-cream leading-tight">{product.name}</h3>
        <p className="text-xs text-stone leading-relaxed flex-1">{product.description}</p>

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
          <span className="text-gold font-medium text-sm">${product.price.toFixed(2)}</span>
          <button
            onClick={handleAdd}
            disabled={isSoldOut}
            className={`text-[10px] tracking-ultra uppercase transition-colors duration-200 ${
              isSoldOut
                ? "text-stone/40 cursor-not-allowed"
                : added
                ? "text-gold"
                : "text-stone hover:text-gold"
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            {isSoldOut ? "Unavailable" : added ? "✓ Added" : "+ Add"}
          </button>
        </div>
      </div>
    </article>
  );
}
