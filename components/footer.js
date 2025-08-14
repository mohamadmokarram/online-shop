import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import storeImg from "@/public/store.jpg";

export default function Footer({classes = ''}) {
  return (
    <footer className={`md:h-[50vh] flex flex-col justify-center ${classes}`}>
      <section className="w-11/12 mx-auto flex flex-col md:flex-row justify-around">
        <div className="w-full md:w-1/6 p-3 pl-5 flex justify-center md:justify-end">
          <Image
            src={logo}
            alt="saedinia"
            width={100}
            height={100}
            className="self-start grayscale-75"
          />
        </div>
        <div className="w-full md:w-1/6 p-3">
          <p className="text-slate-200 text-[12px]">پیوند ها</p>
          <ul className="*:text-slate-500 *:hover:underline *:hover:decoration-slate-400 *:hover:underline-offset-4 text-[11px] py-2 leading-6">
            <li>
              <Link href="#">ارتباط با ما</Link>
            </li>
            <li>
              <Link href="#">سوالات متداول</Link>
            </li>
            <li>
              <Link href="#">قوانین و مقررات</Link>
            </li>
            <li>
              <Link href="#">پنل عوامل فروش</Link>
            </li>
            <li>
              <Link href="#">پنل لیدرها</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 p-3">
          <ul className="*:text-footerTxt">
            <li className="w-full block h-25">
              <Image src={storeImg} alt="store" className="w-2/3 h-full" />
            </li>
            <li>
              <p className="text-sm py-3">
                فروشگاه و کافه شعبه پالادیوم زعفرانیه
              </p>
            </li>
            <li>
              <p className="w-1/2 text-[11px]">
                تهران - زعفرانیه خیابان الف، مجتمع پالادیوم ، طبقه همکف B ، پلاک
                26
              </p>
            </li>
          </ul>
          <hr className="w-11/12 text-footerTxt mx-auto mt-3" />
          <p className="w-2/3 p-2 text-footerTxt text-[12px]">
            مرکز تجاری پالادیوم یکی از مجهزترین ترین و مدرن ترین مراکز خرید
            تهران است.«فروشگاه و کافه ساعدی نیا» در این مجتمع در شهریور ماه سال
            1397 به طور رسمی افتتاح شد.
          </p>
        </div>
        <div className="w-full md:w-1/6 p-3">
          <Link href="#">
            <p className="text-[12px] text-slate-50">
              آخرین پست های اینستاگرام
            </p>
          </Link>
        </div>
      </section>
    </footer>
  );
}
