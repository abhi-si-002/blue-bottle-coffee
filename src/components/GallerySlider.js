"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from "next/image";

export default function GallerySlider({ images, themeColor = "#00754a", className = "" }) {
  return (
    <div className={`relative ${className}`}>
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
            <div className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-lg border-2 border-[#f1f8f5] hover:border-[#00754a] transition-all duration-300 bg-gradient-to-br from-white/60 to-[#f1f8f5]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3932]/70 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none rounded-2xl" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Swiper navigation and pagination styling */}
      <style jsx global>{`
        .gallery-swiper .swiper-button-next,
        .gallery-swiper .swiper-button-prev {
          color: ${themeColor};
          background: rgba(255,255,255,0.95);
          border-radius: 9999px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          width: 48px;
          height: 48px;
          top: 45%;
          transition: all 0.2s ease;
        }
        .gallery-swiper .swiper-button-next:hover,
        .gallery-swiper .swiper-button-prev:hover {
          background: ${themeColor};
          color: #fff;
          transform: scale(1.05);
        }
        .gallery-swiper .swiper-pagination-bullets {
          bottom: -32px !important;
        }
        .gallery-swiper .swiper-pagination-bullet {
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
        .gallery-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: ${themeColor};
          border-color: ${themeColor};
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
} 