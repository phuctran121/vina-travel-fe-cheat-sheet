import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// lib/utils.ts
export async function getBaseUrl() {
  // 1. Client Side (Trình duyệt)
  // Trả về chuỗi rỗng để fetch dùng đường dẫn tương đối (VD: /api/tours)
  // Browser tự hiểu là gọi đến chính domain hiện tại.
  if (typeof window !== "undefined") return "";

  // 2. Server Side (Next.js SSR/SSG)
  // Try to get the host from headers for dynamic SSR (only in Node.js runtime)
  // This works in server components but not in edge runtime
  try {
    const { headers } = await import("next/headers");
    const headersList = await headers();
    const host = headersList.get("host");
    const protocol = headersList.get("x-forwarded-proto") || 
                     headersList.get("x-forwarded-protocol") || 
                     (process.env.VERCEL_URL ? "https" : "http");
    
    if (host) {
      return `${protocol}://${host}`;
    }
  } catch (error) {
    // Headers might not be available in edge runtime or during build
    // Continue to fallback options
  }

  // 3. Fallback: Use VERCEL_URL (available on Vercel deployments)
  // For production deployments, this should be the deployment URL
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // 4. Use explicit base URL if configured
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }

  // 5. Localhost (Khi chạy npm run dev ở máy bạn)
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  // 6. Final fallback: Use relative URL for same-origin requests
  // This might work in some server contexts
  return "";
}
