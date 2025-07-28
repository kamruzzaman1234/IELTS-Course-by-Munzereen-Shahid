import { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { BsFileText } from "react-icons/bs";
import { MdOutlinePlayCircleFilled } from "react-icons/md";

const courseData = [
  {
    title: "Introduction",
    items: [
      { type: "video", title: "IELTS: Introduction", free: true },
      { type: "video", title: "IELTS: Overview", free: true },
      { type: "video", title: "How to Prepare for IELTS?", free: true },
      { type: "video", title: "Making a Daily Routine", free: true },
      { type: "video", title: "Different Sentence Structures to Improve Writing", free: false },
      { type: "note", title: "IELTS General Facts" },
      { type: "note", title: "IELTS Vocabulary" },
    ],
  },
  {
    title: "IELTS Course by Munzereen Shahid | Exclusive Support Group",
    items: [],
  },
  {
    title: "Academic Reading",
    items: [],
  },
  {
    title: "Academic Reading Mock Test",
    items: [],
  },
];

const LearnFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto  rounded-md ">
      {courseData.map((section, index) => (
        <div key={index} className="py-2">
          <div
            className="cursor-pointer px-2 py-2 font-semibold text-gray-400
             flex justify-between items-center"
            onClick={() => toggleAccordion(index)}
          >
            <span>{section.title}</span>
            <span className="text-[10px]">{openIndex === index ? "▲" : "▼"}</span>
          </div>
          {openIndex === index && (
            <div className="px-4 pb-4">
              {section.items.length === 0 ? (
                <p className="text-gray-500 text-sm">IELTS Course by Munzereen Shahid |
                Exclusive Support Group গ্রুপটিতে জয়েন করার নিয়মাবলী</p>
              ) : (
                section.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-4 ">
                    <div className="flex items-center gap-2 text-black">
                      {item.type === "video" ? (
                        item.free ? (
                          <FaPlayCircle className="text-green-500" />
                        ) : (
                          <MdOutlinePlayCircleFilled className="text-black" />
                        )
                      ) : (
                        <BsFileText className="text-black" />
                      )}
                      <span className={`${!item.free ? 'text-black' : ''}`}>
                        {item.type === "video" ? "Video: " : ""}
                        {item.title}
                      </span>
                    </div>
                    {item.free && (
                      <span className="text-green-600 text-sm font-medium cursor-pointer">ফ্রি দেখুন</span>
                    )}
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LearnFAQ;
