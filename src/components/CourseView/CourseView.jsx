import { useEffect, useState } from "react";
import CourseDesign from "./CourseDesign";

const CourseView = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course")
      .then((res) => res.json())
      .then((data) => {

        const values = data.data.sections[3]?.values || [];
        console.log(values);
        setFeatures(values);
      });
  }, []);

  return (
    <div className="max-w-[1160px] mx-auto px-[30px] md:px-[30px] lg:px-[0px] py-10">
      <h2 className="text-[24px] md:text-[32px] font-bold text-black mb-3">
        How the course is laid out
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-black
      rounded-lg py-[30px] px-[30px]">
        {features.map((item, index) => (
          <CourseDesign key={index} item={item}></CourseDesign>

        ))}
      </div>
    </div>
  );
};

export default CourseView;
