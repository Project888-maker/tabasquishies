export default function FeaturedSection() {
  return (
    <section id="featured" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Label */}
      <p className="text-[10px] tracking-ultra text-gold uppercase mb-12 text-center">
        Drop of the Season
      </p>

      {/* Large feature layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
        {/* Large hero image */}
        <div className="relative bg-surface aspect-[4/5] overflow-hidden group">
          <img src="https://v3b.fal.media/files/b/0aa0ad72/rGsag7E-w3JqoSpItTX_I_image.png" alt="product" className="w-full h-full object-cover product-card-img" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-[10px] tracking-ultra text-gold uppercase mb-2">Dark Collection</p>
            <h3 className="font-serif text-3xl text-cream mb-1">Obsidian Bear</h3>
            <p className="text-stone text-sm mb-4">Charcoal-scented slow-rise. A tactile obsession.</p>
            <span className="text-gold text-lg font-serif">$34.99</span>
          </div>
          <span className="absolute top-4 right-4 text-[9px] tracking-ultra uppercase bg-gold text-background px-2.5 py-1">
            Limited
          </span>
        </div>

        {/* Right column — two stacked */}
        <div className="flex flex-col gap-px bg-border">
          <div className="relative bg-surface aspect-[5/3] overflow-hidden group">
            <img src="https://v3b.fal.media/files/b/0aa0ad72/fL4owN3fVoOlMYubE5PiI_image.png" alt="product" className="w-full h-full object-cover product-card-img" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-[10px] tracking-ultra text-gold uppercase mb-1">Galaxy Drop</p>
              <h3 className="font-serif text-2xl text-cream">Midnight Galaxy Cat</h3>
              <span className="text-gold text-base font-serif">$39.99</span>
            </div>
            <span className="absolute top-4 right-4 text-[9px] tracking-ultra uppercase bg-surface-elevated text-gold border border-gold/40 px-2.5 py-1">
              New
            </span>
          </div>

          <div className="relative bg-surface aspect-[5/3] overflow-hidden group">
            <img src="HERMES_PRODUCT_IMAGE_URL" alt="product" className="w-full h-full object-cover product-card-img" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-[10px] tracking-ultra text-gold uppercase mb-1">Ethereal Edit</p>
              <h3 className="font-serif text-2xl text-cream">Aurora Jellyfish</h3>
              <span className="text-gold text-base font-serif">$44.99</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
