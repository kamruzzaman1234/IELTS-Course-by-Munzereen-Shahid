import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ILETSSLIDER = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    "https://i.ibb.co/whJXkgqR/slider1.jpg",
    "https://i.ibb.co/JwpN6102/slider2.jpg",
    "https://i.ibb.co/rfHXs1wN/slider3.jpg",
    "https://i.ibb.co/5f8XYJ2/slider4.png",
    "https://i.ibb.co/TxLtCHNw/slider5.jpg",
    "https://i.ibb.co/39YjqHbc/slider6.jpg",
    "https://i.ibb.co/whcFTNGJ/slider7.jpg",
    "https://i.ibb.co/whJXkgqR/slider1.jpg",
    "https://i.ibb.co/rfHXs1wN/slider3.jpg",
    "https://i.ibb.co/TxLtCHNw/slider5.jpg",
  ];

  return (
    <div className="max-w-[1160px] mx-auto px-4 py-10">
      {/* Main Slider */}
      <Swiper
        loop={true}
        spaceBetween={20}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="rounded-xl overflow-hidden"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`slide-${idx}`}
              className="w-full h-[350px] object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-6"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`thumb-${idx}`}
              className="h-[80px] w-full object-cover rounded-lg border-2 border-transparent hover:border-red-500 transition-all duration-200 cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ILETSSLIDER;
