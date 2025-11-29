import Image from "next/image";
import IntroductionImg from "@/public/images/aop-header-background.webp";

export default function IntroductionSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Content Side */}
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold mb-4">Tính năng nổi bật</h2>
          <p className="text-gray-600">
            Mô tả chi tiết về tính năng sản phẩm...
          </p>
        </div>

        {/* Illustration Side */}
        <div className="relative order-1 md:order-2 w-full h-64 md:h-96">
          <Image
            src={IntroductionImg}
            alt="Minh họa tính năng"
            fill
            className="object-contain" // Hoặc object-cover tùy design
            // QUAN TRỌNG: Tối ưu sizes
            // Mobile: 100vw (full width)
            // Tablet/Desktop: 50vw (một nửa màn hình)
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur" // Hiệu ứng blur khi đang load (cần import ảnh tĩnh hoặc dùng blurDataURL)
            loading="lazy" // Mặc định là lazy, nhưng viết rõ để nhớ (nếu section này ở dưới màn hình đầu tiên)
          />
        </div>
      </div>
    </section>
  );
}
