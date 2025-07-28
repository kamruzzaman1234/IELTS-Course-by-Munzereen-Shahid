import { useEffect, useState } from "react";

const CourseExclusiveFeature = ()=>{
  const [feature, setFeature] = useState([]);

  useEffect(()=>{
    fetch('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course')
    .then(res=> res.json())
    .then(data=>{
      const mainF = data.checklist[7].values
      console.log(data.checklist);
      setFeature(data)
    })
  },[])

  return(
    <div className="py-[60px]">
        <h2 className="text-black text-3xl font-bold">{feature.name}</h2>
    </div>
  )
}
export default CourseExclusiveFeature;