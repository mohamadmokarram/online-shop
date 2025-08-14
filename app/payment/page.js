"use client";
import Header from "@/components/header";
import Nav from "@/components/nav/nav";
import paymentHeaderImg from "@/assets/cartHeader.jpg";
import CloseIcon from "@mui/icons-material/Close";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import useStore from "@/store/useStore";
import Image from "next/image";
import Counter from "@/components/details/counter";
import { ToPersianNumber } from "topersiannumber";
import Footer from "@/components/footer";
import GiftCard from "@/components/giftOrder";

export default function PaymentPage() {
  const cart = useStore(state => state.cart);
  const increaseProductCount = useStore(state => state.increaseQuantity);
  const decreaseProductCount = useStore(state => state.decreaseQuantity);
  const handleRemove = useStore(state => state.removeProduct);
  const totalPrice = useStore(state => state.totalPrice);
  const totalAmountFuncion = useStore(state => state.totalAmount);
  const { totalAmount, formatted } = totalAmountFuncion();
  const taxValue = totalAmount * 0.1;

  console.log("formatted", formatted);
  console.log("taxValue", taxValue);

  return (
    <>
      <Nav otherClasses="" />
      <Header title="صورتحساب" headerImg={paymentHeaderImg} />
      {cart.length === 0 && (
        <p className="text-center mt-20 text-sm text-texthover">
          محصولی یافت نشد
        </p>
      )}
      <div className="container px-4 mt-8">
        {cart.length > 0 && (
          <Table
            className="w-full"
            sx={{
              "& .MuiTableCell-root": {
                borderBottomColor: "#505050",
              },
            }}>
            <TableHead>
              <TableRow className="*:text-white *:font-default *:text-[12px] *:text-start">
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>عنوان</TableCell>
                <TableCell>قیمت واحد</TableCell>
                <TableCell>تعداد</TableCell>
                <TableCell>قیمت</TableCell>
                <TableCell>تخفیف</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map(product => {
                const { formattedPrice: total } = totalPrice(product);
                return (
                  <TableRow
                    className="*:text-footerTxt *:font-default *:text-start"
                    key={product.id}>
                    <TableCell className="!text-center">
                      <button onClick={() => handleRemove(product.id)}>
                        <CloseIcon className="bg-slate-300 font-bold p-1 text-[20px] rounded-full cursor-pointer hover:bg-slate-800 hover:text-white duration-300" />
                      </button>
                    </TableCell>
                    {/* image */}
                    <TableCell>
                      <Image
                        src={product.forwardImage}
                        width={100}
                        height={100}
                        alt={product.title}
                      />
                    </TableCell>
                    <TableCell className="text-[12px]">
                      {ToPersianNumber(product.title)}
                    </TableCell>
                    <TableCell className="text-[12px]">
                      {ToPersianNumber(product.price)}
                    </TableCell>
                    <TableCell>
                      <Counter
                        classes="w-1/2"
                        id={product.id}
                        count={product.quantity}
                        handleCountUp={increaseProductCount}
                        handleCountDown={decreaseProductCount}
                      />
                    </TableCell>
                    <TableCell className="text-[12px]">
                      {`${total} ریال`}
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
        <div className="w-full flex flex-col gap-2 p-3 mt-20">
          <GiftCard />
          <hr className="text-[#474646] mt-3" />
          <h2 className="p-3 text-slate-100 text-[12px]">انتخاب شیوه پرداخت</h2>

          {/* payment checked */}
          <div className="w-full md:w-1/2 gap-2 px-3 flex select-none cursor-pointer group">
            <div className="flex justify-center items-center">
              <input
                className="w-4 h-4 accent-blue-600"
                type="radio"
                defaultChecked
              />
            </div>
            <div className="flex flex-col gap-1 group-hover:*:text-slate-300 *:duration-200">
              <p className="text-[11px] text-footerTxt">
                پرداخت با کارت های بانکی
              </p>
              <p className="text-[9px] text-footerTxt">
                پرداخت با تمامی کارت های عضو شبکه شتاب{" "}
              </p>
            </div>
          </div>

          {/* ul */}
          <ul className="w-full md:w-1/2 p-2 mt-15 *:flex *:justify-between *:not-last:text-[#a9a9a9] *:last:text-blue-500 *:text-[11px] *:not-last:border-b *:not-last:border-b-[#505050] leading-8">
            <li>
              <span>مبلغ کل {`[ ${ToPersianNumber(cart.length)} محصول ]`}</span>
              <span>{formatted}</span>
            </li>
            <li>
              <span>تخفیف</span>
              <span>{ToPersianNumber(0)}</span>
            </li>
            <li>
              <span>مالیات</span>
              <span>{ToPersianNumber(taxValue)}</span>
            </li>
            <li>
              <span>مبلغ قابل پرداخت</span>
              <span>{ToPersianNumber(totalAmount + taxValue)}</span>
            </li>
          </ul>
          <button
            className="text-green-700 border border-green-700 text-[11px] p-2 self-start duration-300 hover:text-green-500 cursor-pointer"
            type="button">
            پرداخت و ثبت نهایی سفارش
          </button>
        </div>

        <Footer classes="mt-20" />
      </div>
    </>
  );
}
