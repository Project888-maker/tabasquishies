"use client";

import { useCart } from "./cart-context";

export default function CartPanel() {
  const { items, open, setOpen, remove, change, total, count } = useCart();

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        className="cart-panel fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-surface border-l border-border flex flex-col"
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div>
            <h2 className="font-serif text-xl text-cream tracking-widest">YOUR BAG</h2>
            <p className="text-xs text-stone mt-0.5">{count} {count === 1 ? "item" : "items"}</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-stone hover:text-cream transition-colors"
            aria-label="Close cart"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto py-4 px-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-border">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              <p className="text-stone text-sm">Your bag is empty</p>
              <button
                onClick={() => setOpen(false)}
                className="text-xs tracking-ultra text-gold uppercase border border-gold/30 px-6 py-2 hover:bg-gold/10 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 py-4 border-b border-border/50">
                {/* Image placeholder */}
                <div className="w-20 h-20 bg-surface-elevated border border-border overflow-hidden flex-shrink-0">
                  <img src="https://v3b.fal.media/files/b/0aa0ad72/rRVZvU0_xKaaPQTWd2_Wk_image.png" alt="product" className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs text-stone tracking-ultra uppercase mb-1">{item.tag}</p>
                  <h3 className="text-cream text-sm font-medium truncate mb-2">{item.name}</h3>
                  <p className="text-gold text-sm font-medium">${item.price.toFixed(2)}</p>
                </div>

                <div className="flex flex-col items-end justify-between flex-shrink-0">
                  <button
                    onClick={() => remove(item.id)}
                    className="text-stone hover:text-cream transition-colors"
                    aria-label="Remove item"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>

                  {/* Qty */}
                  <div className="flex items-center gap-2 border border-border">
                    <button
                      onClick={() => change(item.id, item.qty - 1)}
                      className="w-7 h-7 flex items-center justify-center text-stone hover:text-cream transition-colors text-sm"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="text-cream text-sm w-4 text-center">{item.qty}</span>
                    <button
                      onClick={() => change(item.id, item.qty + 1)}
                      className="w-7 h-7 flex items-center justify-center text-stone hover:text-cream transition-colors text-sm"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs tracking-ultra text-stone uppercase">Subtotal</span>
              <span className="text-cream font-medium">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-stone">Shipping &amp; taxes calculated at checkout</p>
            <button className="w-full py-4 bg-gold text-background text-xs tracking-ultra uppercase font-medium hover:bg-gold/90 transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setOpen(false)}
              className="w-full py-3 border border-border text-stone text-xs tracking-ultra uppercase hover:text-cream hover:border-stone transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
