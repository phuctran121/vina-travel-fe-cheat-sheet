"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface HeroVideoProps {
  posterSrc: string; // Ảnh tĩnh (LCP)
  videoSrcMp4: string;
  videoSrcWebm?: string; // Optional (Nên có)
}

export default function HeroVideo({
  posterSrc,
  videoSrcMp4,
  videoSrcWebm,
}: HeroVideoProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Fallback: Nếu browser ở chế độ tiết kiệm pin (Low Power Mode), video có thể không autoplay.
    // Lúc đó sự kiện onLoadedData không chạy, ta vẫn phải giữ poster lại.
    // Defer state update to avoid synchronous setState in effect
    const checkVideoReady = () => {
      if (videoRef.current && videoRef.current.readyState >= 3) {
        setIsVideoLoaded(true);
      }
    };

    // Use requestAnimationFrame to defer the state update
    requestAnimationFrame(checkVideoReady);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      {/* 1. LỚP TRÊN: Poster Image (Tối ưu LCP) */}
      {/* Nó sẽ luôn hiện ra ngay lập tức */}
      <div
        className={`absolute inset-0 z-10 transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src={posterSrc}
          alt="Hero Background"
          fill
          priority // QUAN TRỌNG: Load ngay lập tức
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* 2. LỚP DƯỚI: Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline // Fix lỗi iOS
        preload="none" // Hoặc 'metadata'. Không load full video khi trang chưa hiện.
        onLoadedData={() => setIsVideoLoaded(true)} // Khi video tải đủ để chạy -> Fade in
      >
        {videoSrcWebm && <source src={videoSrcWebm} type="video/webm" />}
        <source src={videoSrcMp4} type="video/mp4" />
      </video>

      {/* 3. Overlay (Làm tối video để chữ nổi lên) */}
      <div className="absolute inset-0 bg-black/40 z-20" />
    </div>
  );
}
