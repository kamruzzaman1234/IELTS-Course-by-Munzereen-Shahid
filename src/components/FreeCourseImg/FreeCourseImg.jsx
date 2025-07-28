import { useEffect, useState } from "react";
import './free.css'

const FreeCourseImg = ()=>{

  const [free, setFree] = useState([])
  useEffect(()=>{
    fetch('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course')
    .then(res=> res.json())
    .then(data=> {
      const value = data.data.sections[9].name
      console.log(value)
      setFree(value)
    })
  },[])

  return(
      <div className="">
        <div className="max-w-[1160px] px-[30px] md:px-[30px] lg:px-[0px] w-full mx-auto">
          <div>
              <h3 className="text-3xl mb-4 font-bold text-black">{free}</h3>
              <div className="bg-imgs px-[20px] rounded-lg">
                  <h4 className="text-[18px] text-white">ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)</h4>
                  <ul className="text-white space-y-3">
                      <li>360 পৃষ্ঠা</li>
                      <li>প্রিমিয়াম হার্ডকপি</li>
                      <li>ফ্রি ডেলিভারি</li>
                      <li>৪ কর্মদিবসের মধ্যে সারাদেশে ডেলিভারি</li>
                  </ul>
              </div>
          </div>
    </div>
      </div>
  )
}
export default FreeCourseImg;