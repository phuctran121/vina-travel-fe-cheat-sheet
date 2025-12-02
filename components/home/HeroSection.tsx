// import Image from "next/image";
import SearchBar from "./SearchBar";
// import HeroImg from "@/public/images/aop-hero-section_poster.webp";
import HeroVideo from "./HeroVideo"; // Component vừa tạo

export default function HeroSection() {
  return (
    <section className="relative h-[820px] w-full flex items-center justify-center mb-16">
      {/* 1. Background Image Layer (LCP) */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src={HeroImg} // Ảnh chất lượng cao
          alt="Vịnh Hạ Long - Di sản thiên nhiên thế giới"
          fill
          priority // QUAN TRỌNG: Báo trình duyệt tải ngay -> Tăng điểm LCP
          className="object-cover brightness-[0.7]" // Làm tối ảnh để chữ nổi bật
          sizes="100vw"
        />
      </div> */}

      <div className="absolute inset-0 z-0">
        <HeroVideo
          posterSrc="/posters/esg-hero-section-poster.webp" // Ảnh tĩnh
          videoSrcMp4="/videos/esg_hero_section.mp4" // Video (nên để trong folder public/videos)
          // videoSrcWebm="/videos/hero-bg.webm" // Nên convert thêm file này
        />
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Khám phá vẻ đẹp Việt Nam
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          Hơn 500 tour du lịch hấp dẫn đang chờ đón bạn. Trải nghiệm trọn vẹn
          từng khoảnh khắc.
        </p>
      </div>

      {/* 3. Client Island: Search Bar */}
      <SearchBar />
    </section>
  );
}
