// import FeaturedSection from "@/components/home/FeaturedSection";
import HeroSection from "@/components/home/HeroSection";
import TestPSection from "@/components/home/TestPSection";
import IntroductionSection from "@/components/home/IntroductionSection";
import VideoSection from "@/components/home/VideoSection";
import HomeSliderSection from "@/components/home/HomeSliderSection";

// 1. Force Static: Bắt buộc trang này là tĩnh
export const dynamic = "force-static";

// 2. Revalidate: Dữ liệu server coi như không đổi trong 1 ngày (86400s)
// Để Next.js tự tin cache ở client lâu hơn
// export const revalidate = 86400;

export default function Home() {
  return (
    <main className="min-h-screen pb-20">
      <h1>{Date.now()}</h1>
      {/* Load ngay lập tức (Static HTML + CSS) */}
      <HeroSection />

      <HomeSliderSection />

      <TestPSection />

      <IntroductionSection />

      <VideoSection />

      {/* Load Data bất đồng bộ + Lazy load JS Swiper */}
      {/* <FeaturedSection /> */}

      {/* (Optional) Thêm VideoSection ở đây nếu muốn */}
    </main>
  );
}
