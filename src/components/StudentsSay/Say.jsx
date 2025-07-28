import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Say = ({ items }) => {
  return (
    <div className="max-w-4xl w-full mx-auto px-4">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        className="mySwiper"
      >
        {items.map((item, index) => {
          const { name, description, testimonial, thumb, video_url, profile_image } = item;

          return (
            <SwiperSlide key={index} className=" py-[20px] border-1 border-gray-200">
                  <div className="flex flex-col items-center py-[40px]
                  border-1 px-[40px] border-gray-300">
                    <div>
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
                  </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Say;
