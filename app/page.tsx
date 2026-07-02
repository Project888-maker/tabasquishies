import { CartProvider } from "@/components/cart-context";
import Navbar from "@/components/navbar";
import CartPanel from "@/components/cart-panel";
import HeroSection from "@/components/hero-section";
import FeaturedSection from "@/components/featured-section";
import ShopSection from "@/components/shop-section";
import BrandSection from "@/components/brand-section";
import SocialProofSection from "@/components/social-proof-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <CartProvider>
      <Navbar />
      <CartPanel />

      <main>
        <HeroSection />
        <FeaturedSection />
        <ShopSection />
        <BrandSection />
        <SocialProofSection />
      </main>

      <Footer />
    </CartProvider>
  );
}
