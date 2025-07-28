import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Function to remove HTML tags from string
const stripHTMLTags = (htmlString) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlString;
  return tempElement.textContent || tempElement.innerText || "";
};

const DetailsCourse = () => {
  const [course, setCourse] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course')
      .then(res => res.json())
      .then(data => {
        const value = data.data.sections[7].values || [];
        setCourse(value);
      });
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-[60px] px-4 max-w-[1360px] w-full mx-auto">
      <h3 className="text-3xl font-semibold mb-4">কোর্স সম্পর্কে বিস্তারিত</h3>
      {course.map((item, index) => (
        <div key={index} className="border border-gray-300 rounded-md mb-4">
          {/* Title (HTML tags removed) */}
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center px-5 py-4 text-left text-[18px] font-semibold"
          >
            <span>{stripHTMLTags(item.title)}</span>
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {/* Description (HTML content allowed) */}
          {openIndex === index && (
            <div
              className="px-6 pb-5 text-[16px] text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DetailsCourse;
