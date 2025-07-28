import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";

const NeedClass = ()=>{
  const [names, setNames] = useState([]);

  useEffect(()=>{
    fetch('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course')
    .then(res=> res.json())
    .then(data=>{
      const value = data.data.sections[13] || []
      console.log(value)
      setNames(value)
    })
  },[])
  return(
    <div className="py-[60px] ">
        <div className="max-w-[1160px] w-full mx-auto px-[30px] md:px-[30px] lg:px-[0px]">
            <div className="">
                <h3 className="text-3xl mb-4 font-semibold text-black">{names.name}</h3>
                <div className="py-[20px] px-[20px] flex
                gap-[14px] flex-col border-1 border-gray-300">
                    <div className="flex flex-row gap-[12px]">
                      <FaCheck className="text-blue-500 text-[22px]"/>
                      <div>
                        <h4>ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)</h4>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[12px]">
                      <FaCheck className="text-blue-500 text-[22px]"/>
                      <div>
                        <h4>স্মার্টফোন অথবা পিসি</h4>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NeedClass;