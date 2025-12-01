// lib/mock-db.ts

export const BLOG_POSTS = [
  {
    id: 1,
    slug: "kinh-nghiem-du-lich-ha-long",
    title: "Kinh nghiệm du lịch Hạ Long tự túc 2025",
    excerpt:
      "Tổng hợp chi phí, địa điểm ăn chơi, ngủ nghỉ chi tiết nhất cho người mới đi lần đầu.",
    image:
      "https://images.unsplash.com/photo-1559592413-7cec4d0aa73b?q=80&w=800",
    date: "20/11/2025",
    content: "Nội dung bài viết rất dài về Hạ Long...",
  },
  {
    id: 2,
    slug: "top-5-mon-an-da-nang",
    title: "Top 5 món ăn không thể bỏ qua khi đến Đà Nẵng",
    excerpt:
      "Đà Nẵng không chỉ đẹp mà còn là thiên đường ẩm thực với Mì Quảng, Bánh tráng thịt heo...",
    image:
      "https://images.unsplash.com/photo-1565691079366-0775d7870a25?q=80&w=800",
    date: "18/11/2025",
    content: "Nội dung bài viết về ẩm thực Đà Nẵng...",
  },
  {
    id: 3,
    slug: "bi-kip-san-ve-may-bay-gia-re",
    title: "Bí kíp săn vé máy bay giá rẻ mùa cao điểm",
    excerpt:
      "Hướng dẫn cách đặt vé sớm, chọn giờ bay và sử dụng các app để có giá tốt nhất.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800",
    date: "15/11/2025",
    content: "Nội dung bài viết về vé máy bay...",
  },
];

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
  {
    id: "t13",
    slug: "mui-ne-sand-dunes-2n1d",
    name: "Mũi Né – Đồi Cát Bay & Làng Chài",
    price: 2100000,
    rating: 4.4,
    reviews: 61,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=800",
    ],
    duration: "2 Ngày 1 Đêm",
    location: "Bình Thuận",
    description:
      "Tham quan đồi cát bay, Hòn Rơm và ngắm bình minh làng chài Mũi Né.",
  },
  {
    id: "t14",
    slug: "quy-nhon-ky-co-3n2d",
    name: "Quy Nhơn – Kỳ Co – Eo Gió",
    price: 3500000,
    rating: 4.7,
    reviews: 84,
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800",
    ],
    duration: "3 Ngày 2 Đêm",
    location: "Bình Định",
    description:
      "Check-in Kỳ Co, Eo Gió, thưởng thức hải sản và biển xanh tuyệt đẹp.",
  },
  {
    id: "t15",
    slug: "con-dao-resort-3n2d",
    name: "Côn Đảo – Thiên đường nghỉ dưỡng",
    price: 5200000,
    rating: 4.8,
    reviews: 39,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    gallery: [],
    duration: "3 Ngày 2 Đêm",
    location: "Bà Rịa - Vũng Tàu",
    description:
      "Hành trình khám phá đảo thiêng Côn Đảo, biển trong vắt và không khí yên bình.",
  },
  {
    id: "t16",
    slug: "ha-giang-loop-4n3d",
    name: "Hà Giang – Hành trình Dong Van Loop",
    price: 3400000,
    rating: 4.9,
    reviews: 120,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1509644851169-2acc08aa25b9?q=80&w=800",
    ],
    duration: "4 Ngày 3 Đêm",
    location: "Hà Giang",
    description:
      "Chinh phục đèo Mã Pì Lèng, Dinh Vua Mèo và cao nguyên đá Đồng Văn.",
  },
  {
    id: "t17",
    slug: "can-tho-floating-market-2n1d",
    name: "Cần Thơ – Chợ nổi Cái Răng",
    price: 1700000,
    rating: 4.5,
    reviews: 68,
    image:
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1200",
    gallery: [],
    duration: "2 Ngày 1 Đêm",
    location: "Cần Thơ",
    description:
      "Khám phá chợ nổi Cái Răng, thưởng thức món ngon miền Tây sông nước.",
  },
  {
    id: "t18",
    slug: "sa-dec-flower-village-1n",
    name: "Sa Đéc – Làng hoa & nhà cổ Huỳnh Thủy Lê",
    price: 900000,
    rating: 4.3,
    reviews: 41,
    image:
      "https://images.unsplash.com/photo-1520699918507-0c369528e18f?q=80&w=1200",
    gallery: [],
    duration: "1 Ngày",
    location: "Đồng Tháp",
    description:
      "Tham quan làng hoa lớn nhất miền Tây và các công trình văn hóa đặc sắc.",
  },
  {
    id: "t19",
    slug: "pleiku-bien-ho-2n1d",
    name: "Pleiku – Biển Hồ & Núi Lửa Chư Đăng Ya",
    price: 2300000,
    rating: 4.6,
    reviews: 37,
    image:
      "https://images.unsplash.com/photo-1500534314209-a26a7e662a87?q=80&w=1200",
    gallery: [],
    duration: "2 Ngày 1 Đêm",
    location: "Gia Lai",
    description:
      "Khám phá Biển Hồ Pleiku, đồi chè Tân Sơn và núi lửa Chư Đăng Ya.",
  },
  {
    id: "t20",
    slug: "buon-me-thuot-coffee-tour-2n1d",
    name: "Buôn Ma Thuột – Hành trình cà phê",
    price: 2200000,
    rating: 4.4,
    reviews: 52,
    image:
      "https://images.unsplash.com/photo-1486915309851-b0cc1f8a008e?q=80&w=1200",
    gallery: [],
    duration: "2 Ngày 1 Đêm",
    location: "Đắk Lắk",
    description:
      "Tham quan bảo tàng cà phê, thác Dray Nur và trải nghiệm văn hóa Tây Nguyên.",
  },
  {
    id: "t21",
    slug: "quang-ngai-ly-son-2n1d",
    name: "Lý Sơn – Vương quốc tỏi",
    price: 2700000,
    rating: 4.5,
    reviews: 48,
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200",
    gallery: [],
    duration: "2 Ngày 1 Đêm",
    location: "Quảng Ngãi",
    description:
      "Khám phá đảo Lý Sơn, hang Câu và ngắm hoàng hôn tuyệt đẹp trên biển.",
  },
  {
    id: "t22",
    slug: "binh-duong-dai-nam-1n",
    name: "KDL Đại Nam – City Tour",
    price: 850000,
    rating: 4.2,
    reviews: 32,
    image:
      "https://images.unsplash.com/photo-1565691079366-0775d7870a25?q=80&w=1200",
    gallery: [],
    duration: "1 Ngày",
    location: "Bình Dương",
    description:
      "Tham quan khu du lịch Đại Nam – điểm vui chơi nổi tiếng miền Nam.",
  },
  {
    id: "t23",
    slug: "vinh-long-mekong-1n",
    name: "Vĩnh Long – Chợ Nổi & Làng Nghề",
    price: 950000,
    rating: 4.3,
    reviews: 36,
    image:
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1200",
    gallery: [],
    duration: "1 Ngày",
    location: "Vĩnh Long",
    description:
      "Đi thuyền trên sông, thăm làng nghề và thưởng thức trái cây miệt vườn.",
  },
  {
    id: "t24",
    slug: "vinh-ha-tinh-thien-cam-2n1d",
    name: "Biển Thiên Cầm – Nghỉ dưỡng",
    price: 1900000,
    rating: 4.1,
    reviews: 28,
    image:
      "https://images.unsplash.com/photo-1506158669146-619067262a00?q=80&w=1200",
    gallery: [],
    duration: "2 Ngày 1 Đêm",
    location: "Hà Tĩnh",
    description: "Tham quan bãi biển Thiên Cầm nước xanh, cát trắng hoang sơ.",
  },
  {
    id: "t25",
    slug: "y-ty-cloud-hunting-3n2d",
    name: "Y Tý – Săn mây & bản làng cổ",
    price: 3300000,
    rating: 4.8,
    reviews: 44,
    image:
      "https://images.unsplash.com/photo-1509644851169-2acc08aa25b9?q=80&w=1200",
    gallery: [],
    duration: "3 Ngày 2 Đêm",
    location: "Lào Cai",
    description:
      "Săn mây Y Tý, tham quan bản làng cổ và trải nghiệm văn hóa vùng cao.",
  },
  {
    id: "t26",
    slug: "lang-son-mau-son-2n1d",
    name: "Mẫu Sơn – Săn mây & đặc sản núi",
    price: 2400000,
    rating: 4.4,
    reviews: 31,
    image:
      "https://images.unsplash.com/photo-1549887530-ff4d0d13dbf3?q=80&w=1200",
    gallery: [],
    duration: "2 Ngày 1 Đêm",
    location: "Lạng Sơn",
    description:
      "Khám phá vùng núi Mẫu Sơn mát lạnh quanh năm và đặc sản địa phương.",
  },
  {
    id: "t27",
    slug: "bac-kan-ba-be-2n1d",
    name: "Hồ Ba Bể – Vườn quốc gia",
    price: 2600000,
    rating: 4.7,
    reviews: 56,
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200",
    gallery: [],
    duration: "2 Ngày 1 Đêm",
    location: "Bắc Kạn",
    description:
      "Đi thuyền hồ Ba Bể, thăm động Puông và trải nghiệm thiên nhiên hoang sơ.",
  },
  {
    id: "t28",
    slug: "hoa-binh-mai-chau-2n1d",
    name: "Mai Châu – Bản Lác & đèo Thung Khe",
    price: 2100000,
    rating: 4.6,
    reviews: 62,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
    gallery: [],
    duration: "2 Ngày 1 Đêm",
    location: "Hòa Bình",
    description:
      "Khám phá bản Lác, đèo Thung Khe và thưởng thức ẩm thực Tây Bắc.",
  },
  {
    id: "t29",
    slug: "binh-thuan-ke-ga-2n1d",
    name: "Kê Gà – Hải đăng cổ nhất Việt Nam",
    price: 1600000,
    rating: 4.2,
    reviews: 40,
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200",
    gallery: [],
    duration: "2 Ngày 1 Đêm",
    location: "Bình Thuận",
    description: "Tham quan mũi Kê Gà, tắm biển và khám phá hải đăng cổ.",
  },
  {
    id: "t30",
    slug: "phu-yen-gahn-da-dia-3n2d",
    name: "Phú Yên – Gành Đá Dĩa & Bãi Xép",
    price: 3000000,
    rating: 4.7,
    reviews: 79,
    image:
      "https://images.unsplash.com/photo-1520699918507-0c369528e18f?q=80&w=1200",
    gallery: [],
    duration: "3 Ngày 2 Đêm",
    location: "Phú Yên",
    description:
      "Check-in Gành Đá Dĩa, Bãi Xép hoa vàng cỏ xanh và thưởng thức hải sản.",
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
