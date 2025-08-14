import logoImg from "@/public/logo.png";
import Link from "next/link";
import Image from "next/image";
import Icon from "../icon";
import OrderNumbers from "../orderNumbers";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function MobileMenu({ isHidden }) {
  const [viewportWidth, setviewportWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setviewportWidth(window.innerWidth);
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AnimatePresence>
      {!isHidden && viewportWidth < 768 && (
        <motion.ul
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 },
          }}
          exit={{
            opacity: 0,
            y: 20,
            transition: { duration: 0.3 },
          }}
          className="mobile-list">
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
            <Link className="menu-listItem" href="#">
              فروشگاه ها
            </Link>
          </li>
          <li className="hidden md:list-item">
            <Link
              className="hover:text-texthover duration-200 block px-12"
              href="/">
              <Image width={100} height={100} src={logoImg} alt="saedinia" />
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
            <Icon title="account_circle" fontsize="!text-3xl" />
            <Link href="/payment" className="relative">
              <Icon title="shopping_cart" fontsize="!text-3xl" />
              <OrderNumbers />
            </Link>
          </div>
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
