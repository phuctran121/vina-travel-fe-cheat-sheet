"use client"; // Dùng client để xử lý sự kiện onLoad (tắt skeleton)

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils"; // Hàm merge class (nếu chưa có thì cài clsx tailwind-merge)

// Hướng dẫn cài cn: npm install clsx tailwind-merge
// Hoặc tạo file utils đơn giản:
// export function cn(...inputs: (string | undefined | null | false)[]) { return inputs.filter(Boolean).join(" "); }

interface OptimizedImageProps extends Omit<ImageProps, "alt"> {
  alt: string; // Bắt buộc có alt để chuẩn SEO
  containerClass?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className,
  containerClass,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("relative overflow-hidden bg-gray-200", containerClass)}>
      <Image
        src={src}
        alt={alt}
        className={cn(
          "duration-700 ease-in-out",
          isLoading
            ? "scale-110 blur-lg grayscale"
            : "scale-100 blur-0 grayscale-0",
          className
        )}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
}
