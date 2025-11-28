import { JSX } from "react";

interface ChartDataItem {
  month: string;
  value: number;
}

interface Stats {
  chartData: ChartDataItem[];
  totalSpent: number;
  points: number;
}

async function getStats(): Promise<Stats> {
  // Gọi API Stats (Mock delay 3000ms !!!)
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
    }/api/user/stats`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to load stats");
  const data = (await res.json()) as Stats;
  return data;
}

export default async function RevenueChart(): Promise<JSX.Element> {
  const stats = await getStats();
  const maxVal = Math.max(...stats.chartData.map((d) => d.value));

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
      <h3 className="text-lg font-bold text-gray-900 mb-6">
        Thống kê chi tiêu
      </h3>

      {/* Vẽ biểu đồ cột đơn giản bằng CSS */}
      <div className="flex items-end justify-between h-48 gap-4">
        {stats.chartData.map((item) => (
          <div
            key={item.month}
            className="flex flex-col items-center flex-1 gap-2"
          >
            <div
              className="w-full bg-primary/80 rounded-t-md transition-all hover:bg-primary relative group"
              style={{ height: `${(item.value / maxVal) * 100}%` }}
            >
              {/* Tooltip */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {new Intl.NumberFormat("vi-VN").format(item.value)} đ
              </span>
            </div>
            <span className="text-sm text-gray-500 font-medium">
              {item.month}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Tổng chi tiêu</p>
          <p className="text-xl font-bold text-gray-900">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(stats.totalSpent)}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Điểm tích lũy</p>
          <p className="text-xl font-bold text-primary">{stats.points} pts</p>
        </div>
      </div>
    </div>
  );
}
