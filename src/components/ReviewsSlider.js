"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const reviews = [
  {
    initials: "AL",
    name: "Alex Lee",
    rating: 5,
    text: "Absolutely love the coffee here! The staff is friendly and the atmosphere is perfect for relaxing or working.",
    time: "2 days ago",
  },
  {
    initials: "MS",
    name: "Maria Sanchez",
    rating: 5,
    text: "Best cold brew in the city. I always stop by for a New Orleans and a wafel!",
    time: "1 week ago",
  },
  {
    initials: "JK",
    name: "James Kim",
    rating: 4,
    text: "Great selection of espresso drinks and the pastries are always fresh. Highly recommend!",
    time: "3 weeks ago",
  },
  {
    initials: "SR",
    name: "Sophie Robinson",
    rating: 5,
    text: "The staff really knows their coffee. I appreciate the sustainable sourcing and the cozy vibe.",
    time: "1 month ago",
  },
  {
    initials: "DT",
    name: "David Tran",
    rating: 5,
    text: "A wonderful place to meet friends or get some work done. The Lemon Yuzu Fizz is my favorite!",
    time: "2 months ago",
  },
];

export default function ReviewsSlider() {
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={32}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="reviews-swiper"
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-amber-500 transition-all hover:scale-105 hover:shadow-lg flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-lg">{review.initials}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200">{review.name}</h4>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-slate-300 flex-1">"{review.text}"</p>
              <p className="text-sm text-slate-400 mt-4">{review.time}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .reviews-swiper .swiper-pagination-bullets {
          bottom: -32px !important;
        }
        .reviews-swiper .swiper-pagination-bullet {
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
        .reviews-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #f59e42;
          border-color: #f59e42;
        }
      `}</style>
    </div>
  );
} 