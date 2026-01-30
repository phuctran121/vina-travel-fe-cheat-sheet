import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import SystemImage1 from "@/public/images/home/linkedsystems-image-1.png";
import SystemImage2 from "@/public/images/home/linkedsystems-image-2.png";
import SystemImage3 from "@/public/images/home/linkedsystems-image-3.png";
import SystemImage4 from "@/public/images/home/linkedsystems-image-4.png";

// Mock Data
const SYSTEMS = [
  {
    id: 1,
    title: "드론비행승인",
    image: SystemImage1,
  },
  {
    id: 2,
    title: "드론비행시험장사용신청예약",
    image: SystemImage2,
  },
  {
    id: 3,
    title: "드론기체안전성인증",
    image: SystemImage3,
  },
  {
    id: 4,
    title: "시제품 제작 장비 예약",
    image: SystemImage4,
  },
];

export default function LinkedSystemsSection() {
  return (
    <section className="w-full bg-[#F7F7F7] py-9 font-sans">
      <div className="container mx-auto px-4 lg:px-38">
        {/* --- TITLE --- */}
        <h2 className="text-xl md:text-2xl lg:text-[28px] font-medium text-[#2B2B2B] tracking-tighter mb-6">
          연계시스템
        </h2>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 md:gap-5">
          {SYSTEMS.map((item) => (
            <Link
              key={item.id}
              href="#"
              className="group relative w-full h-45 md:h-47.5 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/20 group-hover:bg-black/40 transition-colors" />

              {/* Title (Top Left) */}
              <h3 className="absolute top-5 left-5 text-white font-medium text-sm md:text-base lg:text-[16px] leading-tight pr-10">
                {item.title}
              </h3>

              {/* Arrow Button (Bottom Right) */}
              <div className="absolute bottom-5 right-5 size-6 md:size-8 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                <ArrowRight
                  className="text-[#FF5F00] w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform"
                  strokeWidth={2.5}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
