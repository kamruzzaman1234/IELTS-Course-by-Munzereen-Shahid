import { useEffect, useState } from "react";
import Say from "./Say";

const StudentsSay = () => {
  const [text, setText] = useState([]);

  useEffect(() => {
    fetch('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course')
      .then(res => res.json())
      .then(data => {
        const values = data?.data?.sections[12]?.values || [];
        setText(values);
      });
  }, []);

  return (
    <div className=" py-[0px] flex flex-col gap-4  px-[20px]
    md:px-[30px] lg:px-[0px] b">
      <h2 className="text-[22px] font-semibold ">শিক্ষার্থীরা যা বলছে</h2>
      <Say items={text} />
    </div>
  );
};

export default StudentsSay;
