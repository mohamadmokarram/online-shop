"use client";
import { useState } from "react";
import Counter from "./counter";
import useStore from "@/store/useStore";

export default function ProductCounter({ product }) {
  const [count, setCount] = useState(1);
  const addToProducts = useStore(state => state.addProduct)

  function increaseCount() {
    setCount(count => count + 1);
  }
  function decreaseCount() {
    setCount(count => (count > 1 ? count - 1 : count));
  }

  return (
    <div className="flex flex-row gap-4 mt-2">
      <button
        onClick={() => addToProducts(product, count)}
        type="button"
        className="text-[10px] self-center duration-200 text-[#b6b6b6] p-2 border border-[#b6b6b6] cursor-pointer hover:text-white">
        افزودن به سبد خرید
      </button>
      {/* counter */}
      <Counter
        count={count}
        handleCountUp={increaseCount}
        handleCountDown={decreaseCount}
      />
    </div>
  );
}
