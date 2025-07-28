import IELTSSlider from "../IELTSSLIDER/IELTSSLIDER";
import SliderSwiper from "../SliderSwiper/SliderSwiper";

const CourseVideoSlider = ()=>{
  return(
    <div className="border-1 border-gray-200 mx-auto lg:max-w-[400px] w-full bg-white
       lg:absolute right-[0px] lg:right-[80px] px-[10px] py-[8px] bottom-0 lg:top-[200px]">
        <div className="max-w-[100%] lg:max-w-[800px] mx-auto w-full">
            <h2 className="text-white"></h2>
            <IELTSSlider></IELTSSlider>
            <SliderSwiper></SliderSwiper>
        </div>
        <div className="flex justify-between px-[10px]">
            <h5 className="text-[14px]">কোর্সটি সম্পর্কে বিস্তারিত জানতে</h5>
            <h5 className="text-green-400 font-medium text-[14px]">ফোন করুন (16910)</h5>
        </div>
    </div>
  )
}

export default CourseVideoSlider;