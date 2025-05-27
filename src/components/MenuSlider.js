"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

export default function MenuSlider({ items, themeColor = "#00754a", className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={32}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="menu-swiper"
      >
        {items.map((item, idx) => (
          <SwiperSlide key={item.title + idx}>
            <div className="p-6 rounded-2xl bg-white shadow-lg border-2 border-[#f1f8f5] hover:border-[#00754a] transition-all hover:scale-105 hover:shadow-xl">
              <h4 className="text-xl font-semibold mb-2 text-[#1e3932]">{item.title}</h4>
              <p className="text-[#1e3932]/80 mb-4">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-[#00754a]">{item.price}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .menu-swiper .swiper-pagination-bullets {
          bottom: -32px !important;
        }
        .menu-swiper .swiper-pagination-bullet {
          background: ${themeColor};
          opacity: 0.4;
          width: 12px;
          height: 12px;
          margin: 0 6px !important;
          border-radius: 9999px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.08);
          border: 2px solid #fff;
          transition: all 0.2s ease;
        }
        .menu-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: ${themeColor};
          border-color: ${themeColor};
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
} 