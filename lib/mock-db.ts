// lib/mock-db.ts

// 1. Data cho Slider (Trang chủ)
export const DESTINATIONS = [
  {
    id: 1,
    name: "Hạ Long Bay",
    image:
      "https://images.unsplash.com/photo-1559592413-7cec4d0aa73b?q=80&w=800",
    count: "120 Tours",
  },
  {
    id: 2,
    name: "Đà Nẵng",
    image:
      "https://images.unsplash.com/photo-1559592823-867931325f19?q=80&w=800",
    count: "85 Tours",
  },
  {
    id: 3,
    name: "Phú Quốc",
    image:
      "https://images.unsplash.com/photo-1540202404-a6f296452bd8?q=80&w=800",
    count: "90 Tours",
  },
  {
    id: 4,
    name: "Sa Pa",
    image:
      "https://images.unsplash.com/photo-1570530867087-937d1ae3e6b4?q=80&w=800",
    count: "60 Tours",
  },
  {
    id: 5,
    name: "Hội An",
    image:
      "https://images.unsplash.com/photo-1557750255-c76072a7bb19?q=80&w=800",
    count: "75 Tours",
  },
];

// 2. Data cho Danh sách Tour & Chi tiết Tour
export const TOURS = [
  {
    id: "t1",
    slug: "kham-pha-ha-long-3n2d",
    name: "Du thuyền 5 sao Vịnh Hạ Long - Lan Hạ",
    price: 3500000,
    rating: 4.8,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1506158669146-619067262a00?q=80&w=1200", // Ảnh nặng
    gallery: [
      "https://images.unsplash.com/photo-1520699918507-0c369528e18f?q=80&w=800",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800",
    ],
    duration: "3 Ngày 2 Đêm",
    location: "Quảng Ninh",
    description:
      "Trải nghiệm kỳ nghỉ dưỡng đẳng cấp trên du thuyền 5 sao thăm quan Vịnh Hạ Long và Vịnh Lan Hạ. Thưởng thức hải sản tươi sống và chèo Kayak.",
  },
  {
    id: "t2",
    slug: "da-nang-hoi-an-4n3d",
    name: "Combo Đà Nẵng - Hội An - Bà Nà Hills",
    price: 4200000,
    rating: 4.5,
    reviews: 85,
    image:
      "https://images.unsplash.com/photo-1565691079366-0775d7870a25?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1517076628860-2646271a257c?q=80&w=800",
    ],
    duration: "4 Ngày 3 Đêm",
    location: "Đà Nẵng",
    description:
      "Khám phá thành phố đáng sống nhất Việt Nam kết hợp phố cổ Hội An mộng mơ.",
  },
  {
    id: "t3",
    slug: "kham-pha-phong-nha-ke-bang",
    name: "Thám hiểm Động Phong Nha - Kẻ Bàng",
    price: 2800000,
    rating: 4.9,
    reviews: 42,
    image:
      "https://images.unsplash.com/photo-1582260279633-11b332b72522?q=80&w=1200",
    gallery: [],
    duration: "2 Ngày 1 Đêm",
    location: "Quảng Bình",
    description: "Tour mạo hiểm khám phá hang động lớn nhất thế giới.",
  },
  {
    id: "t4",
    slug: "sai-gon-mekong-2n1d",
    name: "Khám phá Sài Gòn – Miền Tây sông nước",
    price: 1900000,
    rating: 4.6,
    reviews: 67,
    image:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1509927084005-42b2e72b0520?q=80&w=800",
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=800",
    ],
    duration: "2 Ngày 1 Đêm",
    location: "TP. Hồ Chí Minh – Tiền Giang",
    description:
      "Trải nghiệm cuộc sống miệt vườn, đi thuyền trên sông Mekong và thưởng thức trái cây miệt vườn đặc sản.",
  },
  {
    id: "t5",
    slug: "sapa-fansipan-3n2d",
    name: "Sapa – Chinh phục đỉnh Fansipan",
    price: 3300000,
    rating: 4.7,
    reviews: 110,
    image:
      "https://images.unsplash.com/photo-1509644851169-2acc08aa25b9?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800",
    ],
    duration: "3 Ngày 2 Đêm",
    location: "Lào Cai",
    description:
      "Đắm chìm trong biển mây và khám phá văn hóa dân tộc vùng núi Tây Bắc. Bao gồm vé lên đỉnh Fansipan.",
  },
  {
    id: "t6",
    slug: "nha-trang-vinpearl-3n2d",
    name: "Nha Trang – VinWonders – Đảo Hòn Mun",
    price: 3600000,
    rating: 4.4,
    reviews: 74,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=800",
      "https://images.unsplash.com/photo-1590487988995-3c2931d0f9f7?q=80&w=800",
    ],
    duration: "3 Ngày 2 Đêm",
    location: "Khánh Hòa",
    description:
      "Tận hưởng biển xanh – cát trắng – nắng vàng, tham quan VinWonders và lặn ngắm san hô Hòn Mun.",
  },
  {
    id: "t7",
    slug: "tay-ninh-ba-den-1n",
    name: "Tây Ninh – Chinh phục Núi Bà Đen",
    price: 950000,
    rating: 4.3,
    reviews: 58,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1587502537745-84b07f3d8ce1?q=80&w=800",
    ],
    duration: "1 Ngày",
    location: "Tây Ninh",
    description:
      "Trải nghiệm cáp treo hiện đại, khám phá quần thể tâm linh và lên đỉnh Núi Bà Đen – nóc nhà Nam Bộ.",
  },
  {
    id: "t8",
    slug: "phu-quoc-beach-resort-3n2d",
    name: "Phú Quốc – Nghỉ dưỡng biển đảo",
    price: 4000000,
    rating: 4.7,
    reviews: 92,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1507525430981-64a6f18aa88b?q=80&w=800",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800",
    ],
    duration: "3 Ngày 2 Đêm",
    location: "Kiên Giang",
    description:
      "Thư giãn tại resort sang trọng, tắm biển và tham gia các hoạt động lặn ngắm san hô tại Phú Quốc.",
  },
  {
    id: "t9",
    slug: "hue-city-tour-2n1d",
    name: "Huế – Cố đô và di sản văn hóa",
    price: 1800000,
    rating: 4.5,
    reviews: 63,
    image:
      "https://images.unsplash.com/photo-1564135624576-c5c88640f235?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1589902796690-ef07a9153e1d?q=80&w=800",
    ],
    duration: "2 Ngày 1 Đêm",
    location: "Thừa Thiên Huế",
    description:
      "Khám phá Đại Nội, lăng tẩm vua Nguyễn, và thưởng thức ẩm thực cung đình Huế.",
  },
  {
    id: "t10",
    slug: "dalat-countryside-3n2d",
    name: "Đà Lạt – Thung lũng và vườn hoa",
    price: 3200000,
    rating: 4.6,
    reviews: 88,
    image:
      "https://images.unsplash.com/photo-1500534314209-a26a7e662a87?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1498079022511-d15614cb1c02?q=80&w=800",
      "https://images.unsplash.com/photo-1486915309851-b0cc1f8a008e?q=80&w=800",
    ],
    duration: "3 Ngày 2 Đêm",
    location: "Lâm Đồng",
    description:
      "Tham quan thung lũng Tình Yêu, vườn hoa thành phố và trải nghiệm cà phê đặc sản Đà Lạt.",
  },
  {
    id: "t11",
    slug: "ninh-binh-landscape-2n1d",
    name: "Ninh Bình – Tràng An và Tam Cốc",
    price: 2000000,
    rating: 4.8,
    reviews: 75,
    image:
      "https://images.unsplash.com/photo-1587502537745-84b07f3d8ce1?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1509927084005-42b2e72b0520?q=80&w=800",
    ],
    duration: "2 Ngày 1 Đêm",
    location: "Ninh Bình",
    description:
      "Khám phá thắng cảnh Tràng An, Tam Cốc, chèo thuyền và thưởng thức đặc sản địa phương.",
  },
  {
    id: "t12",
    slug: "ba-na-hills-sunset-2n1d",
    name: "Bà Nà Hills – Ngắm hoàng hôn trên núi",
    price: 2500000,
    rating: 4.7,
    reviews: 54,
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1549887530-ff4d0d13dbf3?q=80&w=800",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800",
    ],
    duration: "2 Ngày 1 Đêm",
    location: "Đà Nẵng",
    description:
      "Trải nghiệm cáp treo hiện đại, khám phá kiến trúc Pháp và ngắm hoàng hôn tuyệt đẹp trên Bà Nà Hills.",
  },

  // Bạn có thể copy thêm mock data ở đây nếu cần list dài
];

// 3. Data User (cho Dashboard)
export const USER_PROFILE = {
  id: "u1",
  name: "Nguyễn Văn A",
  email: "dev@fe-cheatsheet.com",
  avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  membership: "Gold Member",
};

export const USER_STATS = {
  totalSpent: 15400000,
  tripsCompleted: 4,
  upcomingTrips: 1,
  points: 340,
  chartData: [
    // Giả lập data biểu đồ
    { month: "Jan", value: 200 },
    { month: "Feb", value: 500 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 1000 },
  ],
};
