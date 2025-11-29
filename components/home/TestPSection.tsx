import Image from "next/image";
import HeroImg from "@/public/images/aop-application-background.webp";

export default function TestPSection() {
  return (
    <section className="relative h-[600px] w-full flex items-center justify-center mb-16">
      {/* 1. Background Image Layer (LCP) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HeroImg} // Ảnh chất lượng cao
          alt="Vịnh Hạ Long - Di sản thiên nhiên thế giới"
          fill
          loading="lazy"
          className="object-cover brightness-[0.7]"
          sizes="100vw"
        />
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Khám phá vẻ đẹp Việt Namádasd
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          Hơn 500 tour du lịch hấp dẫn đang chờ đón bạn. Trải nghiệm trọn
          vẹnádasd từng khoảnh khắc.ádasd
        </p>
      </div>

      {/* 3. Client Island: Search Bar */}
    </section>
  );
}
