import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const items = [
  "Course Instructor",
  "How the course is laid out",
  "What you will learn by doing the course",
  "Course Exclusive Feature",
  "Free items with this products",
  "Student opinion",
  "Frequently Ask Questions"
];

const SliderText = () => {
  const scrollRef = useRef(null);
  const [text, setText] = useState(null);

  useEffect(() => {
    fetch('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course')
      .then(res => res.json())
      .then(data => {
        console.log(data.data);
        setText(data.data);
      });
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };


  const instructorSection = text?.sections?.find(sec => sec.type === "instructors");
  const instructor = instructorSection?.values?.[0];

  return (
    <div className="py-[30px]">
      <div className="max-w-[1260px] px-[20px] md:px-[30px] lg:px-[20px] mx-auto w-full">
        <div>

          <div className="border-b bg-white sticky top-0 z-[700px] max-w-[800px] w-full border-gray-300">
            <div className="flex items-center gap-2 overflow-hidden px-2 py-2">

              <button
                className="btn btn-circle btn-sm bg-gray-500 text-white"
                onClick={() => scroll("left")}
              >
                <FaChevronLeft />
              </button>

              <div
                ref={scrollRef}
                className="flex-1 flex overflow-x-auto space-x-6 no-scrollbar"
              >
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="whitespace-nowrap text-[17px]
                    font-medium text-gray-500 hover:text-black cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <button
                className="btn btn-circle btn-sm bg-gray-500 text-white"
                onClick={() => scroll("right")}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          {instructor && (
            <div className="mt-8 max-w-[800px] w-full">
              <h4 className="text-[32px] font-semibold text-black">
                {instructor.short_description}
              </h4>
              <div className="border-1 border-gray-300 py-[30px] mt-[7px] px-[20px]">
                <div className="flex gap-[30px]">
                  <div className="w-[100px] h-[100px]">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="space-y-1">
                    <Link
                      to={`https://10minuteschool.com/en/skills/instructors/${instructor.slug}/`}
                      className="flex items-center"
                    >
                      <h3 className="text-[22px] text-gray-800 font-semibold hover:text-green-500">
                        {instructor.name}
                      </h3>
                      <MdKeyboardArrowRight className="text-[30px] text-gray-500" />
                    </Link>
                    <div
                      className="text-[14px] font-medium text-gray-500"
                      dangerouslySetInnerHTML={{ __html: instructor.description }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default SliderText;