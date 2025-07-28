import LearnFAQ from "./LearnFaq";

const ContentPreview = ()=>{
  return(
    <div className="py-[60px] px-[30px] md:px-[30px] lg:px-0">
        <div className="flex flex-col gap-[16px]">
            <div>
               <h2 className="text-3xl text-black font-bold">কন্টেন্ট প্রিভিউ</h2>
            </div>
            <div className="border-1 border-gray-300 rounded-lg px-[30px] py-[20px] ">
              <LearnFAQ></LearnFAQ>
            </div>
        </div>
    </div>
  )
}

export default ContentPreview;