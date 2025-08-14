"use client";
import useFetch from "@/hooks/useFetch";
import ProdItem from "./prodItem";
import { useEffect, useState } from "react";
import { ToPersianNumber } from "topersiannumber";
import { Skeleton } from "@mui/material";
import { TbCookie, TbCandy } from "react-icons/tb";
import { GiChocolateBar } from "react-icons/gi";
import { CiCoffeeBean } from "react-icons/ci";
import { GrCoffee } from "react-icons/gr";

const address = "https://688f2e0cf21ab1769f886fdb.mockapi.io/persons";
export default function Products({ filterProduct = "سوهان" }) {
  const [filterName, setFilterName] = useState(filterProduct);
  const { products, isFetching: loading } = useFetch(address);

  const filteredData = products.filter(product => product.group === filterName);

  useEffect(() => {
    switch (filterProduct) {
      case "dragee":
        setFilterName("دراژه");
        break;
      case "chocolate":
        setFilterName("شکلات");
        break;
      case "gaz":
        setFilterName("گز و نوقا");
        break;
      case "coffee":
        setFilterName("قهوه");
        break;

      default:
        setFilterName("سوهان");
    }
  }, [filterProduct]);

  function loadingContent() {
    return Array.from({ length: 4 }).map((_, i) => (
      <div key={i} className="w-full md:w-1/4 px-2">
        <Skeleton
          className="w-full text-blue-300 bg-slate-800/50"
          variant="rectangular"
          height={300}
        />
      </div>
    ));
  }

  return (
    <main>
      <ul className="w-3/4 mx-auto text-[#8a8068] *:py-3 *:px-7 p-4 flex flex-row flex-wrap justify-center *:hover:text-textColor *:duration-200 *:cursor-pointer">
        <li
          className={`${
            filterName === "سوهان" ? "text-textColor" : ""
          } flex flex-col justify-center items-center`}
          onClick={() => setFilterName("سوهان")}>
          <TbCookie className="w-5 h-5" />
          <p>سوهان</p>
        </li>
        <li
          className={`${
            filterName === "شکلات" ? "text-textColor" : ""
          } flex flex-col justify-center items-center`}
          onClick={() => setFilterName("شکلات")}>
          <GiChocolateBar className="w-5 h-5" />
          <p>شکلات</p>
        </li>
        <li
          className={`${
            filterName === "گز و نوقا" ? "text-textColor" : ""
          } flex flex-col justify-center items-center`}
          onClick={() => setFilterName("گز و نوقا")}>
          <TbCandy className="w-5 h-5" />
          <p>گز و نوقا</p>
        </li>
        <li
          className={`${
            filterName === "دراژه" ? "text-textColor" : ""
          } flex flex-col justify-center items-center`}
          onClick={() => setFilterName("دراژه")}>
          <GrCoffee className="w-5 h-5" />
          <p>دراژه</p>
        </li>
        <li
          className={`${
            filterName === "قهوه" ? "text-textColor" : ""
          } flex flex-col justify-center items-center`}
          onClick={() => setFilterName("قهوه")}>
          <CiCoffeeBean className="w-5 h-5" />
          <p>قهوه</p>
        </li>
      </ul>
      <section className="container mt-4 items-start">
        {loading && loadingContent()}
        {/* prodItem */}
        {products &&
          filteredData.map((product, index) => (
            <ProdItem
              classes="w-full md:w-1/4"
              key={product.id}
              product={product}
              backwardImage={product.backwardImage}
              forwardImage={product.forwardImage}
              group={product.group}
              id={product.id}
              title={ToPersianNumber(product.title)}
              price={ToPersianNumber(product.price)}
              delay={index}
            />
          ))}
      </section>
    </main>
  );
}
