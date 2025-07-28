const IconImg = ({ item }) => {
  const { icon, text } = item || {};
  return (
    <div className="flex items-center gap-[10px] rounded-lg p-3 ">
      <div className="w-[20px] h-[20px]">
          <img src={icon} alt={text} className="w-full h-full"/>
      </div>
      <h2 className="text-[16px] text-gray-800">{text}</h2>
    </div>
  );
};

export default IconImg;
