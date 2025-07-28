import { FaCheck } from "react-icons/fa6";
const Learn = ({item})=>{
    const {text} = item
  return(
    <div className="flex gap-[16px]">
          <div>
              <FaCheck className="text-[18px]  text-blue-500"/>
          </div>
          <div>
            <h3>{text}</h3>
          </div>
    </div>
  )
}

export default Learn;