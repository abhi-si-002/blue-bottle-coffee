"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

export default function MenuSlider({ items }) {
  return (
    <div className="relative">
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
            <div className="p-6 rounded-xl bg-slate-800/50 dark:bg-gradient-to-br dark:from-background/50 dark:to-background border border-slate-700 dark:border-border/50 hover:border-amber-500 dark:hover:border-primary/50 transition-all hover:scale-105 hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-2 text-amber-400 dark:text-primary">{item.title}</h4>
              <p className="text-slate-200 dark:text-muted-foreground mb-4">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-amber-400 dark:text-primary">{item.price}</span>
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
          background: #f59e42;
          opacity: 0.4;
          width: 14px;
          height: 14px;
          margin: 0 6px !important;
          border-radius: 9999px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.08);
          border: 2px solid #fff;
          transition: opacity 0.2s, background 0.2s;
        }
        .menu-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #f59e42;
          border-color: #f59e42;
        }
      `}</style>
    </div>
  );
} 