import { useEffect, useState } from "react";
import Learn from "./Learn";

const LearnCourse = () => {
  const [features, setFeatures] = useState([]);

   useEffect(() => {
      fetch("https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course")
        .then((res) => res.json())
        .then((data) => {

          const values = data.data.sections[5]?.values || [];
          console.log(values);
          setFeatures(values);
        });
    }, []);

  return (
    <div className="max-w-[1160px] mx-auto mt-10 px-[30px] md:px-[30px] lg:px-[0px] bg-white rounded-lg ">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-500 mb-6  pb-2">
        কোর্সটি করে যা শিখবেন
      </h2>
      <div className="grid md:grid-cols-2 border-1 border-gray-300
      rounded-lg px-[20px] py-[30px] gap-6">
          {features.map((item, index)=>(
            <Learn key={index} item={item}></Learn>
          ))}
      </div>
    </div>
  );
};

export default LearnCourse;
