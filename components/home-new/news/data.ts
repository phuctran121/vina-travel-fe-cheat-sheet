export const NOTICES_DATA = Array(12)
  .fill(null)
  .map((_, i) => {
    const categories = ["공지사항", "사업공고", "드론구인"];
    const randomCat = categories[i % 3];

    const imageIndex = (i % 4) + 1;
    const imagePath = `/images/home/news-notice-image-${imageIndex}.png`;

    return {
      id: `notice-${i}`,
      category: randomCat,
      image: imagePath,
      title:
        i === 0
          ? `드론정보포털시스템 시스템 일부기능 중단 안내`
          : `2025년 제2차 드론 국제행사 참가기업 모집`,
      date: "2025.11.18",
    };
  });

export const BUSINESS_DATA = Array(12)
  .fill(null)
  .map((_, i) => {
    const categories = ["소식", "이벤트", "기타"];
    const randomCat = categories[i % 3];

    const imageIndex = (i % 4) + 1;
    const imagePath = `/images/home/news-business-image-${imageIndex}.png`;

    return {
      id: `biz-${i}`,
      category: randomCat,
      image: imagePath,
      title: `Vol. 664 드론 뉴스레터`,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "2025.11.18",
    };
  });
