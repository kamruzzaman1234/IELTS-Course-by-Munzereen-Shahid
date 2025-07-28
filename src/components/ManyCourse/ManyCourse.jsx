import { useEffect, useState } from "react";

const ManyCourse = ()=>{
  const [course, setCourse] = useState([]);

  useEffect(()=>{
    fetch('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course')
    .then(res=> res.json())
    .then(data=>{
        console.log(data.data)
    })
  },[])

  return(
      <div>

      </div>
  )
}

export default ManyCourse;