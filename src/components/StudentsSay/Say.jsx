import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './swiper-custom.css';

const Say = ({ items }) => {
  return (
    <div className="relative max-w-[1160px] w-full mx-auto px-4">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={2}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        className="mySwiper"
      >
        {items.map((item, index) => {
          const { name, description, testimonial, thumb, video_url, profile_image } = item;

          return (
            <SwiperSlide key={index} className="py-[20px] border border-gray-200 rounded-xl">
              <div className="flex flex-col gap-[12px] py-[20px] px-[20px]">
                <div className="w-full">
                  <iframe
                    width="100%"
                    height="215"
                    className="rounded-xl shadow-md"
                    src={`https://www.youtube.com/embed/${video_url}`}
                    title={name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex gap-[15px] items-center">
                  <div className="w-[40px] h-[40px]">
                    <img src={profile_image} alt={name} className="rounded-full w-full h-full object-cover" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-[18px] font-semibold text-black">{name}</h4>
                    <p className="text-gray-600 text-[14px]">{testimonial}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Say;
