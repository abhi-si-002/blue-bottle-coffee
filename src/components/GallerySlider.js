"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from "next/image";

export default function GallerySlider({ images }) {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={32}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="gallery-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-2xl border-2 border-amber-100 dark:border-primary/30 hover:border-amber-400 dark:hover:border-primary transition-all duration-300 bg-gradient-to-br from-white/60 to-amber-50 dark:from-background/80 dark:to-background/60 ">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none rounded-2xl" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Swiper navigation and pagination styling */}
      <style jsx global>{`
        .gallery-swiper .swiper-button-next,
        .gallery-swiper .swiper-button-prev {
          color: #f59e42;
          background: rgba(255,255,255,0.85);
          border-radius: 9999px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          width: 44px;
          height: 44px;
          top: 45%;
          transition: background 0.2s, color 0.2s;
        }
        .gallery-swiper .swiper-button-next:hover,
        .gallery-swiper .swiper-button-prev:hover {
          background: #f59e42;
          color: #fff;
        }
        .gallery-swiper .swiper-pagination-bullets {
          bottom: -32px !important;
        }
        .gallery-swiper .swiper-pagination-bullet {
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
        .gallery-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #f59e42;
          border-color: #f59e42;
        }
      `}</style>
    </div>
  );
} 