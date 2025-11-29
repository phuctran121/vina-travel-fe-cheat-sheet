"use client";

import { useState } from "react";

export default function BookingForm({
  tourName,
  price,
  onClose,
}: {
  tourName: string;
  price: number;
  onClose: () => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Giả lập gửi API mất 2s
    setTimeout(() => {
      alert(`Đã đặt tour "${tourName}" thành công!`);
      setIsSubmitting(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-900">Xác nhận đặt tour</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="bg-sky-50 p-3 rounded-lg text-sm text-sky-800 mb-4">
            Đang đặt: <strong>{tourName}</strong>
            <br />
            Tổng tiền:{" "}
            <strong>{new Intl.NumberFormat("vi-VN").format(price)} đ</strong>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Họ tên
            </label>
            <input
              required
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary outline-none"
              placeholder="Nguyễn Văn A"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Số điện thoại
            </label>
            <input
              required
              type="tel"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary outline-none"
              placeholder="0909..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-sky-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
          >
            {isSubmitting ? "Đang xử lý..." : "Thanh toán ngay"}
          </button>
        </form>
      </div>
    </div>
  );
}
