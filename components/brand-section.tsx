export default function BrandSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-[10px] tracking-ultra text-gold uppercase mb-6">Our Obsession</p>
          <h2 className="font-serif text-5xl sm:text-6xl text-cream leading-none mb-8 text-balance">
            Squishies for People Who
            <em className="text-stone italic"> Actually Care</em>
          </h2>
          <div className="space-y-4 text-stone text-sm leading-relaxed max-w-md">
            <p>
              Tabasquishe was born from a single question: why do premium collectibles have to look serious? 
              We decided they don&apos;t.
            </p>
            <p>
              Every piece in our collection is crafted with slow-rise polyurethane foam, hand-finished textures, 
              and finishes that last years, not weeks.
            </p>
            <p>
              We drop in small batches. Some styles never return. That&apos;s the point.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-border">
            {[
              { val: "08", label: "Collections" },
              { val: "50K+", label: "Collectors" },
              { val: "100%", label: "Slow Rise" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl text-gold">{stat.val}</p>
                <p className="text-[10px] tracking-ultra text-stone uppercase mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 gap-px bg-border">
          <div className="aspect-[3/4] overflow-hidden bg-surface">
            <img src="HERMES_PRODUCT_IMAGE_URL" alt="product" className="w-full h-full object-cover product-card-img" />
          </div>
          <div className="flex flex-col gap-px">
            <div className="aspect-square overflow-hidden bg-surface">
              <img src="HERMES_PRODUCT_IMAGE_URL" alt="product" className="w-full h-full object-cover product-card-img" />
            </div>
            <div className="flex-1 bg-surface-elevated flex items-center justify-center p-6">
              <p className="font-serif text-2xl text-cream italic text-center leading-tight">
                &ldquo;A tactile obsession.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
