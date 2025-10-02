"use client";
import Link from "next/link";
import logoImg from "@/public/logo.png";
import smallLogo from "@/public/logo-small.png";
import OrderNumbers from "../orderNumbers";
import Image from "next/image";
import MobileMenu from "./mobileMenu";
import { useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";

export default function Nav({ otherClasses = "" }) {
  const [isHidden, setIsHidden] = useState(true);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleShowMenu() {
    setIsHidden(prevState => !prevState);
    setMenuIsOpen(prevState => !prevState);
  }

  return (
    <nav
      className={`w-full px-4 bg-backgroundDefault/50 flex flex-col items-start md:block ${otherClasses}`}>
      {/* should hidden on md breakpoint */}
      <div className="w-full p-3 flex items-center justify-between md:hidden">
        {menuIsOpen ? (
          <IoIosClose
            onClick={handleShowMenu}
            className="text-textColor text-3xl cursor-pointer"
          />
        ) : (
          <RxHamburgerMenu
            onClick={handleShowMenu}
            className="text-textColor text-3xl cursor-pointer"
          />
        )}

        <Link href="/">
          <Image src={smallLogo} width={100} height={100} alt="saedinia" />
        </Link>
        <div className="flex gap-3">
          <MdOutlineAccountCircle className="text-3xl text-textColor" />

          <Link href="/payment" className="relative">
            <FaShoppingCart className="text-3xl text-textColor cursor-pointer" />

            <OrderNumbers />
          </Link>
        </div>
      </div>
      <MobileMenu isHidden={isHidden} />

      <ul className="relative px-3 hidden md:flex justify-center items-center *:text-textColor text-sm">
        <li>
          <Link className="menu-listItem pr-0" href="/">
            خانه
          </Link>
        </li>
        <li>
          <Link className="menu-listItem" href="/products">
            محصولات
          </Link>
        </li>
        <li>
          <Link className="menu-listItem" href="/storeAddress">
            فروشگاه ها
          </Link>
        </li>
        <li className="hidden md:list-item">
          <Link
            className="hover:text-texthover duration-200 block px-12"
            href="/">
            <Image width={80} height={80} src={logoImg} alt="saedinia" />
          </Link>
        </li>
        <li>
          <Link className="menu-listItem" href="#">
            عوامل فروش
          </Link>
        </li>
        <li>
          <Link className="menu-listItem" href="#">
            بلاگ
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-texthover block duration-200 md:py-6 md:px-5"
            href="#">
            درگاه ارتباطی
          </Link>
        </li>
        <div className="hidden md:flex gap-3  absolute left-10">
          <MdOutlineAccountCircle className="text-3xl" />

          <Link href="/payment" className="relative">
            <FaShoppingCart className="text-3xl" />

            <OrderNumbers />
          </Link>
        </div>
      </ul>
    </nav>
  );
}
