"use client";

export default function MapWidget({ location }: { location: string }) {
  // Demo đơn giản: Load iframe Google Map
  // Trong thực tế có thể là thư viện react-google-maps nặng nề
  return (
    <div className="w-full h-[400px] bg-gray-100 rounded-xl overflow-hidden relative">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy" // Native lazy loading của trình duyệt
        allowFullScreen
        src={`https://maps.google.com/maps?q=${encodeURIComponent(
          location
        )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}

        // Lưu ý: Nếu không có API Key thật, Google Maps sẽ hiện lỗi hoặc dùng iframe embed đơn giản hơn:
        // src={`https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
      ></iframe>

      {/* Fallback text nếu iframe chưa load */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 text-gray-400">
        Đang tải bản đồ...
      </div>
    </div>
  );
}
