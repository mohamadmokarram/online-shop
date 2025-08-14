"use client";
import Header from "@/components/header";
import Nav from "@/components/nav/nav";
import storeHeaderImg from "@/assets/storesHeader.jpg";
import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";
import Image from "next/image";
import { LocationOn, Call } from "@mui/icons-material";
import { ToPersianNumber } from "topersiannumber";
import Footer from "@/components/footer";
import CircularProgress from "@mui/material/CircularProgress";

export default function StoresPage() {
  const { products: data, isFetching: loading } = useFetch(
    "https://688f2e0cf21ab1769f886fdb.mockapi.io/stores"
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Nav />
      <Header title="فروشگاه ها" headerImg={storeHeaderImg} />
      <section className="container flex flex-col mx-auto mt-12 p-3 xl:max-w-[80rem] gap-8">
        {loading && <CircularProgress className="text-textColor mx-auto" />}
        {data.map(store => (
          <article key={store.id} className="bg-[#000000] p-5">
            <figure className="w-full h-[400px]">
              <Image
                width={1060}
                height={400}
                className="w-full h-full"
                src={store.imgSrc}
                alt={store.title}
              />
            </figure>
            {/* اطلاعات */}
            <div className="flex flex-row flex-wrap gap-4 mt-4 ">
              <h2 className="text-lg text-textColor">{store.title}</h2>
              <div className="flex flex-row gap-1 items-center">
                <LocationOn className="text-textColor" />
                <h2 className="text-storetxt text-[13px]">{store.address}</h2>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <Call className="text-textColor" />
                <h2 className="text-storetxt text-[13px]">
                  {ToPersianNumber(store.telphone)}
                </h2>
              </div>
            </div>
            <p className="text-storetxt mt-2 text-[12px]">
              {store.description}
            </p>
            <h1>test</h1>
          </article>
        ))}
      </section>
      <Footer />
    </>
  );
}
