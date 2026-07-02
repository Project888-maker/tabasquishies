export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      {/* Newsletter */}
      <div className="py-16 px-6 text-center border-b border-border">
        <p className="text-[10px] tracking-ultra text-gold uppercase mb-3">Join the Drop List</p>
        <h3 className="font-serif text-3xl text-cream mb-6">
          Be first. Always.
        </h3>
        <form
          className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-surface border border-border text-cream text-sm px-4 py-3 placeholder:text-stone/50 focus:outline-none focus:border-gold/50 transition-colors"
          />
          <button
            type="submit"
            className="bg-gold text-background text-[10px] tracking-ultra uppercase px-6 py-3 hover:bg-gold/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="text-xs text-stone/50 mt-3">No spam. Just drops.</p>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <p className="font-serif text-lg text-cream mb-4">TABASQUISHE</p>
          <p className="text-xs text-stone leading-relaxed max-w-[180px]">
            Premium collectible squishies for the discerning soft-goods enthusiast.
          </p>
        </div>
        {[
          {
            title: "Shop",
            links: ["All Products", "New Arrivals", "Limited Drops", "Gift Cards"],
          },
          {
            title: "Company",
            links: ["About Us", "Sustainability", "Press Kit", "Affiliates"],
          },
          {
            title: "Support",
            links: ["Shipping Info", "Returns", "FAQ", "Contact Us"],
          },
        ].map((col) => (
          <div key={col.title}>
            <p className="text-[10px] tracking-ultra text-gold uppercase mb-4">{col.title}</p>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs text-stone hover:text-cream transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-stone/50">
          © {new Date().getFullYear()} Tabasquishe. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Cookies"].map((item) => (
            <a key={item} href="#" className="text-xs text-stone/50 hover:text-stone transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
