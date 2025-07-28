import { useEffect, useState } from "react";
import './style.css';
import { FaStar } from "react-icons/fa";

const HeadersTitle = ()=>{
  const [info, setInfo] = useState([]);

  useEffect(()=>{
    fetch('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course')
    .then(res=> res.json())
    .then(data=>{
      console.log(data.data)
      setInfo(data.data)
    })
  },[])
  return(
    <div className="bg-img">
        <div className="max-w-[1160px] w-full mx-auto px-[30px] md:px-[30px] lg:px-[0px]">
            <div className="flex flex-col gap-[10px] max-w-[710px] w-full">
              <h2 className="text-[32px] text-white font-bold">{info.title}</h2>
            <div className="flex gap-[10px] flex-col md:flex-row lg:flex-row lg:items-center">
                <div className="flex gap-1">
                  <FaStar className="text-[20px] text-yellow-600"/>
                  <FaStar className="text-[20px] text-yellow-600"/>
                  <FaStar className="text-[20px] text-yellow-600"/>
                  <FaStar className="text-[20px] text-yellow-600"/>
                  <FaStar className="text-[20px] text-yellow-600"/>
                </div>
                <div>
                    <p className="text-white text-[16px]
                    font-semibold">(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</p>
                </div>
            </div>
            <p className="text-gray-500 text-[17px] font-semibold">Get complete preparation of Academic IELTS and General Training IELTS in one course!
               Join our IELTS Course today to achieve your desired
               band score under the guidance of the best IELTS Instructor in the country</p>
            </div>
        </div>
    </div>
  )
}

export default HeadersTitle;