"use client";
import useStore from "@/store/useStore";
import { useEffect, useState } from "react";
import { ToPersianNumber } from "topersiannumber";
export default function OrderNumbers() {
  const [orderCounts, setOrderCounts] = useState(0)
  const cart = useStore(state => state.cart);

  useEffect(() => {
  const count = cart.reduce((result, item) => result + item.quantity, 0);
    setOrderCounts(count)
  }, [cart]);


  return (
    orderCounts > 0 && (
      <span className="absolute flex justify-center items-center text-[10px] bg-slate-700 rounded-full w-5 h-5 text-white font-semibold -right-2 -top-2">
        {ToPersianNumber(orderCounts)}
      </span>
    )
  );
}
