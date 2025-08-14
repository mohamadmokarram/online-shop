"use client";
import useStore from "@/store/useStore.js";
import Icon from "../icon";
import { useEffect } from "react";

export default function AddToCard({ product, ...props }) {
  const cart = useStore(state => state.cart);
  const addProduct = useStore(state => state.addProduct);

  const productItem = product;

  // showing cart array
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <button
      onClick={() => addProduct(productItem)}
      className="!flex flex-row absolute bottom-0 bg-[#30ae96] text-slate-700 opacity-0 group-hover:opacity-100 cursor-pointer hover:bg-[#39d4b6] duration-300"
      {...props}>
      <div className="w-1/4 flex items-center bg-[#3a3a3c] rounded-l-md justify-center">
        <Icon
          title="shopping_cart"
          fontsize="text-2xl"
          classes="text-textColor"
        />
      </div>

      <p className="w-3/4 p-2 flex items-center justify-center text-center text-slate-700 text-[12px] select-none">
        افزودن به سبد خرید
      </p>
    </button>
  );
}
