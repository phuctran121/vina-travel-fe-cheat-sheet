import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// lib/utils.ts
export function getBaseUrl() {
  // 1. Client Side (Trình duyệt)
  // Trả về chuỗi rỗng để fetch dùng đường dẫn tương đối (VD: /api/tours)
  // Browser tự hiểu là gọi đến chính domain hiện tại.
  if (typeof window !== "undefined") return "";

  // 2. Server Side (Vercel)
  // Biến này Vercel TỰ CÓ, bạn không cần thêm.
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`; // Phải tự nối thêm https://
  }

  // 3. Localhost (Khi chạy npm run dev ở máy bạn)
  // Ở local không có biến VERCEL_URL, nên nó sẽ lọt xuống dòng này.
  return "http://localhost:3000";
}
