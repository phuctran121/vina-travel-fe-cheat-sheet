import PosterImg from "@/public/images/aop-tech-structure-poster.webp";
export default function VideoSection() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Video Background */}
      <video
        src="/videos/esg_hero_section.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline // Bắt buộc cho iOS để không tự full màn hình
        poster={PosterImg.src} // QUAN TRỌNG: Hiện ảnh này ngay lập tức -> Tối ưu LCP/CLS
        preload="none" // Chỉ load video khi cần thiết (hoặc 'metadata') để tiết kiệm băng thông
      >
        <source src="/videos/promo.webm" type="video/webm" />{" "}
        {/* Ưu tiên WebM nhẹ hơn */}
        <source src="/videos/promo.mp4" type="video/mp4" />
      </video>

      {/* Overlay & Content */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      <div className="relative z-20 h-full flex items-center justify-center text-white">
        <h2 className="text-5xl font-bold">Experience the Future</h2>
      </div>
    </section>
  );
}
