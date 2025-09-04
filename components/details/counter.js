import { ToPersianNumber } from "topersiannumber";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function Counter({ id, count, handleCountUp, handleCountDown, classes }) {
  return (
    <div className={`flex flex-col items-center ${classes}`}>
      <IoIosArrowUp
        onClick={() => handleCountUp(id)}
        className="h-7 text-[#b6b6b6] duration-200 hover:text-textColor select-none !text-3xl"
      />
      <span className="text-[#b6b6b6] text-[13px]">
        {ToPersianNumber(count)}
      </span>
      <IoIosArrowDown
        onClick={() => handleCountDown(id)}
        className="h-7 text-[#b6b6b6] duration-200 hover:text-textColor select-none !text-3xl -mt-2"
      />
    </div>
  );
}

