import Icon from "../icon";
import { ToPersianNumber } from "topersiannumber";

export default function Counter({ id, count, handleCountUp, handleCountDown, classes }) {
  return (
    <div className={`flex flex-col items-center ${classes}`}>
      <Icon
        onClick={() => handleCountUp(id)}
        title="keyboard_arrow_up"
        classes="h-7 text-[#b6b6b6] duration-200 hover:text-textColor select-none !text-3xl"
      />
      <span className="text-[#b6b6b6] text-[13px]">
        {ToPersianNumber(count)}
      </span>
      <Icon
        onClick={() => handleCountDown(id)}
        title="keyboard_arrow_down"
        classes="h-7 text-[#b6b6b6] duration-200 hover:text-textColor select-none !text-3xl -mt-2"
      />
    </div>
  );
}
