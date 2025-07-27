const CourseDesign = ({item})=>{
  const {icon, subtitle, title} = item;
  return(
    <div className="py-[10px] flex gap-[20px] ">
        <div className="">
            <img src={icon} alt="title" className=" object-cover"/>
        </div>
        <div className="w-[300px] space-y-1">
            <h3 className="text-white text-[20px]">{title}</h3>
            <p className="text-gray-400 text-[14px]">{subtitle}</p>
        </div>
    </div>
  )
}


export default CourseDesign;