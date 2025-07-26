import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Banner = () => {
  const [showBanner, setShowBanner] = useState(true);

  const handleClose = () => {
    setShowBanner(false); 
  };

  if (!showBanner) {
    return null; 
  }

  return (
    <div className="relative">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfX6YBGXnY8YxNlVZOEP6Y9GVCWVo9Qe-aeCuGM_4NV5Hu30Q/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full cursor-pointer"
      >
        <img
          src="https://i.ibb.co/DqwJBW1/dasktop-banner-1753270611489.png"
          className="object-cover w-full h-full"
          alt="Banner"
        />
      </a>

      <div className="absolute top-[10px] right-[20px]">
        <IoMdClose
          onClick={handleClose}
          className="text-[18px] text-white cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Banner;
