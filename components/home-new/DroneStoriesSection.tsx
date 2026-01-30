"use client";
import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

import DroneImage1 from "@/public/images/home/dronestories-image-1.png";
import DroneImage2 from "@/public/images/home/dronestories-image-2.png";
import VideoThumbnail from "@/public/images/home/dronestories-video-thumbnail.png";
import GlobeImage from "@/public/images/home/dronestories-earth-icon.png";
import CameraIcon from "@/public/images/icons/camera-icon.png";

// Mock Data
const STORIES = [
  {
    id: 1,
    image: DroneImage1,
    title: "「제1회 KIAST 미래항공모빌리티 포럼(국내 드론 부품 기업 간담회)」",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
  {
    id: 2,
    image: DroneImage2,
    title: "「제1회 KIAST 미래항공모빌리티 포럼(국내 드론 부품 기업 간담회)」",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
  },
];

export default function DroneStoriesSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#F7F7F7] font-sans">
      <div className="container mx-auto px-4 lg:px-38">
        {/* --- PART 1: TOP GRID (STORIES + SIDEBAR) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-5 mb-5 md:mb-10">
          {/* LEFT COLUMN: DRONE STORIES */}
          <div className="lg:col-span-7 flex flex-col justify-center bg-white py-8 lg:py-0 px-2 lg:px-10 rounded-xl">
            <h2 className="text-xl md:text-2xl lg:text-[26px] tracking-tighter font-medium text-gray-900 mb-6">
              드론이야기
            </h2>

            <div className="grid grid-cols-2 gap-1 md:gap-6">
              {STORIES.map((story) => (
                <div
                  key={story.id}
                  className="group cursor-pointer flex flex-col gap-3"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-gray-100">
                    <Image
                      src={story.image}
                      alt="Story Thumbnail"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Text */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sm md:text-base lg:text-[16px] font-medium tracking-tight text-[#222222] leading-tight mb-2 line-clamp-2 group-hover:text-[#FF5F00] transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-xs md:text-[13px] text-[#686868] leading-tight line-clamp-2">
                      {story.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: BANNERS & VIDEO */}
          <div className="lg:col-span-5 flex flex-col gap-5 pt-2 lg:pt-0">
            {/* 1. Yellow Promo Banner */}
            <div className="bg-[#FFDD89] rounded-xl py-4.5 px-4 md:px-9 flex items-center justify-between relative overflow-hidden">
              <div className="relative z-10 flex flex-col items-start gap-2">
                <div>
                  <h3 className="text-[#FF4E03] text-lg md:text-2xl lg:text-[26px] font-normal">
                    드론 사진을 공유해 주세요!
                  </h3>
                  <p className="text-[#222222] text-xs md:text-base lg:text-[16px]">
                    가장 인기 있는 사진에게 특별 선물 제공!
                  </p>
                </div>
                <button className="bg-[#FF4E03] hover:bg-orange-700 text-white font-normal text-sm md:text-lg lg:text-[18px] px-4 md:px-5 py-1 md:py-1.5 rounded-full transition-colors">
                  자세히 보기
                </button>
              </div>

              {/* Camera Icon/Illustration */}
              <div className="relative z-10 text-[#FF5F00] w-15 h-12 md:w-30 md:h-23">
                <Image
                  src={CameraIcon}
                  alt="Camera Icon"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* 2. Video Player Card */}
            <div
              className="group relative w-full h-60 md:h-72 rounded-xl overflow-hidden bg-black cursor-pointer"
              onClick={() =>
                setActiveVideo("https://www.w3schools.com/html/mov_bbb.mp4")
              }
            >
              <Image
                src={VideoThumbnail}
                alt="Drone Video Thumbnail"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                className="object-cover transition-opacity bg-white/10"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                  <Play size={24} className="text-white fill-white ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- PART 2: BOTTOM ORANGE BANNER (OVERSEAS EXPANSION) --- */}
        <div className="relative w-full h-32 md:h-35 bg-[#FF4E03] rounded-2xl overflow-hidden flex items-center px-6 md:px-14">
          {/* Gradient Background Effect */}
          <div className="absolute -right-60 md:right-31 top-[80%] -translate-y-1/2 size-150 pointer-events-none ">
            <div className="absolute inset-0 m-auto w-[70%] h-[70%] bg-[#f5a170] rounded-full opacity-40" />
            <div className="absolute inset-0 m-auto w-[56%] h-[56%] bg-[#faa77a] rounded-full opacity-50" />
            <div className="absolute inset-0 m-auto w-[38%] h-[38%] bg-[#fab995] rounded-full opacity-60" />
          </div>

          {/* Text Content */}
          <div className="relative z-10">
            <h2 className="text-xl md:text-2xl lg:text-[28px] max-w-12.5 lg:max-w-none font-semibold text-white drop-shadow-md">
              Drone Overseas Expansion
            </h2>
          </div>

          {/* Globe Illustration */}
          <div className="absolute right-0 md:right-85 top-[72%] -translate-y-1/2 z-10 w-32 h-32 md:w-40 md:h-40">
            <Image
              src={GlobeImage}
              alt="Drone Video Thumbnail"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              className="object-cover group-hover:opacity-60 transition-opacity"
            />
          </div>
        </div>
      </div>
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            {/* Vimeo iframe (chuẩn hơn <video>) */}
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
