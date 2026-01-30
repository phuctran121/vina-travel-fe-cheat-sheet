"use client";

import { useState, useRef, useMemo } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import NewsCard from "./NewsCard";
import type { NewsItem } from "./NewsCard";

import "swiper/css";
import "swiper/css/navigation";

interface NewsBlockProps {
  title: string;
  tags: string[];
  data: NewsItem[];
  showAllOption?: boolean;
}

export default function NewsSliderBlock({
  title,
  tags,
  data,
  showAllOption = false,
}: NewsBlockProps) {
  const swiperRef = useRef<SwiperType>(null);

  const [activeTab, setActiveTab] = useState(tags[0]);

  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    if (showAllOption && activeTab === tags[0]) {
      return data;
    }
    return data.filter((item) => item.category === activeTab);
  }, [activeTab, data, tags, showAllOption]);

  const totalPages = Math.ceil(filteredData.length / 4) || 1;

  return (
    <div className="w-full mb-6 last:mb-0 border-b border-[#CECECE]/50 pb-8 last:border-0 last:pb-0">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl lg:text-[26px] font-medium text-[#2B2B2B]">
          {title}
        </h2>
        <Link
          href="#"
          className="bg-[#E3E3E3] hover:bg-gray-200 text-[#2B2B2B] text-base md:text-lg lg:text-[18px] font-medium px-5 py-1 rounded-full flex items-center gap-1 transition-colors"
        >
          모두 보기 <ArrowRight size={18} />
        </Link>
      </div>

      {/* TAGS (FILTER BUTTONS) */}
      <div className="flex justify-center md:justify-start gap-2 mb-7">
        {tags.map((tag, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveTab(tag);
              setCurrentPage(1);
              swiperRef.current?.slideTo(0);
            }}
            className={`
              px-3 md:px-4 py-1 md:py-0 rounded-full text-xs md:text-sm lg:text-[16px] font-medium transition-all duration-300
              ${
                activeTab === tag
                  ? "bg-[#FFDACB] text-[#FF4E03] ring-1 ring-[#FF5F00]/20" // Active Style
                  : "bg-[#E6E6E6] text-[#B6B6B6] hover:bg-[#FFDACB]/70 hover:text-[#FF4E03]/70" // Inactive Style
              }
            `}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* SWIPER SLIDER */}
      {filteredData.length > 0 ? (
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          slidesPerGroup={1}
          breakpoints={{
            640: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 4, slidesPerGroup: 4 },
          }}
          allowTouchMove={false}
          simulateTouch={false}
          grabCursor={false}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            const itemsPerGroup =
              window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1;
            setCurrentPage(
              Math.ceil((swiper.realIndex + 1) / itemsPerGroup) || 1,
            );
          }}
          className="w-full pb-8!"
        >
          {filteredData.map((item) => (
            <SwiperSlide key={item.id}>
              <NewsCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="w-full h-40 flex items-center justify-center bg-gray-50 rounded-lg text-gray-400 text-sm">
          해당 카테고리에 게시물이 없습니다. (Không có bài viết nào)
        </div>
      )}

      {/* CUSTOM PAGINATION CONTROLS */}
      {filteredData.length > 0 && (
        <div className="flex items-center justify-center gap-4 mt-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={currentPage === 1}
            className={`
              size-7 md:size-8 rounded-full flex items-center justify-center transition-colors
              ${
                currentPage === 1
                  ? "bg-[#E6E6E6] text-white cursor-not-allowed"
                  : "bg-[#FF4E03] text-white hover:bg-orange-600 shadow-sm"
              }
            `}
          >
            <ChevronLeft size={18} />
          </button>

          <span className="text-base md:text-lg lg:text-[18px] font-normal text-[#696969]">
            페이지 <span className="font-medium">{currentPage}</span>
            <span className="text-[#B6B6B6]">/{totalPages}</span>
          </span>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            disabled={currentPage >= totalPages}
            className={`
              size-7 md:size-8 rounded-full flex items-center justify-center transition-colors
              ${
                currentPage >= totalPages
                  ? "bg-[#E6E6E6] text-white cursor-not-allowed "
                  : "bg-[#FF4E03] text-white hover:bg-orange-600 shadow-sm"
              }
            `}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
