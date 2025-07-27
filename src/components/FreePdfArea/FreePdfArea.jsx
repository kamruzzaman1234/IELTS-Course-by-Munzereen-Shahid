import { useEffect, useState } from 'react';

const FreePdfArea = () => {
  const [pdfData, setPdfData] = useState(null);

  useEffect(() => {
    fetch("https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course")
      .then((res) => res.json())
      .then((data) => {
        const section = data?.data?.sections?.[4];
        const value = section?.values?.[0];
        if (value) {
          setPdfData(value);
        }
      });
  }, []);

  if (!pdfData) return null;

  return (
    <div
      className="rounded-lg p-4 md:p-8"
      style={{
        backgroundImage: `url(${pdfData.background?.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">

        <div className="flex-1 text-white">
          <div className="flex items-center gap-2 mb-2">
            <img src={pdfData.top_left_icon_img} alt="Icon" className="w-6 h-6" />
            <span className="text-xl font-semibold text-orange-400">Free PDF</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{pdfData.title}</h2>
          <p className="text-sm md:text-base mb-4">{pdfData.description}</p>
          <a
            href={pdfData.cta.clicked_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded shadow-md transition"
          >
            {pdfData.cta.text}
          </a>
        </div>


        <div className="flex-1">
          <img
            src={pdfData.thumbnail}
            alt="PDF Preview"
            className="w-full rounded-lg border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default FreePdfArea;
