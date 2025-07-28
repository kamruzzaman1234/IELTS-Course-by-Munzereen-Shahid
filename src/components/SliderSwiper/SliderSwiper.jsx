import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import IconImg from './IconImg';
import { Link } from 'react-router-dom';

const CoursePreviewSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [names, setNames] = useState('');
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course')
      .then(res => res.json())
      .then(data => {
        const name = data.data.sections[3].name;
        const value = data.data.checklist;
        setNames(name);
        setCourse(value); // ✅ Set the course data from checklist
      });
  }, []);

  return (
    <div className="max-w-[1160px] mx-auto px-4 py-[20px]">
      <div className="flex flex-col gap-[14px]">
        <div className="flex flex-col gap-[20px]">
            <h4 className="flex gap-[14px] text-[20px] font-semibold">৳3850<del>৳5000 </del>
             <span className="bg-orange-400
             text-white font-semibold px-3 py-[8px]">1150 ৳ ছাড়</span> </h4>
             <Link to="https://app.10minuteschool.com/checkout"
             className="text-white bg-green-500 w-full
             font-semibold py-[10px] text-center rounded-lg">এই কোর্সটি কিনুন</Link>
          <div className="">

          </div>
        </div>
        <h3 className="text-black text-[20px] font-semibold">{names}</h3>
        <div className="flex flex-wrap gap-[10px]">
          {course.map((item, index) => (
            <IconImg key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePreviewSlider;
