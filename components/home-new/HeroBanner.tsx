"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Image
import HeroBanner1 from "@/public/images/home/test.png";

// Mock Data
const SLIDES = [
  {
    id: 1,
    badge: "블랙 프라이데이 특별 혜택",
    title: "드론 전문점",
    subtitle: "드론 매장에서 체험해 보세요!",
    bgColor: "bg-[#FFE7DC]",
    image: HeroBanner1,
    buttonText: "자세히 보기",
  },
  {
    id: 2,
    badge: "블랙 프라이데이 특별 혜택",
    title: "드론 전문점",
    subtitle: "드론 매장에서 체험해 보세요!",
    bgColor: "bg-[#FFE7DC]",
    image: HeroBanner1,
    buttonText: "자세히 보기",
  },
];

export default function HeroBanner() {
  return (
    <section className="w-full font-sans pt-16 pb-7 bg-[#F7F7F7]">
      <div className="container mx-auto px-4 lg:px-38">
        {/* Swiper Container */}
        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            allowTouchMove={false}
            simulateTouch={false}
            grabCursor={false}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            className="rounded-xl overflow-hidden"
          >
            {SLIDES.map((slide) => (
              <SwiperSlide key={slide.id}>
                {/* SLIDE CONTENT */}
                <div
                  className={`${slide.bgColor} w-full h-80 md:h-86 flex items-center justify-between px-6 md:px-16 lg:px-28 relative overflow-hidden`}
                >
                  {/* --- LEFT CONTENT --- */}
                  <div className="relative z-50 flex flex-col items-start min-w-[50%] md:max-w-lg mb-8">
                    <span className="bg-black text-white text-sm md:text-lg lg:text-[18px] font-light tracking-tighter px-5 py-1 rounded-full md:mb-0 mb-1 min-w-46.25">
                      {slide.badge}
                    </span>
                    <h2 className="text-[#FF4E03] text-2xl md:text-5xl lg:text-[64px] font-bold tracking-tighter leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-gray-800 text-lg md:text-3xl lg:text-[34px] tracking-tighter font-normal mt-2">
                      {slide.subtitle}
                    </p>
                  </div>

                  {/* --- RIGHT CONTENT --- */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative w-48 h-48 md:w-100 md:h-100">
                      <Image
                        src={slide.image}
                        alt="Illustration"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                        loading="eager"
                        className="object-cover"
                        priority={slide.id === 1}
                      />
                      <button className="absolute hidden md:block -bottom-4 right-0 md:bottom-20 md:right-24 bg-[#FF4E03] text-white text-[18px] font-light px-6 py-2 rounded-full hover:bg-orange-600 transition-colors shadow-lg">
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* === CONTROLS CONTAINER === */}
          <div className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-center gap-4 md:contents">
            {/* Prev */}
            <button className="custom-prev static md:absolute md:top-1/2 md:-translate-y-1/2 md:left-4 z-20 size-6 md:size-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-all disabled:opacity-50">
              <ChevronLeft className="text-black/70 size-5 md:size-7" />
            </button>

            {/* 2. Pagination (Dots) */}
            <div className="custom-pagination static! w-auto! md:absolute! md:bottom-6! md:left-0! md:right-0! md:w-full! flex justify-center gap-2 z-50" />
            {/* 3. Next */}
            <button className="custom-next static md:absolute md:top-1/2 md:-translate-y-1/2 md:right-4 z-20 size-6 md:size-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-all disabled:opacity-50">
              <ChevronRight className="text-black/70 size-5 md:size-7" />
            </button>
          </div>
        </div>
      </div>

      {/* CSS Override */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #e9cdc1;
          opacity: 1;
          transition: all 0.3s;
          border-radius: 9999px;
          margin: 0 3px !important;
        }
        @media (min-width: 768px) {
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            margin: 0 4px !important;
          }
        }
        .swiper-pagination-bullet-active {
          background: #ff4e03 !important;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
}
