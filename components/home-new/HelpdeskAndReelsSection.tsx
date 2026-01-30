"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, X } from "lucide-react";

import DroneHelpdeskImage from "@/public/images/home/helpdesk-banner-image.png";
import ReelThumbnail1 from "@/public/images/home/helpdesk-left-image-1.png";
import ReelThumbnail2 from "@/public/images/home/helpdesk-left-image-2.png";
import ReelThumbnail3 from "@/public/images/home/helpdesk-left-image-3.png";
import VerticalBanner1 from "@/public/images/home/helpdesk-right-image-1.png";
import VerticalBanner2 from "@/public/images/home/helpdesk-right-image-2.png";

// Mock Data
const REELS = [
  {
    id: 1,
    title: "2021 Korea Drone Expo",
    thumbnail: ReelThumbnail1,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    title: "Drone RoadShow",
    thumbnail: ReelThumbnail2,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 3,
    title: "2024 Korea Drone Expo",
    thumbnail: ReelThumbnail3,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

export default function HelpdeskAndReelsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="w-full font-sans pb-20 bg-[#F7F7F7]">
      {/* --- PART 1: HELPDESK BANNER (FULL WIDTH) --- */}
      <div className="relative w-full h-70 md:h-88 mb-10">
        {/* Background Image */}
        <Image
          src={DroneHelpdeskImage}
          alt="Public Drone Helpdesk"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
          className="object-cover object-center bg-black"
        />

        {/* Content Centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-2xl md:text-3xl lg:text-[34px] font-semibold mb-2 drop-shadow-md">
            공공드론 헬프데스트
          </h2>
          <p className="text-lg md:text-xl lg:text-[22px] font-normal mb-10 leading-relaxed">
            고객상담 운영시간 평일 09:00~18:00
            <span className="ml-1 font-extralight">(주말공휴일 제외)</span>
          </p>

          <button className="bg-[#FF5F00] hover:bg-orange-600 text-white font-light text-sm md:text-base lg:text-[18px] px-6 py-1.5 rounded-full transition-colors shadow-lg">
            바로가기
          </button>
        </div>
      </div>

      {/* --- PART 2: CONTENT GRID (CONTAINER) --- */}
      <div className="container mx-auto px-4 lg:px-38">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 md:gap-4 lg:gap-5 ">
          {/* === LEFT COLUMN: REELS (Span 7) === */}
          <div className="lg:col-span-7 flex flex-col justify-center bg-white pt-6 pb-12 px-2 lg:px-10 rounded-xl">
            {/* Header: Title + Button */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-center mb-10">
              <h3 className="text-xl md:text-2xl lg:text-[28px] font-medium text-[#2B2B2B] tracking-tight">
                릴/짧은 영상
              </h3>
              <Link
                href="#"
                className="flex items-center gap-1 bg-[#FFDACB] text-[#2B2B2B] px-4 md:px-6 py-1 md:py-1.5 rounded-full text-base md:text-lg lg:text-[18px] font-medium hover:bg-[#FFD4C2] transition-colors"
              >
                더 보기 <ArrowRight className="ml-0 md:ml-2" size={18} />
              </Link>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-9">
              {REELS.map((item) => (
                <div
                  key={item.id}
                  className="group relative w-full aspect-video md:aspect-square rounded-xl overflow-hidden cursor-pointer bg-gray-100"
                  onClick={() => setActiveVideo(item.videoUrl)}
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay Gradient Bottom */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                  {/* Play Icon */}
                  <div
                    className="
                    absolute 
                    /* Mobile */
                    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-10 h-10 
                    
                    /* Desktop */
                    md:top-2 md:right-2 md:left-auto md:translate-x-0 md:translate-y-0
                    md:w-6 md:h-6
                    
                    bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm z-10 pointer-events-none"
                  >
                    <Play
                      /* Mobile: Icon to hơn (size 16), Desktop: Icon nhỏ (size 10) */
                      className="text-white fill-white w-4 h-4 md:w-2.5 md:h-2.5 "
                    />
                  </div>

                  {/* Title (Bottom Left) */}
                  <p className="absolute bottom-5 md:bottom-3 left-3 right-3 text-white text-sm text-center md:text-start md:max-w-24 md:text-[14px] font-normal line-clamp-2 leading-snug">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* === RIGHT COLUMN: VERTICAL BANNERS (Span 5) === */}
          <div className="lg:col-span-5 pt-2 lg:pt-0">
            {/* Sub Grid for 2 Cards */}
            <div className="grid grid-cols-2 gap-5 h-full">
              {/* Card 1: Info Portal */}
              <Link
                href="#"
                className="relative w-full md:h-full min-h-60 rounded-xl overflow-hidden group"
              >
                <Image
                  src={VerticalBanner1}
                  alt="Drone Info Portal"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <h4 className="absolute bottom-6 left-5 text-white text-xl md:text-2xl lg:text-[28px] font-bold flex flex-col ">
                  드론정보포털
                  <span className="text-[10px] font-normal opacity-80 uppercase tracking-wider">
                    Drone Information Portal
                  </span>
                </h4>
              </Link>

              {/* Card 2: Travel/City (ADS) */}
              <Link
                href="#"
                className="relative w-full h-60 md:h-full min-h-60 rounded-xl overflow-hidden group"
              >
                <Image
                  src={VerticalBanner2}
                  alt="City Travel"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />

                {/* ADS Badge */}
                <div className="absolute top-3 right-3 bg-white/90 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded-sm">
                  ADS
                </div>

                <h4 className="absolute bottom-6 left-5 text-white text-lg font-medium leading-tight">
                  도시를 위에서 바<br />
                  라보며 여행하다
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --- VIDEO MODAL (Overlay) --- */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
