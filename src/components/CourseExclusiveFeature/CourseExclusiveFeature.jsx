import { useEffect, useState } from "react";

const CourseExclusiveFeature = () => {
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    fetch('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course')
      .then(res => res.json())
      .then(data => {
        const value = data.data.sections[8].values || [];
        setFeature(value);
        console.log(value)
      });
  }, []);

  return (
    <div className="py-[60px] px-4 max-w-[1100px] mx-auto">
      <h2 className="text-black text-3xl font-bold mb-6">কোর্স এক্সক্লুসিভ ফিচার</h2>

      {feature.map((item, index) => (
        <div key={index} className="flex flex-col lg:flex-row items-start gap-6 mb-10 border border-gray-200 rounded-lg p-6 shadow-sm">

          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {item.checklist && item.checklist.map((point, idx) => (
                <li key={idx}>
                  {point}

                </li>

              ))}
            </ul>
          </div>

          {/* Image on Right */}
          {item.image && (
            <div className="w-full lg:w-[300px] h-auto">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseExclusiveFeature;

