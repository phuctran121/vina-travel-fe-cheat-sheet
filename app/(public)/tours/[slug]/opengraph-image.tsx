import { ImageResponse } from "next/og";

export const runtime = "edge"; // Chạy ở Edge function cho nhanh
export const alt = "Chi tiết Tour Du Lịch";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  // Fetch data trực tiếp trong hàm generate ảnh
  const tour = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/tours/${
      params.slug
    }`
  ).then((res) => res.json());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          position: "relative",
        }}
      >
        {/* Background Image */}
        <img
          src={tour.image}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom, transparent, #000)",
          }}
        />

        {/* Content Overlay */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 60,
            width: "100%",
            height: "100%",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: 900,
              color: "white",
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            {tour.name}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: 40, color: "#cbd5e1" }}>
              {tour.duration} | {tour.location}
            </div>
            <div
              style={{
                fontSize: 50,
                color: "#0EA5E9",
                fontWeight: "bold",
                background: "white",
                padding: "10px 30px",
                borderRadius: 20,
              }}
            >
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(tour.price)}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
