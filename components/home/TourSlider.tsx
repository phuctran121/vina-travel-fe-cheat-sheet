"use client";
// File này chứa thư viện Swiper -> Bundle size lớn -> Cần lazy load

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import OptimizedImage from "@/components/ui/OptimizedImage";
import Link from "next/link";
import HeroImg from "@/public/images/esg-result-background-old.webp";

// Định nghĩa kiểu dữ liệu props
interface Tour {
  id: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  location: string;
}

export default function TourSlider({ tours }: { tours: Tour[] }) {
  return (
    <div className="tour-slider-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {tours.map((tour) => (
          <SwiperSlide key={tour.id}>
            <Link
              href={`/tours/${tour.slug}`}
              className="block group"
              prefetch={false}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="relative h-60 w-full">
                  <OptimizedImage
                    src={HeroImg}
                    alt={tour.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-bold text-primary backdrop-blur-sm">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(tour.price)}
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    {tour.location}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                    {tour.name}
                  </h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
