"use client";

import { useEffect, useState } from "react";
import { useCart } from "./cart-context";

export default function Navbar() {
  const { count, setOpen, open } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Left nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Shop", "Collections", "About"].map((item) => (
              <a
                key={item}
                href="#shop"
                className="text-xs tracking-ultra text-stone uppercase hover:text-gold transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Logo */}
          <a
            href="#"
            className="font-serif text-2xl tracking-widest text-cream absolute left-1/2 -translate-x-1/2 select-none"
          >
            TABASQUISHE
          </a>

          {/* Right */}
          <div className="flex items-center gap-6 ml-auto">
            <button
              onClick={() => setOpen(!open)}
              className="relative text-xs tracking-ultra text-stone uppercase hover:text-gold transition-colors duration-200 flex items-center gap-2"
              aria-label="Open cart"
            >
              <CartIcon />
              <span className="hidden sm:inline">Cart</span>
              {count > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gold text-background text-[9px] font-medium flex items-center justify-center font-sans">
                  {count}
                </span>
              )}
            </button>
            {/* Mobile menu */}
            <button
              className="md:hidden text-stone hover:text-cream transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg flex flex-col items-center justify-center gap-10">
          {["Shop", "Collections", "About"].map((item) => (
            <a
              key={item}
              href="#shop"
              className="font-serif text-4xl text-cream hover:text-gold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  );
}
