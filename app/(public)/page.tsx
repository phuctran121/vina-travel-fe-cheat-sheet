import FeaturedSection from "@/components/home/FeaturedSection";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen pb-20">
      <h1>{Date.now()}</h1>
      {/* Load ngay lập tức (Static HTML + CSS) */}
      <HeroSection />

      {/* Load Data bất đồng bộ + Lazy load JS Swiper */}
      <FeaturedSection />

      {/* (Optional) Thêm VideoSection ở đây nếu muốn */}
    </main>
  );
}
